import { useState, useEffect, useRef, useCallback } from "react";
import { Play } from "lucide-react";

type GalleryItem = { src: string; type: "image" | "video"; colSpan?: number; posterTime?: number; poster?: string; ratio?: number };
type Orientation = "portrait" | "square" | "landscape";
type VisualWeight = "hero" | "primary" | "secondary";
type ClassifiedItem = GalleryItem & { ratio: number; index: number; orientation: Orientation; weight: VisualWeight };
type Row = { items: ClassifiedItem[]; fractions: number[]; height: number };

function detectDimensions(item: GalleryItem): Promise<{ w: number; h: number }> {
  return new Promise((res) => {
    if (item.type === "video") {
      const v = document.createElement("video");
      v.preload = "metadata";
      v.onloadedmetadata = () => res({ w: v.videoWidth || 16, h: v.videoHeight || 9 });
      v.onerror = () => res({ w: 16, h: 9 });
      v.src = item.src;
    } else {
      const img = new Image();
      img.onload = () => res({ w: img.naturalWidth || 1, h: img.naturalHeight || 1 });
      img.onerror = () => res({ w: 1, h: 1 });
      img.src = item.src;
    }
  });
}

function classify(item: GalleryItem, ratio: number, index: number, totalVideos: number): ClassifiedItem {
  const orientation: Orientation = ratio > 1.15 ? "landscape" : ratio < 0.85 ? "portrait" : "square";
  let weight: VisualWeight = "secondary";
  if (item.type === "video") weight = totalVideos <= 3 ? "hero" : "primary";
  else if (orientation === "landscape") weight = "primary";
  return { ...item, ratio, index, orientation, weight };
}

function computeRow(items: ClassifiedItem[]): Row {
  const sumRatios = items.reduce((s, it) => s + it.ratio, 0);
  return { items, fractions: items.map((it) => it.ratio), height: 1 / sumRatios };
}

const TARGET_H = 0.38; const MIN_H = 0.14; const MAX_H = 0.85; const MAX_PER_ROW = 4;

function scoreRow(items: ClassifiedItem[], isLastRow: boolean, _totalRows: number): number {
  const row = computeRow(items); const h = row.height;
  if (h < MIN_H * 0.4 || h > MAX_H * 1.6) return -1e6;
  const dev = Math.abs(h - TARGET_H) / TARGET_H;
  let s = 100 - dev * 70;
  if (h >= 0.22 && h <= 0.50) s += 12;
  if (h < MIN_H) s -= (MIN_H - h) * 250;
  if (h > MAX_H) s -= (h - MAX_H) * 250;
  const n = items.length;
  if (n === 2 || n === 3) s += 14;
  if (n === 4) s += 6;
  if (n === 1 && !isLastRow) s -= 8;
  if (n === 1 && isLastRow) s += 5;
  const videoItems = items.filter((it) => it.type === "video");
  const hasVideo = videoItems.length > 0;
  if (hasVideo) {
    const videoRatioShare = videoItems.reduce((sum, it) => sum + it.ratio, 0) / items.reduce((sum, it) => sum + it.ratio, 0);
    if (videoItems.length === 1 && n === 1) s += 30;
    if (videoItems.length === 1 && n === 2) s += 22;
    if (videoItems.length >= 2 && n === 2) s += 18;
    if (videoRatioShare >= 0.5) s += 15; else if (videoRatioShare >= 0.35) s += 8; else s -= 12;
    if (n >= 3 && hasVideo) s -= 18;
    if (n >= 4 && hasVideo) s -= 25;
  }
  const heroes = items.filter((it) => it.weight === "hero");
  if (heroes.length === 1 && n <= 2) s += 18;
  if (heroes.length === 1 && n === 1) s += 12;
  const landscapes = items.filter((it) => it.orientation === "landscape");
  if (landscapes.length === 1 && n === 1) s += 8;
  if (isLastRow) {
    if (n === 1 && items[0].orientation === "landscape") s += 15;
    if (n === 1 && items[0].type === "video") s += 12;
    if (n === 2) s += 8; if (n === 3) s += 5;
    if (n === 1 && items[0].orientation === "portrait") s -= 10;
  }
  const orientations = new Set(items.map((it) => it.orientation));
  if (n >= 3 && orientations.size === 1) s -= 6;
  return s;
}

