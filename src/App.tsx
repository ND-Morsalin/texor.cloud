import { useState } from 'react';
import BackgroundVideo from './components/BackgroundVideo';
import Carousel from './components/CarouselSlider';
import Navbar from './components/Navbar';
import Home from './pages/Home/Home';
import { AnimatePresence } from 'framer-motion';

const App = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [goWebsite, setGoWebsite] = useState(false);

  return (
    <>
      <AnimatePresence>
        {!goWebsite && <Home setGoWebsite={setGoWebsite} />}
      </AnimatePresence>

      {goWebsite && (
        <div className="relative w-full">
          <Navbar onNavigate={setCurrentSlide} />
          <BackgroundVideo />
          <div className="relative z-10 flex items-center justify-center w-full h-full">
            <Carousel current={currentSlide} />
          </div>
        </div>
      )}
    </>
  );
};

export default App;
