import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import { Paths } from "./components/Paths";
import Navbar from "./components/Navbar";
import EmailForm from "./components/EmailForm";
import Footer from "./components/Footer";
import About from "./components/About";
// import Projects from "./components/Projects";
import Thoughts from "./components/Thoughts";
import Contact from "./components/Contact";


function App() {
  return (
    <div>
      <div className="w-full">
        <Routes>
          <Route
            path="/"
            element={
              <>
                < Navbar />
                <Outlet />
              </>
            }
          >
            {Paths.map((el) => (
              <Route path={el.shortPathName} element={el.component}></Route>
            ))}

            <Route path="/email-form" element={<EmailForm />} />
            <Route path="/about" element={<About />} />
            {/* <Route path="/projects" element={<Projects />} /> */}
            <Route path="/thoughts" element={<Thoughts />} />
            <Route path="/contacts" element={<Contact />} />
            <Route path="*" element={<Navigate to="page-not-found" />} />
          </Route>
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