function dpPlanRows(items: ClassifiedItem[]): Row[] {
  const n = items.length;
  if (n === 0) return [];
  const memo: Map<number, { score: number; split: number[] }> = new Map();
  function solve(start: number): { score: number; split: number[] } {
    if (start >= n) return { score: 0, split: [] };
    if (memo.has(start)) return memo.get(start)!;
    let best = { score: -Infinity, split: [] as number[] };
    const maxEnd = Math.min(start + MAX_PER_ROW, n);
    for (let end = start + 1; end <= maxEnd; end++) {
      const rowItems = items.slice(start, end);
      const isLast = end === n;
      const remainingItems = n - end;
      const estRemaining = Math.ceil(remainingItems / 2.5);
      const rs = scoreRow(rowItems, isLast, estRemaining + 1);
      const rest = solve(end);
      const total = rs + rest.score;
      if (total > best.score) best = { score: total, split: [end, ...rest.split] };
    }
    memo.set(start, best);
    return best;
  }
  const result = solve(0);
  const rows: Row[] = []; let prev = 0;
  for (const s of result.split) { rows.push(computeRow(items.slice(prev, s))); prev = s; }
  return rows;
}

function generateCandidates(items: ClassifiedItem[]): ClassifiedItem[][] {
  const candidates: ClassifiedItem[][] = [items];
  const n = items.length;
  if (n <= 2) return candidates;
  const bestLandscapeIdx = items.reduce((best, it, i) => (it.orientation === "landscape" && it.ratio > (items[best]?.ratio ?? 0) ? i : best), -1);
  if (bestLandscapeIdx > 0 && bestLandscapeIdx < n - 1) { const v = [...items]; const [moved] = v.splice(bestLandscapeIdx, 1); v.push(moved); candidates.push(v); }
  if (bestLandscapeIdx > 0) { const v = [...items]; const [moved] = v.splice(bestLandscapeIdx, 1); v.unshift(moved); candidates.push(v); }
  const firstHeroIdx = items.findIndex((it) => it.weight === "hero");
  if (firstHeroIdx > 0) { const v = [...items]; const [moved] = v.splice(firstHeroIdx, 1); v.unshift(moved); candidates.push(v); }
  const last = items[n - 1];
  if (last.orientation === "portrait" && last.type === "image") {
    for (let i = Math.max(0, n - 5); i < n - 1; i++) {
      if (items[i].orientation === "landscape" || items[i].type === "video") { const v = [...items]; [v[i], v[n - 1]] = [v[n - 1], v[i]]; candidates.push(v); break; }
    }
  }
  const videos = items.filter((it) => it.type === "video");
  const images = items.filter((it) => it.type === "image");
  if (videos.length >= 2 && images.length >= 2) {
    const interleaved: ClassifiedItem[] = []; let vi = 0, ii = 0; let useVideo = true;
    while (vi < videos.length || ii < images.length) {
      if (useVideo && vi < videos.length) interleaved.push(videos[vi++]);
      else if (ii < images.length) interleaved.push(images[ii++]);
      else if (vi < videos.length) interleaved.push(videos[vi++]);
      useVideo = !useVideo;
    }
    candidates.push(interleaved);
  }
  const portraits = items.filter((it) => it.orientation === "portrait");
  const nonPortraits = items.filter((it) => it.orientation !== "portrait");
  if (portraits.length >= 2 && nonPortraits.length >= 2) {
    const half = Math.ceil(nonPortraits.length / 2);
    candidates.push([...nonPortraits.slice(0, half), ...portraits, ...nonPortraits.slice(half)]);
  }
  return candidates;
}

function scoreComposition(rows: Row[]): number {
  let total = 0;
  rows.forEach((row, i) => { total += scoreRow(row.items, i === rows.length - 1, rows.length); });
  for (let i = 1; i < rows.length; i++) {
    const prevHasHero = rows[i - 1].items.some((it) => it.weight === "hero" || it.weight === "primary");
    const currHasHero = rows[i].items.some((it) => it.weight === "hero" || it.weight === "primary");
    if (prevHasHero !== currHasHero) total += 6;
    if (prevHasHero && currHasHero) total -= 3;
    if (rows[i].items.length === rows[i - 1].items.length && rows[i].items.length >= 3) total -= 4;
  }
  const heights = rows.map((r) => r.height);
  const avgH = heights.reduce((a, b) => a + b, 0) / heights.length;
  const variance = heights.reduce((s, h) => s + (h - avgH) ** 2, 0) / heights.length;
  total -= variance * 300;
  const lastRow = rows[rows.length - 1];
  if (lastRow) {
    if (lastRow.height < 0.18) total -= 20;
    if (lastRow.items.length === 1 && (lastRow.items[0].orientation === "landscape" || lastRow.items[0].type === "video")) total += 10;
  }
  return total;
}

