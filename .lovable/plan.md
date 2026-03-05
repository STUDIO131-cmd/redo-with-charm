

## Substituir vídeo de fundo por YouTube embed

O vídeo atual usa uma tag `<video>` com link do Google Drive. Para YouTube sem player visível, é necessário usar um `<iframe>` com parâmetros específicos.

**Video ID:** `neFhIUipjLU`

### Alterações em `src/components/HeroSection.tsx`

Substituir a tag `<video>` por um `<iframe>` do YouTube com:
- URL: `https://www.youtube.com/embed/neFhIUipjLU?autoplay=1&mute=1&loop=1&playlist=neFhIUipjLU&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&disablekb=1&fs=0&iv_load_policy=3`
- `playlist=neFhIUipjLU` é necessário para o loop funcionar no embed
- Opacidade de 60% (`opacity-60`)
- `pointer-events-none` para impedir interação com o player
- Escalar o iframe maior que o container (`scale-[1.5]`) para esconder bordas pretas do YouTube e preencher a área como `object-cover`
- Remover a constante `VIDEO_URL` que não será mais usada

