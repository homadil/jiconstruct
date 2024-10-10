import "./App.css";
import RouterPath from "./RouterPath";
import Footer from "./pages/Footer";
import Navigation from "./pages/Navigation";
import Loader from "./components/Loader.jsx";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

function ScrollToHashElement() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const targetElement = document.getElementById(hash.substring(1)); // Get the element by ID
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  return null; // This component doesn't render anything
}

function App() {
  return (
    <div class="page-wraper">
      <Navigation />
      <RouterPath />
      <Loader />
      <Footer />
      <ScrollToHashElement />
    </div>
  );
}

export default App;
