import React, { Component } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import Launches from "./components/Launches";

import logo from "./logo.png";
import "./App.css";

const client = new ApolloClient({
  uri: "http://localhost:8081/graphql"
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="container">
          <img
            src={logo}
            alt="SpaceX"
            style={{ width: 300, display: "block", margin: "auto" }}
          />
          <Launches />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
