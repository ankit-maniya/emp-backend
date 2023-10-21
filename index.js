const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const graphQlSchema = require("./graphql/schema/index");
const graphQlResolver = require("./graphql/resolver/index");
const { default: mongoose } = require("mongoose");
const app = express();
const port = 4000;
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema: graphQlSchema,
    rootValue: graphQlResolver,
    graphiql: true,
  })
);

mongoose
  .connect(
    `mongodb+srv://ankit:ankit%40123@cluster0.0l92tbr.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log("Database is Connected...!!!");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(port, () => console.log(`Example app listening on port http://localhost:${port} https://fine-ahead-muscari.glitch.me/`));
