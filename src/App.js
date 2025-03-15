import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Portfolio from "./pages/Portfolio";
import Footer from "./components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { Loader } from "./components/Loader";
import { Toaster } from "react-hot-toast";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
    });
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div
      className={`App ${
        loading
          ? "min-h-[100vh] flex items-center overflow-hidden justify-center"
          : ""
      }`}
    >
      {loading ? (
        <Loader />
      ) : (
        <>
          <Toaster />
          <Header />
          <Routes>
            <Route path="/" element={<Portfolio />} />
            <Route path="*" element={<Portfolio />} />
          </Routes>
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
