

## Plano: Ajustes na seção CTA

### Alterações no arquivo `src/components/CTASection.tsx`:

1. **Texto em duas linhas** -- Quebrar o parágrafo "Se você tem perguntas..." com `<br />`:
   - Linha 1: "Se você tem perguntas e deseja um atendimento personalizado,"
   - Linha 2: "nosso canal exclusivo é o WhatsApp"

2. **Banner preto com recuo e bordas arredondadas** -- A `<section>` atualmente ocupa toda a largura. Transformar o fundo escuro num container interno com:
   - Margens laterais (`mx-6 md:mx-12 lg:mx-20`)
   - Bordas arredondadas (`rounded-2xl` ou `rounded-3xl`)
   - A `<section>` externa fica com `bg-transparent` (fundo do site) e o `<div>` interno recebe `bg-dark-section rounded-3xl`

3. **Botão com outer glow neon e animação de brilho** -- Adicionar ao botão:
   - `box-shadow` dourado difuso via style inline para o efeito neon glow
   - Animação de pulsação suave usando `motion.a` com `animate` no `boxShadow` alternando intensidade, criando um brilho cíclico sutil

### Detalhes técnicos

- Seção externa: `className="px-6 md:px-12 lg:px-20 py-10 bg-background"`
- Div interna: `className="bg-dark-section rounded-3xl px-6 py-20 max-w-5xl mx-auto"`
- Botão glow: usar `animate={{ boxShadow: [...] }}` do framer-motion com transição `repeat: Infinity, repeatType: "reverse"` para pulsar o brilho dourado

