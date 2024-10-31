

import express from "express";

const PORT = 3333
const server = express()



server.listen(PORT, () => console.log(`O server na porta ${PORT} está rodando`))