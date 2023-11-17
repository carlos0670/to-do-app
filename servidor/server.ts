// server.ts (se estiver usando TypeScript)
// ou
// server.js (se estiver usando JavaScript)

import express, { Request, Response } from 'express';

const app = express();
const porta = 3001;

app.get('/api/exemplo', (req: Request, res: Response) => {
  res.json({ mensagem: 'Olá do servidor Express!' });
});

app.listen(porta, () => {
  console.log(`Servidor Express está rodando na porta ${porta}`);
});
