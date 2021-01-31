import React from "react";
import BannerComponent from "../../components/home/banner.component";
import HeroComponent from "../../components/home/hero.component";
import NavComponent from "../../components/home/Nav.component";
import RecentWorkComponent from "../../components/home/recent-work.component";
import ServicesComponent from "../../components/home/services.component";
import TestimonialsComponent from "../../components/home/testimonials.component";

function HomePage() {
  return (
    <div>
      {/* This is the home page
      Nav
      Banner
      hero
      Services
      Recent-work
      Prev-companies
      Personal-projects
      Testimonials
      Footer */}
      <NavComponent />
      <div style={{ margin: 0 }}>
        <BannerComponent />
        <HeroComponent />
      </div>
      <ServicesComponent />
      <RecentWorkComponent />
      <TestimonialsComponent />
    </div>
  );
}

export default HomePage;
