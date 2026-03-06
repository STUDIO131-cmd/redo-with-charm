

## Ajustes no título do CarouselSection

**Arquivo:** `src/components/CarouselSection.tsx`

### Alterações:

1. **Quebrar texto em duas linhas** (linha 19): Adicionar `<br />` entre "uma" e "Jornada"
   - De: `Aqui construímos uma Jornada de Ascensão.`
   - Para: `Aqui construímos uma<br />Jornada de Ascensão.`

2. **Reduzir espaçamento entre linhas** (linha 17): Adicionar `leading-tight` à classe do `h2`

3. **Reduzir espaçamento da seção** (linha 15): Reduzir `py-20` para `py-10` ou `py-12` na `<section>` do CarouselSection

