# O Código da IA — Landing Page

Landing page completa para o ebook **"Ganhe Dinheiro com Inteligência Artificial do Zero"**.

## Estrutura de arquivos

```
landing-ia/
├── index.html
├── css/
│   ├── reset.css          # Reset universal
│   ├── variables.css      # Design tokens / CSS custom properties
│   ├── base.css           # Estilos globais, botões, logo, animações
│   ├── nav.css            # Navbar fixa
│   ├── hero.css           # Seção hero (headline + imagem)
│   ├── problems.css       # Seção "Você Enfrenta Esses Problemas?"
│   ├── learn.css          # Seção "O Que Você Vai Aprender"
│   ├── chapters.css       # Grid dos 20 capítulos
│   ├── benefits.css       # Benefícios + card de stats dark
│   ├── stats.css          # Barra de prova social
│   ├── testimonials.css   # Seção de depoimentos
│   ├── cta.css            # Seção de compra final
│   ├── footer.css         # Rodapé
│   └── responsive.css     # Media queries (tablet + mobile)
├── js/
│   └── main.js            # Scroll reveal, nav ativo, validação do form
└── assets/                # (criar esta pasta)
    └── hero.png           # Substitua o placeholder da seção hero
```

## Como usar

1. Abra `index.html` diretamente no browser — não precisa de servidor.
2. Para substituir a imagem do hero, coloque seu arquivo em `assets/hero.png` e troque o bloco `.hero-img-placeholder` por:
   ```html
   <img src="assets/hero.png" alt="O Código da IA">
   ```
3. No `js/main.js`, substitua o `alert(...)` pelo redirect para sua página de pagamento (Hotmart, Kiwify, etc.).

## Personalização rápida

Todas as cores estão centralizadas em `css/variables.css`. Para trocar a cor principal basta alterar `--blue`.

## Deploy no GitHub Pages

```bash
git init
git add .
git commit -m "feat: landing page inicial"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/SEU_REPO.git
git push -u origin main
```

Depois ative o **GitHub Pages** em *Settings → Pages → Branch: main / root*.
