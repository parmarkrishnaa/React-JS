import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Services from "./components/Services";
import Donation from "./components/Donation";

const App = () => {
  return (
    <div>
      {/* Spinner Start */}
      <div
        id="spinner"
        className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
      >
        <div
          className="spinner-border text-primary"
          role="status"
          style={{ width: "3rem", height: "3rem" }}
        />
      </div>
      {/* Spinner End */}

      {/* Navbar Start */}
      <Navbar/>
      {/* Navbar End */}

      {/* Home Start */}
      <Home />
      {/* Home End */}

      {/* About Start */}
      <About />
      {/* About End */}

      {/* Services Start */}
      <Services />
      {/* Services End */}

      {/* Donation Start */}
      <Donation />
      {/* Donation End */}

      {/* Contact Start */}
      <Contact />
      {/* Contact End */}

      {/* Footer Start */}
      <Footer />
      {/* Footer End */}
    </div>
  );
};

export default App;
