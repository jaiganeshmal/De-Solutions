import React, { useEffect } from 'react'
import ServiceHeroSection from '../Components/ServiceHeroSection'
import ServiceInfoSection from '../Components/ServiceInfoSection'
import OurServicesSection from '../Components/OurServicesSection'
import ProjectCTA from '../Custom Component/ProjectCTA'
import WhyChooseUsSection from '../Components/WhyChooseUsSection'
import AndroidProcessSection from '../Components/AndroidProcessSection'
import TechPartnersSection from '../Components/TechPartnersSection'
import TopRankedSection from '../Components/TopRankedSection'
import ClientsSection from '../Components/ClientsSection'
import FAQSection from '../Components/FAQSection'

const Services = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }, [])
  return (
    <>
      <ServiceHeroSection />
      <ServiceInfoSection />
      <OurServicesSection />
      <ProjectCTA heading="Let's Start a New Project Together" highlight="New Project" buttonText="Inquire Now" />
      <WhyChooseUsSection />
      <AndroidProcessSection />
      <ProjectCTA heading="Hire a Dedicated Developer" highlight="Dedicated Developer" buttonText="Let's Work Together" />
      <TechPartnersSection />
      <TopRankedSection />
      <ProjectCTA heading="We Promise. We Deliver." highlight="We Deliver." buttonText="Let's Work Together" />
      <ClientsSection />
      <FAQSection />
    </>
  )
}

export default Services