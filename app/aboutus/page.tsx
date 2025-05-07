import Image from 'next/image';
import heroBackground from '/path/to/your/image.jpg'; // Replace with the correct path to your image
import { FiArrowRight } from 'react-icons/fi'; // Corrected import from 'react-icons/fi'

<section className="relative min-h-screen">
        <div className="absolute inset-0 z-0">
                      <Image 
            src={heroBackground}
            alt="Luxury Property" 
            fill
            style={{ objectFit: "cover" }}
            priority
          />
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
          <div className="text-center max-w-3xl mx-auto text-white">
            <p className="text-sm uppercase font-medium tracking-wider text-gray-300 mb-4">OUR SERVICES</p>
            
            <h1 className="text-4xl md:text-5xl font-serif leading-tight mb-6">
              Making Your Property Journey<br />
              Smarter, Simpler, and Faster
            </h1>
            
            <p className="text-gray-200 mb-8 max-w-xl mx-auto">
              At PropertyDrone Realty, we offer more than listings—we offer complete solutions.
              From stunning drone views to personalized consultations, we're here to make your 
              real estate experience effortless and rewarding.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-blue-900 text-white px-6 py-3 flex items-center justify-center gap-2 hover:bg-blue-800 transition-colors">
                Explore Properties
                <FiArrowRight size={18} />
              </button>
              <button className="border border-gray-300 bg-white text-gray-800 px-6 py-3 hover:bg-gray-50 transition-colors">
                Book Consultation
              </button>
            </div>
          </div>
        </div>
      </section>