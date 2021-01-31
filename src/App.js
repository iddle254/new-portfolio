import logo from "./logo.svg";
import "./App.css";
import HomePage from "./views/home/home.page";
import AboutPage from "./views/about/about.page";
import BlogPage from "./views/blog/blog.page";
import ProjectsPage from "./views/projects/projects.page";
import ServicesPage from "./views/services/services.page";

function App() {
  return (
    <div className="App">
      <HomePage />
      <AboutPage />
      <BlogPage />
      <ProjectsPage />
      <ServicesPage />
    </div>
  );
}

export default App;
