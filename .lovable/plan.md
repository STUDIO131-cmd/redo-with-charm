

## Efeito de luz animada vertical no glass banner do logotipo

**Arquivo:** `src/components/HeroSection.tsx`

Adicionar um pseudo-elemento (via `motion.div` filho) dentro do glass banner que simula uma faixa de luz vertical percorrendo da esquerda para a direita continuamente:

- Um `motion.div` absoluto dentro do glass banner com gradiente linear vertical (transparente → branco 15% opacidade → transparente)
- Largura estreita (~30-40% do container), altura 100%
- Animação com `framer-motion` movendo `x` de `-100%` a `200%` em loop infinito (~3-4s), com ease suave
- `overflow-hidden` no container do glass para esconder a faixa fora dos limites
- `rounded-xl` no container para manter o recorte arredondado

