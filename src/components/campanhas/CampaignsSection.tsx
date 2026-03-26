import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import AdaptiveGallery from "./AdaptiveGallery";
import PhotoLightbox from "./PhotoLightbox";
import pageBg from "@/assets/campanhas/page-bg.jpg";
import cimplesCover from "@/assets/campanhas/campaigns/cimples/cover.png";
import pinkFridayCover from "@/assets/campanhas/campaigns/pinkfriday/cover.png";
import tngCover from "@/assets/campanhas/campaigns/tng/cover.png";
import aCover from "@/assets/campanhas/campaigns/auramia/cover.png";
import crCover from "@/assets/campanhas/campaigns/cravates/cover.png";
import vcCover from "@/assets/campanhas/campaigns/velvetcherry/cover.png";
import ntCover from "@/assets/campanhas/campaigns/novatrida/cover.png";
import lvCover from "@/assets/campanhas/campaigns/lavie/cover.png";
import dnCover from "@/assets/campanhas/campaigns/daninatal/cover.png";
import etCover from "@/assets/campanhas/campaigns/etoiles/cover.png";
import adCover from "@/assets/campanhas/campaigns/adriano/cover.png";

// Cimples
import cImg1 from "@/assets/campanhas/campaigns/cimples/img1.jpg";
import cImg2 from "@/assets/campanhas/campaigns/cimples/img2.jpg";
import cImg3 from "@/assets/campanhas/campaigns/cimples/img3.jpg";
import cImg4 from "@/assets/campanhas/campaigns/cimples/img4.jpg";
import cVid1 from "@/assets/campanhas/campaigns/cimples/video1.mp4";
import cVid2 from "@/assets/campanhas/campaigns/cimples/video2.mp4";
import cVid3 from "@/assets/campanhas/campaigns/cimples/video3.mp4";
import cVid4 from "@/assets/campanhas/campaigns/cimples/video4.mp4";
import cVid5 from "@/assets/campanhas/campaigns/cimples/video5.mp4";
import cImg5 from "@/assets/campanhas/campaigns/cimples/img5.jpg";
import cImg6 from "@/assets/campanhas/campaigns/cimples/img6.jpg";
import cImg7 from "@/assets/campanhas/campaigns/cimples/img7.jpg";
import cImg8 from "@/assets/campanhas/campaigns/cimples/img8.jpg";

// Pink Friday
import pfVid1 from "@/assets/campanhas/campaigns/pinkfriday/PF_1_2.mp4";
import pfImg1 from "@/assets/campanhas/campaigns/pinkfriday/5D4A6291.jpg";
import pfImg2 from "@/assets/campanhas/campaigns/pinkfriday/A4_2.jpg";
import pfVid2 from "@/assets/campanhas/campaigns/pinkfriday/PF_5.mp4";
import pfVid3 from "@/assets/campanhas/campaigns/pinkfriday/PF_3.mp4";
import pfImg3 from "@/assets/campanhas/campaigns/pinkfriday/5D4A6298_1.jpg";
import pfImg4 from "@/assets/campanhas/campaigns/pinkfriday/DSC05583.jpg";
import pfImg5 from "@/assets/campanhas/campaigns/pinkfriday/5D4A6295_1.jpg";
import pfImg6 from "@/assets/campanhas/campaigns/pinkfriday/DSC05586_1.jpg";
import pfImg7 from "@/assets/campanhas/campaigns/pinkfriday/5D4A6286.jpg";

// TNG
import tngVid1 from "@/assets/campanhas/campaigns/tng/TNG-Campaing01.mp4";
import tngImg1 from "@/assets/campanhas/campaigns/tng/5D4A5594.jpg";
import tngImg2 from "@/assets/campanhas/campaigns/tng/5D4A5611.jpg";
import tngVid2 from "@/assets/campanhas/campaigns/tng/TNG-Campaing03.mp4";
import tngVid3 from "@/assets/campanhas/campaigns/tng/TNG-01.mp4";
import tngImg3 from "@/assets/campanhas/campaigns/tng/5D4A5623.jpg";
import tngImg4 from "@/assets/campanhas/campaigns/tng/5D4A5613_1.jpg";
import tngImg5 from "@/assets/campanhas/campaigns/tng/5D4A6454.jpg";
import tngVid4 from "@/assets/campanhas/campaigns/tng/TNG-06.mp4";
import tngVid5 from "@/assets/campanhas/campaigns/tng/TNG-07.mp4";
import tngVid5Poster from "@/assets/campanhas/campaigns/tng/poster-vid5.png";
import tngImg6 from "@/assets/campanhas/campaigns/tng/5D4A6449.jpg";

