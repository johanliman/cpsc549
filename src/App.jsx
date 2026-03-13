import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Projects from './pages/Projects';
import About from './pages/About';
import './App.css';

const Home = () => (
  <>
    <main className="wrapper">
      <section className="bio-section">
        <h2 className="section-heading">Short Bio</h2>
        <p>
          Currently pursuing a Master's in Computer Science at Cal State
          Fullerton. Passionate computer science student and former industrial
          engineer with expertise in problem-solving and software development.
        </p>
      </section>
    </main>

    <Projects />
  </>
);

function App() {
  return (
    <Router basename="/cpsc549">
      <div className="app-container">
        <header className="site-header">
          <div className="wrapper header-flex">
            <Link to="/" className="site-title">
              Johan Liman
            </Link>

            <nav className="site-nav">
              <Link to="/projects">Projects</Link>
              <Link to="/about">About</Link>
            </nav>
          </div>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
