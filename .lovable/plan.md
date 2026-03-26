

## Plano: Criar a rota `/campanhas` com o conteúdo do projeto welcome-back-craft

### Contexto

O projeto [CAMPANHAS](/projects/8ba85e20-543a-4544-8407-582527bc0403) (welcome-back-craft) é uma landing page completa com seções de campanhas, bastidores, clientes, diferenciais, formulário de contato e footer. Precisamos trazer toda essa página para o projeto atual como uma rota `/campanhas`.

Antes de tudo, o build atual está quebrado por falta do pacote `@vitejs/plugin-react-swc` no `devDependencies` -- isso precisa ser corrigido primeiro.

### Correções pré-requisito

1. **Adicionar `@vitejs/plugin-react-swc`** ao `devDependencies` do `package.json`
2. **Adicionar `@emailjs/browser`** ao `dependencies` (usado pelo ContactForm)

### Arquivos a copiar do projeto welcome-back-craft

**Assets (copiar via cross_project--copy_project_asset):**
- `src/assets/page-bg.jpg`
- `src/assets/logo-campanhas.png`, `logo-campanhas-header.png`, `eagle-logo.png`, `portfolio-title.png`
- `src/assets/diff-crm.png`, `diff-organic.png`, `diff-studio.png`, `diff-team.png`
- `src/assets/clients/` (10 arquivos: cimples.png, auramia.png, corpo-ballet.png, ouromil.png, ana-flavia.png, la-vie.png, client7-10.png)
- `src/assets/campaigns/` (todas as subpastas: cimples, pinkfriday, tng, auramia, cravates, velvetcherry, novatrida, lavie, daninatal, etoiles, adriano + arquivos soltos como campanhas.mp4, dani-gallery.png)
- `src/assets/bastidores/` (6 vídeos .mp4)
- `src/assets/gallery/` (10 imagens .png)

**Componentes (criar no projeto atual):**
- `src/components/campanhas/HeroSection.tsx` -- Header com logo campanhas
- `src/components/campanhas/CampaignsSection.tsx` -- Grid de campanhas com galeria modal
- `src/components/campanhas/CampaignCTA.tsx` -- Vídeo vertical com play
- `src/components/campanhas/BastidoresSection.tsx` -- Carousel de vídeos bastidores
- `src/components/campanhas/ClientsCarousel.tsx` -- Scroll infinito de clientes
- `src/components/campanhas/DifferentialsSection.tsx` -- Cards de diferenciais
- `src/components/campanhas/CtaSection.tsx` -- CTA simples
- `src/components/campanhas/ContactForm.tsx` -- Formulário EmailJS
- `src/components/campanhas/FooterSection.tsx` -- Footer específico
- `src/components/campanhas/AdaptiveGallery.tsx` -- Engine de layout editorial
- `src/components/campanhas/PhotoLightbox.tsx` -- Lightbox de fotos
- `src/components/campanhas/LazyVideo.tsx` -- Video lazy loading

**Página:**
- `src/pages/Campanhas.tsx` -- Página que compõe todas as seções com background `page-bg.jpg`

**Rota:**
- `src/App.tsx` -- Adicionar `<Route path="/campanhas" element={<Campanhas />} />`

### CSS adicional

Adicionar ao `src/index.css`:
- `.section-container` (max-w-5xl mx-auto px-6)
- `.animate-scroll-gallery` keyframe
- Classes `.font-heading`, `.font-epika`, `.font-moneta`, `.font-tiktok` (se não existirem)

Os componentes usam variáveis CSS do welcome-back-craft (`--font-heading`, etc.) -- o tema é diferente (escuro vs claro). A página `/campanhas` envolverá seu conteúdo em um wrapper com tema escuro inline para manter o visual original sem alterar o tema global.

### Detalhes técnicos

- Total de ~150+ arquivos de assets (imagens, vídeos) a copiar
- Componentes colocados em `src/components/campanhas/` para evitar conflito com componentes homônimos do projeto principal (HeroSection, FooterSection)
- A página terá fundo fixo com `page-bg.jpg` e tema escuro próprio via CSS variables inline
- O formulário EmailJS depende de variáveis de ambiente `VITE_EMAILJS_*`

### Ordem de execução

1. Corrigir build (adicionar `@vitejs/plugin-react-swc`)
2. Copiar todos os assets
3. Criar os 12 componentes em `src/components/campanhas/`
4. Criar `src/pages/Campanhas.tsx`
5. Atualizar `src/App.tsx` com nova rota
6. Atualizar `src/index.css` com classes utilitárias necessárias

