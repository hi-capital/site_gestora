# Handoff: Honey Island — Gestão de Recursos (Transparência & Compliance)

## Overview

Landing page / seção institucional para a **Honey Island Gestão de Recursos Ltda.**, subsidiária de asset management da Honey Island Capital. Objetivos:

1. **Apresentar a gestora** ao mercado com o brand system oficial extraído do PPTX institucional (HI IV_V2).
2. **Dar transparência regulatória** aos investidores, listando 7 documentos e políticas formais.
3. **Sinalizar** que a gestora está em fase de credenciamento perante CVM e adesão à ANBIMA (disclaimer obrigatório fornecido pelo compliance do cliente).

Página **bilíngue PT-BR / EN**, single-scroll. Cinco superfícies verticais + footer.

## About the Design Files

Os arquivos deste pacote são **referências de design produzidas em HTML** — protótipos que demonstram intenção visual, tratamento tipográfico, hierarquia e microinterações. **Não são código de produção para copiar direto.**

A tarefa esperada é **recriar estes designs no ambiente do codebase-alvo** (React + Tailwind, Next.js, Vue, ou o framework que o time já usa em `honeyisland.capital`), aplicando os componentes, tokens e padrões existentes desse projeto. Se ainda não há stack decidida para a subsidiária "Gestão de Recursos", recomenda-se **Next.js + Tailwind CSS + shadcn/ui** com i18n via `next-intl` — padrão de mercado para páginas institucionais bilíngues.

O HTML bundled aqui usa vanilla JS + i18n dictionary in-file apenas como scaffolding rápido do design tool.

**⚠️ IMPORTANTE — Sobre os inline styles no protótipo:** durante iterações o usuário aplicou diversas edições diretas via ferramenta de tweak, deixando **valores absolutos hardcoded** (widths em pixels, heights fixas, paddings específicos, font-sizes específicos, etc.) em elementos do hero. Esses valores **NÃO devem ser copiados literalmente para produção** — foram ajustes iterativos de um viewport específico (~1440px desktop). O dev deve reproduzir a **intenção visual** (hierarquia tipográfica, alinhamento, proporção) usando o sistema fluido/responsivo do framework de destino. Ver **§ Estado atual do protótipo (Hero)** para detalhes específicos.

## Fidelity

**High-fidelity (hifi)** no sistema geral (paleta, tipografia, hierarquia, interações). **Iteração pixel-tweaked** no hero (valores absolutos preservados). Cores, fontes e composição do brand foram extraídos direto do PPTX oficial do cliente (`HI IV_V2.pptx`).

## Screens / Views

Página single-scroll. Ordem vertical (top → bottom):

1. Chrome fixo (global — muda de tema conforme scroll)
2. **Hero (Sobre a Gestora)** — fundo navy fotográfico + hexágono luminoso
3. **Transparência & Compliance** — fundo cream, intro à seção de documentos
4. **Documentos regulatórios** — 7 itens
5. **Contato de compliance** — email + endereço
6. **Aviso regulatório** — disclaimer band
7. **Footer**

### Chrome fixo (global)

- **Posição**: `position: fixed; top: 0; left: 0; right: 0; z-index: 50`
- **Altura**: ~78px com padding `22px 44px`
- **Comportamento adaptativo (chave)**: JS observa scroll; enquanto `.hero` visível → `on-navy` (fundo escuro, logo branco); senão → `on-cream` (fundo claro, logo preto). Transição CSS `.4s`.
- **Esquerda**: logo (branco ou preto, 28px altura) + divisor 1px + tag "GESTÃO DE RECURSOS" / "ASSET MANAGEMENT" (Roboto 500, 10px, .36em uppercase, opacity .7)
- **Direita**: language toggle `PT / EN` (Roboto 500, 11px, .28em uppercase). Ativo `opacity: 1`, inativo `opacity: .4`.

### 01 — Hero (Sobre a Gestora)

**Superfície**
- Fundo navy fotográfico (múltiplos radial-gradients + linear-gradient — ver Background Stack em Design Tokens)
- Hexágono `hex-glow.png` posicionado absoluto à direita, opacity **.38**, blur .5px
- **Padding no protótipo atual**: `150px` (inline style aplicado pelo usuário — no CSS base seria `180px 44px 100px`)

