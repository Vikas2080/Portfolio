import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet"; // for SEO
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import StarsBackground from "./Components/StarsBackground";
import Features from "./Components/Features";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Projects from "./Components/Projects";

function App() {
  return (
    <Router>
      <div className="relative min-h-screen text-white">
        {/* Background */}
        <StarsBackground />

        {/* Accessibility: Skip link */}
        <a
          href="#main-content"
          className="absolute -top-10 left-2 p-2 bg-black text-white focus:top-2 transition-all"
        >
          Skip to content
        </a>

        {/* Sticky Navbar */}
        <div className="sticky top-0 z-50 bg-black/80 backdrop-blur-md shadow-md">
          <Navbar />
        </div>

        {/* Main content */}
        <main id="main-content">
          <Routes>
            {/* Home Route */}
            <Route
              path="/"
              element={
                <>
                  <Helmet>
                    <title>Portfolio | Vikas Bisht</title>
                    <meta
                      name="description"
                      content="Welcome to my portfolio. Explore my projects, skills, and contact information."
                    />
                  </Helmet>
                  <Hero />
                  <Features />
                  <About />
                  <Projects />
                  <Contact />
                </>
              }
            />

            {/* Individual Routes */}
            <Route
              path="/projects"
              element={
                <>
                  <Helmet>
                    <title>Projects | By VIKAS</title>
                    <meta
                      name="description"
                      content="Browse through my featured projects and case studies."
                    />
                  </Helmet>
                  <Projects />
                </>
              }
            />

            <Route
              path="/about"
              element={
                <>
                  <Helmet>
                    <title>About Me</title>
                    <meta
                      name="description"
                      content="Learn more about me, my journey, and my professional skills."
                    />
                  </Helmet>
                  <About />
                </>
              }
            />

            <Route
              path="/contact"
              element={
                <>
                  <Helmet>
                    <title>Contact | VIKAS</title>
                    <meta
                      name="description"
                      content="Get in touch with me for collaborations, opportunities, or inquiries."
                    />
                  </Helmet>
                  <Contact />
                </>
              }
            />

            {/* 404 Page */}
            <Route
              path="*"
              element={
                <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
                  <h1 className="text-4xl font-bold mb-4">404</h1>
                  <p className="text-lg mb-6">Oops! Page not found.</p>
                  <a
                    href="/"
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition"
                  >
                    Go Home
                  </a>
                </div>
              }
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