// Auramia
import aVid1 from "@/assets/campanhas/campaigns/auramia/teaser2.mp4";
import aVid2 from "@/assets/campanhas/campaigns/auramia/teaser3.mp4";
import aVid3 from "@/assets/campanhas/campaigns/auramia/entrevista.mp4";
import aImg1 from "@/assets/campanhas/campaigns/auramia/5D4A0703_1.jpg";
import aImg2 from "@/assets/campanhas/campaigns/auramia/5D4A0768_1.jpg";
import aImg3 from "@/assets/campanhas/campaigns/auramia/5D4A0750_1.jpg";
import aImg4 from "@/assets/campanhas/campaigns/auramia/5D4A0834_1.jpg";
import aImg5 from "@/assets/campanhas/campaigns/auramia/5D4A0723.jpg";
import aImg6 from "@/assets/campanhas/campaigns/auramia/5D4A0457.jpg";
import aImg7 from "@/assets/campanhas/campaigns/auramia/5D4A0977.jpg";
import aPosterEntrevista from "@/assets/campanhas/campaigns/auramia/poster-entrevista.png";

// Cravates
import crVid1 from "@/assets/campanhas/campaigns/cravates/cravates1.mp4";
import crImg1 from "@/assets/campanhas/campaigns/cravates/IMG_0423.jpg";
import crImg2 from "@/assets/campanhas/campaigns/cravates/IMG_0706.jpg";
import crImg3 from "@/assets/campanhas/campaigns/cravates/IMG_0455.jpg";
import crImg4 from "@/assets/campanhas/campaigns/cravates/IMG_0276.jpg";
import crImg5 from "@/assets/campanhas/campaigns/cravates/IMG_0190.jpg";
import crImg6 from "@/assets/campanhas/campaigns/cravates/IMG_0143.jpg";

// Velvet Cherry
import vcVid1 from "@/assets/campanhas/campaigns/velvetcherry/video.mp4";
import vcImg1 from "@/assets/campanhas/campaigns/velvetcherry/img1.jpg";
import vcImg2 from "@/assets/campanhas/campaigns/velvetcherry/img2.jpg";
import vcImg3 from "@/assets/campanhas/campaigns/velvetcherry/img3.jpg";
import vcImg4 from "@/assets/campanhas/campaigns/velvetcherry/img4.jpg";
import vcImg5 from "@/assets/campanhas/campaigns/velvetcherry/img5.jpg";
import vcImg6 from "@/assets/campanhas/campaigns/velvetcherry/img6.jpg";
import vcImg7 from "@/assets/campanhas/campaigns/velvetcherry/img7.jpg";
import vcImg8 from "@/assets/campanhas/campaigns/velvetcherry/img8.jpg";
import vcImg9 from "@/assets/campanhas/campaigns/velvetcherry/img9.jpg";
import vcImg10 from "@/assets/campanhas/campaigns/velvetcherry/img10.jpg";
import vcImg11 from "@/assets/campanhas/campaigns/velvetcherry/img11.jpg";

// Nova Trida
import ntVid1 from "@/assets/campanhas/campaigns/novatrida/video1.mp4";
import ntVid2 from "@/assets/campanhas/campaigns/novatrida/video2.mp4";
import ntVid3 from "@/assets/campanhas/campaigns/novatrida/video3.mp4";
import ntImg1 from "@/assets/campanhas/campaigns/novatrida/img1.jpg";
import ntImg2 from "@/assets/campanhas/campaigns/novatrida/img2.jpg";

