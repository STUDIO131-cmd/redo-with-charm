

## Plano: Seção de Cases com Glass Button e Slider

### Alterações no `src/components/ServicesSection.tsx`

**1. Trocar o título (h2) por um botão glass com o novo texto:**
- Substituir o `<motion.h2>` atual pelo texto "Marcas que atendemos no decorrer dos anos:" dentro de um container com efeito glass (mesmo estilo do HeroSection - background semi-transparente, backdrop-filter blur, borda sutil, light sweep animado)
- Manter animação de entrada com framer-motion

**2. Adicionar slider de logos de clientes abaixo do glass button:**
- Criar um slider horizontal infinito deslizando para a direita, usando CSS animation (similar ao `CarouselSection` com `animate-scroll-left`, mas criando `animate-scroll-right`)
- Velocidade média (~25-30s por ciclo)
- Imagens duplicadas no array para loop contínuo
- Cada logo em container com tamanho fixo e `object-contain`

**3. Adicionar keyframe `scroll-right` no `tailwind.config.ts`:**
- Novo keyframe para animação de scroll da esquerda para direita

**4. Placeholders para logos:**
- Usar ícones placeholder do Lucide (Building2, Store, etc.) como placeholders temporários até o usuário enviar as imagens reais

### Como enviar as imagens dos cases

Para adicionar os logos dos seus clientes, basta **arrastar e soltar as imagens diretamente no chat** ou clicar no botão **"+"** no campo de mensagem e selecionar **"Attach"**. Você pode enviar até 10 imagens por mensagem (máx. 20MB cada). Após o envio, eu as integro automaticamente no slider.

### Estrutura visual

```text
┌──────────────────────────────────────────┐
│  ┌─── Glass Button ───────────────────┐  │
│  │ Marcas que atendemos               │  │
│  │ no decorrer dos anos:              │  │
│  │          ✨ light sweep            │  │
│  └────────────────────────────────────┘  │
│                                          │
│  ◄── [logo1] [logo2] [logo3] [logo4] ── │
│       slider contínuo para direita       │
└──────────────────────────────────────────┘
```

