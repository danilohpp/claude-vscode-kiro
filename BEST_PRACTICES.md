# 📚 Best Practices — Claude Code + VS Code + Kiro

Guia completo de boas práticas para trabalhar com este projeto.

---

## 🎯 Princípios Fundamentais

### 1. **Clean Code Sempre**
```javascript
// ✅ Bom
async function fetchUserById(userId) {
  const user = await getUserFromDatabase(userId);
  return user;
}

// ❌ Ruim
async function f(id) {
  return await db.u(id);
}
```

**Regra:** Código legível agora = menos bugs depois

---

### 2. **Commits Atômicos**
```bash
# ✅ Bom - Um commit por feature/fix
git commit -m "feat(api): add Kiro contact sync endpoint"
git commit -m "fix(auth): handle expired tokens correctly"

# ❌ Ruim - Múltiplos assuntos em um commit
git commit -m "update code, fix bug, add feature, remove console logs"
```

**Regra:** 1 commit = 1 razão para existir

---

### 3. **Código Testável**
```javascript
// ✅ Bom - Função pura, fácil testar
function calculateTotal(items) {
  return items.reduce((sum, item) => sum + item.price, 0);
}

// ❌ Ruim - Efeito colateral, difícil testar
function calculateTotal(items) {
  let total = 0;
  items.forEach(item => {
    total += item.price;
    console.log(total); // Efeito colateral!
  });
  return total;
}
```

**Regra:** Funções puras = testes mais fáceis

---

## 📝 Código

### Naming Conventions

```javascript
// Classes/Constructors: PascalCase
class UserService {}
class KiroClient {}

// Funções/Métodos: camelCase
function getUserById() {}
async function syncWithKiro() {}

// Constantes: UPPER_SNAKE_CASE
const MAX_RETRIES = 3;
const DEFAULT_TIMEOUT = 5000;
const KIRO_API_URL = 'http://localhost:3000';

// Private: prefixo _
class User {
  _password = '';
  _validateEmail() {}
}

// Booleanos: is/has prefix
const isAdmin = true;
const hasPermission = false;
const isEmpty = true;
```

### Comentários

```javascript
// ✅ Bom - Explica POR QUÊ
// Retry com exponential backoff porque Kiro pode estar sobrecarregado
async function fetchWithRetry(url, maxRetries = 3) {
  // ...
}

// ✅ Bom - JSDoc para APIs públicas
/**
 * Sincroniza contatos com Kiro
 * @param {number} accountId - ID da conta
 * @returns {Promise<{success: boolean, count: number}>}
 * @throws {KiroError} Se a API retornar erro
 */
async function syncContacts(accountId) {
  // ...
}

// ❌ Ruim - Comentário óbvio
// Incrementa i
i++;

// ❌ Ruim - Comentário desatualizado
// TODO: Implementar autenticação em 2024
// (Estamos em 2026!)
```

### Async/Await

```javascript
// ✅ Bom
async function getUser(id) {
  try {
    const user = await fetchUser(id);
    return user;
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new UserNotFoundError(`User ${id} not found`);
  }
}

// ❌ Ruim - Callback hell
function getUser(id, callback) {
  fetchUser(id, (err, user) => {
    if (err) callback(err);
    else callback(null, user);
  });
}
```

---

## 🧪 Testes

### Estrutura

```javascript
describe('UserService', () => {
  let service;
  let mockDatabase;

  beforeEach(() => {
    mockDatabase = jest.fn();
    service = new UserService(mockDatabase);
  });

  describe('getUserById', () => {
    it('should return user when found', async () => {
      // Arrange
      const userId = 1;
      const expectedUser = { id: 1, name: 'João' };
      mockDatabase.mockResolvedValue(expectedUser);

      // Act
      const result = await service.getUserById(userId);

      // Assert
      expect(result).toEqual(expectedUser);
      expect(mockDatabase).toHaveBeenCalledWith(userId);
    });

    it('should throw error when user not found', async () => {
      mockDatabase.mockRejectedValue(new Error('Not found'));

      await expect(service.getUserById(999))
        .rejects
        .toThrow('Not found');
    });
  });
});
```

### Coverage Mínimo

```
✅ 80% coverage = Aceitável
✅ 90% coverage = Bom
✅ 100% coverage = Excelente

❌ < 60% = Preocupante
❌ < 40% = Crítico
```

