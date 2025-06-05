import { motion, AnimatePresence } from 'framer-motion';
import Hero from './CarouselCompoenets/Hero';
import OurMission from './CarouselCompoenets/OurMission';
import HowItWorks from './CarouselCompoenets/HowItWorks';

const SlideFour = () => (
  <div>
    <h2 className="text-3xl font-bold mb-2">Slide 4</h2>
    <p className="text-lg">Slide 4 content goes here.</p>
  </div>
);

const SlideFive = () => (
  <div>
    <h2 className="text-3xl font-bold mb-2">Slide 5</h2>
    <p className="text-lg">Last slide in the carousel.</p>
  </div>
);

const slides = [
  <Hero key="slide1" />,
  <OurMission key="slide2" />,
  <HowItWorks key="slide3" />,
  <SlideFour key="slide4" />,
  <SlideFive key="slide5" />,
];

interface CarouselProps {
  current: number;
}

const Carousel = ({ current }: CarouselProps) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={current}
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -30, scale: 0.95 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      >
        {slides[current]}
      </motion.div>
    </AnimatePresence>
  );
};

export default Carousel;
