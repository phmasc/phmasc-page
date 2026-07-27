# Design System — PH Masc Digital Business Card

## Color Palette

- **Background Deep**: `#0A0A1A` (Fundo dark profundo com tom azulado metálico)
- **Surface Card**: `#12122A` (Superfície sólida dos cards e seções)
- **Surface Hover**: `#1A1A3A` (Superfície interativa)
- **Primary Tech Blue**: `#0099FF` (Links, ícones ativos, destaques tech)
- **Secondary Transition Purple**: `#7B2FF7` (Elemento de transição da marca)
- **Magenta Accent**: `#E5007F` (Badges, acentos de destaque)
- **Text Primary**: `#FFFFFF` (Texto principal com alto contraste)
- **Text Secondary**: `#B0B0C8` (Subtítulos e parágrafos com excelente legibilidade)
- **Border Subtle**: `#22224A` (Borda limpa de 1px)

## Typography

- **Font Family**: `Manrope`, sans-serif (Google Fonts).
- **Scale**:
  - `Display / Hero Title`: `clamp(2.25rem, 5vw, 3.75rem)` | line-height: 1.1 | weight: 800
  - `Section Heading`: `clamp(1.5rem, 3.5vw, 2.25rem)` | line-height: 1.2 | weight: 700
  - `Card Title`: `1.25rem` (20px) | weight: 600
  - `Body Text`: `1rem` (16px) | line-height: 1.65 | weight: 400/500
  - `Badges & Labels`: `0.875rem` (14px) | weight: 600

## Radius & Spacing

- **Card Radius**: `14px` (`rounded-xl` no Tailwind).
- **Button Radius**: `12px` ou `9999px` (Pill para CTAs de impacto).
- **Spacing Scale**: Ritmo consistente baseado em 8px (gap-4, gap-6, py-16, py-24).

## Visual Identity (Logo)

- Grid 3x3 de 9 nós neurais interconectados por linhas diagonais e verticais.
- Gradiente de `#E5007F` (magenta) passando por `#7B2FF7` até `#0099FF` (azul).
- Renderizado nativamente em SVG com suporte a retina e favicon.

## Motion & Micro-interactions

- **Background Canvas**: Animação fluida e leve de nós conectados flutuando suavemente e reagindo ao ponteiro do usuário. Pausa automaticamente sob `prefers-reduced-motion`.
- **Card Hover**: Transição sutil de elevação e brilho de borda (`border-color` para tom de transição) em 200ms.
- **CTA Hover**: Efeito de iluminação externa (glow) suave em tom magenta/azul.
