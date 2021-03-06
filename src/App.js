import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Footer from "./Components/Footer/Footer";
import TopNavBar from "./Components/NavBar/TopNavBar";
import Profile from "./views/Profile";
import Home from "./views/Home";
import { Route, HashRouter } from "react-router-dom";
import Login from "./views/Login";
import Messaging from "./Components/Messanger/Messaging";
import TransitionPage from "./Components/AuxComps/TransitionPage";
import SignUpForm from "./views/SignUpForm";
import "./Styles/MediaQuery.css";

const App = (props) => {
  const [isSearchOn, setIsSearchOn] = useState(false); //not being used atm  this is to set the overlay when the search is going on
  const [userData, setUserData] = useState("");
  const [showTopNavBar, setShowTopNavBar] = useState(false);

  return (
    <>
      <HashRouter basename="/">
        <div className="container-fluid p-0 m-0">
          {showTopNavBar && (
            <TopNavBar
              setIsSearchOn={setIsSearchOn}
              setShowTopNavBar={setShowTopNavBar}
            ></TopNavBar>
          )}
          <Route
            path="/"
            exact
            render={(routerProps) => (
              <Login
                setUserData={setUserData}
                setShowTopNavBar={setShowTopNavBar}
                {...routerProps}
              ></Login>
            )}
          ></Route>
          <Route
            path="/signup"
            exact
            render={(routerProps) => (
              <SignUpForm
                setUserData={setUserData}
                setShowTopNavBar={setShowTopNavBar}
                {...routerProps}
              ></SignUpForm>
            )}
          ></Route>

          <Route
            path="/home"
            exact
            render={(routerProps) => (
              <Home
                setShowTopNavBar={setShowTopNavBar}
                userData={userData}
                {...routerProps}
              ></Home>
            )}
          ></Route>
          <Route
            path="/profile"
            exact
            render={(routerProps) => (
              <Profile
                setShowTopNavBar={setShowTopNavBar}
                userData={userData}
                {...routerProps}
              ></Profile>
            )}
          ></Route>
          <Route
            path="/transitionPage"
            exact
            render={(routerProps) => (
              <TransitionPage
                setShowTopNavBar={setShowTopNavBar}
                userData={userData}
                {...routerProps}
              />
            )}
          ></Route>

          {showTopNavBar && <Messaging />}
          <Footer></Footer>
        </div>
      </HashRouter>
    </>
  );
};

export default App;
