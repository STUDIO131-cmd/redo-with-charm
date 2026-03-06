

## Substituir carrossel por grid estático estilo bento

**Arquivo:** `src/components/CarouselSection.tsx`

**Referência:** O grid da imagem tem um layout bento com 7-8 fotos de tamanhos variados em ~2 linhas, com uma foto grande à esquerda (2 rows), fotos menores no meio, e uma foto grande à direita (2 rows). Fundo escuro, cantos arredondados nas fotos.

### Layout do grid (CSS Grid)

```text
┌──────────┬─────┬─────┬─────┐
│          │  2  │  3  │  4  │
│    1     ├─────┴──┬──┴─────┤
│          │   5    │  6  │ 7│
└──────────┴────────┴─────┴──┘
```

- Grid de 4 colunas x 2 linhas
- Foto 1: `col-span-1 row-span-2` (grande, esquerda)
- Fotos 2, 3, 4: 1x1 cada (topo)
- Foto 5: `col-span-1` (larga, embaixo centro-esq)
- Foto 6: 1x1 (embaixo centro)
- Foto 7: `row-span-2` (grande, direita) — ou ajustar conforme 8 fotos

### Alterações

1. **Remover animações de scroll** — Eliminar `animate-scroll-left/right`, triplicação de arrays
2. **Criar grid CSS** com `grid-cols-4 grid-rows-2` e `gap-3`
3. **Fundo escuro** na seção (`bg-black` ou `bg-dark-section`) com padding
4. **Fotos com `rounded-2xl`** e `object-cover` preenchendo cada célula
5. **Usar as 8 imagens** do carrossel distribuídas no grid com spans adequados

### CSS
Remover as classes `animate-scroll-left` e `animate-scroll-right` do componente (manter no CSS global caso usado em outro lugar).