// La Vie
import lvVid1 from "@/assets/campanhas/campaigns/lavie/video1.mp4";
import lvVid2 from "@/assets/campanhas/campaigns/lavie/video2.mp4";
import lvVid3 from "@/assets/campanhas/campaigns/lavie/video3.mp4";
import lvVid4 from "@/assets/campanhas/campaigns/lavie/video4.mp4";
import lvImg1 from "@/assets/campanhas/campaigns/lavie/img1.jpg";
import lvImg2 from "@/assets/campanhas/campaigns/lavie/img2.jpg";
import lvImg3 from "@/assets/campanhas/campaigns/lavie/img3.jpg";
import lvImg4 from "@/assets/campanhas/campaigns/lavie/img4.jpg";
import lvImg5 from "@/assets/campanhas/campaigns/lavie/img5.png";
import lvImg6 from "@/assets/campanhas/campaigns/lavie/img6.png";
import lvPosterVid1 from "@/assets/campanhas/campaigns/lavie/poster-vid1.png";

// Dani Natal
import dnVid1 from "@/assets/campanhas/campaigns/daninatal/video1.mp4";
import dnVid2 from "@/assets/campanhas/campaigns/daninatal/video2.mp4";
import dnVid3 from "@/assets/campanhas/campaigns/daninatal/video3.mp4";
import dnVid4 from "@/assets/campanhas/campaigns/daninatal/video4.mp4";
import dnPoster1 from "@/assets/campanhas/campaigns/daninatal/poster1.png";
import dnPoster2 from "@/assets/campanhas/campaigns/daninatal/poster2.png";

// Etoiles
import etVid1 from "@/assets/campanhas/campaigns/etoiles/video1.mp4";
import etImg1 from "@/assets/campanhas/campaigns/etoiles/img1.jpg";
import etImg2 from "@/assets/campanhas/campaigns/etoiles/img2.jpg";
import etImg3 from "@/assets/campanhas/campaigns/etoiles/img3.jpg";
import etImg4 from "@/assets/campanhas/campaigns/etoiles/img4.jpg";
import etImg5 from "@/assets/campanhas/campaigns/etoiles/img5.jpg";
import etImg6 from "@/assets/campanhas/campaigns/etoiles/img6.jpg";
import etImg7 from "@/assets/campanhas/campaigns/etoiles/img7.jpg";
import etImg8 from "@/assets/campanhas/campaigns/etoiles/img8.jpg";
import etImg9 from "@/assets/campanhas/campaigns/etoiles/img9.jpg";
import etPosterVid1 from "@/assets/campanhas/campaigns/etoiles/poster-vid1.png";

// Adriano
import adImg1 from "@/assets/campanhas/campaigns/adriano/img1.jpg";
import adImg2 from "@/assets/campanhas/campaigns/adriano/img2.jpg";
import adImg3 from "@/assets/campanhas/campaigns/adriano/img3.jpg";
import adImg4 from "@/assets/campanhas/campaigns/adriano/img4.jpg";
import adImg5 from "@/assets/campanhas/campaigns/adriano/img5.jpg";
import adImg6 from "@/assets/campanhas/campaigns/adriano/img6.jpg";
import adImg7 from "@/assets/campanhas/campaigns/adriano/img7.jpg";
import adImg8 from "@/assets/campanhas/campaigns/adriano/img8.jpg";
import adImg9 from "@/assets/campanhas/campaigns/adriano/img9.jpg";
import adImg10 from "@/assets/campanhas/campaigns/adriano/img10.jpg";

type GalleryItem = {
  src: string;
  type: "image" | "video";
  colSpan?: 1 | 2 | 3;
  posterTime?: number;
  poster?: string;
  ratio?: number;
};

