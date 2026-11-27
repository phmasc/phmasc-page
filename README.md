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
NEXT_PUBLIC_PHONE_NUMBER=+5599999999999
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

## 🐳 Deploy em Docker Swarm / Portainer

O repositório está configurado para build automatizado no **GitHub Container Registry (GHCR)** e deploy via **Portainer** em **Docker Swarm** com **Traefik**.

### Pipeline CI/CD (GitHub Actions)
- Em pushes na branch `main` (ou disparo manual em **Actions → Build and Push Docker Image**), o workflow publica `ghcr.io/phmasc/phmasc-page:latest`.
- Caso deseje definir o telefone do vCard em tempo de build sem expor no código, cadastre o secret ou variable `NEXT_PUBLIC_PHONE_NUMBER` no repositório.

### Stack no Portainer
1. No Portainer, acesse **Stacks → Add stack** (via **Repository** apontando para este repo com `docker-compose.yml`, ou colando o conteúdo no **Web editor**).
2. Certifique-se de que a rede overlay `network_swarm_public` já existe no Swarm.
3. (Opcional) Defina as variáveis de ambiente na stack:
   - `DOMAIN_NAME`: domínio roteado pelo Traefik (padrão: `phelipe.mascarenhas.tech`)
   - `IMAGE_NAME`: imagem Docker (padrão: `ghcr.io/phmasc/phmasc-page:latest`)
4. Clique em **Deploy the stack**.

---

## 📝 Licença

Todos os direitos reservados a PH Masc — Soluções em Dados © 2023.
