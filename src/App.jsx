// from node modules

import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// local imports or  // static import
import Navbar from "./components/Navbar";
import Home from "./components/sharedComponents/Home";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import About from "./components/About";
import NoPage from "./components/NoPage";

import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Loading from "./components/Loading";
import Index from "./components/Index";
import Counter from "./components/Counter";

// lazy import or // dynamic import
const SecureIndex = React.lazy(() => delay(import("./components/SecureIndex")));
const Services = React.lazy(() => delay(import("./components/Services")));
const Blogs = React.lazy(() => delay(import("./components/Blogs")));

// delay is an async function which will delay importing of file by 2 seconds

async function delay(promise) {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
  return promise;
}

const App = () => {
  // u can do authorization as this or u can just create custom hook by using HOC
  // function

  // const [auth, setAuth] = useState(false);
  // const isAuth = () => {
  //   const token = localStorage.getItem("token");
  //   if (token) {
  //     setAuth(true);
  //   } else if (token === null) {
  //     setAuth(false);
  //   }
  // };

  // useEffect(() => {
  //   isAuth();
  // }, []);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* unspecified path */}
          <Route path="*" element={<NoPage />} />
          <Route path="/" element={<Index/>} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/services"
            element={
              <Suspense fallback={<Loading />}>
                <Services />
              </Suspense>
            }
          />
          <Route
            path="/blogs"
            element={
              <Suspense fallback={<Loading />}>
                {" "}
                <Blogs />{" "}
              </Suspense>
            }
          />
          <Route
            path="/secureIndex"
            element={
              <Suspense fallback={<Loading />}>
                <SecureIndex />
              </Suspense>
            }
          />

          {/* conditional rendering using ternary operator */}
          {/* <Route path="/secureIndex" element={auth ? <SecureIndex/>:<Login/>}/> */}
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