**Estrutura interna (`.hero-inner`)**
- Container centralizado, `max-width: 1360px` no CSS base; **no protótipo tweaked**: `width: 1078px` inline
- Flex column space-between
- Duas grandes áreas: `.hero-top` (headline + lead) e `.hero-bottom` (localização/ano)

**Hero-top — grid 2 colunas `1fr 1fr`, gap 60px, `align-items: end`**

Coluna esquerda (o item "reveal"):
- Eyebrow "SOBRE A GESTORA" / "ABOUT THE FIRM" — Roboto 500, 11px, .34em uppercase, cor `rgba(242,238,234,.72)`, precedido de linha 32×1px
- H1: **DM Serif Display 400**
  - CSS base: `clamp(52px, 6.8vw, 104px)`, line-height 1.02, letter-spacing -.015em
  - **Protótipo atual (inline)**: `font-size: 67.108px`
  - `max-width: 16ch` no CSS base
  - **PT**: `O <em>Venture Capital</em> que investe nos próximos vencedores dos serviços financeiros.`
  - **EN**: `The <em>Venture Capital</em> firm investing in the next winners of financial services.`
  - Palavra em `<em>` → itálico DM Serif + cor `#cfe7f7` (hex-glow)

Coluna direita (`.hero-side`):
- Parágrafo lead (`.hero-side p`)
  - Work Sans 400, 16px, line-height 1.7, cor `rgba(242,238,234,.72)`, max-width 440px
  - **Protótipo atual (inline)**: `height: 380.938px` — cria bloco alto para empurrar visualmente o alinhamento com o título grande da esquerda. Em produção, substituir por flex/grid alignment natural.
  - **PT**: "Somos o Venture Capital que investe nos próximos vencedores dos serviços financeiros na América Latina e constrói com eles, antes que se tornem óbvios. Assimetria que nasce da combinação entre a expertise de triar e o acompanhamento que dá norte."
  - **EN**: "We are the Venture Capital firm investing in the next winners of financial services in Latin America and building alongside them before they become obvious. Asymmetry born from the combination of expert screening and hands-on guidance."

**Hero-bottom** — Localização e ano
- CSS base: `padding-top: 60px, margin-top: 60px, border-top: 1px rgba(242,238,234,.22)`, flex space-between align-items flex-end
- **Protótipo atual (inline)**: `height: 61px; flex-direction: row; gap: 0px; justify-content: space-between; align-items: flex-end` (mesma intenção, apenas explícita)
- Três items lado a lado:
  - CURITIBA / BRASIL / 2026
  - Roboto 500, 11px, letter-spacing **.4em**, uppercase
  - Cor `rgba(242,238,234,.72)`
  - Primeiro item ("Curitiba") tem inline `height: 13px` no protótipo — em produção, remover, deixar altura natural

### Estado atual do protótipo (Hero) — inline styles preservados

Para referência exata do que está no HTML entregue:

```html
<section class="hero" id="hero" style="padding: 150px">
  <img class="hero-hex" src="assets/hex-glow.png" alt="" aria-hidden="true">
  <div class="hero-inner" style="width: 1078px">
    <div class="hero-top" style="width: 1178px; height: 463.625px">
      <div class="reveal" style="width: 559px; padding: 0px; margin: 0px">
        <span class="hero-eyebrow" data-i18n="about.eyebrow">Sobre a Gestora</span>
        <h1 class="hero-title" data-i18n="about.title" style="font-size: 67.108px"></h1>
      </div>
      <div class="hero-side reveal">
        <p data-i18n="about.lead" style="height: 380.938px"></p>
      </div>
    </div>
    <div class="hero-bottom reveal" style="height: 61px; flex-direction: row; ...">
      <div class="item"><span class="v" data-i18n="hero.city" style="height: 13px">Curitiba</span></div>
      <div class="item"><span class="v" data-i18n="hero.country">Brasil</span></div>
      <div class="item"><span class="v">2026</span></div>
    </div>
  </div>
</section>
```

