import Hero from '../components/Hero';
import PetsList from '../components/PetsList';
import Testimonials from '../components/Testimonials';
import AlertBanner from '../components/AlertBanner';
import ChatButton from '../components/ChatButton';
export default function Home() {
  return (
    <>
      <AlertBanner />
      <Hero />
      <PetsList />
      <Testimonials />
      <ChatButton />
    </>
  );
}