---

## 🔐 Segurança

### Variáveis de Ambiente

```javascript
// ✅ Bom
const KIRO_API_KEY = process.env.KIRO_API_KEY;
if (!KIRO_API_KEY) {
  throw new Error('KIRO_API_KEY não configurada');
}

// ❌ Ruim
const API_KEY = 'chave-hardcoded-secret'; // NUNCA!

// ❌ Ruim - Commit secrets
git add .env  // Nunca! Deve estar em .gitignore
```

### Senhas & Tokens

```javascript
// ✅ Hash de senha
const bcrypt = require('bcrypt');
const hashedPassword = await bcrypt.hash(password, 10);

// ✅ JWT para autenticação
const jwt = require('jsonwebtoken');
const token = jwt.sign({ userId }, SECRET, { expiresIn: '24h' });

// ❌ Nunca armazene senha em plain text
const password = 'minha-senha-123'; // NÃO!
```

### Validação de Input

```javascript
// ✅ Bom - Valida TUDO
function createUser(email, password) {
  if (!email || !email.includes('@')) {
    throw new Error('Email inválido');
  }
  if (!password || password.length < 8) {
    throw new Error('Senha deve ter 8+ caracteres');
  }
  // ...
}

// ❌ Ruim - Sem validação
function createUser(email, password) {
  return db.create({ email, password }); // Pode quebrar!
}
```

---

## 🚀 Performance

### Bundle Size

```javascript
// ✅ Bom - Importar só o necessário
import { debounce } from 'lodash-es';

// ❌ Ruim - Importar tudo
import _ from 'lodash'; // Importa 70KB!
```

### Lazy Loading

```javascript
// ✅ Bom - Carregar quando precisa
const KiroSync = lazy(() => import('./KiroSync'));

// ❌ Ruim - Carregar tudo na inicialização
import KiroSync from './KiroSync'; // Se não usar agora, perdeu tempo
```

### Caching

```javascript
// ✅ Bom - Cache de resultados
const cache = new Map();

async function getUser(id) {
  if (cache.has(id)) {
    return cache.get(id);
  }
  const user = await fetchUser(id);
  cache.set(id, user);
  return user;
}

// ❌ Ruim - Sempre busca do BD
async function getUser(id) {
  return fetchUser(id); // Sempre vai no DB!
}
```

---

## 🎯 Claude Code + VS Code

### Workflow Recomendado

```bash
# 1. Criar branch para feature
git checkout -b feature/nova-funcionalidade

# 2. Abrir no VS Code
code .

# 3. Usar Claude para refatorar/implementar
claude --plan          # Propor antes
claude                 # Trabalhar

# 4. Testar localmente
npm run dev
npm run test
npm run lint

# 5. Commit atomicamente
git commit -m "feat(kiro): add contact sync"

# 6. Push e criar PR
git push origin feature/nova-funcionalidade
# Depois criar PR no GitHub
```

### Dicas Claude Code

```bash
claude --plan          # ✅ Usar SEMPRE para mudanças grandes
claude --worktree      # ✅ Testar em sandbox antes de commitar
claude clear           # ✅ Limpar contexto se perder foco
claude --list-sessions # ✅ Ver histórico de 10 anos!
```

---

## 📊 Git & GitHub

### Commit Message Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

Exemplos:
```
feat(kiro): add contact synchronization
fix(auth): handle expired JWT tokens
refactor(api): simplify error handling
docs(readme): add setup instructions
test(service): add unit tests for UserService
chore(deps): update dependencies
```

### Branch Naming

```bash
feature/contact-sync         # ✅ Feature nova
bugfix/auth-token-expired    # ✅ Bug fix
refactor/api-cleanup         # ✅ Refatoração
docs/setup-guide             # ✅ Documentação
hotfix/security-patch        # ✅ Hotfix produção

bugFix/something             # ❌ Use kebab-case
new_feature                  # ❌ Use kebab-case
feature_contact_sync         # ❌ Use kebab-case
```

### PR (Pull Request)

```markdown
## Description
Breve descrição do que foi mudado

## Type of Change
- [x] Bug fix
- [ ] New feature
- [ ] Breaking change

## Testing
Como testar isso:
1. Abra a aplicação
2. Vá para /contacts
3. Clique em "Sincronizar Kiro"
4. Verifique se contatos foram importados

## Checklist
- [x] Código testado localmente
- [x] Testes passam (npm test)
- [x] Sem console.log
- [x] JSDoc adicionado
- [x] README atualizado
```