**Recomendação para produção**: descartar todos os `style="..."` do hero e usar o CSS base (fluido, responsivo). Se o cliente insistir em replicar exatamente essas medidas, aplicar apenas em desktop ≥1440px e deixar fallback fluido em breakpoints menores.

### 02 — Transparência & Compliance (intro sobre cream)

**Layout**
- Fundo `#F2EEEA` (cream)
- Padding vertical `180px 0 140px`
- Grid 2 colunas `320px 1fr`, gap 80px, align-items: start

**Coluna esquerda (label)**
- Número "01 —" em Roboto 500, 10.5px, .28em uppercase, cor `rgba(89,89,89,.55)`
- Eyebrow "TRANSPARÊNCIA & COMPLIANCE" / "TRANSPARENCY & COMPLIANCE" — Roboto 500, 11px, .32em uppercase, cor `rgba(89,89,89,.72)`

**Coluna direita (conteúdo)**
- H2 "hero.title":
  - **DM Serif Display 400**, `clamp(40px, 5vw, 76px)`, line-height 1.05, letter-spacing -.015em, cor `#595959`
  - "políticas" em `<em>` → itálico + cor `#3e6788` (navy-700)
  - **PT**: `Documentos e <em>políticas</em> da gestora.`
  - **EN**: `<em>Policies</em> and documents of the firm.`
- Lead abaixo (margin-top 40px):
  - Work Sans 400, 17px, line-height 1.75, cor `#595959`, max-width 720px
  - **PT**: "Visando atender à regulamentação em vigor e dar maior transparência, disponibilizamos abaixo as políticas e documentos formais da Honey Island Gestão de Recursos."
  - **EN**: "In order to comply with current regulation and provide greater transparency, we make available below the formal policies and documents of Honey Island Asset Management."

### 03 — Documentos Regulatórios

**Layout**
- Fundo `#EBE5DD` (cream-tint), border-top hairline
- Padding vertical 140px
- Head: grid `320px 1fr`, gap 80px, align-items: end, margin-bottom 80px

**Head — coluna esquerda**: número "02 —" + eyebrow "DOCUMENTOS REGULATÓRIOS" / "REGULATORY DOCUMENTS"

**Head — coluna direita**:
- H2 (DM Serif 400, `clamp(40px, 4.6vw, 68px)`, line-height 1.02, letter-spacing -.015em, cor `#595959`)
  - **PT**: `Políticas e documentos <em>disponíveis</em>.`
  - **EN**: `Available policies <em>and documents</em>.`
- Intro (Work Sans 400, 15px, line-height 1.7, cor `rgba(89,89,89,.72)`, max-width 520px)
  - **PT**: "Documentos e políticas formais da gestora, disponíveis para consulta pública em conformidade com as normas da CVM."
  - **EN**: "Formal firm policies and documents, publicly available in compliance with CVM regulations."

**Lista — os 7 documentos** (ordem fixa):

| # | PT | EN | id (slug) |
|---|----|----|-----------|
| 01 | Política de Investimentos Pessoais | Personal Investments Policy | `investimentos-pessoais` |
| 02 | Política de Rateio e Divisão de Ordens | Order Allocation & Split Policy | `rateio-ordens` |
| 03 | Código de Ética | Code of Ethics | `codigo-etica` |
| 04 | Manual de Regras, Procedimentos e Controles Internos | Rules, Procedures & Internal Controls Manual | `manual-rpci` |
| 05 | Política de Voto | Voting Policy | `politica-voto` |
| 06 | Política de Gestão de Riscos | Risk Management Policy | `gestao-riscos` |
| 07 | Formulário de Referência | Reference Form | `formulario-referencia` |

> Documento anterior "Política de Prevenção à Lavagem de Dinheiro (PLD/FTP)" foi **removido** pelo cliente após iteração.

> **Nota**: os `href` estão como `#<slug>` no protótipo — trocar por URLs de PDFs quando disponíveis.