const campaigns: {
  image: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  gallery: GalleryItem[];
  manualLayout?: { indices: number[]; fractions?: number[]; heights?: number[] }[];
  coverPosition?: string;
}[] = [
  {
    image: cimplesCover,
    coverPosition: "center top",
    title: "Dani Fernandes × CIMPLES (by Carolina Ferraz)",
    subtitle: "Campanha de Dia das Mães",
    description: "Uma campanha criada para transformar uma fragrância em um presente desejado. A construção visual buscou leveza, intimidade e beleza cotidiana para conectar duas marcas de forma natural. E isso apareceu no que mais importa no fim: mais visibilidade, mais compartilhamento e mais força de venda.",
    tags: ["Direção criativa da campanha", "Ambientação + roteiro de captação", "Foto e vídeo"],
    gallery: [
      { src: cVid1, type: "video", colSpan: 2 },
      { src: cImg1, type: "image", colSpan: 1 },
      { src: cImg2, type: "image", colSpan: 1 },
      { src: cVid2, type: "video", colSpan: 2, posterTime: 3 },
      { src: cVid3, type: "video", colSpan: 2, posterTime: 2 },
      { src: cImg3, type: "image", colSpan: 1 },
      { src: cImg4, type: "image", colSpan: 1 },
      { src: cVid4, type: "video", colSpan: 2 },
      { src: cVid5, type: "video", colSpan: 2 },
      { src: cImg5, type: "image", colSpan: 1 },
      { src: cImg6, type: "image", colSpan: 1 },
      { src: cImg7, type: "image", colSpan: 1 },
      { src: cImg8, type: "image", colSpan: 2 },
    ] satisfies GalleryItem[],
  },
  {
    image: pinkFridayCover,
    coverPosition: "center center",
    title: "PINK Friday × Marina Fraga",
    subtitle: "Black Friday — Pink Shine",
    description: "A Pink Friday foi construída com calendário de publicações, estratégia de oferta e antecipação para criar expectativa antes da abertura.\nCom uma estrutura enxuta de lançamento, a campanha ganhou força rápido e acelerou a decisão de compra.\nO que era para durar uma semana esgotou em 2 dias.",
    tags: ["Black Friday", "Estratégia de oferta", "Calendário de publicações"],
    gallery: [
      { src: pfVid1, type: "video", colSpan: 2, posterTime: 4 },
      { src: pfImg1, type: "image", colSpan: 1 },
      { src: pfImg2, type: "image", colSpan: 1 },
      { src: pfVid2, type: "video", colSpan: 2 },
      { src: pfVid3, type: "video", colSpan: 2 },
      { src: pfImg3, type: "image", colSpan: 1 },
      { src: pfImg4, type: "image", colSpan: 1 },
      { src: pfImg5, type: "image", colSpan: 2 },
      { src: pfImg7, type: "image", colSpan: 2 },
      { src: pfImg6, type: "image", colSpan: 2 },
    ] satisfies GalleryItem[],
  },
  {
    image: dnCover,
    coverPosition: "center center",
    title: "Dani Fernandes | Campanha de Natal",
    subtitle: "Ação Comercial | Lançamento",
    description: "Dani Fernandes precisava de alguns conteúdos para potencializar a campanha de Natal. Fizemos melhor: levamos o comprador para um universo de sensações natalinas e familiares por meio do aroma.",
    tags: ["Produção visual", "Ambientação", "Vídeo"],
    gallery: [
      { src: dnVid1, type: "video", colSpan: 2, poster: dnPoster1 },
      { src: dnVid4, type: "video", colSpan: 2, poster: dnPoster2 },
      { src: dnVid2, type: "video", colSpan: 2 },
      { src: dnVid3, type: "video", colSpan: 2 },
    ] satisfies GalleryItem[],
  },
  {
    image: tngCover,
    coverPosition: "center center",
    title: "Dani Fernandes × The National Gallery",
    subtitle: "Lançamento de novas fragrâncias",
    description: "No encontro entre a marca Dani Fernandes e o tradicional museu de Londres, criamos uma campanha para aproximar a arte do cotidiano, transformando a fragrância em um objeto de desejo dentro de casa.\n\nIsso fortalece a narrativa da marca e facilita a decisão de compra.",
    tags: ["Direção criativa da campanha", "Ambientação e produção visual", "Foto + vídeo de lançamento"],
    gallery: [
      { src: tngVid1, type: "video", colSpan: 2 },
      { src: tngImg1, type: "image", colSpan: 1 },
      { src: tngImg2, type: "image", colSpan: 1 },
      { src: tngVid2, type: "video", colSpan: 2 },
      { src: tngVid3, type: "video", colSpan: 2 },
      { src: tngImg3, type: "image", colSpan: 1 },
      { src: tngImg4, type: "image", colSpan: 1 },
      { src: tngImg5, type: "image", colSpan: 1 },
      { src: tngImg6, type: "image", colSpan: 1 },
      { src: tngVid4, type: "video", colSpan: 2 },
      { src: tngVid5, type: "video", colSpan: 2, poster: tngVid5Poster },
    ] satisfies GalleryItem[],
  },
  {
    image: etCover,
    coverPosition: "center top",
    title: "Etoiles by Corpo de Ballet Shop",
    subtitle: "Nova coleção | Lançamento",
    description: "Na segunda coleção da Corpo de Ballet Shop, a marca firmou presença ao apresentar com mais clareza o seu universo.\n\nAtravés da personagem Etoiles, a campanha mostrou ao público o sonho de viver uma rotina elegante, com estética europeia e os looks como plano de fundo.",
    tags: ["Roteiro e vídeo", "Produção visual", "Fotografia + look book"],
    gallery: [
      { src: etVid1, type: "video", colSpan: 2, poster: etPosterVid1 },
      { src: etImg1, type: "image", colSpan: 1 },
      { src: etImg2, type: "image", colSpan: 1 },
      { src: etImg3, type: "image", colSpan: 1 },
      { src: etImg4, type: "image", colSpan: 1 },
      { src: etImg5, type: "image", colSpan: 2 },
      { src: etImg6, type: "image", colSpan: 1 },
      { src: etImg7, type: "image", colSpan: 1 },
      { src: etImg8, type: "image", colSpan: 1 },
      { src: etImg9, type: "image", colSpan: 1 },
    ] satisfies GalleryItem[],
  },
  {
    image: lvCover,
    coverPosition: "center center",
    title: "La Vie - Moda Feminina",
    subtitle: "Reposicionamento | Ação Comercial | Inauguração",
    description: "A loja precisava comunicar uma nova identidade visual, a reinauguração do espaço e aproveitar esse momento para aquecer as vendas para o Rodeio de Catanduva.\nO resultado foi um alto alcance orgânico, seguido de um movimento maior de vendas.",
    tags: ["Produção visual", "Calendário de conteúdo", "Fotografia e audiovisual"],
    gallery: [
      { src: lvVid1, type: "video", colSpan: 2, poster: lvPosterVid1 },
      { src: lvImg1, type: "image", colSpan: 1 },
      { src: lvImg2, type: "image", colSpan: 1 },
      { src: lvImg3, type: "image", colSpan: 1 },
      { src: lvImg4, type: "image", colSpan: 1 },
      { src: lvVid2, type: "video", colSpan: 2 },
      { src: lvImg5, type: "image", colSpan: 1 },
      { src: lvImg6, type: "image", colSpan: 1 },
      { src: lvVid3, type: "video", colSpan: 2 },
      { src: lvVid4, type: "video", colSpan: 3 },
    ] satisfies GalleryItem[],
  },
  {
    image: vcCover,
    coverPosition: "center top",
    title: "Velvet Cherry by Dani Fernandes",
    subtitle: "Nova coleção | Lançamento",
    description: "O aroma que se tornou sucesso em vendas carrega uma identidade que foi construída em um material de fotos e vídeos para a rede social:\n\nTextura leve, maciez, feminilidade e doçura.\n\nNosso time entregou fotografia ambientada, still e direção criativa em estúdio.",
    tags: ["Direção Criativa", "Fotografia", "Vídeo"],
    gallery: [
      { src: vcImg1, type: "image", colSpan: 1 },
      { src: vcVid1, type: "video", colSpan: 2 },
      { src: vcImg2, type: "image", colSpan: 1 },
      { src: vcImg3, type: "image", colSpan: 1 },
      { src: vcImg4, type: "image", colSpan: 1 },
      { src: vcImg5, type: "image", colSpan: 1 },
      { src: vcImg8, type: "image", colSpan: 1 },
      { src: vcImg9, type: "image", colSpan: 1 },
      { src: vcImg10, type: "image", colSpan: 2 },
      { src: vcImg11, type: "image", colSpan: 1 },
      { src: vcImg6, type: "image", colSpan: 2 },
      { src: vcImg7, type: "image", colSpan: 3 },
    ] satisfies GalleryItem[],
  },
  {
    image: adCover,
    coverPosition: "center top",
    title: "Adriano Martins Estilista",
    subtitle: "Moda Noiva & Festa | Lançamento de Coleção",
    description: "A proposta de criar um lookbook irreverente agrega valor à marca e direciona a comunicação ao público certo.\nIsso diminui os ruídos no caminho até o cliente e ajuda a qualificar melhor a venda, tudo por meio de imagens que impactam.",
    tags: ["Produção visual", "Fotografia", "Lookbook"],
    gallery: [
      { src: adImg1, type: "image", colSpan: 1 },
      { src: adImg2, type: "image", colSpan: 1 },
      { src: adImg3, type: "image", colSpan: 1 },
      { src: adImg4, type: "image", colSpan: 1 },
      { src: adImg5, type: "image", colSpan: 1 },
      { src: adImg6, type: "image", colSpan: 1 },
      { src: adImg7, type: "image", colSpan: 1 },
      { src: adImg8, type: "image", colSpan: 2 },
      { src: adImg9, type: "image", colSpan: 1 },
      { src: adImg10, type: "image", colSpan: 2 },
    ] satisfies GalleryItem[],
  },
  {
    image: aCover,
    coverPosition: "center center",
    title: "Auramia by Beatriz Manganelli",
    subtitle: "Lançamento | Moda Fitness",
    description: "Em Aracaju (SE), criamos a campanha de lançamento da Auramia para apresentar a coleção Brisa com leveza, desejo e intenção de compra.\nA comunicação foi pensada para aquecer o público antes da abertura e transformar expectativa em movimento real.\nQuando o site abriu, vários modelos esgotaram em 24 horas.",
    tags: ["Estudo de público", "Calendário de lançamento", "Foto + vídeo de campanha"],
    gallery: [
      { src: aVid1, type: "video", colSpan: 2 },
      { src: aImg2, type: "image", colSpan: 2 },
      { src: aImg5, type: "image", colSpan: 2 },
      { src: aVid2, type: "video", colSpan: 2 },
      { src: aVid3, type: "video", colSpan: 2, poster: aPosterEntrevista },
      { src: aImg6, type: "image", colSpan: 2 },
      { src: aImg7, type: "image", colSpan: 1 },
      { src: aImg3, type: "image", colSpan: 1 },
      { src: aImg4, type: "image", colSpan: 2 },
    ] satisfies GalleryItem[],
  },
  {
    image: ntCover,
    coverPosition: "center center",
    title: "Nova Trida | Tecnologia & Suprimentos para Empresas",
    subtitle: "Reposicionamento | Institucional",
    description: "A Nova Trida já era uma empresa tradicional em Catanduva, mas decidiu se comunicar com uma nova parcela do público para expandir o negócio.\n\nO rebranding foi institucional, mas com humanidade, para deixar claro esse novo momento da marca.\n\nTambém renovamos o vídeo institucional, alinhamos a comunicação com os clientes e criamos um calendário estratégico para o Instagram.",
    tags: ["Foto e vídeo", "Estratégia de comunicação", "Calendário de publicações"],
    gallery: [
      { src: ntVid1, type: "video", colSpan: 2 },
      { src: ntImg1, type: "image", colSpan: 1 },
      { src: ntImg2, type: "image", colSpan: 1 },
      { src: ntVid2, type: "video", colSpan: 2 },
      { src: ntVid3, type: "video", colSpan: 3 },
    ] satisfies GalleryItem[],
  },
  {
    image: crCover,
    coverPosition: "center center",
    title: "Coleção Cravates by Corpo De Ballet",
    subtitle: "Lançamento | Moda Ballet",
    description: "Campos do Jordão foi o cenário perfeito para uma campanha extremamente elegante.\nPara apresentar a coleção, unimos duas personagens já conhecidas da marca: Cher, delicada e americana, e Etoiles, fina e europeia.\nEssa construção de imagem e narrativa fez o público responder — Cravates se tornou a coleção mais vendida da CB Shop.",
    tags: ["Produção visual", "Fotografia de campanha", "Roteiro + captação de vídeo"],
    gallery: [
      { src: crVid1, type: "video", ratio: 9/16 },
      { src: crImg2, type: "image" },
      { src: crImg3, type: "image" },
      { src: crImg1, type: "image" },
      { src: crImg4, type: "image" },
      { src: crImg5, type: "image" },
      { src: crImg6, type: "image" },
    ] satisfies GalleryItem[],
    manualLayout: [
      { indices: [0, 1], fractions: [3, 2] },
      { indices: [2] },
      { indices: [3, 4] },
      { indices: [5, 6], fractions: [1, 2] },
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.2, ease: "easeOut" as const },
  }),
};

