import { Navbar } from '../../components/Navbar';
import { Carousel } from '../../components/Carousel';
import { ManageSinister } from '../../components/ManageSinister';
import { FreeRepair } from '../../components/FreeRepair';
import { Contact } from '../../components/Contact';
import { Footer } from '../../components/Footer';

const Home = () => {
  return (
    <>
      <Navbar />
      <Carousel />
      <ManageSinister />
      <FreeRepair />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
