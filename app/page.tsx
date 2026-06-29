'use client'

import { Navigation } from '@/components/Navigation'
import { PremiumHero } from '@/components/PremiumHero'
import { AboutDetail } from '@/components/AboutDetail'
import { ServicesShowcase } from '@/components/ServicesShowcase'
import { SustainabilityPremium } from '@/components/SustainabilityPremium'
import { PremiumCTA } from '@/components/PremiumCTA'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-foreground">
      <Navigation />
      <PremiumHero />
      <AboutDetail />
      <ServicesShowcase />
      <SustainabilityPremium />
      <PremiumCTA />
      <Footer />
    </div>
  )
}
