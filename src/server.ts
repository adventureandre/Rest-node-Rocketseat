import fastify from "fastify"
import { knex } from "./database"
import crypto from "node:crypto"

const app =  fastify()

app.get("/hello", async ( ) => {
//    const transaction = await knex('transactions').insert({
//     id:crypto.randomUUID(),
//     title: "transaction de teste",
//     amount: 1000,
//    }).returning("*")

//    return transaction

const transactions = await knex('transactions')
.select('*')
.where('amount', 1000)
return transactions

})


app.listen({
    port:3333,
}).then(    ( )=>{
    console.log("HTTP Server Running")
    
})