

## Ajustar tipografia dos títulos dos cards de serviços

**Arquivo:** `src/components/ServicesSection.tsx`

### Card 1 (linha 109-112)
Separar o título em duas linhas com estilos distintos:
- **"O Plano Profissional"** → `font-bold`
- **"OPERAÇÃO + CONSULTORIA"** → `font-extralight`, texto em uppercase, tamanho menor (`text-lg md:text-xl`)

### Card 2 (linha 140-143)
Aplicar o mesmo padrão:
- **"Campanhas"** → `font-bold`
- **"PERSONALIZAÇÃO + PONTUALIDADE"** → `font-extralight`, uppercase, tamanho menor (`text-lg md:text-xl`)

### Código resultante (ambos os h3)

```tsx
<h3 className="text-dark-section-foreground font-sans">
  <span className="text-2xl md:text-3xl font-bold block">O Plano Profissional</span>
  <span className="text-lg md:text-xl font-extralight block uppercase tracking-wide">Operação + Consultoria</span>
</h3>
```

```tsx
<h3 className="text-dark-section-foreground font-sans">
  <span className="text-2xl md:text-3xl font-bold block">Campanhas</span>
  <span className="text-lg md:text-xl font-extralight block uppercase tracking-wide">Personalização + Pontualidade</span>
</h3>
```

