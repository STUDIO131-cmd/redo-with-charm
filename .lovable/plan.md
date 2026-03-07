

## Plano: Ajustes mobile para textos e alinhamento

### 1. HeroSection -- Texto da header (linhas 127-137)
O `<br />` forçado quebra o texto em linhas curtas no mobile. Solução: remover os `<br />` e deixar apenas no desktop usando CSS, ou substituir por `<br className="hidden md:block" />` para que no mobile o texto flua naturalmente.

### 2. LocationSection -- Textos de Catanduva (linhas 6-28)
Mesmo problema: `<br />` forçados criam quebras ruins no mobile. Solução: trocar `<br />` por `<br className="hidden md:block" />` nos dois parágrafos para que no mobile o texto reflua livremente.

### 3. CTASection -- Textos justificados no mobile (linhas 19-48)
Adicionar `text-justify md:text-center` nos três elementos de texto (h3, p do atendimento, p do "clique no botão") para que fiquem justificados no mobile e centralizados no desktop.

Também aplicar `<br className="hidden md:block" />` na linha 37 para evitar quebra forçada no mobile.

### Arquivos editados
- `src/components/HeroSection.tsx` -- `<br />` → `<br className="hidden md:block" />`
- `src/components/LocationSection.tsx` -- `<br />` → `<br className="hidden md:block" />`
- `src/components/CTASection.tsx` -- texto justificado no mobile + `<br />` condicional

