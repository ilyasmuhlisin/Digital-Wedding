import React from "react";
import Header from "./Header";
import Gallery from "./Gallery";
import RSVP from "./RSVP";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* <Header /> */}
      <main className="flex-grow">
        <Gallery />
        <RSVP />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
