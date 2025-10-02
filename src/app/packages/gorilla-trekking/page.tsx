"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowRight, Clock, Users, Mountain } from 'lucide-react';

export default function GorillaTrekkingPage() {
  const [selectedItinerary, setSelectedItinerary] = useState<number | null>(null);

  const pkg = {
    title: 'Gorilla Trekking',
    subtitle: 'Encounter gentle giants in misty mountains',
    heroImage: '/image/goritre.jpg',
    overview: [
      'A once-in-a-lifetime trek through montane forests to meet gorilla families in their natural habitat.',
      'Led by expert rangers with strict conservation and safety protocols in Rwanda\'s pristine Volcanoes National Park.',
    ],
    highlights: ['Guided trek', 'Mountain vistas', 'Primate encounters', 'Forest ecology'],
    gallery: ['/image/gorilla.webp', '/image/chimpanze.jpg', '/image/karisimbi.jpg', '/image/under.jpg'],
  } as const;

  const itineraries = [
    {
      id: 1,
      image: '/image/gorilla.webp',
      title: '3-Day Gorilla Trek – Volcanoes National Park',
      subtitle: 'Perfect for: Short stay with main focus on gorilla trekking',
      duration: '3 days, 2 nights',
      budget: 'Mid-range to luxury',
      highlights: [
        'Day 1: Arrive Kigali → Transfer to Musanze (Volcanoes NP area) → Evening at leisure',
        'Day 2: Gorilla trekking in Volcanoes National Park → Optional visit to Iby\'iwacu Cultural Village',
        'Day 3: Scenic drive back to Kigali → Departure',
      ],
      features: ['Gorilla tracking permit included', 'Easy logistics (only ~2.5 hours from Kigali)', 'Optional cultural experience with ex-poacher community'],
      whatToBring: 'Hiking boots, rain jacket, camera, gloves, long pants',
      color: 'from-green-600 to-emerald-600',
    },
    {
      id: 2,
      image: '/image/chimpanze.jpg',
      title: '4-Day Gorilla & Golden Monkey Experience',
      subtitle: 'Perfect for: Primate lovers wanting an extra day with golden monkeys',
      duration: '4 days, 3 nights',
      budget: 'Mid-range to high-end',
      highlights: [
        'Day 1: Arrival in Kigali → Transfer to Musanze',
        'Day 2: Gorilla trekking in Volcanoes NP',
        'Day 3: Golden monkey trekking → Visit Twin Lakes (Burera & Ruhondo)',
        'Day 4: Drive back to Kigali → Departure',
      ],
      features: ['Two different primate treks', 'Scenic lake views & light nature walk', 'Can be upgraded with luxury lodges'],
      whatToBring: 'Hiking gear, binoculars, waterproof bag, warm jacket',
      color: 'from-amber-600 to-orange-600',
    },
    {
      id: 3,
      image: '/image/karisimbi.jpg',
      title: '5-Day Gorilla Trek & Lake Kivu Relaxation',
      subtitle: 'Perfect for: Combining trekking with lakeside relaxation',
      duration: '5 days, 4 nights',
      budget: 'Mid to upper mid-range',
      highlights: [
        'Day 1: Kigali arrival → Transfer to Musanze',
        'Day 2: Gorilla trekking in Volcanoes NP',
        'Day 3: Optional second activity (Golden monkeys / Dian Fossey hike) → Transfer to Gisenyi (Lake Kivu)',
        'Day 4: Full day at Lake Kivu (boat ride, local hot springs, coffee tasting)',
        'Day 5: Return to Kigali → Departure',
      ],
      features: ['Mix of trekking, nature, and rest', 'Optional hot springs and boat excursions', 'Ideal for couples or slow travelers'],
      whatToBring: 'Trekking gear, swimwear, casual clothes, sun protection',
      color: 'from-sky-600 to-cyan-600',
    },
    {
      id: 4,
      image: '/image/under.jpg',
      title: '7-Day Rwanda Primate & Nature Safari',
      subtitle: 'Perfect for: Those wanting a complete nature-focused Rwanda trip',
      duration: '7 days, 6 nights',
      budget: 'Mid-range to luxury',
      highlights: [
        'Day 1: Arrive in Kigali → Transfer to Nyungwe Forest',
        'Day 2: Chimpanzee trekking → Nature walk or canopy walk',
        'Day 3: Optional second forest walk → Transfer to Lake Kivu',
        'Day 4: Travel to Musanze (Volcanoes NP)',
        'Day 5: Gorilla trekking',
        'Day 6: Optional Golden monkey trek / Dian Fossey hike / Twin Lakes visit',
        'Day 7: Return to Kigali → Departure',
      ],
      features: ['Gorilla + chimpanzee trekking in one tour', 'Combines three major primate regions', 'Ideal for serious wildlife lovers'],
      whatToBring: 'Complete trekking gear, multiple weather layers, professional camera',
      color: 'from-purple-600 to-pink-600',
    },
  ] as const;

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative h-[70vh] w-full">
        <Image src={pkg.heroImage} alt={pkg.title} fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <div className="text-white max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-tight mb-4">{pkg.title}</h1>
            <p className="text-lg md:text-2xl opacity-90">{pkg.subtitle}</p>
          </div>
        </div>
      </section>

      {/* Overview + Sidebar */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8">
            {pkg.overview.map((p, i) => (
              <p key={i} className="text-lg text-gray-700 leading-relaxed">{p}</p>
            ))}
          </div>
          <div>
            {(() => {
              const activeItinerary = itineraries.find((i) => i.id === selectedItinerary) || null;
              const title = activeItinerary ? `Package Features` : 'Trek Highlights';
              const subtitle = activeItinerary ? activeItinerary.title : undefined;
              const highlights = activeItinerary ? activeItinerary.features : pkg.highlights;
              return (
                <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 sticky top-6">
                  <h3 className="text-2xl font-bold mb-2 text-gray-800">{title}</h3>
                  {subtitle && (
                    <p className="text-sm text-green-600 mb-4">{subtitle}</p>
                  )}
                  <ul className="space-y-4">
                    {highlights.map((h) => (
                      <li key={h} className="flex items-center gap-3">
                        <ArrowRight className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-gray-700">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })()}
          </div>
        </div>
      </section>

      {/* Itineraries */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-6">Choose Your Trek</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From quick gorilla encounters to comprehensive primate expeditions across Rwanda&apos;s pristine forests
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {itineraries.map((itinerary) => (
              <div key={itinerary.id} className="group transform transition-all duration-300 hover:scale-105">
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden border border-gray-100">
                  <div className="relative h-48 md:h-56 w-full">
                    <Image src={itinerary.image} alt={itinerary.title} fill className="object-cover" sizes="50vw" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>
                  <div className={`h-1 bg-gradient-to-r ${itinerary.color}`}></div>

                  <div className="p-6">
                    <div className="mb-4">
                      <h3 className="text-lg font-bold text-gray-800 group-hover:text-green-600 transition-colors">{itinerary.title}</h3>
                    </div>
                    <p className="text-sm text-green-600 font-medium mb-3">{itinerary.subtitle}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{itinerary.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Mountain className="w-4 h-4" />
                        <span>{itinerary.budget}</span>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => setSelectedItinerary(selectedItinerary === itinerary.id ? null : itinerary.id)}
                      aria-expanded={selectedItinerary === itinerary.id}
                      className="inline-flex items-center gap-2 text-green-700 font-semibold hover:text-green-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                    >
                      Discover More
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    {selectedItinerary === itinerary.id && (
                      <div className="mt-6 pt-6 border-t border-gray-100 space-y-4">
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-3">Daily Itinerary</h4>
                          <ul className="space-y-2">
                            {itinerary.highlights.map((highlight, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                                <ArrowRight className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                <span>{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-3">Key Features</h4>
                          <ul className="space-y-2">
                            {itinerary.features.map((feature, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                                <ArrowRight className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="bg-green-50 rounded-lg p-4">
                          <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                            <Users className="w-4 h-4" />
                            What to Bring
                          </h4>
                          <p className="text-sm text-gray-700">{itinerary.whatToBring}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-800">Trek Moments</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {pkg.gallery.map((src, i) => (
              <div key={i} className="relative aspect-square overflow-hidden rounded-2xl shadow">
                <Image src={src} alt={`${pkg.title} ${i + 1}`} fill className="object-cover" sizes="25vw" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}