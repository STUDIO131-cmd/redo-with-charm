

## Ajustes tipográficos e de espaçamento nos cards de serviços

**Arquivo:** `src/components/ServicesSection.tsx`

### 1. Motion.p (linha 86-94) — Fonte TikTok Sans Expanded Light + tamanho maior
- Trocar `text-lg font-display` por `text-xl md:text-2xl`
- Adicionar `style={{ fontFamily: "'TikTok Sans', sans-serif", fontWeight: 300, fontStretch: "expanded" }}`

### 2. Card 1 — Título com quebra de linha e fontes maiores
- Título `h3` (linha 108-110): aumentar de `text-xl` para `text-2xl md:text-3xl`, conteúdo vira:
  ```
  O Plano Profissional<br />
  Operação + Consultoria
  ```
  (remover os dois pontos)
- Descrição (linha 111-113): aumentar de `text-sm` para `text-base`
- Eixos (linha 114-116): aumentar de `text-xs` para `text-sm`

### 3. Card 2 — Título com quebra de linha e fontes maiores
- Título `h3` (linha 134-136): aumentar de `text-xl` para `text-2xl md:text-3xl`, conteúdo vira:
  ```
  Campanhas<br />
  Personalização + Pontualidade
  ```
  (remover os dois pontos)
- Descrição (linha 137-139): aumentar de `text-sm` para `text-base`
- Lista (linha 140-145): aumentar de `text-xs` para `text-sm`

### 4. Espaçamento uniforme entre os cards
- Ambos os cards usam `p-6 space-y-3` mas o conteúdo interno difere (card 1 tem `<p>` de eixos, card 2 tem `<ul>` com 4 items)
- Adicionar `flex flex-col` no container interno de cada card e usar `mt-auto` no botão para empurrá-lo para a base, garantindo alinhamento vertical igual
- Mudar de `space-y-3` para `space-y-4` e aplicar `flex-1` no wrapper interno para que ambos os cards tenham a mesma distribuição