**Estilo de linha**
- Container `border-top: 1px solid rgba(89,89,89,.20)`
- Cada linha: `<a>` grid `60px 1fr 200px 60px`, padding vertical 30px + horizontal 8px, `border-bottom` hairline
- Colunas:
  - **Número**: `01`..`07` em DM Serif italic 400, 18px, cor `#3e6788` (navy-700)
  - **Título**: DM Serif Display 400, **26px**, letter-spacing -.005em, cor `#595959`
  - **Meta**: "PDF · DOCUMENTO" / "PDF · DOCUMENT" em Roboto 500, 10.5px, .28em uppercase, cor `rgba(89,89,89,.55)`
  - **Seta**: chevron horizontal 22×22, stroke currentColor 1.2

**Hover state (signature interaction)**
- `padding-left: 0 → 26px` em .35s cubic-bezier(.2,.7,.1,1)
- Pseudo-elemento `::before` com gradient sweep 0% → 100% width em .5s
- Título muda para `#284a6b`, seta translada +6px X, muda cor para navy-800

### 04 — Contato de Compliance

- Fundo cream `#F2EEEA`, border-top hairline
- Padding vertical `140px 0 160px`
- Grid `320px 1fr`, gap 80px

**Coluna esquerda**: número "03 —" + eyebrow "CONTATO DE COMPLIANCE" / "COMPLIANCE CONTACT"

**Coluna direita**
- H2 (DM Serif 400, `clamp(36px, 4.4vw, 64px)`)
  - **PT**: `Fale com nosso <em>Compliance</em>.`
  - **EN**: `Get in touch with our <em>Compliance</em>.`
  - "Compliance" em itálico + cor navy-700
- Cards grid 2 colunas, gap 40px, max-width 720px
  - **Card E-mail**: label + `compliance@hi.capital` (mailto, hover navy-700)
  - **Card Endereço**: label + "Curitiba, PR — Brasil"
- Cada card: border-top hairline, padding `24px 0`, label Roboto 500 10.5px, valor DM Serif 400 24px

### 05 — Aviso Regulatório (disclaimer band)

- Fundo `#E7DFD3` (cream-warm), border-top hairline, padding vertical 64px
- Grid `320px 1fr`, gap 80px
- Coluna esquerda: eyebrow "AVISO REGULATÓRIO" / "REGULATORY NOTICE" (o dagger "†" foi removido pelo cliente)
- Coluna direita: parágrafo DM Serif italic 400, 17px, line-height 1.7, cor `#595959`, max-width 820px

**Copy PT (obrigatório, texto do compliance do cliente — não editar):**
> A Honey Island Gestão de Recursos Ltda. ainda está em fase de credenciamento perante a Comissão de Valores Mobiliários ("CVM") na categoria "gestor de recursos", bem como está em processo de adesão perante a Associação Brasileira das Entidades dos Mercados Financeiro e de Capitais ("ANBIMA"), em relação a determinados Códigos da Associação.

**Copy EN:**
> Honey Island Gestão de Recursos Ltda. is currently undergoing accreditation with the Brazilian Securities and Exchange Commission ("CVM") under the "asset manager" category, and is also in the process of adhering to the Brazilian Financial and Capital Markets Association ("ANBIMA") with respect to certain Association Codes.

### 06 — Footer

- Fundo cream, border-top hairline, padding vertical 36px
- Flex space-between, Roboto 500, 10.5px, .28em uppercase, cor `rgba(89,89,89,.55)`
- **Esquerda**: "© 2026 HONEY ISLAND GESTÃO DE RECURSOS LTDA."
- **Direita**: "CNPJ 64.455.911/0001-96"

## Interactions & Behavior

### Language toggle
- Persiste em `localStorage['hi.lang']`
- Reescreve `innerHTML` de todos `[data-i18n]` — usar `innerHTML` (não `textContent`) porque valores contêm `<em>`
- Atualiza `document.documentElement.lang`
- Re-renderiza a lista de documentos
- Estado inicial: PT

### Chrome color swap (adaptivo)
- Listener `scroll` passive chama `updateChrome()`
- Mede `hero.getBoundingClientRect().bottom`; > 78px → `on-navy`; ≤ 78px → `on-cream`
- Transição CSS `.4s` em `background`, `backdrop-filter`, `color`
- Em SSR: computar estado inicial no client após mount para evitar hydration flash

