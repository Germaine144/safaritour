"use client";
import React, { useState } from 'react';
import Image from 'next/image'; // Import Next.js Image component
import Link from 'next/link';   // Import Next.js Link component (for buttons, if needed)
import { ArrowRight, Star, X, Calendar } from 'lucide-react'; // Import X and Calendar icons

// Define a type for your offering object
interface Offering {
  title: string;
  image: string;
  description: string;
  duration: string;
  price: string;
  images: string[];
  detailedDescription: string;
  highlights: string[];
  included: string;
}

const KenyaPage = () => {
  // Use the defined type for selectedOffering
  const [selectedOffering, setSelectedOffering] = useState<Offering | null>(null); 
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const offerings: Offering[] = [ // Explicitly type the offerings array
    {
      title: "4 Days Maasai Mara Magic",
      image: "/image/masai1.jpg",
      description: "Experience the world-famous Maasai Mara Reserve and witness the incredible wildebeest migration crossing.",
      duration: "4 Days",
      price: "From $1,300",
      images: ["/image/masai1.jpg", "/image/loin.png", "/image/big51.jpg", "/image/wilds1.jpg"],
      detailedDescription: "The Maasai Mara National Reserve offers one of the world's most spectacular wildlife experiences. This 4-day safari takes you to the heart of Kenya's most famous reserve, where the African savanna stretches endlessly and wildlife roams in abundance. Experience the dramatic wildebeest migration river crossings (seasonal), witness incredible predator-prey interactions, and explore the reserve's diverse ecosystems from acacia-dotted plains to riverine forests. The Mara is renowned for its exceptional big cat populations, particularly lions, leopards, and cheetahs, providing unparalleled opportunities for wildlife photography and observation.",
      highlights: [
        "Great Migration river crossings (July-October)",
        "Exceptional Big Five game viewing",
        "Hot air balloon safari option",
        "Maasai cultural village visit",
        "Professional safari guide and tracker",
        "Luxury tented camp accommodation",
        "Sunrise and sunset game drives",
        "Over 450 bird species"
      ],
      included: "Luxury tented camp, all meals, park fees, professional guide, 4x4 safari vehicle, cultural visits, airport transfers"
    },
    {
      title: "Amboseli Elephant Kingdom", 
      image: "/image/eeeee.jpg",
      description: "Marvel at majestic elephants against the backdrop of Mount Kilimanjaro in Amboseli National Park.",
      duration: "3 Days",
      price: "From $850",
      images: ["/image/eeeee.jpg", "/image/kilimanjaro.jpg", "/image/big52.jpg", "/image/journey.jpg"],
      detailedDescription: "Amboseli National Park is world-renowned for its large elephant herds and stunning views of Mount Kilimanjaro, Africa's highest peak. This 3-day safari focuses on close encounters with elephants in one of Kenya's most scenic parks. The park's diverse habitats include swamps, open plains, and acacia woodlands, supporting not only elephants but also lions, cheetahs, hyenas, buffalos, and numerous bird species. Amboseli's elephants are among the most studied in the world, and you'll witness their complex social behaviors up close while enjoying the majestic backdrop of snow-capped Kilimanjaro.",
      highlights: [
        "Close-up elephant encounters",
        "Mount Kilimanjaro photography",
        "Observation Hill panoramic viewpoint",
        "Swamp and wetland exploration",
        "Professional photography guidance",
        "Maasai cultural interactions",
        "Over 400 bird species",
        "Lodge with Kilimanjaro views"
      ],
      included: "Lodge accommodation, all meals, park fees, professional guide, game drives, cultural visits, transfers"
    },
    {
      title: "Tsavo East & West Safari",
      image: "/image/tsavo.jpg", 
      description: "Explore Kenya's largest national park system, home to red elephants and diverse wildlife landscapes.",
      duration: "5 Days",
      price: "From $1,400",
      images: ["/image/tsavo.jpg", "/image/big53.jpg", "/image/wilds2.jpg", "/image/jorbey.jpg"],
      detailedDescription: "Tsavo East and West National Parks together form one of the world's largest protected areas, covering over 22,000 square kilometers of diverse landscapes. This 5-day safari explores both parks, famous for their red elephants (colored by the red volcanic soil), Mzima Springs with underwater hippo viewing, and the dramatic Lugard Falls. Tsavo's vast wilderness offers a more remote safari experience with abundant wildlife including lions (including the famous man-eaters of Tsavo), leopards, buffalos, diverse antelope species, and over 500 bird species across varied terrain from savanna to volcanic hills.",
      highlights: [
        "Red elephants of Tsavo",
        "Mzima Springs underwater hippo observatory",
        "Lugard Falls and Yatta Plateau",
        "Remote wilderness experience",
        "Large predator populations",
        "Diverse geological features",
        "Night game drives available",
        "Luxury safari lodges"
      ],
      included: "Safari lodge accommodation, all meals, both park fees, professional guide, 4x4 vehicle, special excursions"
    },
    {
      title: "6 Days Great Rift Valley",
      image: "/image/liftvally.jpg",
      description: "Journey through Lake Nakuru, Lake Naivasha, and Hell's Gate for the ultimate Rift Valley experience.",
      duration: "6 Days", 
      price: "From $1,900",
      images: ["/image/liftvally.jpg", "/image/kii4.jpg", "/image/canopy.jpg", "/image/water.jpg"],
      detailedDescription: "Explore the spectacular Great Rift Valley on this comprehensive 6-day journey through Kenya's most scenic lakes and parks. Visit Lake Nakuru National Park with its millions of flamingos and endangered rhinos, explore Lake Naivasha's freshwater ecosystem with hippos and abundant birdlife, and adventure through Hell's Gate National Park where you can walk and cycle among wildlife. This safari combines incredible wildlife viewing with stunning geological features, hot springs, gorges, and some of Kenya's most dramatic landscapes, offering a perfect blend of adventure and natural beauty.",
      highlights: [
        "Millions of flamingos at Lake Nakuru",
        "Black and white rhino viewing",
        "Hell's Gate gorge walking safari",
        "Cycling among wildlife",
        "Boat safari on Lake Naivasha",
        "Crescent Island walking experience",
        "Natural hot springs and geysers",
        "Over 450 bird species"
      ],
      included: "Mid-range lodges, all meals, multiple park fees, professional guide, boat safaris, cycling equipment, transfers"
    },
    {
      title: "Samburu Special Five",
      image: "/image/samburu.jpg",
      description: "Discover unique wildlife species including Grevy's zebras, reticulated giraffes, and Somali ostriches.",
      duration: "4 Days",
      price: "From $1,250",
      images: ["/image/samburu.jpg", "/image/jorp.jpg", "/image/big51.jpg", "/image/jorp1.jpg"],
      detailedDescription: "Samburu National Reserve offers a completely different safari experience in Kenya's arid northern frontier. This 4-day adventure focuses on the unique 'Samburu Special Five' - species found only in this region including Grevy's zebras, reticulated giraffes, beisa oryx, gerenuk (giraffe-necked antelope), and Somali ostriches. The reserve's dramatic landscapes along the Ewaso Ng'iro River create a stunning backdrop for wildlife viewing. Beyond the special five, Samburu hosts elephants, lions, leopards, and over 350 bird species, while Samburu warriors add rich cultural dimensions to your safari experience.",
      highlights: [
        "Samburu Special Five viewing",
        "Ewaso Ng'iro River ecosystem",
        "Samburu warrior cultural visits",
        "Unique arid landscape photography",
        "Excellent leopard sightings",
        "Large elephant populations",
        "Endemic bird species",
        "Luxury riverside camps"
      ],
      included: "Luxury tented camp, all meals, park fees, professional guide, cultural experiences, game drives, transfers"
    },
    {
      title: "Coastal Safari & Beach",
      image: "/image/coastalbeach.jpg",
      description: "Combine thrilling safari adventures with relaxing beach time along Kenya's pristine Indian Ocean coast.",
      duration: "7 Days",
      price: "From $2,100",
      images: ["/image/coastalbeach.jpg", "/image/kii7.jpg", "/image/kii5.jpg", "/image/kii9.jpg"],
      detailedDescription: "Experience the perfect combination of safari adventure and beach relaxation on this 7-day journey. Begin with exciting game drives in Tsavo East National Park to see elephants, lions, and diverse wildlife, then transition to Kenya's stunning Indian Ocean coastline for pristine beaches, water sports, and Swahili culture. This package offers the best of both worlds - thrilling wildlife encounters followed by relaxation on white sandy beaches, snorkeling in coral reefs, exploring historic Swahili towns, and enjoying fresh seafood while watching stunning sunsets over the Indian Ocean.",
      highlights: [
        "Tsavo East wildlife safari",
        "Pristine beach relaxation",
        "Coral reef snorkeling",
        "Swahili cultural experiences",
        "Water sports activities",
        "Historic coastal town visits",
        "Fresh seafood dining",
        "Beachfront luxury resort"
      ],
      included: "Safari lodge and beach resort, all meals, park fees, professional guide, water activities, cultural tours, transfers"
    }
  ];

  // Auto-slide effect
  React.useEffect(() => {
    if (selectedOffering) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => 
          prev === selectedOffering.images.length - 1 ? 0 : prev + 1
        );
      }, 2500);

      return () => clearInterval(interval);
    }
  }, [selectedOffering]);

  // Use the defined type for the 'offering' parameter
  const openModal = (offering: Offering) => { 
    setSelectedOffering(offering);
    setCurrentImageIndex(0);
  };

  const closeModal = () => {
    setSelectedOffering(null);
    setCurrentImageIndex(0);
  };

  return (
    <>
      {/* Hero Section with Video Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          {/* Background gradient */}
          <div className="w-full h-full "></div>
         <div className="absolute inset-0 w-full h-full">
                  <Image
                    src="/image/masai1.jpg" 
                    alt="Safari Background"
                    fill
                    className="object-cover brightness-[0.3]"
                    priority
                    sizes="100vw"
                  />
                </div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-6xl px-6">
          <div className="mb-12">
            <div className="text-6xl md:text-8xl lg:text-9xl font-serif font-bold mb-6">
              <span className="text-orange-700">K</span>ENYA SAFARI
            </div>
          </div>
          
          <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed opacity-90">
            Discover the birthplace of safari in Kenya, where endless savannas meet snow-capped mountains. 
            From the legendary Maasai Mara to the elephant herds of Amboseli, experience Africa&apos;s most iconic wildlife adventures.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            {/* Using Link component for navigation */}
            <Link href="/explore-kenya" >
              <button className="bg-orange-700 hover:bg-green-800 text-white px-10 py-4 uppercase tracking-widest font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl">
                EXPLORE KENYA
              </button>
            </Link>
            <Link href="/safaris" >
              <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-10 py-4 uppercase tracking-widest font-semibold transition-all duration-300 shadow-xl">
                VIEW SAFARIS
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Our Offerings Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
              OUR KENYA ADVENTURES
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offerings.map((offering, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative w-full h-64"> {/* Define dimensions for Image parent */}
                  <Image 
                    src={offering.image}
                    alt={offering.title}
                    fill // Use 'fill' to make image cover parent, parent must be relative and have dimensions
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Optimize image loading
                  />
                  <div className="absolute top-4 right-4 bg-orange-700 text-white px-3 py-1 rounded-full text-sm font-semibold z-10"> {/* Add z-10 to keep it above image */}
                    {offering.duration}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{offering.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{offering.description}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-orange-600">{offering.price}</span>
                    <div className="flex items-center text-yellow-500">
                      <Star className="w-5 h-5 fill-current" />
                      <Star className="w-5 h-5 fill-current" />
                      <Star className="w-5 h-5 fill-current" />
                      <Star className="w-5 h-5 fill-current" />
                      <Star className="w-5 h-5 fill-current" />
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => openModal(offering)}
                    className="w-full bg-orange-700 hover:bg-orange-800 text-white py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Extraordinary Wildlife Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
              The Legendary Wildlife of Kenya
            </h2>
            
            <div className="text-lg text-gray-600 leading-relaxed mb-12">
              <p className="mb-6">
                Kenya is the birthplace of the modern safari and remains Africa&apos;s most celebrated wildlife destination. 
                The country&apos;s diverse landscapes, from sweeping savannas to snow-capped mountains, support an incredible array of wildlife 
                that has captured the imagination of travelers for over a century.
              </p>
              
              <p className="mb-6">
                The <strong>Maasai Mara National Reserve</strong> is Kenya&apos;s crown jewel, famous worldwide for the Great Migration spectacle 
                where millions of wildebeest and zebras cross the Mara River. The reserve also boasts exceptional Big Five populations, 
                particularly lions and leopards, making it one of the world&apos;s premier big cat destinations with incredible predator-prey interactions.
              </p>
              
              <p className="mb-6">
                <strong>Amboseli National Park</strong> offers one of Africa&apos;s most iconic scenes - massive elephant herds roaming beneath 
                the majestic Mount Kilimanjaro. This UNESCO Biosphere Reserve is renowned for its elephant research and provides unparalleled 
                opportunities to observe these gentle giants up close while enjoying breathtaking mountain vistas.
              </p>
              
              <p className="mb-6">
                <strong>Samburu National Reserve</strong> showcases Kenya&apos;s unique northern ecosystem with the &quot;Samburu Special Five&quot; - 
                Grevy&apos;s zebras, reticulated giraffes, beisa oryx, gerenuk, and Somali ostriches. This arid landscape along the Ewaso Ng&apos;iro River 
                provides a completely different safari experience with species found nowhere else in Kenya.
              </p>
              
              <p className="mb-8">
                The <strong>Great Rift Valley</strong> lakes, including Nakuru and Naivasha, create spectacular birdwatching opportunities 
                with millions of flamingos painting the alkaline waters pink. These diverse ecosystems support over 1,000 bird species, 
                making Kenya one of the world&apos;s top birding destinations alongside its renowned big game viewing.
              </p>
              
              <p className="text-xl font-semibold text-gray-800">
                Kenya&apos;s wildlife heritage represents the very soul of the African safari experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-orange-700 to-yellow-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        
        <div className="relative z-10 container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            READY FOR YOUR KENYA SAFARI?
          </h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto leading-relaxed opacity-90">
            Experience the magic of Kenya&apos;s legendary wildlife and create memories that will last a lifetime
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/book" > {/* Assuming a booking page */}
              <button className="bg-white text-orange-700 hover:bg-gray-100 px-10 py-4 uppercase tracking-widest font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl">
                BOOK ADVENTURE
              </button>
            </Link>
            <Link href="/plan-safari"> {/* Assuming a plan safari page */}
              <button className="border-2 border-white text-white hover:bg-white hover:text-green-700 px-10 py-4 uppercase tracking-widest font-semibold transition-all duration-300 shadow-xl">
                PLAN SAFARI
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedOffering && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          {/* Background Image - Using Image component */}
          <Image
            src="/image/masai1.jpg" // You might want to make this dynamic based on the offering
            alt="Modal Background"
            fill
            className="object-cover object-center opacity-20"
            quality={50} // Reduced quality for background image
            sizes="100vw" // Take full viewport width
          />
          
          <div className="bg-white rounded-lg max-w-6xl w-full h-[85vh] overflow-hidden relative shadow-2xl z-20"> {/* Add z-20 to be above the background image */}
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-50 bg-gray-800 text-white rounded-full p-2 hover:bg-gray-700 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="flex h-full">
              {/* Left Side - Auto Image Slideshow */}
              <div className="w-2/5 relative overflow-hidden">
                <div className="relative h-full">
                  <div 
                    className="flex h-full transition-transform duration-1000 ease-in-out"
                    style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
                  >
                    {selectedOffering.images.map((image: string, index: number) => ( // Added type annotations
                      <div key={index} className="min-w-full h-full relative"> {/* Added relative for fill */}
                        <Image
                          src={image}
                          alt={`${selectedOffering.title} ${index + 1}`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw" // Responsive sizing for modal images
                        />
                      </div>
                    ))}
                  </div>

                  {/* Auto-slide indicators */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10"> {/* Added z-10 */}
                    {selectedOffering.images.map((_: string, index: number) => ( // Added type annotation
                      <div
                        key={index}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          index === currentImageIndex ? 'bg-white scale-125' : 'bg-white/60'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Side - Content */}
              <div className="w-3/5 overflow-y-auto bg-white">
                <div className="p-8">
                  <div className="mb-6">
                    <h2 className="text-3xl font-bold text-gray-900 mb-3 uppercase tracking-wide">
                      {selectedOffering.title}
                    </h2>
                    <div className="flex items-center space-x-6 text-gray-600 mb-4">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-5 h-5 text-orange-600" />
                        <span className="font-medium">{selectedOffering.duration}</span>
                      </div>
                      <div className="text-3xl font-bold text-orange-600">
                        {selectedOffering.price}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3 uppercase tracking-wide">
                        Welcome to this Safari Experience
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {selectedOffering.detailedDescription}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3 uppercase tracking-wide">
                        Tour Highlights
                      </h3>
                      <ul className="space-y-3">
                        {selectedOffering.highlights.map((highlight: string, index: number) => ( // Added type annotations
                          <li key={index} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-orange-600 rounded-full mt-3 flex-shrink-0"></div>
                            <span className="text-gray-700 leading-relaxed">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3 uppercase tracking-wide">
                        What&apos;s Included
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {selectedOffering.included}
                      </p>
                    </div>

                    <div className="pt-6 pb-4 sticky bottom-0 bg-white">
                      <div className="flex flex-col space-y-3">
                        <Link href="/book-now" > {/* Assuming a dynamic booking link */}
                          <button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 px-6 rounded-md font-semibold transition-colors uppercase tracking-wide">
                            Book Now
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default KenyaPage;