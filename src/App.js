import Navbar from './components/NavBar/navbar';
import Intro from './components/Intro/intro';
import About from './components/About/about';
import Works from './components/Works/works';
import News from './components/News/news';
import Contact from './components/Contact/contact';
import Footer from './components/Footer/footer';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <About />
      <Works />
      <News />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
