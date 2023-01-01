import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Arrivals from "../components/Arrivals";
import TopPicks from "../components/TopPicks";
import ViewMore from "../components/ViewMore";
import Ourblogs from "../components/Ourblogs";
import InstagramPage from "../components/InstagramPage";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <ViewMore />
      <TopPicks />
      <Arrivals />
      <Ourblogs />
      <InstagramPage />
      <Footer />
    </div>
  );
}

export default Home;