const CampaignsSection = () => {
  const [openGallery, setOpenGallery] = useState<number | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxStartIdx, setLightboxStartIdx] = useState(0);

  return (
    <>
      <section className="py-12 sm:py-16 md:py-20 section-container">
        <div className="space-y-6 md:space-y-10">
          {campaigns.map((campaign, i) => (
            <motion.div
              key={i}
              className="group relative cursor-pointer rounded-2xl overflow-hidden backdrop-blur-xl bg-white/[0.12] border border-white/[0.15] shadow-md transition-all duration-500 hover:shadow-lg"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              custom={i}
              onClick={() => setOpenGallery(i)}
            >
              <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="px-6 py-3 rounded-full backdrop-blur-md bg-white/[0.08] border border-white/[0.15]">
                  <span
                    className="text-white/90 text-sm md:text-base tracking-[0.3em] uppercase"
                    style={{ textShadow: "0 0 10px rgba(255,255,255,0.8), 0 0 20px rgba(255,255,255,0.5), 0 0 40px rgba(255,255,255,0.3)" }}
                  >
                    VEJA A GALERIA
                  </span>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-0 h-full">
                <div className="md:w-3/5 flex-shrink-0 overflow-hidden">
                  {campaign.image ? (
                    <img
                      src={campaign.image}
                      alt={campaign.title}
                      className="w-full h-full min-h-[220px] md:min-h-[280px] object-cover group-hover:scale-[1.02] transition-transform duration-700"
                      loading="lazy"
                      decoding="async"
                      style={{ objectPosition: campaign.coverPosition || "center center" }}
                    />
                  ) : (
                    <div className="w-full min-h-[220px] md:min-h-[280px] flex items-center justify-center bg-white/[0.05]">
                      <span className="text-white/40 text-sm tracking-[0.2em] uppercase">Em breve</span>
                    </div>
                  )}
                </div>
                <div className="p-5 md:p-6 md:w-2/5 space-y-2 flex flex-col justify-center">
                  <p className="text-[10px] tracking-[0.2em] uppercase text-white/50">{campaign.subtitle}</p>
                  <h3
                    className="text-base md:text-lg font-semibold leading-tight"
                    style={{ fontFamily: "var(--font-heading)", color: "#FFFFFF", textShadow: "0 0 12px rgba(255,255,255,0.3)" }}
                  >
                    {campaign.title}
                  </h3>
                  <p className="text-xs md:text-sm text-white/70 leading-relaxed line-clamp-5">{campaign.description}</p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {campaign.tags.map((tag) => (
                      <span key={tag} className="px-2.5 py-0.5 text-[9px] tracking-wider uppercase rounded-full bg-white/10 border border-white/20 text-white/60">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <AnimatePresence>
        {openGallery !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-cover bg-center bg-fixed"
            style={{ backgroundImage: `url(${pageBg})` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpenGallery(null)}
          >
            <motion.div
              className="relative max-w-4xl w-full max-h-[85vh] overflow-y-auto rounded-2xl backdrop-blur-xl bg-white/[0.08] border border-white/[0.15] p-6 shadow-[0_16px_64px_rgba(0,0,0,0.3)]"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 border border-white/20 text-white/70 hover:text-white transition-colors"
                onClick={() => setOpenGallery(null)}
              >
                <X size={20} />
              </button>

              <h3 className="text-xl font-semibold text-white text-center mb-4" style={{ fontFamily: "var(--font-heading)" }}>
                {campaigns[openGallery].title}
              </h3>

              <div className="flex flex-wrap justify-center gap-2 mb-6">
                {campaigns[openGallery].tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 text-[10px] tracking-wider uppercase rounded-full bg-white/10 border border-white/20 text-white/60">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="max-w-3xl mx-auto">
                <AdaptiveGallery
                  items={campaigns[openGallery].gallery}
                  campaignTitle={campaigns[openGallery].title}
                  manualLayout={(campaigns[openGallery] as any).manualLayout}
                  onImageClick={(imgIdx) => {
                    setLightboxStartIdx(imgIdx);
                    setLightboxOpen(true);
                  }}
                />
              </div>

              {lightboxOpen && openGallery !== null && (
                <PhotoLightbox
                  images={campaigns[openGallery].gallery.filter(g => g.type === "image").map(g => g.src)}
                  startIndex={lightboxStartIdx}
                  onClose={() => setLightboxOpen(false)}
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CampaignsSection;