### Email hydration (anti-Cloudflare)
- Anchor `<a class="email-link" data-user="compliance" data-host="hi.capital">` vazio no HTML
- No `onload`, JS lê data-attrs e escreve `href="mailto:..."` + `textContent`
- Evita reescrita por Cloudflare Email Protection

### Reveal on scroll
- Elementos `.reveal` iniciam `opacity: 0; transform: translateY(24px)`; ao entrar viewport recebem `.in` (1s cubic-bezier)
- **Camadas de segurança obrigatórias** (bug observado em iframes):
  1. Ao load, elementos dentro de 110% do viewport recebem `.in` imediatamente
  2. IntersectionObserver threshold .05, rootMargin `0px 0px -40px 0px`
  3. Fallback `setTimeout` 800ms força `.in` em quaisquer remanescentes
  4. Listener `scroll` passive que revela cuja `top < 0.95 * innerHeight`

### Document row hover
Ver §03 — combinar: padding-left animation + gradient sweep + cor de título + translate da seta.

## State Management

```ts
{
  lang: 'pt' | 'en'  // localStorage 'hi.lang', default 'pt'
}
```

Chrome mode (on-navy vs on-cream) é estado local do componente Chrome, derivado do scroll.

Nenhum data fetching necessário.

## Design Tokens

### Cores (extraídas do PPTX HI IV_V2)

```css
/* Hero — navy fotográfico */
--navy-950:  #0f2036;
--navy-900:  #1a3350;
--navy-800:  #284a6b;
--navy-700:  #3e6788;   /* accent italic sobre cream */
--steel-500: #7a97b0;
--steel-300: #a8c1d4;
--hex-glow:  #cfe7f7;   /* itálico no hero */

/* Interior — cream + graphite (slides 2 e 3 do PPTX) */
--cream:      #F2EEEA;
--cream-tint: #EBE5DD;  /* fundo docs */
--cream-warm: #E7DFD3;  /* fundo disclaimer */
--graphite:   #595959;
--graphite-70:rgba(89,89,89,.72);
--graphite-50:rgba(89,89,89,.55);
--graphite-30:rgba(89,89,89,.32);
--hairline-dark:rgba(89,89,89,.20);
--hairline-light:rgba(242,238,234,.22);

/* Text on navy */
--on-navy-100: #F2EEEA;
--on-navy-70:  rgba(242,238,234,.72);
--on-navy-50:  rgba(242,238,234,.55);
```

### Tipografia (fontes oficiais do PPTX)

**Serifa display**: **`DM Serif Display`** — regular + italic, peso único 400. Não substituir por Cormorant/Playfair/Fraunces — o desenho é distintivo.

**Sans corporativa**: **`Work Sans`** — pesos 300/400/500/600. Corpo, leads.

**Sans display para labels tracked**: **`Roboto`** — pesos 400/500. Eyebrows, section numbers, footer.

Escala:

| Uso | Font | Weight | Size | Line-height | Letter-spacing |
|-----|------|--------|------|-------------|----------------|
| H1 Hero (CSS base) | DM Serif Display | 400 | `clamp(52px, 6.8vw, 104px)` | 1.02 | -.015em |
| H1 Hero (protótipo atual) | DM Serif Display | 400 | **67.108px** (inline) | 1.02 | -.015em |
| H2 About/Transparência | DM Serif Display | 400 | `clamp(40px, 5vw, 76px)` | 1.05 | -.015em |
| H2 Docs | DM Serif Display | 400 | `clamp(40px, 4.6vw, 68px)` | 1.02 | -.015em |
| H2 Contact | DM Serif Display | 400 | `clamp(36px, 4.4vw, 64px)` | 1.05 | -.015em |
| Doc row title | DM Serif Display | 400 | 26px | 1.15 | -.005em |
| Doc row num | DM Serif Display italic | 400 | 18px | 1 | 0 |
| Contact value | DM Serif Display | 400 | 24px | 1.35 | 0 |
| Disclaimer text | DM Serif Display italic | 400 | 17px | 1.7 | .005em |
| Hero eyebrow | Roboto | 500 | 11px | 1 | .34em uppercase |
| Hero-bottom | Roboto | 500 | 11px | 1 | .4em uppercase |
| Eyebrow interior | Roboto | 500 | 11px | 1 | .32em uppercase |
| Section num | Roboto | 500 | 10.5px | 1 | .28em uppercase |
| Chrome tag | Roboto | 500 | 10px | 1 | .36em uppercase |
| Chrome lang | Roboto | 500 | 11px | 1 | .28em uppercase |
| Doc meta | Roboto | 500 | 10.5px | 1 | .28em uppercase |
| Footer | Roboto | 500 | 10.5px | 1 | .28em uppercase |
| Hero lead | Work Sans | 400 | 16px | 1.7 | 0 |
| About lead | Work Sans | 400 | 17px | 1.75 | 0 |
| Docs intro | Work Sans | 400 | 15px | 1.7 | 0 |

