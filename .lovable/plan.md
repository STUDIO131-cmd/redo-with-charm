

## Transformar "Eixos do acompanhamento" em lista no Card 1

**Arquivo:** `src/components/ServicesSection.tsx`

Substituir o parágrafo atual (linhas ~117-119):
```tsx
<p className="text-sm font-body tracking-wide" style={{ color: "hsl(0,0%,50%)" }}>
  Eixos do acompanhamento: Conteúdo · Tráfego · Comercial
</p>
```

Por uma lista no mesmo estilo do Card 2:
```tsx
<p className="text-sm font-body tracking-wide" style={{ color: "hsl(0,0%,50%)" }}>
  Eixos do acompanhamento:
</p>
<ul className="text-sm font-body space-y-1" style={{ color: "hsl(0,0%,50%)" }}>
  <li>— Estratégia de conteúdo</li>
  <li>— Tráfego Pago</li>
  <li>— Acompanhamento Comercial</li>
</ul>
```

