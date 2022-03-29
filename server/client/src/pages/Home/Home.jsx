import React from "react";
import Banner from "../../components/Banner/Banner";
import Courses from "../../components/Courses/Courses";
import LatestNews from "../../components/LatestNews/LatestNews";
import Testimonials from "../../components/Testimonials/Testimonials";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <section className="section">
      <Banner />
      <div className="container-div">
        <Courses />
        <LatestNews />
        <Testimonials />
      </div>

      <Footer />
    </section>
  );
};

export default Home;
