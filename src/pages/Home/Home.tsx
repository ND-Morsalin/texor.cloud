import CoverVideo from '../../components/CoverVideo';
import { motion } from 'framer-motion';
interface HomeProps {
  setGoWebsite: React.Dispatch<React.SetStateAction<boolean>>;
}
function Home({ setGoWebsite }: HomeProps) {
  const handleClick = () => {
    // optional exit animation delay before switching
    setTimeout(() => {
      setGoWebsite(true);
    }, 600); // match motion `transition.duration`
  };

  return (
     <motion.div
      className="w-screen h-screen flex items-center justify-center relative"
      initial={{ opacity: 1, scale: 1 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
    >
      <CoverVideo />

      {/* center button */}
      <button
        onClick={handleClick}
        className="bg-black text-white py-2 px-4 rounded-full w-[200px] h-[200px] text-4xl font-[500] leading-140 tracking-0 cursor-pointer hover:bg-accent hover:text-black transition-colors duration-300 shadow-lg flex items-center justify-center z-10"
      >
        Build What's Next
      </button>

      {/* bottom border text */}
      <div className="absolute bottom-10 w-full text-center">
        <h1 className="text-[32px] sm:text-[48px] lg:text-[64px] font-extrabold uppercase text-transparent bg-clip-text stroke-text">
          AI-Native Automation <br /> Infrastructure
        </h1>
      </div>
    </motion.div>
  );
}

export default Home;
