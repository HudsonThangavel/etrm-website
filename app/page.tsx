import React from 'react';
import HeroSection from '@/components/sections/HeroSection';
import AboutOverview from '@/components/sections/AboutOverview';
import PillarsSection from '@/components/sections/PillarsSection';
import RuahTvSection from '@/components/sections/RuahTvSection';
import MinistriesSection from '@/components/sections/MinistriesSection';
import SongReleaseSection from '@/components/sections/SongReleaseSection';
import TabernacleSection from '@/components/sections/TabernacleSection';

export default function HomePage() {
  return (
    <div className="space-y-0">
      <HeroSection />
      <AboutOverview />
      <PillarsSection />
      <RuahTvSection />
      <MinistriesSection />
      <SongReleaseSection />
      <TabernacleSection />
    </div>
  );
}
