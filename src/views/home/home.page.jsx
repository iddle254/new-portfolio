import React from "react";
import FooterComponent from "../../components/footer/home-footer.component";
import Header from "../../components/header/Header.component";
import HeaderLinks from "../../components/header/HeaderLinks";
import BannerComponent from "../../components/home/banner.component";
import HeroComponent from "../../components/home/hero.component";
import NavComponent from "../../components/home/Nav.component";
import RecentWorkComponent from "../../components/home/recent-work.component";
import ServicesComponent from "../../components/home/services.component";
import TestimonialsComponent from "../../components/home/testimonials.component";

const dashboardRoutes = [];

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
      {/* <NavComponent /> */}
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="Centaur Labs"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
      />
      <div style={{ margin: 0 }}>
        <HeroComponent />
        <BannerComponent />
      </div>
      <ServicesComponent />
      <RecentWorkComponent />
      <TestimonialsComponent />
      <FooterComponent />
    </div>
  );
}

export default HomePage;
