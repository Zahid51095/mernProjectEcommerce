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
import UserOptions from "./component/layout/Header/UserOptions.js";
import { useSelector } from "react-redux";
import Profile from "./component/User/Profile.js";
import ProtectedRoute from "./component/Route/ProtectedRoute.js";
import UpdateProfile from "./component/User/UpdateProfile.js";
import UpdatePassword from "./component/User/UpdatePassword.js";



function App() {

  const { isAuthenticated, user } = useSelector((state) => state.user);


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
      {isAuthenticated && <UserOptions user={user} />}

      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/product/:id" component={ProductDetails}></Route>
        <Route exact path="/products" component={Products}></Route>
        <Route path="/products/:keyword" component={Products}></Route>

        <Route exact path="/search" component={Search}></Route>

        <ProtectedRoute exact path="/account" component={Profile}></ProtectedRoute>

        <ProtectedRoute exact path="/me/update" component={UpdateProfile}></ProtectedRoute>

        <ProtectedRoute exact path="/password/update" component={UpdatePassword}></ProtectedRoute>

        <Route exact path="/login" component={LoginSignUp}></Route>

      </Switch>

      <Footer></Footer>
    </Router>
  );
}

export default App;
