import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Map from "./components/Map";
import Service from "./components/Service";
import SiteMap from "./components/SiteMap";
import Sites from "./components/Sites";

function App() {
  return (
    <main>
      <Header />
      <About />
      <Service />
      <SiteMap />
      <Sites />
      <Map />
      <Footer />
    </main>
  );
}

export default App;
