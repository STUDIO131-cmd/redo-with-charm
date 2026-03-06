

## Transformar carrossel em grid animado com linhas em direções opostas

**Arquivo:** `src/components/CarouselSection.tsx`

**Conceito:** 8 fotos distribuídas em 2 linhas (4 por linha), cada linha scrollando infinitamente em direção oposta. As fotos terão tamanhos variados para criar dinamismo visual, usando `object-contain` ou aspect-ratio natural para preservar proporções originais.

### Estrutura

```text
Linha 1 (←): [img1 grande] [img2 pequena] [img3 média] [img4 grande] ... (repete)
Linha 2 (→): [img5 média] [img6 grande] [img7 pequena] [img8 média] ... (repete)
```

### Alterações

1. **Dividir imagens em 2 linhas** — `row1 = images.slice(0, 4)`, `row2 = images.slice(4, 8)`

2. **Cada linha é um `div` com scroll infinito** — Linha 1 usa `animate-scroll-left`, Linha 2 usa `animate-scroll-right` (já existem no CSS)

3. **Tamanhos variados por posição** — Usar um array de larguras alternadas (ex: `w-72`, `w-56`, `w-64`, `w-80`) para cada imagem na linha, criando ritmo visual

4. **Preservar proporção** — Remover `h-64`/`h-80` fixos e usar `object-contain` ou simplesmente deixar a altura automática com `rounded-lg` no `<img>`

5. **Espaçamento entre linhas** — `gap-4` ou `space-y-4` entre as duas linhas

### CSS existente
As animações `animate-scroll-left` e `animate-scroll-right` já existem em `src/index.css`, então não é necessário adicionar CSS novo.

