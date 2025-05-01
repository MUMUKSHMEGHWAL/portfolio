import { Button } from '@/components/ui/button';
import { scrollToElement } from '@/lib/utils';

export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-16">
            <div className="w-full lg:w-3/5">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6 leading-tight text-gray-900">
                Product & Tech Lead
                <span className="text-secondary-600 block md:inline"> Professional</span>
                <span className="block text-3xl md:text-4xl mt-2 text-gray-700">at Livspace</span>
              </h1>
              <div className="flex flex-wrap gap-4 mt-8">
                <Button 
                  variant="default" 
                  size="lg"
                  className="bg-secondary-600 hover:bg-secondary-700 shadow-lg shadow-secondary-600/20"
                  onClick={() => scrollToElement('domains')}
                >
                  Explore My Work
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-gray-300 hover:border-secondary-600 hover:text-secondary-600 text-gray-700"
                  onClick={() => scrollToElement('contact')}
                >
                  Let's Connect
                </Button>
              </div>
            </div>
            <div className="w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden border-4 border-secondary-100 shadow-xl">
              <img 
                src="/images/profile.jpg" 
                alt="Mumuksh Meghwal" 
                className="w-full h-full object-cover object-center"
                onError={(e) => console.error("Image failed to load", e)}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