---

## 📋 Checklist Pré-Push

Antes de fazer `git push`, verifique:

- [ ] `npm run lint` — Sem erros ESLint
- [ ] `npm run test` — Testes passam
- [ ] `npm run build` — Build sem erro
- [ ] Sem `console.log()` deixado
- [ ] Sem `debugger` deixado
- [ ] Sem `.env` commitado
- [ ] Commit message descritivo
- [ ] Código revisado (releia antes de pushar)

```bash
# Checklist automático
npm run lint && npm run test && npm run build && git push
```

---

## 🔄 Code Review

### O Que Revisar

```javascript
// ✅ Lógica está correta?
// ✅ Casos extremos cobertos? (null, vazio, erro)
// ✅ Performance aceitável?
// ✅ Segurança ok? (sem secrets, SQL injection, XSS)
// ✅ Testes cobrem o código novo?
// ✅ Documentação está atualizada?
// ✅ Naming faz sentido?
// ✅ Sem código duplicado?
```

### Como Responder Review

```
❌ NÃO faça:
"Ok" / "Done" / "Fixed"

✅ FAÇA:
"Fixado em commit abc1234 - mudei a validação para..."
"Ótima observação sobre performance, usei caching agora"
```

---

## 🆘 Troubleshooting

### Código não funciona localmente?

```bash
# Limpe tudo
npm run clean
rm -rf node_modules
rm package-lock.json

# Reinstale
npm install

# Teste novamente
npm run test
```

### Git confuso?

```bash
# Ver histórico visual
git log --oneline --graph

# Desfazer último commit (local)
git reset --soft HEAD~1

# Desfazer mudanças em um arquivo
git checkout -- arquivo.js

# Ver mudanças antes de commitar
git diff
```

### VS Code lento?

```bash
# Desabilite extensions desnecessárias
# Settings → Extensions → Disable

# Limpe cache
rm -rf ~/.vscode
```

---

## 💡 Dicas Ouro

### 1. **Sempre Use Branches**
```bash
# Nunca trabalhe direto na main!
git checkout -b feature/x
# ... trabalhe aqui ...
git push origin feature/x
# Crie PR no GitHub
```

### 2. **Commit Pequenos e Frequentes**
```bash
# ✅ Bom
git commit -m "feat: add user validation"
git commit -m "test: add unit tests for validation"
git commit -m "docs: update user API"

# ❌ Ruim
git commit -m "add validation, tests, docs, fix bugs, refactor code"
```

### 3. **Teste Antes de Commitar**
```bash
npm run lint && npm run test && npm run build
```

### 4. **Use Claude --plan**
```bash
claude --plan
# Ele propõe as mudanças antes de fazer
# Assim você aprova/rejeita/ajusta
```

### 5. **Documente Decisões**
Se fez algo não-óbvio, deixe um comentário:
```javascript
// Usamos Array ao invés de Set porque precisa manter ordem
// (Set não garante ordem em algumas engines)
const users = [];
```

---

## 🎓 Recursos Úteis

- [JavaScript Best Practices](https://javascript.info/)
- [Node.js Best Practices](https://github.com/goldbergyoni/nodebestpractices)
- [Clean Code JS](https://github.com/ryanmcdermott/clean-code-javascript)
- [Git Workflow](https://git-scm.com/book/en/v2)

---

## ✅ Resumo Final

| Aspecto | Faça ✅ | Evite ❌ |
|---------|--------|---------|
| **Code** | Clean, legível | Obscuro, confuso |
| **Commits** | Atômicos, pequenos | Gigantes, mistos |
| **Tests** | Cobertura 80%+ | Sem testes |
| **Security** | Variáveis de env | Secrets hardcoded |
| **Performance** | Otimizado, cacheado | Lento, ineficiente |
| **Git** | Branches, PRs | Commits direto main |
| **Review** | Rigoroso, construtivo | Superficial |
| **Docs** | Atualizada | Desatualizada/falta |

---

**Seguindo essas práticas, seu código vai ser profissional, seguro e fácil de manter! 🚀**

Última atualização: 2026-07-15
