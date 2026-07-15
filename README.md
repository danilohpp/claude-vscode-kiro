# 🎯 Claude Code Setup — VS Code + Kiro

> 🔥 **Wait, this auto-bypasses permissions?** 
> 
> **Yes!** But it's safe and fully controlled. [See the explanation with the meme →](MEME.md)

![GitHub](https://img.shields.io/badge/GitHub-active-brightgreen)
![Claude](https://img.shields.io/badge/Claude%20Code-Opus%204.8-blue)
![VS Code](https://img.shields.io/badge/VS%20Code-Latest-blue?logo=visualstudiocode)
![License](https://img.shields.io/badge/License-MIT-green)

Repositório pré-configurado para **VS Code** e **Kiro** com **Claude Code**, incluindo:

✅ **Modelo atualizado** (Claude Opus 4.8)  
✅ **Auto-bypass de permissions** (seguro e controlado)  
✅ **Menu interativo** para conectar GitHub, VPS, APIs  
✅ **10 anos de retenção** de histórico  
✅ **Thinking ativado** por padrão  
✅ **VS Code settings pré-configurado**  
✅ **Extensions recomendadas**

---

## 🚀 Quick Start

### Pré-requisitos
- Git
- Claude Code CLI (`claude`)
- VS Code (recomendado)
- SSH (para VPS)
- Node.js 16+
- PowerShell 5+ ou Bash

### 1️⃣ Clone o Repositório
```bash
git clone https://github.com/danilohpp/claude-vscode-kiro
cd claude-vscode-kiro
```

### 2️⃣ Execute o Setup
**Windows (PowerShell):**
```powershell
.\setup.ps1
```

**Unix/Mac/WSL (Bash):**
```bash
bash setup.sh
chmod +x setup.sh
```

### 3️⃣ Abra no VS Code
```bash
code .
```

O VS Code vai sugerir instalar as extensions recomendadas. Clique **"Install All"** ✅

### 4️⃣ Escolha as Opções
O menu setup vai te guiar:
- ✅ GitHub authentication
- ✅ VPS setup (SSH)
- ✅ Kiro/Evolution API
- ✅ Database config
- ✅ Testes

---

## 📋 Características Principais

### Claude Code Settings
| Configuração | Valor |
|---|---|
| **Model** | `claude-opus-4-8` |
| **Effort** | `xhigh` (máximo) |
| **Thinking** | ✅ Ativado |
| **Retention** | 3.650 dias (~10 anos) |
| **Permissions** | Auto-bypass (controlado) |

### VS Code Pre-Configured
```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "files.exclude": {
    "node_modules": true,
    ".git": true,
    "dist": true
  }
}
```

### Extensions Automáticas
- ✅ Prettier (formatação)
- ✅ ESLint (linting)
- ✅ Thunder Client (API testing)
- ✅ GitHub Copilot
- ✅ REST Client
- ✅ Postman
- ✅ E mais 24 extensões

---

## 📦 Arquivos Inclusos

```
.
├── .vscode/
│   ├── settings.json           # VS Code config
│   └── extensions.json         # Extensions recomendadas
├── .claude/
│   ├── settings.json           # Claude Code config (Opus 4.8)
│   ├── instructions.md         # Guias para Claude
│   └── skills/                 # Skills customizadas
├── .devcontainer/              # Dev container setup
├── src/                        # Seu código
│   ├── components/
│   ├── utils/
│   ├── services/
│   └── index.js
├── tests/                      # Testes
├── setup.ps1                   # Menu (Windows)
├── setup.sh                    # Menu (Unix)
├── deploy.sh                   # Deploy
├── CLAUDE.md                   # Contexto
├── BEST_PRACTICES.md          # Guia de qualidade
├── RECOMMENDATIONS.md          # Estratégia de sucesso
├── MEME.md                     # Explicação: Por que é seguro?
└── README.md                   # Este arquivo
```

---

## 🔐 Segurança: Auto-Bypass Seguro

### Por Que Podemos Fazer Isso?

1. ✅ **Whitelist Explícita** — Só permite git, npm, edit (não `rm -rf`)
2. ✅ **Git History** — Tudo é auditável e reversível
3. ✅ **Testes Automáticos** — Pre-commit hooks validam mudanças
4. ✅ **Code Review** — Humanos aprovam antes de merge
5. ✅ **Staging First** — Testa em homolog antes de produção

[👉 Leia a explicação completa com o meme →](MEME.md)

---

## 🔧 Configuração Rápida

### VS Code
1. Abra o arquivo `.vscode/settings.json`
2. Customize cores, fonte, espaçamento
3. Instale extensions sugeridas

### Claude Code
1. Abra `.claude/settings.json`
2. Customize model, effort level
3. Customize permissions se necessário

### Credentials
Crie `.claude/settings.local.json`:
```json
{
  "env": {
    "GITHUB_TOKEN": "ghp_seu_token",
    "VPS_HOST": "app.seu-servidor.com.br",
    "VPS_USER": "seu_usuario",
    "EVOLUTION_API_URL": "http://localhost:8080",
    "EVOLUTION_API_KEY": "sua_chave"
  }
}
```

---

## 💡 Exemplos de Uso

### Refatorar Código
```bash
você: Refatore esse arquivo para melhor performance

claude: [thinking ▶ 2m45s]      ← Thinking ativado
        [lê seu arquivo]
        [propõe 3 soluções]
        ✅ Implementação pronta   ← Sem prompts!
        ✅ Testes auto-executam
        ✅ Commit automático
```

### Deploy
```bash
bash deploy.sh

# Automaticamente:
# ✅ Build (npm run build)
# ✅ Testes (npm test)
# ✅ Upload SSH
# ✅ Deploy
# ✅ Health check
```

### Integração Kiro
```bash
você: Integre com Kiro para sincronizar contatos

claude: [cria estrutura]
        [implementa API client]
        [adiciona handlers]
        [testes E2E]
        ✅ Pronto para produção
```

---

## 📚 Documentação

| Arquivo | Para |
|---------|------|
| **README.md** | Quick reference |
| **CLAUDE.md** | Contexto completo |
| **BEST_PRACTICES.md** | Qualidade de código |
| **RECOMMENDATIONS.md** | Estratégia de sucesso |
| **MEME.md** | Por que é seguro fazer auto-bypass |
| **.claude/instructions.md** | Guias técnicos |
| **.vscode/settings.json** | VS Code config |

---

## 🆘 Troubleshooting

**VS Code não acha extensions?**
```bash
code --install-extension esbenp.prettier-vscode
code --install-extension dbaeumer.vscode-eslint
```

**Claude Code não reconhece VS Code?**
```bash
code --version
claude --version
```

**Permissions não funcionando?**
```bash
chmod +x setup.sh deploy.sh
```

---

## 🔐 Segurança

✅ Secrets em `.gitignore`  
✅ `.env` não é commitado  
✅ SSH keys auto-detectadas  
✅ Tokens em local settings  
✅ Auditoria completa via git  

---

## 🚀 Próximos Passos

1. Clone o repositório
2. Execute `setup.ps1` ou `bash setup.sh`
3. Abra em VS Code (`code .`)
4. Instale extensions sugeridas
5. Preencha `.claude/settings.local.json`
6. Comece a trabalhar com `claude`

---

## 📝 Licença

MIT License — Veja [LICENSE](LICENSE)

---

<div align="center">

**Pronto para trabalhar com VS Code + Claude Code + Kiro? 🚀**

[Clone agora](https://github.com/danilohpp/claude-vscode-kiro) | [Documentação](CLAUDE.md) | [Boas Práticas](BEST_PRACTICES.md) | [Por que é seguro?](MEME.md)

Versão 1.1.0 | Última atualização: 2026-07-15

</div>
