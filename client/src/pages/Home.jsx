import Hero from '../components/Hero';
import PetsList from '../components/PetsList';
import Testimonials from '../components/Testimonials';
import AlertBanner from '../components/AlertBanner';
export default function Home() {
  return (
    <>
      <AlertBanner />
      <Hero />
      <PetsList />
      <Testimonials />
    </>
  );
}
