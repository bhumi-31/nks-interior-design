import Header from "../components/Header";
import Hero from "../components/Hero";
import Work from "../components/Work";
import Philosophy from "../components/Philosophy";
import Materials from "../components/Materials";
import Process from "../components/Process";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Work />
      <Philosophy />
      <Materials />
      <Process />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
