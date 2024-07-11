import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-gray-900 text-white flex items-center justify-center">
        <img src="/placeholder.svg" alt="Band performing" className="absolute inset-0 w-full h-full object-cover opacity-50" />
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-bold mb-4">Band Name</h1>
          <p className="text-xl mb-8">Experience the sound of a generation</p>
          <Button size="lg">See Tour Dates</Button>
        </div>
      </section>

      {/* Featured Tour Dates */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Upcoming Tour Dates</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[1, 2, 3].map((_, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>City Name</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Date: MM/DD/YYYY</p>
                  <p>Venue: Venue Name</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <Button variant="outline">View All Dates</Button>
          </div>
        </div>
      </section>

      {/* Latest Release */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <img src="/placeholder.svg" alt="Latest album cover" className="w-full max-w-md mx-auto rounded-lg shadow-lg" />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">Latest Release</h2>
              <h3 className="text-2xl mb-4">Album/Single Name</h3>
              <p className="mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <Button>Listen Now</Button>
            </div>
          </div>
        </div>
      </section>

      {/* About the Band */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">About the Band</h2>
          <p className="text-center max-w-2xl mx-auto mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <div className="text-center">
            <Button variant="link">Read More</Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p>&copy; 2024 Band Name. All rights reserved.</p>
            </div>
            <div className="flex space-x-4 mb-4 md:mb-0">
              <a href="#" className="hover:text-gray-400"><Facebook size={24} /></a>
              <a href="#" className="hover:text-gray-400"><Twitter size={24} /></a>
              <a href="#" className="hover:text-gray-400"><Instagram size={24} /></a>
              <a href="#" className="hover:text-gray-400"><Youtube size={24} /></a>
            </div>
            <div>
              <a href="#" className="hover:underline mr-4">Privacy Policy</a>
              <a href="#" className="hover:underline">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;