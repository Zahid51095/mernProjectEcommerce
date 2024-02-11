import "./App.css";
import Header from "./component/layout/Header/Header.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import webFont from "webfontloader";
import React from "react";
import Footer from "./component/layout/Footer/Footer.js";
import Home from "./component/Home/Home.js";
import ProductDetails from "./component/Product/ProductDetails.js";
import Products from "./component/Product/Products.js"
import Search from "./component/Product/Search.js"
import { Switch } from "react-router-dom/cjs/react-router-dom.min.js";
import LoginSignUp from "./component/User/LoginSignUp.js";
import store from "./store"
import { loadUser } from "./actions/userAction.js";


function App() {
  React.useEffect(() => {
    webFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });

    store.dispatch(loadUser());

  }, []);

  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/product/:id" component={ProductDetails}></Route>
        <Route exact path="/products" component={Products}></Route>
        <Route path="/products/:keyword" component={Products}></Route>

        <Route exact path="/search" component={Search}></Route>

        <Route exact path="/login" component={LoginSignUp}></Route>
      </Switch>

      <Footer></Footer>
    </Router>
  );
}

export default App;
