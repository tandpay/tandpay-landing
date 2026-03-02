# TandPay — Deployment & SEO Progress

## Deployment Setup (Completed Mar 2, 2026)

### Architecture
| Domain | Project | Hosting | Repo |
|--------|---------|---------|------|
| `www.tandpay.com` | tandpay-landing | Vercel (static) | github.com/tandpay/tandpay-landing |
| `tandpay.com` | tandpay-landing | 307 → www.tandpay.com | same |
| `app.tandpay.com` | tandpay-web | Vercel (Next.js) | github.com/tandpay/tandpay |

### DNS (Namecheap → Vercel)
| Type | Host | Value |
|------|------|-------|
| A | `@` | `216.198.79.1` |
| A | `app` | `216.198.79.1` |
| CNAME | `www` | `03d85687f7c13b18.vercel-dns-017.com` |
| TXT | `@` | `google-site-verification=qt_bwkBqGzJBY...` |

### SSL
- All domains verified and SSL active via Vercel auto-provisioning

### Previous Hosting
- Netlify — fully migrated away, project deleted Mar 2, 2026

---

## SEO Progress

### Search Engine Indexing
- [x] **Google Search Console** — Domain verified (DNS TXT), sitemap submitted, indexing requested (Mar 2)
- [x] **Bing Webmaster Tools** — Domain verified, sitemap submitted & processing, URL indexed (Mar 2)
- [x] **Google Business Profile** — Created (tandpay LTD, Kigali, Rwanda) — video verification pending

### On-Page SEO
- [x] Title tag: `TandPay — Escrow for Social Commerce in Rwanda | MTN MoMo` (57 chars)
- [x] Meta description: 155 chars, keyword-rich
- [x] Keywords meta tag: 80+ long-tail keywords (EN + Kinyarwanda)
- [x] Canonical URL: `https://tandpay.com/`
- [x] Hreflang: `en` + `rw` + `x-default`
- [x] Open Graph meta tags (title, description, image, locale)
- [x] Twitter Card meta tags (summary_large_image)
- [x] Geo meta tags (Rwanda, Kigali, lat/lng)

### Structured Data (JSON-LD)
- [x] Organization (name, logo, address, social links, TIN)
- [x] Person (founder: Irene BAHATI)
- [x] WebSite (search action, multilingual)
- [x] FinancialService (escrow, pricing, features, service area)
- [x] SoftwareApplication (features list, screenshot)
- [x] HowTo (3-step escrow flow with images)
- [x] FAQPage (10 questions with full answers)
- [x] BreadcrumbList

### Technical SEO
- [x] `sitemap.xml` — 1 URL with 7 image entries, submitted to Google + Bing
- [x] `robots.txt` — Allows all search engines + AI crawlers
- [x] `llms.txt` — AI-optimized company summary for LLM crawlers
- [x] Mobile responsive (CSS media queries)
- [x] Images optimized: 19MB → 2.6MB (PNG → JPEG at quality 82 for photos)
- [x] Google Fonts preconnect
- [x] Semantic HTML (sections, headings, alt text on all images)

### AI Discovery
- [x] `robots.txt` allows: GPTBot, ChatGPT-User, ClaudeBot, PerplexityBot, Google-Extended, Applebot, Bytespider, CCBot, cohere-ai, Meta-ExternalAgent
- [x] `llms.txt` at root — full company/product summary
- [x] Grok (X/Twitter) — already discovers TandPay
- [ ] ChatGPT, Gemini, Copilot — expected within 1-3 days (via Bing/Google index)
- [ ] Perplexity — expected within 1-3 days (own crawler + Bing)
- [ ] Claude, DeepSeek — training data only (months)

---

## Backlinks TODO

### Global Startup Directories (Free)
- [ ] **Crunchbase** — https://www.crunchbase.com/add-company
- [ ] **LinkedIn Company Page** — Company page with website link
- [ ] **Product Hunt** — https://www.producthunt.com — Launch as new product
- [ ] **AngelList / Wellfound** — https://www.wellfound.com
- [ ] **F6S** — https://www.f6s.com — African startups, grants, accelerators
- [ ] **GitHub** — Add website URL to github.com/tandpay org profile
- [ ] **Tracxn** — https://tracxn.com — Startup tracker
- [ ] **Dealroom** — https://dealroom.co — African fintech tracker

### Fintech Directories
- [ ] **Fintech Global** — https://fintech.global
- [ ] **Finextra** — https://www.finextra.com
- [ ] **The Fintech Times** — https://thefintechtimes.com
- [ ] **AFI (Alliance for Financial Inclusion)** — https://www.afi-global.org
- [ ] **GSMA Mobile Money** — https://www.gsma.com/mobilemoney
- [ ] **Fintech Africa** — https://fintechafrica.co
- [ ] **Paymenters** — https://paymenters.com

### Africa & East Africa Ecosystem
- [ ] **Disrupt Africa** — https://disrupt-africa.com — Leading African startup news
- [ ] **Techpoint Africa** — https://techpoint.africa
- [ ] **TechCabal** — https://techcabal.com
- [ ] **Digest Africa** — https://digestafrica.com — Startup database + funding tracker
- [ ] **Briter Bridges** — https://briterbridges.com — Innovation ecosystem mapping
- [ ] **AfriLabs** — https://afrilabs.com — Pan-African innovation hub network
- [ ] **African Fintech Network** — https://africanfintechnetwork.com
- [ ] **Partech Africa** — https://partechpartners.com/africa
- [ ] **The Big Deal** — https://thebigdeal.substack.com — African startup funding tracker
- [ ] **Africa: The Big Deal** — https://africa-the-big-deal.com — Startup database

### Rwanda-Specific
- [ ] **Rwanda ICT Chamber** — https://www.ictchamber.rw — Membership + directory
- [ ] **Rwanda Development Board (RDB)** — https://rdb.rw — Business directory
- [ ] **Kigali Innovation City (KIC)** — Ecosystem directory
- [ ] **250Startups** — Rwanda startup accelerator network
- [ ] **The New Times** — https://www.newtimes.co.rw — Rwanda's largest English newspaper
- [ ] **Igihe** — https://igihe.com — Kinyarwanda news
- [ ] **KT Press** — https://www.ktpress.rw — Rwandan news
- [ ] **Rwanda Private Sector Federation (PSF)** — https://www.psf.org.rw
- [ ] **BK TecHouse** — Bank of Kigali innovation hub
- [ ] **Norrsken Kigali** — https://norrsken.rw — East Africa's largest innovation hub
- [ ] **Carnegie Mellon University Africa** — https://www.africa.engineering.cmu.edu
- [ ] **Impact Hub Kigali** — Coworking/startup community

### Content & Press
- [ ] **Medium** — Publish TandPay launch story
- [ ] **Dev.to** — Technical article (building escrow with MoMo)
- [ ] **Hacker News** — Show HN post at wider launch
- [ ] **Reddit** — r/fintech, r/africa, r/rwanda
- [ ] **Quora** — Answer "safe online shopping Rwanda", "escrow Africa" questions

### Social Profiles
- [x] **X/Twitter** — https://x.com/tandpay_rw
- [x] **Instagram** — https://instagram.com/tandpay
- [x] **TikTok** — https://tiktok.com/@tandpay
- [x] **WhatsApp** — https://wa.me/250781836513
- [ ] **Facebook Page** — Create if not done
- [ ] **YouTube** — Demo videos, tutorials
- [ ] **Pinterest** — Business account (good for fashion/product sellers)
