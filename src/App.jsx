import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MeetSection from "./components/MeetSection";
import WorkSection from "./components/WorkSection";
import BrandsSection from "./components/BrandsSection";
import AboutSection from "./components/AboutSection";
import FooterSection from "./components/FooterSection";
import BottomBar from "./components/BottomBar";


function App() {
  return (
    <div>
      <TopBar />
      <Navbar />
      <Hero />
      <MeetSection />
      <WorkSection />
      <BrandsSection />
      <AboutSection />
      <FooterSection />
      <BottomBar />

    </div>
  );
}

export default App;