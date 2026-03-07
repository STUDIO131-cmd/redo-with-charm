

## Ajustar glass bar: fundo cinza ruidoso + light leaks radiais orgânicos

**Arquivo:** `src/components/HeroSection.tsx`

### 1. Fundo cinza com ruído (noise texture)

Substituir o background do glass bar (linha 48) por um cinza sólido escuro e adicionar uma camada de ruído via SVG filter inline (usando `feTurbulence` + `feColorMatrix`) renderizado como pseudo-layer. Isso será feito com um `div` absoluto contendo um SVG filter de noise.

```tsx
{/* Noise background */}
<div className="absolute inset-0 rounded-xl" style={{ background: "#1a1a1a" }} />
<svg className="absolute inset-0 w-full h-full rounded-xl" style={{ opacity: 0.15 }}>
  <filter id="noise">
    <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" />
    <feColorMatrix type="saturate" values="0" />
  </filter>
  <rect width="100%" height="100%" filter="url(#noise)" />
</svg>
```

### 2. Light leaks radiais com movimento orgânico

Substituir os dois `motion.div` lineares (linhas 64-85) por 3-4 esferas radiais (`radial-gradient`) que se movem de forma independente com translações suaves em X/Y, simulando um movimento difuso e orgânico.

Cada esfera terá:
- `radial-gradient(circle, hsla(cor,sat,lum,0.5) 0%, transparent 70%)`
- Tamanho ~60-80% do container
- Animação independente de `x` e `y` com durações diferentes (8-12s) para criar irregularidade
- `filter: blur(25px)` para difusão
- Movimento superficial (deslocamento de ~20-40% apenas)

Exemplo de uma esfera:
```tsx
<motion.div
  className="absolute w-[70%] h-[120%] pointer-events-none"
  style={{
    background: "radial-gradient(circle, hsla(220,80%,55%,0.45) 0%, transparent 70%)",
    filter: "blur(25px)",
    top: "-10%", left: "-10%",
  }}
  animate={{ x: ["0%", "30%", "5%", "25%", "0%"], y: ["0%", "15%", "-10%", "5%", "0%"] }}
  transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
/>
```

3-4 esferas com cores distintas (azul, roxo/magenta, laranja/âmbar, cyan) posicionadas em pontos diferentes, cada uma com timing e trajetória únicos.

### Resumo das mudanças

- Remover o `background` e `backdropFilter` do glass bar, substituir por fundo cinza + noise SVG
- Remover os 2 light leak lineares existentes
- Adicionar 3-4 esferas radiais com animação orgânica independente

