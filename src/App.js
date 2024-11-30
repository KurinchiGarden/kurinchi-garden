import About from "./components/About";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import Map from "./components/Map";
import PartnerShip from "./components/PartnerShip";
import Service from "./components/Service";

function App() {
  return (
    <main>
      <Header />
      <About />
      <Service />
      {/* <Gallery /> */}
      <PartnerShip />
      <Map />
      <Footer />
    </main>
  );
}

export default App;
