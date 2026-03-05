

## Efeito de digitação animado no título do Hero

Implementar um efeito **typewriter** infinito no `<h1>` do `HeroSection.tsx`:

1. O texto ".We are the team/" será digitado caractere por caractere
2. Após completar, pausa breve, depois apaga caractere por caractere
3. Cursor `_` (underscore) piscando no final, sempre visível
4. Loop infinito

### Implementação

**Arquivo:** `src/components/HeroSection.tsx`

- Criar um estado `displayText` que vai de `""` até `".We are the team/"` e volta
- Usar `useEffect` com `setInterval`/`setTimeout` para controlar a velocidade de digitação (~100ms) e apagamento (~60ms), com pausa (~2s) quando completo e (~1s) quando vazio
- Cursor `_` com animação CSS `blink` (opacidade alternando a cada 500ms)
- Manter o `motion.h1` existente com fade-in inicial, substituindo o texto estático pelo `displayText` + cursor

### Keyframe do cursor

Adicionar no `index.css` um keyframe `blink` para o cursor underscore piscar.

