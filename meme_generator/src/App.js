import React from "react";

import "./App.css";

import { Header } from "./components/Header";
import { MainContent } from "./components/MainContent";
import { Footer } from "./components/Footer";

function App() {
  const [usageItem] = React.useState("Meme");

  return (
    <div className="App">
      <Header item={usageItem} />
      <MainContent item={usageItem} />
      <Footer />
    </div>
  );
}

export default App;
