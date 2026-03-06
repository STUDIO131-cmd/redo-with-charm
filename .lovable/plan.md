

## Alinhar botões dos cards de serviço

**Problema:** A lista "Eixos do acompanhamento" adicionou conteúdo extra ao Card 1, mas como os cards têm quantidades diferentes de texto, os botões ficam desalinhados verticalmente.

**Solução:** Usar `flex-1` no div interno de cada card e `mt-auto` nos botões. Isso faz o conteúdo interno preencher todo o espaço disponível e empurra os botões para o fundo, alinhando-os perfeitamente.

**Arquivo:** `src/components/ServicesSection.tsx`

1. **Linha 108** — Card 1 div interno: adicionar `flex-1`
   - `"p-6 space-y-4 flex flex-col"` → `"p-6 space-y-4 flex flex-col flex-1"`

2. **Linha 124** — Card 1 botão: adicionar `mt-auto`
   - `"w-full flex items-center..."` → `"mt-auto w-full flex items-center..."`

3. **Linha 139** — Card 2 div interno: adicionar `flex-1`
   - `"p-6 space-y-4 flex flex-col"` → `"p-6 space-y-4 flex flex-col flex-1"`

4. **Linha 153** — Card 2 botão: adicionar `mt-auto`
   - `"w-full flex items-center..."` → `"mt-auto w-full flex items-center..."`

Isso é a abordagem padrão de Flexbox para alinhar elementos ao fundo de containers com alturas iguais (o grid já garante alturas iguais).

