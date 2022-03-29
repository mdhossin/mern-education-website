import React from "react";
import Banner from "../../components/Banner/Banner";
import Courses from "../../components/Courses/Courses";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <section className="section">
      <Banner />
      <div className="container-div">
        <Courses />
      </div>
      This is a home page
      <Footer />
    </section>
  );
};

export default Home;
