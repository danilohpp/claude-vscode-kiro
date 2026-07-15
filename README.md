# 🎯 Claude Code Setup — Visual Basic + Kiro

![GitHub](https://img.shields.io/badge/GitHub-active-brightgreen)
![Claude](https://img.shields.io/badge/Claude%20Code-Opus%204.8-blue)
![VB.NET](https://img.shields.io/badge/VB.NET-6.0+-orange)
![License](https://img.shields.io/badge/License-MIT-green)

Repositório pré-configurado para **Visual Basic** e **Kiro** com **Claude Code**, incluindo:

✅ **Modelo atualizado** (Claude Opus 4.8)  
✅ **Auto-bypass de permissions** (sem prompts)  
✅ **Menu interativo** para conectar GitHub, VPS, APIs  
✅ **10 anos de retenção** de histórico  
✅ **Thinking ativado** por padrão  
✅ **Hooks inteligentes** para workflow

---

## 🚀 Quick Start

### Pré-requisitos
- Git
- Claude Code CLI (`claude`)
- SSH (para VPS)
- PowerShell 5+ (Windows) ou Bash (Unix/Mac/WSL)

### 1️⃣ Clone o Repositório
```bash
git clone https://github.com/seu-usuario/claude-vb-kiro
cd claude-vb-kiro
```

### 2️⃣ Execute o Setup
**Windows (PowerShell):**
```powershell
.\setup.ps1
```

**Unix/Mac/WSL (Bash):**
```bash
bash setup.sh
chmod +x setup.sh  # Primeira vez
```

### 3️⃣ Escolha as Opções
O menu interativo vai te guiar por:
- ✅ GitHub authentication
- ✅ VPS setup (SSH)
- ✅ Evolution API
- ✅ Database config
- ✅ Testes de conexão

---

## 📋 Características Principais

### Claude Code Settings
| Configuração | Valor |
|---|---|
| **Model** | `claude-opus-4-8` |
| **Effort** | `xhigh` (máximo raciocínio) |
| **Thinking** | ✅ Ativado |
| **Retention** | 3.650 dias (~10 anos) |
| **Permissions** | Auto-bypass (Git, Edit, Read, Write) |

### ✨ Destaques

1. **Sem Prompts Chatos** — Todas as permissões automáticas
2. **Thinking Ativado** — Respostas mais aprofundadas
3. **10 Anos de Contexto** — Nunca perde histórico
4. **Menu Setup** — Conecta GitHub, VPS, APIs automaticamente
5. **Deploy Script** — `bash deploy.sh` = produção
6. **Dev Container** — VSCode + Docker pré-configurado
7. **VB.NET Best Practices** — Naming, comments, async patterns

---

## 📦 Arquivos Inclusos

```
.
├── .claude/
│   ├── settings.json           # Configurações (tracked)
│   ├── settings.local.json     # Secrets (gitignored)
│   └── instructions.md         # Guia Claude
├── .devcontainer/              # VSCode dev container
├── .github/workflows/          # CI/CD (template)
├── src/                        # Seu código VB
├── setup.ps1                   # Menu (Windows)
├── setup.sh                    # Menu (Unix)
├── deploy.sh                   # Deploy automático
├── CLAUDE.md                   # Contexto projeto
├── FEATURES.md                 # Recursos especiais
├── LICENSE                     # MIT
└── README.md                   # Este arquivo
```

---

## 🔧 Configuração

### Adicione suas credenciais em `.claude/settings.local.json`:

```json
{
  "env": {
    "GITHUB_TOKEN": "ghp_seu_token",
    "VPS_HOST": "app.seuservidor.com.br",
    "VPS_USER": "seu_usuario",
    "EVOLUTION_API_URL": "http://localhost:8080",
    "EVOLUTION_API_KEY": "sua_chave",
    "DATABASE_URL": "Server=localhost;Database=seu_db;..."
  }
}
```

**Este arquivo está no `.gitignore` — não será commitado**

---

## 💡 Exemplos de Uso

### Refatorar Código VB
```bash
você: Refatore essa função VB seguindo best practices

claude: [thinking ▶ 2m45s]      ← Thinking ativado
        [lê seu código]
        [propõe 3 soluções]
        ✅ Implementação pronta   ← Sem prompts!
        ✅ Testes auto-executam
        ✅ Commit automático
```

### Deploy na VPS
```bash
bash deploy.sh

# Automaticamente:
# 1️⃣  Compila em Release
# 2️⃣  Roda testes
# 3️⃣  Publica
# 4️⃣  Upload via SSH
# 5️⃣  Reinicia serviços
# 6️⃣  Valida health check
```

### Integrar Evolution API
```bash
você: Configure webhooks da Evolution para sincronizar contatos

claude: [conecta Evolution API]
        [cria listeners]
        [implementa handlers]
        [testa end-to-end]
        ✅ Pronto para produção
```

---

## 📚 Documentação

| Arquivo | Objetivo |
|---------|----------|
| **README.md** | Este arquivo — quick reference |
| **CLAUDE.md** | Contexto completo do projeto |
| **FEATURES.md** | Recursos especiais explicados |
| **.claude/instructions.md** | Guia para Claude |
| **.claude/settings.json** | Configurações gerais |

---

## 🔐 Segurança

✅ Secrets em `.gitignore`  
✅ SSH keys auto-detectadas  
✅ Tokens em local settings apenas  
✅ Auditoria git completa  
✅ Deploy rastreável  

---

## 🚀 Próximos Passos

1. Clone o repositório
2. Execute `setup.ps1` (Windows) ou `bash setup.sh` (Unix)
3. Preencha `.claude/settings.local.json`
4. Comece a trabalhar: `claude`

---

## 📝 Licença

MIT License — Veja [LICENSE](LICENSE)

---

<div align="center">

**Mantido com ❤️ para desenvolvedores Visual Basic + Kiro**

v1.0.0 | Última atualização: 2026-07-15

[![Repo](https://img.shields.io/badge/GitHub-Claude--VB--Kiro-blue?logo=github)](https://github.com/seu-usuario/claude-vb-kiro)

</div>
