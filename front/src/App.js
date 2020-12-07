import React from "react"
import {  ApolloProvider,  ApolloClient,  InMemoryCache,} from "@apollo/client"

import Routes from "./routes"

const client = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache(),
})

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <thead>
          <div className="App-header">
            <h1>Flash</h1>
          </div>
        </thead>
        <tbody>
          <div className="App-body">
            <Routes />
          </div>
        </tbody>
      </div>
    </ApolloProvider>
  )
}

export default App