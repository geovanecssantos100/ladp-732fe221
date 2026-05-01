## Objetivo
Aplicar manualmente as duas mudanças que você fez no GitHub mas que não sincronizaram para o Lovable.

## 1. `src/index.css` — remover roxo, adotar paleta turquesa

No bloco `:root`:
- `--accent: 264 60% 60%` → `--accent: 170 45% 64%`
- `--gradient-primary`: `linear-gradient(135deg, hsl(188 73% 38%), hsl(188 73% 50%))` → `linear-gradient(135deg, hsl(190 100% 35%), hsl(170 45% 64%))`
- `--gradient-hero`: `linear-gradient(135deg, hsl(188 73% 38%) 0%, hsl(264 60% 60%) 100%)` → `linear-gradient(135deg, hsl(190 100% 35%), hsl(170 45% 64%))`

No bloco `.dark`:
- `--accent: 264 60% 65%` → `--accent: 170 45% 64%`
- `--gradient-hero`: troca o stop roxo pela mesma combinação azul-ciano → turquesa.

**Preservar** todas as outras variáveis existentes (`--popover`, `--destructive`, `--shadow-elegant`, `--shadow-glow`, `--transition-smooth`, `--sidebar-*` e o restante do `.dark`), pois são usadas pelos componentes shadcn/ui — removê-las quebraria o app.

## 2. `src/pages/Index.tsx` — comentar Artigos

- Comentar a linha `import { Articles } from "@/components/Articles";`
- Comentar `<Articles />` dentro do JSX.
- Manter `src/components/Articles.tsx`, `src/pages/ArticlePage.tsx`, `src/data/articles.ts` e a rota `/artigos/:slug` em `App.tsx` intactos, para reativação futura com duas linhas.

## 3. Memória do projeto

Atualizar `mem://index.md` e `mem://style/identidade-visual` removendo a menção a "roxo" e registrando a paleta atual (azul petróleo + bege + turquesa).

## Arquivos alterados
- `src/index.css`
- `src/pages/Index.tsx`
- `mem://index.md`, `mem://style/identidade-visual`
