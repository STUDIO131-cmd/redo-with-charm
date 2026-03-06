

## Ajustar seção de serviços para match com o design

**Arquivo:** `src/components/ServicesSection.tsx`

### Mudanças

1. **Título principal** — Aumentar fonte para `text-3xl md:text-4xl`, usar font-display (Playfair Display) como no design, centralizado

2. **Cards escuros** — Envolver cada serviço em um card com:
   - `bg-[hsl(0,0%,10%)]` (fundo escuro/preto)
   - `rounded-2xl` com padding interno (`p-6`)
   - Imagem no topo dentro do card (antes do título)

3. **Reordenar conteúdo** — Mover a imagem para CIMA do título em cada card (no design, a imagem vem primeiro)

4. **Botão "Clique: MAIS INFORMAÇÕES"** — Adicionar em cada card:
   - Fundo dourado/accent (`bg-[hsl(36,95%,80%)]`)
   - Texto escuro, ícone de QR/grid à esquerda
   - Arredondado, centralizado na base do card

5. **Textos dentro dos cards** — Cores claras (`text-white`, `text-gray-400`) para contraste com fundo escuro