### Spacing

Base 4px. Seções interiores: padding vertical **140-180px** desktop, **80px** mobile. Container max-width 1360px, padding lateral 44px desktop / 20px mobile. Gap padrão de grids: **80px** desktop / **32px** mobile.

### Border radius

- `0` em tudo (arestas retas — coerente com PPTX)

### Shadows / effects

- Sem box-shadows
- `backdrop-filter: blur(6px)` no chrome navy, `blur(8px)` no chrome cream
- Hexágono: `opacity: .38`, `filter: blur(.5px)`

### Hero background stack

**Base `.hero` background** (bottom→top):
1. `radial-gradient(ellipse 80% 50% at 15% 15%, #b8c4bd 0%, transparent 55%)` — halo cinza-esverdeado top-left
2. `radial-gradient(ellipse 70% 60% at 90% 40%, #2a4a6b 0%, transparent 60%)` — glow navy à direita
3. `linear-gradient(135deg, #536b7a 0%, #2c4560 40%, #1a3350 100%)` — base diagonal

**`.hero::before` overlay**:
- `radial-gradient(ellipse 60% 40% at 5% 10%, rgba(180,190,180,.35), transparent 60%)`
- `radial-gradient(ellipse 40% 30% at 20% 90%, rgba(15,32,54,.5), transparent 60%)`

**`.hero-hex`**: PNG `assets/hex-glow.png`, position absolute right -140px top 20%, width `min(70vw, 900px)`, opacity **.38**, filter blur(.5px)

### Dicionário i18n

Chaves ativas usadas pelo `data-i18n`:

```
brand.sub
hero.eyebrow   hero.title   hero.lead   hero.city   hero.country   hero.disclaimer
about.eyebrow  about.title  about.lead
docs.eyebrow   docs.title   docs.intro
contact.eyebrow contact.title contact.email contact.address contact.addr
disclaimer.label
footer.copy    footer.reg
doc.meta
```

**Importante — mapping do i18n para as superfícies**:
- Hero visual usa **`about.*`** (título "O Venture Capital…", lead "Somos o Venture Capital…", eyebrow "Sobre a Gestora")
- Seção interior "Transparência & Compliance" usa **`hero.*`** (título "Documentos e políticas…", lead "Visando atender…")

Isso é reflexo de uma reordenação feita durante iteração: os IDs de chave foram preservados por rastreabilidade, mas os textos foram trocados de superfície. **Em produção, renomear as chaves** (`about.*` → `hero.*` e vice-versa) para melhor legibilidade.

## Responsive breakpoints

- **Desktop (>960px)**: layout descrito acima
- **Tablet/mobile (≤960px)**:
  - Chrome: padding `16px 20px`, `flex-wrap: wrap`
  - Container: padding lateral 20px
  - Hero: padding `140px 20px 60px`, min-height auto, hexágono maior e mais esmaecido
  - Hero-top e hero-bottom: 1 coluna
  - Sections: padding vertical 80px, grids `320px 1fr` colapsam para `1fr` com gap 32px
  - Contact cards: 1 coluna, gap 24px
  - Doc row: grid `36px 1fr 32px`, padding 22px 4px, meta escondida
  - Doc title: 19px

