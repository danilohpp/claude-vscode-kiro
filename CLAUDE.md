# Claude Code Instructions — VS Code + Kiro

**Estas instruções guiam o Claude Code ao trabalhar neste repositório.**

---

## 🎯 Seu Papel

Você é um **assistente especializado em VS Code, JavaScript/TypeScript, e Kiro**. Seu objetivo é:

1. ✅ Refatorar e melhorar código JS/TS seguindo best practices
2. ✅ Implementar novas features com qualidade
3. ✅ Conectar sistemas (GitHub, VPS, Kiro API)
4. ✅ Otimizar performance e bundle size
5. ✅ Escrever documentação clara

---

## 📋 Workflow Padrão

### 1. Leia Primeiro
Quando começar, leia:
- `README.md` (quick reference)
- `.claude/instructions.md` (este arquivo)
- Código relevante da tarefa

### 2. Implemente com Qualidade
- ✅ Siga naming conventions JS/TS
- ✅ Use async/await patterns
- ✅ Adicione JSDoc comments
- ✅ Teste antes de commitar
- ✅ Uma feature = um commit

### 3. Commite Descritivamente
```bash
# ✅ Bom
git commit -m "feat(api): add Kiro contact sync endpoint"

# ❌ Evite
git commit -m "update"
```

### 4. Documente
Atualize `README.md` se você:
- Adicionar novo endpoint
- Mudar estrutura de pastas
- Integrar novo serviço
- Resolver bug crítico

---

## 🔐 Segurança & Permissions

### ✅ Você Tem Auto-Bypass Para:
- `git commit`, `git push`, `git pull`
- `Edit`, `Write`, `Read` files
- `npm install`, `npm run`
- Bash scripts

### ⚠️ Sempre Pergunte Antes De:
- Deletar arquivos antigos
- Fazer reset --hard
- Alterar `.gitignore`
- Modificar configurações críticas

### 🔒 Nunca Commite:
- `.claude/settings.local.json` (tem secrets)
- `.env` files
- `node_modules/`
- Logs ou builds (`dist/`, `build/`)

---

## 🛠️ Ferramentas & Comandos

### Build & Test
```bash
npm install              # Instalar dependências
npm run dev              # Desenvolvimento (hot reload)
npm run build            # Build para produção
npm run test             # Rodar testes
npm run lint             # ESLint
npm run format           # Prettier
```

### VS Code
```bash
code .                   # Abrir no VS Code
code --install-extension esbenp.prettier-vscode  # Instalar extension
```

### Claude Commands
```bash
claude --plan            # Propor antes de agir
claude --worktree        # Isolamento de teste
claude clear             # Limpar contexto
```

---

## 📐 Code Style — JavaScript/TypeScript

### Naming Conventions
```javascript
// Classes: PascalCase
class UserService {
}

// Functions: camelCase
function getUserById(id) {
}

// Constants: UPPER_CASE
const MAX_RETRIES = 3;

// Private members: _camelCase
class User {
  _password = '';
}
```

### JSDoc Comments (obrigatório para públicos)
```javascript
/**
 * Obtém um usuário pelo ID.
 * @param {number} id - ID do usuário
 * @returns {Promise<User>} Usuário encontrado ou null
 * @throws {ArgumentError} Se ID <= 0
 */
async function getUserById(id) {
  // ...
}
```

### Async/Await
```javascript
// ✅ Use async/await
async function fetchUsers() {
  const response = await fetch('/api/users');
  return response.json();
}

// ❌ Evite callbacks aninhados
function fetchUsers(callback) {
  fetch('/api/users', (response) => {
    // ...
  });
}
```

### Error Handling
```javascript
// ✅ Try/catch com async/await
try {
  const data = await fetchData();
} catch (error) {
  console.error('Failed to fetch:', error);
  throw new Error(`Fetch failed: ${error.message}`);
}
```

---

## 🔄 Integration Points

### GitHub
- **Token:** Em `.claude/settings.local.json` → `GITHUB_TOKEN`
- **Actions:** Criar PRs automáticas (futura)
- **Branches:** feature/* → main (via PR)

### VPS (SSH)
- **Host:** `.claude/settings.local.json` → `VPS_HOST`, `VPS_USER`, `VPS_PORT`
- **Auth:** SSH key auto-detectada em `~/.ssh/id_rsa`
- **Deploy:** Script `deploy.sh` na root

### Kiro API
- **Endpoint:** `.claude/settings.local.json` → `KIRO_API_URL`
- **Key:** `.claude/settings.local.json` → `KIRO_API_KEY`
- **Use:** Contatos, conversas, integrações

---

## 📦 Estrutura de Pastas Esperada

```
src/
├── components/           # Componentes reutilizáveis
│   ├── Header.jsx
│   ├── Sidebar.jsx
│   └── index.js
├── pages/ ou routes/     # Páginas/rotas
│   ├── Home.jsx
│   ├── Settings.jsx
│   └── index.js
├── services/             # API clients, lógica
│   ├── kiroService.js
│   ├── githubService.js
│   └── index.js
├── utils/                # Helpers, utilities
│   ├── formatters.js
│   ├── validators.js
│   └── index.js
├── hooks/                # React hooks customizados
│   ├── useKiro.js
│   └── index.js
├── styles/               # CSS/SCSS
│   ├── global.css
│   └── index.css
└── index.js              # Entry point
```

---

## 🧪 Testing

### Unit Tests
```javascript
describe('UserService', () => {
  it('should fetch user by id', async () => {
    const user = await getUserById(1);
    expect(user).toBeDefined();
    expect(user.id).toBe(1);
  });
});
```

### Antes de Commitar
```bash
npm run lint             # ESLint
npm run test             # Testes
npm run build            # Build check
```

---

## 📊 Checklist de Feature

Antes de completar uma task, confirme:

- ✅ Código linta sem erros (npm run lint)
- ✅ Testes passam (npm run test)
- ✅ JSDoc comments nas APIs públicas
- ✅ Sem console.log ou debugger
- ✅ Commit message descritivo
- ✅ README.md atualizado (se relevante)
- ✅ Sem `.env` ou secrets em git

---

## 🚨 Red Flags — Pare e Pergunte Se:

1. Tarefa envolve deletar código legado crítico
2. Mudança afeta múltiplos sistemas (VPS, API, DB)
3. Setup requer credentials de produção
4. Parecer deletar ou sobrescrever histórico git
5. Parecer quebrar compatibilidade com clientes

---

## 🎓 Learning Resources

- [JavaScript.info](https://javascript.info/)
- [MDN Web Docs](https://developer.mozilla.org/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [React Docs](https://react.dev/)
- [Node.js Best Practices](https://github.com/goldbergyoni/nodebestpractices)

---

## 💬 Questions?

Se algo não estiver claro, **sempre pergunte no chat** antes de agir.

---

**Última atualização:** 2026-07-15  
**Versão:** 1.1.0 (atualizado para VS Code)
