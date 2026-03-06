

## Remover barras pretas do YouTube

As barras pretas aparecem porque o aspect ratio do container (4/3) não corresponde ao aspect ratio do vídeo (16/9). O iframe do YouTube não consegue preencher o espaço e adiciona letterboxing.

### Solução

**Arquivo:** `src/components/StatsSection.tsx`

1. **Alterar o aspect ratio do container** de `aspect-[4/3]` para `aspect-video` (16/9), que corresponde ao formato nativo do vídeo do YouTube.

2. **Escalar o iframe para cobrir o container** usando CSS `transform: scale()` para que o vídeo preencha completamente o espaço sem barras pretas, mesmo que precise cortar levemente as bordas. Isso é feito com `scale(1.2)` no iframe e `overflow-hidden` no container pai (já existente).

Alternativamente, se quisermos manter o aspect ratio 4/3 do container (para combinar com a altura da coluna de stats), podemos manter 4/3 e escalar o iframe mais agressivamente (~1.5x) para que o vídeo 16/9 cubra todo o espaço 4/3, cortando o topo/baixo do vídeo.

A abordagem recomendada: manter `aspect-[4/3]` e aplicar `scale(1.35)` no iframe para cobrir totalmente o container sem barras pretas.