Nota: os inline styles com widths absolutos aplicados no hero **não são responsivos**. Em produção substituir por sistema fluido.

## Assets

Todos em `assets/` dentro do bundle.

| Arquivo | Origem | Uso | Notas |
|---------|--------|-----|-------|
| `honey-island-logo-white.png` | Cliente | Chrome on-navy | 1024×239 PNG. **Reexportar como SVG em produção.** |
| `honey-island-logo-black.png` | Cliente | Chrome on-cream | Mesma marca em preto |
| `hex-glow.png` | Extraído do PPTX (image7.png) | Decoração hero | 2002×2048 PNG, ~3MB. **Recriar em SVG com filters** para leveza e escalabilidade |
| `hero-bg.png` | Extraído do PPTX (image2.png) | Referência de composição — NÃO usado direto | Só para inspeção |

### Fontes
- **DM Serif Display**: Google Fonts. Self-host recomendado (woff2, latin + latin-ext)
- **Work Sans**: Google Fonts. Self-host recomendado, variable font
- **Roboto**: Google Fonts. Self-host recomendado, pesos 400/500

### Ícones inline (SVG puro)
- Chevron horizontal (doc row): 22×22, stroke currentColor 1.2, path `M6 12h12M13 6l6 6-6 6`

## Placeholders / Pendências

- [ ] **PDFs dos 7 documentos**: `href` atualmente `#<slug>` — substituir por URLs finais
- [ ] **Endereço completo**: hoje "Curitiba, PR — Brasil" — adicionar rua/número/CEP quando definido
- [ ] **Ano do footer**: hardcoded "© 2026" — trocar por `new Date().getFullYear()` dinâmico
- [ ] **Logo SVG**: reexportar os dois PNGs como SVG
- [ ] **Hex glow SVG**: recriar `hex-glow.png` (~3MB) em SVG
- [ ] **Após credenciamento CVM/ANBIMA**: remover disclaimer band e adicionar número CVM no footer
- [ ] **Chaves i18n**: renomear `about.*` ↔ `hero.*` para refletir a superfície onde renderizam
- [ ] **Inline styles do hero**: descartar valores absolutos hardcoded em produção; usar sistema fluido/responsivo do framework

## Files

Arquivos deste bundle:

- `Honey Island Compliance.html` — protótipo principal
- `assets/honey-island-logo-white.png` — logo branco
- `assets/honey-island-logo-black.png` — logo preto
- `assets/hex-glow.png` — hexágono luminoso da capa (do PPTX)
- `assets/hero-bg.png` — referência de composição do hero (do PPTX)
- `README.md` — este documento

## Notas finais para o dev

1. **O brand system foi extraído do PPTX oficial do cliente** (`HI IV_V2.pptx`). Fontes, cores e composição do hero são fiéis à identidade estabelecida — não substituir por decisões próprias sem consultar o cliente.
2. **Não copiar o JS inline nem os inline styles do protótipo** — recriar em componentes idiomáticos e valores fluidos.
3. **Chrome adaptativo é signature interaction** — testar em Firefox e Safari, onde `backdrop-filter` tem comportamentos ligeiramente distintos.
4. **DM Serif Display exige presença** — se falhar em carregar, o fallback funciona mas perde personalidade. Considerar `font-display: swap` + preload.
5. **O disclaimer regulatório é jurídico** — não editar sem aprovação formal do compliance.
6. **Acessibilidade**: contraste testado (grafite sobre cream passa AA para body; cream sobre navy passa AAA para títulos). Manter `document.documentElement.lang` sincronizado com toggle. Prover `aria-label` no toggle e nos links da lista.
7. **SEO** (se público): title/meta description por idioma, Open Graph com hero screenshot, dados estruturados `Organization` (CNPJ, endereço), sitemap com anchors dos documentos quando URLs finais existirem.
8. **LGPD**: se houver telemetria adicional, adicionar consent banner antes de escrever `hi.lang` no localStorage (ou usar cookie de sessão + fallback SSR via `Accept-Language`).
