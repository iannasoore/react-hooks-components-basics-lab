// src/components/App.js

function Navbar() {
  return (
    <nav>
      <h1 id="logo">My Portfolio</h1>
    </nav>
  );
}

// ⚠️ CRITICAL: The Home component MUST return a div with id="home"
function Home() {
  return (
    <div id="home"> 
      <h2>Home</h2>
    </div>
  );
}

// The About component MUST return a div with id="about"
function About() {
  return (
    <div id="about">
      <h2>About</h2>
    </div>
  );
}

function App() {
  // All child components must be rendered here
  return (
    <div className="App">
      <Navbar />
      <Home /> 
      <About />
    </div>
  );
}

export default App;