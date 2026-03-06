

## Glass bar full-width com título + slider de logos

**Arquivo:** `src/components/ServicesSection.tsx`

### O que muda

Substituir o "glass button" centralizado (linhas 48-81) e o slider de logos (linhas 83-99) por uma única **glass bar full-width** que contém ambos: o título e o carousel de logos.

### Estrutura

1. **Remover** o `motion.div` do botão glass (linhas 48-81) e o `div` do slider (linhas 83-99)
2. **Criar** um novo container full-width (`w-screen left-1/2 -translate-x-1/2`) com o estilo glass (backdrop-blur, fundo semi-transparente, borda sutil, sombra)
3. Dentro do glass bar:
   - Título `h2` com fonte TikTok Sans light expanded (mantendo o estilo atual)
   - Light sweep animado (mantendo o efeito existente)
   - Slider de logos abaixo do título (mantendo `animate-scroll-right`)
4. Padding vertical interno (`py-10`), sem `rounded-xl` (pois é full-width edge-to-edge)
5. `overflow-hidden` no container para esconder os logos que saem da tela e o light sweep

### Detalhes visuais
- Mesmo estilo glass do botão atual (background gradient, backdrop-filter blur, border, box-shadow)
- `mb-20` no container para manter espaço com a seção seguinte
- Título com `mb-6` antes do slider

