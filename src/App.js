import RootRouter from "./routers/RootRouter";
import "animate.css";
import { Provider } from "react-redux";
import Store from "./store/store";
import React, { useState, useEffect } from "react";

export default function App() {
  const [pageLoaded, setPageLoaded] = useState(false);
  useEffect(() => {
    window.onload = () => {
      setPageLoaded(true);
    };
  }, []);
  return <div>{!pageLoaded ? <div className="loader">Loading...</div> : <Main />}</div>;
}

function Main() {
  return (
    <Provider store={Store}>
      <RootRouter />
    </Provider>
  );
}
