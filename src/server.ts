

import express from "express";
import { app } from "./app";
import { env } from "./env";




app.listen(env.PORT, () => console.log(`O server na porta ${env.PORT} está rodando`))