

## Equalizar botões dos cards adicionando espaçamento no Card 2

**Arquivo:** `src/components/ServicesSection.tsx`

**Análise:** Ambos os cards já têm `flex-1` e `mt-auto`, mas os botões podem ficar desalinhados se as imagens tiverem alturas diferentes ou se o conteúdo textual não compensar. O Card 1 tem um parágrafo extra ("Eixos do acompanhamento:") + 3 itens, enquanto o Card 2 tem 4 itens sem título.

**Alteração:** Adicionar `mb-4` à `<ul>` do Card 2 (linha 147) para criar espaçamento extra após a última linha da lista, compensando a diferença de conteúdo:

```tsx
// Linha 147: de
<ul className="text-sm font-body space-y-1" style={{ color: "hsl(0,0%,50%)" }}>
// para
<ul className="text-sm font-body space-y-1 mb-4" style={{ color: "hsl(0,0%,50%)" }}>
```

Caso `mb-4` não seja suficiente, pode ser ajustado para `mb-6` ou `mb-8`.

