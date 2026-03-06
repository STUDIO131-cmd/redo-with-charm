

## Corrigir espaço extra abaixo do botão no Card 1

**Problema:** O `mt-auto` no botão do Card 1 empurra o botão para baixo mas como o Card 2 tem mais conteúdo (4 itens de lista), o Card 1 fica com espaço vazio entre o texto "Eixos do acompanhamento" e o botão.

**Solução:** Remover `flex-1` do container interno e `mt-auto` do botão em ambos os cards. Em vez disso, deixar os cards com altura automática independente (não forçar mesma altura). Isso elimina o espaço extra.

**Arquivo:** `src/components/ServicesSection.tsx`

- Linha 108: remover `flex-1` → `<div className="p-6 space-y-4 flex flex-col">`
- Linha 120: remover `mt-auto` do botão
- Linha 135: remover `flex-1` → `<div className="p-6 space-y-4 flex flex-col">`  
- Linha 149: remover `mt-auto` do botão

Ambos os cards terão altura natural baseada no conteúdo, sem espaço forçado.

