import React from "react";
import Courses from "../../components/Courses/Courses";
import HeroSlide from "../../components/HeroSide/HeroSlide";
import LatestNews from "../../components/LatestNews/LatestNews";
import Testimonials from "../../components/Testimonials/Testimonials";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <section className="section">
      <HeroSlide />
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