function fixEnding(rows: Row[]): Row[] {
  if (rows.length < 2) return rows;
  const lastRow = rows[rows.length - 1]; const prevRow = rows[rows.length - 2];
  if (lastRow.items.length === 1 && lastRow.items[0].orientation === "portrait" && prevRow.items.length >= 3) {
    const combined = [...prevRow.items, ...lastRow.items];
    const splitPoint = Math.ceil(combined.length / 2);
    const newPrev = computeRow(combined.slice(0, splitPoint));
    const newLast = computeRow(combined.slice(splitPoint));
    const oldScore = scoreRow(prevRow.items, false, rows.length) + scoreRow(lastRow.items, true, rows.length);
    const newScore = scoreRow(newPrev.items, false, rows.length) + scoreRow(newLast.items, true, rows.length);
    if (newScore > oldScore) return [...rows.slice(0, -2), newPrev, newLast];
  }
  if (lastRow.height < 0.15 && prevRow.items.length + lastRow.items.length <= MAX_PER_ROW) {
    const merged = computeRow([...prevRow.items, ...lastRow.items]);
    if (merged.height >= MIN_H && merged.height <= MAX_H) return [...rows.slice(0, -2), merged];
  }
  return rows;
}

function selectBestLayout(items: ClassifiedItem[]): Row[] {
  const candidates = generateCandidates(items);
  let bestRows: Row[] = []; let bestScore = -Infinity;
  for (const candidate of candidates) {
    let rows = dpPlanRows(candidate); rows = fixEnding(rows);
    const score = scoreComposition(rows);
    if (score > bestScore) { bestScore = score; bestRows = rows; }
  }
  return bestRows;
}

