

## Adicionar light leaks ao fundo da Hero section com efeito film burn

**Arquivo:** `src/components/HeroSection.tsx`

### Alterações

**1. Light leaks no fundo da section (fundo claro)**

Adicionar 4 esferas radiais semelhantes às do glass bar, mas adaptadas ao fundo claro (`bg-background` = cinza 92%):
- Cores com luminosidade mais alta e saturação intensa para serem visíveis no fundo claro
- Opacidade maior (~0.3-0.5)
- Animação mais rápida (duração 3-5s) para simular o efeito de "film burn" — movimento mais intenso e errático
- Posicionadas como `absolute` dentro da `<section>`, abaixo do conteúdo (z-0)

```tsx
{/* Film burn light leaks - fundo */}
<div className="absolute inset-0 overflow-hidden pointer-events-none">
  <motion.div
    className="absolute w-[80%] h-[150%]"
    style={{
      background: "radial-gradient(circle, hsla(220,80%,70%,0.3) 0%, transparent 60%)",
      filter: "blur(60px)",
      top: "-30%", left: "-20%",
    }}
    animate={{ x: ["0%", "50%", "-10%", "40%", "0%"], y: ["0%", "20%", "-15%", "10%", "0%"], scale: [1, 1.3, 0.9, 1.2, 1] }}
    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
  />
  {/* + 3 esferas similares com cores magenta, âmbar e ciano, durações 3-5s */}
</div>
```

**2. Gradient de transição suave no final da section**

Adicionar um `div` absoluto no bottom da section com um gradiente que vai de transparente para `bg-background`, criando uma transição smooth com a próxima seção:

```tsx
<div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-background z-20 pointer-events-none" />
```

### Resumo

- Adicionar 4 light leaks radiais ao fundo da section com animação rápida (film burn)
- Manter fundo claro existente (`bg-background`)
- Adicionar gradiente de fade-out no bottom para transição suave com a próxima seção

