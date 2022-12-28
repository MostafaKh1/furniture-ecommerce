import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import TopPicks from "./TopPicks";
import ViewMore from "./ViewMore";

function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <ViewMore />
      <TopPicks />
    </div>
  );
}

export default Home;
