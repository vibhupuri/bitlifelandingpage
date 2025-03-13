import { Button } from "@/components/ui/button";

export default function ServicesSection() {
  return (
    <section className="bg-gray-100 py-16 px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left side - Text Content */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Engineering Tomorrow's Skyline
          </h2>
          <p className="text-gray-700 mb-6">
            Delivering next-generation engineering solutions by seamlessly
            combining client-focused strategies and modern innovation.
          </p>
          <Button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-md">
            Read More
          </Button>
        </div>
        {/* Right side - Image */}
        <div>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Nashville_skyline_from_Fort_Negley_2018.jpg/1200px-Nashville_skyline_from_Fort_Negley_2018.jpg?20180420224827"
            alt="Skyline"
            className="rounded-lg shadow-lg w-full h-auto object-cover"
          />
        </div>
      </div>
      
      {/* Services Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
        {/* Left side - Image */}
        <div>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Earth_from_space_%28banner_esVoy%29.jpg/1200px-Earth_from_space_%28banner_esVoy%29.jpg?20180508204552"
            alt="Global Services"
            className="rounded-lg shadow-lg w-full h-auto object-contain"
          />
        </div>
        {/* Right side - Text Content */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Services</h2>
          <p className="text-gray-700 mb-6">
            We provide scalable solutions across industries, from cutting-edge
            engineering to AI-driven infrastructure development.
          </p>
          <Button className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-2 rounded-md">
            Contact
          </Button>
        </div>
      </div>
    </section>
  );
}