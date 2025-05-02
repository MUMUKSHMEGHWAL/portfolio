import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { DOMAIN_DATA, DomainTab } from '@/lib/constants';

export default function DomainExpertise() {
  const [activeTab, setActiveTab] = useState<DomainTab>('finance');
  
  const handleTabChange = (tab: DomainTab) => {
    setActiveTab(tab);
  };
  
  // Get the active domain data
  const activeDomain = DOMAIN_DATA[activeTab];

  return (
    <section id="domains" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 opacity-0" data-scroll="fade-in-up" data-scroll-once="true">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-gray-900">Domain Expertise</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              At Livspace, I have developed deep expertise in three key domains, leading technology initiatives that drive business growth and operational excellence.
            </p>
            <div className="w-20 h-1 bg-secondary-500 mx-auto mt-4"></div>
          </div>

          {/* Domain Tabs */}
          <div className="mb-12 opacity-0" data-scroll="fade-in-up" data-scroll-once="true" data-scroll-delay="0.2">
            <div className="max-w-3xl mx-auto">
              <div className="grid grid-cols-3 gap-2">
                <div className="col-span-1">
                  <Button
                    variant="ghost"
                    className={`w-full rounded-lg py-2 sm:py-3 px-2 sm:px-4 font-medium text-center transition-all duration-300 text-xs sm:text-sm md:text-base ${
                      activeTab === 'finance' 
                        ? 'bg-secondary-600 text-white shadow-md' 
                        : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                    }`}
                    onClick={() => handleTabChange('finance')}
                  >
                    <span>Finance</span>
                  </Button>
                </div>
                
                <div className="col-span-1">
                  <Button
                    variant="ghost"
                    className={`w-full rounded-lg py-2 sm:py-3 px-2 sm:px-4 font-medium text-center transition-all duration-300 text-xs sm:text-sm md:text-base ${
                      activeTab === 'supply-chain' 
                        ? 'bg-secondary-600 text-white shadow-md' 
                        : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                    }`}
                    onClick={() => handleTabChange('supply-chain')}
                  >
                    <span>Supply Chain</span>
                  </Button>
                </div>
                
                <div className="col-span-1">
                  <Button
                    variant="ghost"
                    className={`w-full rounded-lg py-2 sm:py-3 px-2 sm:px-4 font-medium text-center transition-all duration-300 text-xs sm:text-sm md:text-base ${
                      activeTab === 'people' 
                        ? 'bg-secondary-600 text-white shadow-md' 
                        : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                    }`}
                    onClick={() => handleTabChange('people')}
                  >
                    <span>People</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Domain Content */}
          <Card className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500 opacity-0" data-scroll="fade-in-up" data-scroll-once="true" data-scroll-delay="0.4">
            <div className="flex flex-col lg:flex-row">
              <div className="w-full lg:w-full bg-gradient-to-br from-gray-800 to-gray-900 text-white p-6 md:p-8 lg:p-10">
                <div className="flex flex-col md:flex-row md:items-start md:gap-8">
                  {/* Domain Icon/Image */}
                  <div className="hidden md:flex md:w-32 lg:w-40 h-32 items-center justify-center bg-gray-700/30 rounded-xl mb-6 md:mb-0 flex-shrink-0">
                    <div className="text-5xl text-secondary-400 font-bold">
                      {activeTab === 'finance' && '₹'}
                      {activeTab === 'supply-chain' && '🔄'}
                      {activeTab === 'people' && '👥'}
                    </div>
                  </div>
                  
                  {/* Domain Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-bold font-heading mb-4">{activeDomain.title}</h3>
                    <p className="text-gray-300 mb-6 text-lg">
                      {activeDomain.shortDescription}
                    </p>
                    
                    <h4 className="text-secondary-400 font-bold mb-4 text-xl">Key Achievements:</h4>
                    <ul className="space-y-4">
                      {activeDomain.achievements.map((achievement, index) => (
                        <li 
                          key={index} 
                          className="flex gap-3 opacity-0 animate-slide-in-right"
                          style={{ animationDelay: `${0.5 + (index * 0.15)}s` }}
                        >
                          <div className="mt-1">
                            <Check className="h-5 w-5 text-secondary-400 flex-shrink-0" />
                          </div>
                          <span className="text-gray-100">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* Key Technologies/Tools Section */}
                <div className="mt-8 pt-6 border-t border-gray-700/50">
                  <h4 className="text-secondary-400 font-bold mb-3">Technologies & Tools:</h4>
                  <div className="flex flex-wrap gap-2">
                    {activeTab === 'finance' && (
                      <>
                        <Badge className="bg-gray-700 text-secondary-300 hover:bg-gray-600">Java</Badge>
                        <Badge className="bg-gray-700 text-secondary-300 hover:bg-gray-600">Python</Badge>
                        <Badge className="bg-gray-700 text-secondary-300 hover:bg-gray-600">ReactJS</Badge>
                        <Badge className="bg-gray-700 text-secondary-300 hover:bg-gray-600">PostgreSQL</Badge>
                        <Badge className="bg-gray-700 text-secondary-300 hover:bg-gray-600">AWS</Badge>
                      </>
                    )}
                    
                    {activeTab === 'supply-chain' && (
                      <>
                        <Badge className="bg-gray-700 text-secondary-300 hover:bg-gray-600">Golang</Badge>
                        <Badge className="bg-gray-700 text-secondary-300 hover:bg-gray-600">NodeJS</Badge>
                        <Badge className="bg-gray-700 text-secondary-300 hover:bg-gray-600">MongoDB</Badge>
                        <Badge className="bg-gray-700 text-secondary-300 hover:bg-gray-600">Google Maps API</Badge>
                        <Badge className="bg-gray-700 text-secondary-300 hover:bg-gray-600">React Native</Badge>
                      </>
                    )}
                    
                    {activeTab === 'people' && (
                      <>
                        <Badge className="bg-gray-700 text-secondary-300 hover:bg-gray-600">VueJS</Badge>
                        <Badge className="bg-gray-700 text-secondary-300 hover:bg-gray-600">Express</Badge>
                        <Badge className="bg-gray-700 text-secondary-300 hover:bg-gray-600">Firebase</Badge>
                        <Badge className="bg-gray-700 text-secondary-300 hover:bg-gray-600">Redux</Badge>
                        <Badge className="bg-gray-700 text-secondary-300 hover:bg-gray-600">MySQL</Badge>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
