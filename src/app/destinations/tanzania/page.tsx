"use client";
import React, { useState } from 'react';
import { ArrowRight, Star, X, Calendar } from 'lucide-react'; // Added X and Calendar imports
import Image from 'next/image'; // Import Next.js Image component

// Define a type for your offering structure for better type safety
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

const TanzaniaPage = () => {
  const [selectedOffering, setSelectedOffering] = useState<Offering | null>(null); // Use Offering type
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const offerings: Offering[] = [ // Added type annotation for offerings array
    {
      title: "5 Days Serengeti Safari",
      image: "/image/serengetisafari.jpg",
      description: "Witness the Great Migration and encounter the Big Five in the world-famous Serengeti National Park.",
      duration: "5 Days",
      price: "From $1,500",
      images: ["/image/serengetisafari.jpg", "/image/big51.jpg", "/image/loin.png", "/image/tsavo.jpg"],
      detailedDescription: "Experience the iconic Serengeti National Park on this 5-day safari adventure that takes you deep into Africa's most celebrated wildlife sanctuary. Witness the dramatic Great Migration where millions of wildebeest and zebras traverse the endless plains. The Serengeti's diverse ecosystems support an incredible array of wildlife including large prides of lions, elusive leopards, swift cheetahs, and massive elephant herds. Our expert guides will take you to the best game viewing locations at optimal times for unforgettable wildlife encounters and photographic opportunities.",
      highlights: [
        "Great Migration viewing (seasonal)",
        "Big Five game drives",
        "Professional safari guide and tracker",
        "Luxury tented camp accommodation",
        "Sunrise and sunset game drives",
        "Visit to Serengeti Visitor Center",
        "All meals and premium beverages included"
      ],
      included: "Luxury tented accommodation, all meals, park fees, professional guide, 4x4 safari vehicle, airport transfers"
    },
    {
      title: "Ngorongoro Crater Adventure", 
      image: "/image/ngorongorocreate.jpg",
      description: "Explore the UNESCO World Heritage site known as Africa's Eden, home to the highest concentration of wildlife.",
      duration: "3 Days",
      price: "From $900",
      images: ["/image/ngorongorocreate.jpg", "/image/big53.jpg", "/image/wilds1.jpg", "/image/eeeee.jpg"],
      detailedDescription: "Descend into the world's largest intact volcanic caldera, the spectacular Ngorongoro Crater. This 3-day adventure takes you to one of Africa's most unique ecosystems where wildlife thrives in a natural amphitheater. The crater floor hosts an exceptional density of wildlife including the endangered black rhino, large elephant bulls, hippos, flamingos, and one of Africa's densest populations of predators. The crater rim offers breathtaking panoramic views, while the crater floor provides intimate wildlife encounters in this UNESCO World Heritage site.",
      highlights: [
        "Full-day crater floor game drive",
        "Black rhino viewing opportunities",
        "Crater rim lodge with panoramic views",
        "Visit to Maasai village",
        "Olduvai Gorge archaeological site",
        "Picnic lunch on crater floor",
        "Expert archaeological and ecological interpretation"
      ],
      included: "Crater rim lodge accommodation, all meals, crater fees, professional guide, 4x4 safari vehicle, cultural visits"
    },
    {
      title: "Tarangire Elephant Paradise",
      image: "/image/tarangire.jpg", 
      description: "Experience massive elephant herds and ancient baobab trees in Tanzania's elephant sanctuary.",
      duration: "4 Days",
      price: "From $1,100",
      images: ["/image/tarangire.jpg", "/image/big52.jpg", "/image/wilds2.jpg", "/image/journey.jpg"],
      detailedDescription: "Tarangire National Park offers an intimate safari experience away from the crowds. Famous for its massive elephant herds numbering in the hundreds, this 4-day safari showcases Africa's gentle giants against a backdrop of iconic baobab trees. The Tarangire River serves as a wildlife magnet during the dry season, attracting elephants, lions, leopards, buffalo, and diverse antelope species. The park is also a birding paradise with over 550 species. Experience game drives through diverse landscapes from riverine forests to open plains dotted with ancient baobabs.",
      highlights: [
        "Close encounters with large elephant herds",
        "Ancient baobab tree photography",
        "Tarangire River wildlife concentrations",
        "Walking safaris with armed ranger",
        "Night game drives for nocturnal species",
        "Over 550 bird species",
        "Luxury safari camp with river views"
      ],
      included: "Safari camp accommodation, all meals, park fees, professional guide, walking safari, night drives, transfers"
    },
    {
      title: "7 Days Northern Circuit",
      image: "/image/north cicuri.jpg",
      description: "Complete northern circuit covering Serengeti, Ngorongoro, Tarangire, and Lake Manyara parks.",
      duration: "7 Days", 
      price: "From $2,800",
      images: ["/image/north cicuri.jpg", "/image/combi1.jpg", "/image/canopy.jpg", "/image/chimanze.jpg"],
      detailedDescription: "Our most comprehensive Tanzania safari package takes you on an epic 7-day journey through the Northern Circuit's premier parks. This carefully crafted itinerary combines the Serengeti's vast plains, Ngorongoro Crater's wildlife theater, Tarangire's elephant kingdom, and Lake Manyara's tree-climbing lions. Experience the full diversity of Tanzania's ecosystems from volcanic highlands to riverine forests and open savannas. This journey provides multiple opportunities to encounter the Big Five along with cheetahs, wild dogs, and hundreds of other species in their natural habitats.",
      highlights: [
        "Four premier national parks in one trip",
        "Complete Big Five viewing opportunities",
        "Great Migration (seasonal)",
        "Ngorongoro Crater descent",
        "Tree-climbing lions at Lake Manyara",
        "Tarangire's elephant herds",
        "Premium lodge and tented camp accommodation"
      ],
      included: "Premium accommodations, all meals, all park fees, professional guide throughout, 4x4 safari vehicle, inter-park transfers"
    },
    {
      title: "Kilimanjaro Wildlife Safari",
      image: "/image/kilimanjaro.jpg",
      description: "Combine wildlife viewing with breathtaking views of Mount Kilimanjaro in Amboseli ecosystem.",
      duration: "6 Days",
      price: "From $2,200",
      images: ["/image/kilimanjaro.jpg", "/image/jorbey.jpg", "/image/jorp.jpg", "/image/jorp1.jpg"],
      detailedDescription: "Experience the spectacular combination of Africa's highest peak, Mount Kilimanjaro, with incredible wildlife viewing in the Amboseli ecosystem. This 6-day safari offers stunning photographic opportunities with elephants and other wildlife framed against the snow-capped peak of Kilimanjaro. The park's open plains and swamps support large elephant herds, buffalo, wildebeest, zebras, and diverse birdlife. Clear morning views of Kilimanjaro create the perfect backdrop for unforgettable wildlife photography and game viewing experiences.",
      highlights: [
        "Mount Kilimanjaro views and photography",
        "Large elephant herds",
        "Observation Hill panoramic viewpoint",
        "Swamp ecosystem exploration",
        "Maasai cultural interactions",
        "Professional photography guidance",
        "Luxury lodge with mountain views"
      ],
      included: "Lodge accommodation with Kilimanjaro views, all meals, park fees, professional guide, photography support, cultural visits"
    },
    {
      title: "Lake Manyara Tree Climbing",
      image: "/image/manayara.jpg",
      description: "Famous for tree-climbing lions and incredible birdlife along the alkaline lake shores.",
      duration: "2 Days",
      price: "From $600",
      images: ["/image/manayara.jpg", "/image/kii7.jpg", "/image/kii4.jpg", "/image/kii5.jpg"],
      detailedDescription: "Lake Manyara National Park may be compact, but it offers one of Tanzania's most unique wildlife experiences. This 2-day safari focuses on the park's famous tree-climbing lions, a behavior rarely seen elsewhere in Africa. The alkaline lake shores attract thousands of flamingos and over 400 other bird species. The park's diverse ecosystems include groundwater forests, acacia woodlands, and open plains, supporting elephants, buffalo, giraffes, zebras, hippos, and troops of baboons. The dramatic Rift Valley escarpment provides stunning backdrops for wildlife photography.",
      highlights: [
        "Tree-climbing lion viewing",
        "Flamingo flocks on alkaline lake",
        "Over 400 bird species",
        "Groundwater forest walks",
        "Hippo pools observation",
        "Rift Valley escarpment views",
        "Compact park ideal for short safaris"
      ],
      included: "Lodge accommodation, all meals, park fees, professional guide, game drives, birdwatching excursions"
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

  const openModal = (offering: Offering) => { // Use Offering type for parameter
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
          {/* Background image fallback */}
          <div className="w-full h-full "></div>
         <div className="absolute inset-0 w-full h-full">
                  <Image
                    src="/image/kilimanjaro.jpg" 
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
              <span className="text-orange-700">T</span>ANZANIA SAFARI
            </div>
          </div>
          
          <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed opacity-90">
            Experience the crown jewel of African safaris in Tanzania. From the Great Migration in Serengeti 
            to the wildlife paradise of Ngorongoro Crater, discover Africa&apos;s most spectacular wildlife encounters.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-orange-700 hover:bg-amber-800 text-white px-10 py-4 uppercase tracking-widest font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl">
              START YOUR SAFARI
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-10 py-4 uppercase tracking-widest font-semibold transition-all duration-300 shadow-xl">
              VIEW PACKAGES
            </button>
          </div>
        </div>
      </section>

      {/* Our Offerings Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
              OUR SAFARI PACKAGES
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offerings.map((offering, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative w-full h-64"> {/* Define dimensions for Image parent */}
                  {/* Using Next.js Image component */}
                  <Image 
                    src={offering.image}
                    alt={offering.title}
                    fill // Use 'fill' to make image cover parent, parent must be relative and have dimensions
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Optimize image loading
                  />
                  <div className="absolute top-4 right-4 bg-orange-700 text-white px-3 py-1 rounded-full text-sm font-semibold z-10"> {/* Added z-10 */}
                    {offering.duration}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{offering.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{offering.description}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-amber-600">{offering.price}</span>
                    <div className="flex items-center text-amber-600">
                      <Star className="w-5 h-5 fill-current" />
                      <Star className="w-5 h-5 fill-current" />
                      <Star className="w-5 h-5 fill-current" />
                      <Star className="w-5 h-5 fill-current" />
                      <Star className="w-5 h-5 fill-current" />
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => openModal(offering)}
                    className="w-full bg-orange-700 hover:bg-amber-700 text-white py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
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
              The Spectacular Wildlife of Tanzania
            </h2>
            
            <div className="text-lg text-gray-600 leading-relaxed mb-12">
              <p className="mb-6">
                Tanzania stands as the ultimate safari destination, offering the most diverse and abundant wildlife experiences in Africa. 
                The country&apos;s vast national parks and conservation areas provide sanctuary to millions of animals and create some of the world&apos;s most extraordinary wildlife spectacles.
              </p>
              
              <p className="mb-6">
                The <strong>Serengeti National Park</strong> is legendary for hosting the Great Migration, where over two million wildebeest, zebras, and gazelles 
                traverse the plains in an endless cycle of life. Beyond the migration, the Serengeti supports large populations of the Big Five, 
                cheetahs, wild dogs, and countless other species across its 15,000 square kilometers of pristine wilderness.
              </p>
              
              <p className="mb-6">
                <strong>Ngorongoro Crater</strong>, often called &quot;Africa&apos;s Eden,&quot; is a UNESCO World Heritage site featuring the world&apos;s largest intact volcanic caldera. 
                This natural amphitheater hosts an incredible density of wildlife, including the rare black rhino, massive elephant bulls, 
                and one of Africa&apos;s largest lion populations, all contained within this 260-square-kilometer paradise.
              </p>
              
              <p className="mb-6">
                <strong>Tarangire National Park</strong> is renowned for its enormous elephant herds and iconic baobab trees. During the dry season, 
                the Tarangire River becomes a magnet for wildlife, creating incredible game viewing opportunities with elephants, lions, leopards, 
                and over 500 bird species congregating along the riverbanks.
              </p>
              
              <p className="mb-8">
                <strong>Lake Manyara National Park</strong> offers unique experiences with its famous tree-climbing lions, vast flamingo populations, 
                and diverse ecosystems ranging from alkaline lakes to dense woodlands. The park showcases Tanzania&apos;s incredible biodiversity in a compact area.
              </p>
              
              <p className="text-xl font-semibold text-gray-800">
                Tanzania&apos;s wildlife represents the very essence of the African safari dream.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-amber-700 to-orange-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        
        <div className="relative z-10 container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            READY FOR YOUR TANZANIA SAFARI?
          </h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto leading-relaxed opacity-90">
            Join us for the ultimate African safari experience and witness the greatest wildlife show on Earth
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-white text-amber-700 hover:bg-gray-100 px-10 py-4 uppercase tracking-widest font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl">
              BOOK SAFARI
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-amber-700 px-10 py-4 uppercase tracking-widest font-semibold transition-all duration-300 shadow-xl">
              GET QUOTE
            </button>
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedOffering && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          {/* Background Image - Using Image component */}
          <Image
            src="/image/serengetisafari.jpg" // You might want to make this dynamic based on the offering
            alt="Modal Background"
            fill
            className="object-cover object-center opacity-20"
            quality={50} // Optional: reduced quality for background, as it's blurred
          />
          
          <div className="bg-white rounded-lg max-w-6xl w-full h-[85vh] overflow-hidden relative shadow-2xl z-20">
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
                        />
                      </div>
                    ))}
                  </div>

                  {/* Auto-slide indicators */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
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
                        <Calendar className="w-5 h-5 text-amber-600" />
                        <span className="font-medium">{selectedOffering.duration}</span>
                      </div>
                      <div className="text-3xl font-bold text-amber-600">
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
                            <div className="w-2 h-2 bg-amber-600 rounded-full mt-3 flex-shrink-0"></div>
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
                        <button className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 px-6 rounded-md font-semibold transition-colors uppercase tracking-wide">
                          Book Now
                        </button>  
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

export default TanzaniaPage;