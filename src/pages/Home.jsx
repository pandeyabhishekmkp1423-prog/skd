import HeroSection from '../components/home/HeroSection';
import StatsSection from '../components/home/StatsSection';
import AboutPreview from '../components/home/AboutPreview';
import FeaturedProjects from '../components/home/FeaturedProjects';
import Township3D from '../components/home/Township3D';
import RotatingGlobe from '../components/home/RotatingGlobe';
import LocationSection from '../components/home/LocationSection';
import AmenitiesSection from '../components/home/AmenitiesSection';
import VideoGallery from '../components/home/VideoGallery';
import Testimonials from '../components/home/Testimonials';
import BookingCTA from '../components/home/BookingCTA';
import { motion } from 'motion/react';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="overflow-hidden"
    >
      <HeroSection />
      <StatsSection />
      <AboutPreview />
      <FeaturedProjects />
      <Township3D />
      <RotatingGlobe />
      <AmenitiesSection />
      <LocationSection />
      <VideoGallery />
      <Testimonials />
      <BookingCTA />
    </motion.div>
  );
}
