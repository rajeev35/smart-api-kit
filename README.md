# Smart API Toolkit 🚀

Ready-made tools for backend developers. Start simple, scale to production.

## Installation

```bash
npm install @rajeev3/smart-api-kit
```

## Quick Start

```javascript
const api = require('@rajeev3/smart-api-kit');

// Response handlers
api.success({ user: 'John' }, 'User created');
api.error('Validation failed', 400);

// Logger
api.logger.info('Server started on port 3000');

// Validators
api.validateEmail('test@example.com'); // true
api.validatePhone('+1234567890'); // true
```

## Features

### 1. Response Handler
Standardized API responses.

```javascript
api.success(data, message = 'Success', code = 200);
api.error(message, code = 500);
// Returns: { success: true/false, data/message, code }
```

### 2. Logger
Simple leveled logging.

```javascript
const log = api.logger;
log.info('Info message');
log.error('Error message');
log.warn('Warning message');
```

### 3. Validators
Basic input validation.

```javascript
api.validateEmail(email);
api.validatePhone(phone);
```

### 4. Express Middleware 🔥
**Logger Middleware**
```javascript
const express = require('express');
const api = require('@rajeev3/smart-api-kit');

const app = express();
app.use(express.json());
app.use(api.middleware.loggerMiddleware());  // Logs all requests

app.listen(3000);
```

**Validation Middleware** (auto-responds with api.error on fail)
```javascript
app.post('/register', 
  api.middleware.validateEmailMiddleware('body.email'),  // req.body.email
  api.middleware.validatePhoneMiddleware('body.phone'),
  (req, res) => res.json(api.success({ user: req.body }))
);
```

## More Coming Soon
- JWT Auth
- Rate limiting
- Request tracking

⭐ Star on GitHub: https://github.com/rajeev35/smart-api-kit
