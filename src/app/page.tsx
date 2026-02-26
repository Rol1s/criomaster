import { Hero } from '@/components/sections/Hero';
import { Advantages } from '@/components/sections/Advantages';
import { Faults } from '@/components/sections/Faults';
import { RepairSteps } from '@/components/sections/RepairSteps';
import { CaseGallery } from '@/components/sections/CaseGallery';
import { BrandGrid } from '@/components/sections/BrandGrid';
import { Testimonials } from '@/components/sections/Testimonials';
import { CallToAction } from '@/components/sections/CallToAction';
import { LocalBusinessJsonLd } from '@/components/seo/JsonLd';

export default function HomePage() {
  return (
    <>
      <LocalBusinessJsonLd />
      <Hero />
      <Advantages />
      <Faults />
      <RepairSteps />
      <CaseGallery />
      <BrandGrid />
      <Testimonials />
      <CallToAction />
    </>
  );
}
