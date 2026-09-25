import HeroSection from '../components/home/HeroSection';
import ServicesGrid from '../components/home/ServicesGrid';
import WhyUs from '../components/home/WhyUs';
import FaqAccordion from '../components/home/FaqAccordion';
import FadeIn from '../components/animations/FadeIn';

export default function Home() {
  return (
    <>
      <FadeIn direction="none">
        <HeroSection />
      </FadeIn>
      <FadeIn direction="up" delay={0.2}>
        <ServicesGrid />
      </FadeIn>
      <FadeIn direction="up" delay={0.2}>
        <WhyUs />
      </FadeIn>
      <FadeIn direction="up" delay={0.2}>
        <FaqAccordion />
      </FadeIn>
    </>
  );
}
