"use client";
import React from 'react';
import Image from 'next/image'; // Import Next.js Image component
import Link from 'next/link';   // Import Next.js Link component
import { Award, Users, Globe, Heart, Target, Shield, Compass, Star } from 'lucide-react';
// import LinkButton from '@/components/ui/LinkButton'; // Uncomment if you create LinkButton.tsx

const AboutPage = () => {
  const values = [
    {
      icon: Heart,
      title: "Passion for Wildlife",
      description: "Our deep love for Africa's wildlife drives everything we do. We're committed to creating experiences that inspire conservation."
    },
    {
      icon: Shield,
      title: "Safety First",
      description: "Your safety is our top priority. All our guides are certified professionals with extensive training and experience."
    },
    {
      icon: Users,
      title: "Local Communities",
      description: "We work closely with local communities, ensuring tourism benefits the people who call these incredible places home."
    },
    {
      icon: Globe,
      title: "Sustainable Tourism",
      description: "We practice responsible tourism that protects wildlife habitats and supports conservation efforts across East Africa."
    }
  ];

  const stats = [
    { number: "15+", label: "Years Experience" },
    { number: "5000+", label: "Happy Travelers" },
    { number: "50+", label: "Expert Guides" },
    { number: "4", label: "Countries Covered" }
  ];

  const team = [
    {
      name: "David Kamau",
      role: "Founder & Safari Director",
      // Using a placeholder for now, ensure your image paths are correct
      image: "/images/big51.jpg", // Changed to /images for consistency with Next.js public folder
      description: "With over 20 years in the safari industry, David's passion for East African wildlife is unmatched."
    },
    {
      name: "Sarah Mwangi",
      role: "Operations Manager",
      image: "/images/wilds1.jpg", // Changed to /images
      description: "Sarah ensures every safari runs smoothly, coordinating logistics across four countries with precision."
    },
    {
      name: "James Omondi",
      role: "Lead Safari Guide",
      image: "/images/journey.jpg", // Changed to /images
      description: "James' encyclopedic knowledge of wildlife behavior makes every game drive an educational adventure."
    },
    {
      name: "Grace Nyambura",
      role: "Cultural Experience Coordinator",
      image: "/images/culture.jpg", // Changed to /images
      description: "Grace creates authentic cultural connections, bridging the gap between travelers and local communities."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* If you want a background image for the hero, use Image component with `fill` and `priority` */}
        {/* Example with an image, uncomment and adjust src/alt as needed: */}
        {/* <Image
          src="/images/hero-about.jpg" // Path to your hero image
          alt="African Safari Landscape"
          fill
          priority
          className="object-cover object-center"
        /> */}
        
        {/* Current gradient background */}
        <div className="absolute inset-0 w-full h-full">
          <div className="w-full h-full bg-gradient-to-br from-orange-900 via-amber-800 to-yellow-700"></div>
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl px-6">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
            OUR STORY
          </h1>
          <p className="text-xl md:text-2xl leading-relaxed opacity-90">
            Born from a passion for Africa&apos;s wild beauty, crafted through years of expertise
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block p-3 bg-orange-100 rounded-full mb-6">
              <Target className="w-12 h-12 text-orange-700" />
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              To create transformative safari experiences that connect people with Africa&apos;s extraordinary wildlife 
              while supporting conservation efforts and empowering local communities. We believe that every journey 
              should leave a positive impact on both the traveler and the destinations we explore.
            </p>
            <div className="w-24 h-1 bg-orange-700 mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
                  Where It All Began
                </h2>
                <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                  <p>
                    Our journey started in 2009 when our founder, David Kamau, a Kenyan-born wildlife enthusiast, 
                    realized that many visitors to East Africa were missing the authentic, transformative safari 
                    experiences they dreamed of.
                  </p>
                  <p>
                    With a background in wildlife conservation and a network of local guides, David set out to 
                    create a safari company that would go beyond the ordinary. He envisioned experiences that would 
                    deeply connect travelers with Africa&apos;s natural wonders while respecting local cultures and 
                    contributing to conservation efforts.
                  </p>
                  <p>
                    Today, we&apos;ve grown into a team of passionate professionals operating across Rwanda, Tanzania, 
                    Kenya, and Zanzibar. Every safari we organize reflects our commitment to excellence, authenticity, 
                    and sustainable tourism.
                  </p>
                </div>
              </div>
              <div className="relative">
                <Image 
                  src="/images/big52.jpg" // Updated path
                  alt="Safari landscape with wildlife" 
                  width={800} // Example width
                  height={500} // Example height
                  className="rounded-lg shadow-2xl w-full h-auto" // Added w-full h-auto for responsiveness
                />
                <div className="absolute -bottom-6 -left-6 bg-orange-700 text-white p-6 rounded-lg shadow-xl">
                  <p className="text-4xl font-bold">15+</p>
                  <p className="text-sm uppercase tracking-wide">Years of Excellence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-orange-700 text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl md:text-6xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg uppercase tracking-wide opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide every decision we make and every safari we create
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 rounded-lg hover:shadow-xl transition-shadow duration-300">
                <div className="inline-block p-4 bg-orange-100 rounded-full mb-4">
                  <value.icon className="w-8 h-8 text-orange-700" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The passionate professionals who make your safari dreams come true
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-64">
                  <Image 
                    src={member.image} 
                    alt={member.name}
                    fill // Use fill when parent has defined dimensions
                    className="object-cover object-center"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-orange-700 font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-12 text-center">
              Why Choose Us
            </h2>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-700 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  1
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Expert Local Knowledge</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our guides are born and raised in East Africa with deep connections to the land, wildlife, and local communities. 
                    They don&apos;t just show you wildlife—they share the stories, behaviors, and ecology that bring each encounter to life.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-700 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  2
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Personalized Experiences</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We understand that no two travelers are alike. Whether you&apos;re a photographer seeking the perfect shot, 
                    a family creating memories, or a solo adventurer, we customize every safari to match your interests and pace.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-700 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  3
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Commitment to Conservation</h3>
                  <p className="text-gray-600 leading-relaxed">
                    A portion of every safari booking goes directly to wildlife conservation projects and community development initiatives. 
                    Your journey helps protect the incredible ecosystems and species you come to see.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-700 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  4
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Seamless Planning</h3>
                  <p className="text-gray-600 leading-relaxed">
                    From your first inquiry to your return home, we handle every detail with care. Our team manages logistics, 
                    accommodations, permits, and transportation so you can focus entirely on the experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
              Awards & Recognition
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <Award className="w-16 h-16 text-orange-700 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">TripAdvisor Excellence</h3>
              <p className="text-gray-600">Certificate of Excellence 2020-2024</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <Star className="w-16 h-16 text-orange-700 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Safari Awards</h3>
              <p className="text-gray-600">Best East Africa Safari Operator 2023</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <Compass className="w-16 h-16 text-orange-700 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Sustainable Tourism</h3>
              <p className="text-gray-600">Eco-Tourism Certification 2022</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-orange-700 to-amber-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Ready to Start Your Adventure?
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto opacity-90">
            Let us help you create the safari experience of a lifetime
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            {/* Using Next.js Link for internal navigation */}
            <Link href="/contact" passHref>
              <button className="bg-white text-orange-700 hover:bg-gray-100 px-10 py-4 uppercase tracking-widest font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl rounded">
                CONTACT US
              </button>
            </Link>
            <Link href="/safaris" passHref>
              <button className="border-2 border-white text-white hover:bg-white hover:text-orange-700 px-10 py-4 uppercase tracking-widest font-semibold transition-all duration-300 shadow-xl rounded">
                VIEW SAFARIS
              </button>
            </Link>
            {/* If you used LinkButton component: */}
            {/* <LinkButton href="/contact" variant="primary">CONTACT US</LinkButton>
            <LinkButton href="/safaris" variant="secondary">VIEW SAFARIS</LinkButton> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;