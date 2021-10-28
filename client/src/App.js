import { Box } from "@material-ui/core";
import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";
// Components
import Header from "./components/Header";
import Home from "./components/home/Home";
import DetailView from "./components/post/DetailView";
import CreateView from "./components/post/CreateView";
import UpdateView from "./components/post/UpdateView";

function App() {
  return (
    <>
    <BrowserRouter>
      <Header/>
      <Box style={{marginTop: 64}}>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route exact path='/details/:id'  component={DetailView} />
        <Route path='/create' exact component={CreateView} />
        <Route exact path='/update/:id' component={UpdateView} />
      </Switch>
      </Box>
    </BrowserRouter>
   </>
  );
}

export default App;