const VideoPlayer = ({ src, alt, posterTime, poster }: { src: string; alt: string; posterTime?: number; poster?: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [playing, setPlaying] = useState(false);
  const [pendingPlay, setPendingPlay] = useState(false);
  const [coverDataUrl, setCoverDataUrl] = useState<string | null>(null);

  const handlePlay = useCallback(() => {
    if ((poster || coverDataUrl) && !playing) { setPlaying(true); setPendingPlay(true); return; }
    const v = videoRef.current; if (!v) return;
    v.currentTime = 0; v.muted = false; v.play(); setPlaying(true);
  }, [poster, coverDataUrl, playing]);

  useEffect(() => {
    if (pendingPlay && playing && videoRef.current) {
      const v = videoRef.current; v.currentTime = 0; v.muted = false; v.play(); setPendingPlay(false);
    }
  }, [pendingPlay, playing]);

  const handleSeeked = useCallback(() => {
    const v = videoRef.current; const canvas = canvasRef.current;
    if (v && canvas && !coverDataUrl && !poster && !playing) {
      canvas.width = v.videoWidth; canvas.height = v.videoHeight;
      const ctx = canvas.getContext("2d");
      if (ctx) { ctx.drawImage(v, 0, 0, canvas.width, canvas.height); setCoverDataUrl(canvas.toDataURL()); }
    }
  }, [coverDataUrl, poster, playing]);

  const handleLoadedData = useCallback(() => {
    const v = videoRef.current;
    if (v && !poster && !playing) { v.currentTime = posterTime !== undefined ? posterTime : 0.1; }
  }, [posterTime, poster, playing]);

  const coverSrc = poster || coverDataUrl;

  return (
    <div className="relative w-full h-full">
      {!poster && <canvas ref={canvasRef} className="hidden" />}
      {coverSrc && !playing ? (
        <img src={coverSrc} alt={alt} className="w-full h-full object-cover block" />
      ) : (
        <video ref={videoRef} src={src} controls={playing} controlsList="nodownload" playsInline muted preload="auto" onLoadedData={handleLoadedData} onSeeked={handleSeeked} onCanPlay={() => { if (pendingPlay) { const v = videoRef.current; if (v) { v.currentTime = 0; v.muted = false; v.play(); setPendingPlay(false); } } }} onPause={() => setPlaying(false)} onEnded={() => setPlaying(false)} className="w-full h-full object-cover block" aria-label={alt} />
      )}
      {!playing && (
        <button onClick={handlePlay} className="absolute inset-0 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative z-10 flex items-center gap-2.5 rounded-full px-5 py-2.5 backdrop-blur-md border border-white/[0.15] transition-all duration-300 hover:scale-105" style={{ background: "rgba(255,255,255,0.08)", boxShadow: "0 0 20px rgba(255,255,255,0.25), 0 0 40px rgba(255,255,255,0.1)" }}>
            <Play size={16} className="text-white/90" fill="currentColor" />
            <span className="text-white/90 text-xs font-medium tracking-[0.15em] uppercase" style={{ fontFamily: "var(--font-heading)" }}>Play</span>
          </div>
        </button>
      )}
    </div>
  );
};

type ManualRow = { indices: number[]; fractions?: number[]; height?: string };

type Props = {
  items: GalleryItem[];
  campaignTitle: string;
  manualLayout?: ManualRow[];
  onImageClick?: (imageIndex: number) => void;
};

const AdaptiveGallery = ({ items, campaignTitle, manualLayout, onImageClick }: Props) => {
  const [rows, setRows] = useState<Row[] | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (manualLayout) {
      let cancelled = false;
      (async () => {
        const dims = await Promise.all(items.map((item) => detectDimensions(item)));
        if (cancelled) return;
        const totalVideos = items.filter((it) => it.type === "video").length;
        const classified = items.map((item, i) => classify(item, item.ratio ?? (dims[i].w / dims[i].h), i, totalVideos));
        const manualRows: Row[] = manualLayout.map((mr) => {
          const rowItems = mr.indices.map((idx) => classified[idx]);
          const fractions = mr.fractions || rowItems.map((it) => it.ratio);
          const sumRatios = fractions.reduce((s, f) => s + f, 0);
          return { items: rowItems, fractions, height: 1 / sumRatios };
        });
        if (!cancelled) setRows(manualRows);
      })();
      return () => { cancelled = true; };
    }
    let cancelled = false;
    (async () => {
      const totalVideos = items.filter((it) => it.type === "video").length;
      const classified: ClassifiedItem[] = await Promise.all(items.map(async (item, index) => {
        const dims = await detectDimensions(item);
        return classify(item, dims.w / dims.h, index, totalVideos);
      }));
      if (cancelled) return;
      const best = selectBestLayout(classified);
      if (!cancelled) setRows(best);
    })();
    return () => { cancelled = true; };
  }, [items, manualLayout]);

  return (
    <div ref={containerRef} className="w-full space-y-2">
      {!rows ? (
        <div className="grid grid-cols-3 gap-2">
          {items.map((_, i) => (<div key={i} className="animate-pulse rounded-xl bg-white/10 h-40" />))}
        </div>
      ) : (
        rows.map((row, ri) => {
          const isManual = !!manualLayout;
          const manualRow = manualLayout?.[ri];
          const rowHeight = manualRow?.height;
          let rowAspectRatio: string | undefined;
          if (isManual && row.items.length > 1 && !rowHeight) {
            const fracs = row.fractions;
            const sumFracs = fracs.reduce((s, f) => s + f, 0);
            const maxNormH = Math.max(...row.items.map((it, i) => fracs[i] / it.ratio));
            rowAspectRatio = `${sumFracs / maxNormH}`;
          }
          return (
            <div key={ri} style={{ display: "grid", gridTemplateColumns: row.fractions.map((f) => `${f.toFixed(4)}fr`).join(" "), gap: "8px", alignItems: "stretch", ...(rowHeight ? { height: rowHeight } : {}), ...(rowAspectRatio ? { aspectRatio: rowAspectRatio } : {}) }}>
              {row.items.map((item, ci) => (
                <div key={`${ri}-${ci}`} className="overflow-hidden rounded-xl bg-black/40 h-full w-full">
                  {item.type === "video" ? (
                    <div className="h-full w-full"><VideoPlayer src={item.src} alt={`${campaignTitle} - ${item.index + 1}`} posterTime={item.posterTime} poster={item.poster} /></div>
                  ) : (
                    <img src={item.src} alt={`${campaignTitle} - ${item.index + 1}`} className="w-full h-full object-cover block cursor-pointer" loading="lazy" onClick={() => {
                      if (onImageClick) {
                        const imageItems = items.filter(it => it.type === "image");
                        const imgIdx = imageItems.findIndex(it => it.src === item.src);
                        if (imgIdx !== -1) onImageClick(imgIdx);
                      }
                    }} />
                  )}
                </div>
              ))}
            </div>
          );
        })
      )}
    </div>
  );
};

export default AdaptiveGallery;
