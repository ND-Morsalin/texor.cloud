import { useState } from 'react';
import BackgroundVideo from './components/BackgroundVideo';
import Carousel from './components/CarouselSlider';
import Navbar from './components/Navbar';

const App = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="relative w-full h-screen overflow-x-hidden">
      <Navbar onNavigate={setCurrentSlide} />
      <BackgroundVideo />
      <div className="relative z-10 flex items-center justify-center w-full h-full">
        <Carousel current={currentSlide} />
      </div>
    </div>
  );
};

export default App;
