<<<<<<< HEAD
# smart-api-kit
It's a smart-api-kit which help developers alot.
=======
# Smart API Toolkit 🚀

Ready-made tools for backend developers. Start simple, scale to production.

## Installation

```bash
npm install smart-api-kit
```

## Quick Start

```javascript
const api = require('smart-api-kit');

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

## More Coming Soon
- Express middleware
- JWT Auth
- Rate limiting
- Request tracking

⭐ Star on GitHub!

>>>>>>> ac04fd9 (Initial commit: Smart API Toolkit Phase 1 MVP)
