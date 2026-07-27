# PH Masc — Cartão de Visita Digital & Landing Page

Landing page de apresentação pessoal e cartão de visita digital ultra-responsivo de **Phelipe Mascarenhas (PH Masc — Soluções em Dados)**, desenvolvido especialmente para summits, conferências e conexões profissionais de alto impacto.

![PH Masc Digital Card](public/favicon.svg)

## 🚀 Tecnologias

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router, JavaScript)
- **Estilização**: [Tailwind CSS](https://tailwindcss.com/)
- **Ícones**: [Lucide React](https://lucide.dev/)
- **QR Code & vCard**: [node-qrcode](https://github.com/soldair/node-qrcode) com especificação vCard 3.0
- **Tipografia**: `Manrope` via Google Fonts

---

## ✨ Recursos

- **Design System Tech-Premium**: Construído seguindo as diretrizes rígidas da especificação Impeccable (dark mode profundo `#0A0A1A`, superfícies `#12122A`, acentos em `#0099FF`, `#7B2FF7` e `#E5007F`).
- **Logo Vetorial Nativa**: Reconstrução em SVG da marca oficial (grid 3x3 de nós e conexões neurais com gradiente linear).
- **Hero Canvas Animado**: Rede de nós e conexões flutuantes em HTML5 Canvas nativo de baixo consumo de CPU (com suporte automático a `prefers-reduced-motion`).
- **QR Code vCard Integrado**: Ao ser escaneado pela câmera de um smartphone (iOS/Android), abre diretamente a tela "Adicionar aos Contatos" preenchida com nome, e-mail, telefone, empresa e site.
- **Download Direto de `.vcf`**: Botão para download de arquivo de contato para visitantes mobile.
- **Seções Completas**:
  - Hero com CTA "Vamos conversar" e hover glow
  - Sobre Mim (13+ anos de Qualicorp, PH Masc e JediCRM)
  - O Que Faço (Agentes de IA, Ciência de Dados e Consultoria)
  - Provas Sociais e Resultados
  - Canais de Contato (LinkedIn, GitHub, E-mail)

---

## 🛠️ Como Rodar Localmente

1. Clone o repositório:
```bash
git clone git@github.com:phmasc/phmasc-page.git
cd phmasc-page
```

2. Instale as dependências:
```bash
npm install
```

3. Crie o arquivo `.env.local` na raiz com o número de celular:
```env
NEXT_PUBLIC_PHONE_NUMBER=+5511974282313
```

4. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```
Acesse `http://localhost:3000` no seu navegador.

---

## 📦 Build de Produção

Para compilar e gerar a versão otimizada para deploy:
```bash
npm run build
```

---

## 📝 Licença

Todos os direitos reservados a PH Masc — Soluções em Dados © 2023.
