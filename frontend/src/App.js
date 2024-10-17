import "./App.css";
import RouterPath from "./RouterPath";
import Footer from "./pages/Footer";
import Navigation from "./pages/Navigation";
import Loader from "./components/Loader.jsx";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";

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
  const location = useLocation();
  const isAdminPath = location.pathname.includes("/admin");

  return (
    <div className="page-wrapper">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition="bounce"
      />
      {/* Same as */}
      <ToastContainer />

      {isAdminPath ? (
        ""
      ) : (
        <>
          <Navigation />
        </>
      )}
      <RouterPath />
      <Loader />

      {isAdminPath ? (
        ""
      ) : (
        <>
          <Footer />
        </>
      )}
      <ScrollToHashElement />
    </div>
  );
}

export default App;
