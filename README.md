# Portfólio Ana Paula Gnoatto - Data Analyst & Data Science

Este é um site de portfólio estático desenvolvido para Ana Paula Gnoatto, profissional de Análise e Ciência de Dados.

## 🚀 Características

- **Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- **Estático**: Apenas HTML, CSS e JavaScript puros - sem dependências
- **Acessível**: Seguindo boas práticas de acessibilidade web
- **Moderno**: Design limpo e profissional com animações suaves
- **Funcional**: Grid de projetos filtrável e formulário de contato

## 📁 Estrutura do Projeto

```
portfolio-ana-paula/
├── index.html          # Página principal
├── css/
│   └── style.css       # Estilos principais
├── js/
│   └── script.js       # Funcionalidades JavaScript
├── images/             # Imagens e ícones
├── assets/             # Outros recursos
└── README.md           # Este arquivo
```

## 🌐 Seções do Site

1. **Home**: Apresentação pessoal e destaques
2. **Sobre**: Resumo profissional, competências e stack técnico
3. **Experiência & Educação**: Timeline com histórico profissional e acadêmico
4. **Projetos**: Grid filtrável com projetos de dados e análise
5. **Contato**: Informações de contato e formulário

## 🛠 Funcionalidades

- **Navegação suave** entre seções
- **Filtros de projetos** por categoria (Dashboards, Análise de Dados, Machine Learning, Marketing)
- **Formulário de contato** funcional
- **Botão "voltar ao topo"**
- **Animações CSS** e transições suaves
- **Design responsivo** para todos os dispositivos

## 📱 Como Publicar no GitHub Pages

### Opção 1: Via Interface Web do GitHub

1. Faça upload de todos os arquivos para um repositório no GitHub
2. Vá em **Settings** > **Pages**
3. Em **Source**, selecione **Deploy from a branch**
4. Escolha a branch **main** e pasta **/ (root)**
5. Clique em **Save**
6. Seu site estará disponível em: `https://seuusuario.github.io/nome-do-repositorio`

### Opção 2: Via Git (Linha de Comando)

```bash
# 1. Inicializar repositório Git
git init

# 2. Adicionar todos os arquivos
git add .

# 3. Fazer commit inicial
git commit -m "Adicionar portfólio inicial"

# 4. Adicionar repositório remoto (substitua pela sua URL)
git remote add origin https://github.com/seuusuario/portfolio.git

# 5. Fazer push para GitHub
git push -u origin main

# 6. Ativar GitHub Pages nas configurações do repositório
```

## 🎨 Personalização

### Cores
As cores principais estão definidas no CSS como variáveis:
- `--primary-color`: #6366f1 (roxo principal)
- `--secondary-color`: #8b5cf6 (roxo secundário)
- `--accent-color`: #06b6d4 (azul de destaque)

### Conteúdo
Para atualizar o conteúdo:
1. Edite o arquivo `index.html`
2. Modifique as seções conforme necessário
3. Atualize os projetos na seção correspondente

### Projetos
Para adicionar novos projetos:
1. Localize a seção `<section id="projects">` no HTML
2. Adicione um novo card seguindo o padrão existente
3. Inclua as tags apropriadas para os filtros funcionarem

## 📧 Formulário de Contato

O formulário está configurado para usar Formspree. Para ativá-lo:
1. Crie uma conta em [Formspree.io](https://formspree.io)
2. Substitua `SEU_FORM_ID` no atributo `action` do formulário
3. O formulário enviará emails diretamente para o endereço configurado

## 🔧 Suporte

Este site foi desenvolvido para ser:
- ✅ Compatível com GitHub Pages
- ✅ Sem necessidade de build ou processamento
- ✅ Funcional em todos os navegadores modernos
- ✅ Otimizado para SEO básico
- ✅ Acessível para leitores de tela

## 📄 Licença

Este projeto é de uso pessoal para Ana Paula Gnoatto.

---

**Desenvolvido com ❤️ para Ana Paula Gnoatto**

