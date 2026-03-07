

## Ajustar recuo das imagens nos cards de serviços

**Arquivo:** `src/components/ServicesSection.tsx`

As imagens dos cards (linhas 107 e 138) atualmente ocupam a largura total sem margem, enquanto o texto abaixo tem `p-6`. O ajuste consiste em adicionar padding nas imagens para que fiquem alinhadas com o conteúdo textual.

### Alterações

**Linha 107 (Card 1)** e **Linha 138 (Card 2):**
- Adicionar `p-6 pb-0` no wrapper ou diretamente aplicar `mx-6 mt-6 rounded-xl` nas `<img>` para criar o recuo lateral e superior alinhado ao padding do texto.

Abordagem escolhida: envolver cada `<img>` em uma `div` com `px-6 pt-6` para manter consistência com o padding do bloco de texto (`p-6`), e adicionar `rounded-xl` na imagem para manter bordas arredondadas internas.

```tsx
// Card 1 - linha 107
<div className="px-6 pt-6">
  <img alt="O Plano Profissional" className="w-full object-cover rounded-xl" src="/lovable-uploads/c18b8aa1-0fc6-4c13-8626-86f91cd6b135.png" />
</div>

// Card 2 - linha 138
<div className="px-6 pt-6">
  <img alt="Campanhas" className="w-full object-cover rounded-xl" src="/lovable-uploads/6a3a07e3-beec-4916-86c0-01504c6b501c.png" />
</div>
```

