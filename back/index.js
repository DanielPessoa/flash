require("dotenv").config();

const { ApolloServer, gql } = require('apollo-server')
const { importSchema } = require('graphql-import')
const resolvers = require('./resolvers')
const mongoose = require("mongoose");
const { existedTypeNameMessage } = require("graphql/validation/rules/UniqueTypeNames");

//Inicio Configuração BD
const db = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    pass: process.env.DB_PASS,
    name: process.env.DB_NAME,
 };
const dbUri = `mongodb+srv://${db.user}:${db.pass}@${db.host}/${db.name}?retryWrites=true&w=majority`;

const dbOptions = {
   useNewUrlParser: true,
   useUnifiedTopology: true,
};
 
mongoose
   .connect(dbUri, dbOptions)
   .then(() => console.log("Database connected"))
   .catch((error) => console.log("Databased failed: ", error));
//FIM Config DB

//Inicio config ApolloServer
const schemaPath = './schema/index.graphql'

const server = new ApolloServer({
    typeDefs: importSchema(schemaPath),
    resolvers
})

server.listen().then(({ url }) => {
    console.log(`Executando em ${url}`)
})