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
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-gray-900">Domain Expertise</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              At Livspace, I have developed deep expertise in three key domains, leading technology initiatives that drive business growth and operational excellence.
            </p>
            <div className="w-20 h-1 bg-secondary-500 mx-auto mt-4"></div>
          </div>

          {/* Domain Tabs */}
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-2 md:gap-4">
              <Button
                variant={activeTab === 'finance' ? 'default' : 'outline'} 
                className={activeTab === 'finance' 
                  ? 'bg-secondary-600 text-white' 
                  : 'bg-white hover:bg-gray-100 border border-gray-200 text-gray-700'}
                onClick={() => handleTabChange('finance')}
              >
                Finance Operations
              </Button>
              <Button
                variant={activeTab === 'supply-chain' ? 'default' : 'outline'} 
                className={activeTab === 'supply-chain' 
                  ? 'bg-secondary-600 text-white' 
                  : 'bg-white hover:bg-gray-100 border border-gray-200 text-gray-700'}
                onClick={() => handleTabChange('supply-chain')}
              >
                Supply Chain Management
              </Button>
              <Button
                variant={activeTab === 'people' ? 'default' : 'outline'} 
                className={activeTab === 'people' 
                  ? 'bg-secondary-600 text-white' 
                  : 'bg-white hover:bg-gray-100 border border-gray-200 text-gray-700'}
                onClick={() => handleTabChange('people')}
              >
                People Operations
              </Button>
            </div>
          </div>

          {/* Domain Content */}
          <Card className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-2/5 bg-gray-800 text-white p-8">
                <h3 className="text-2xl font-bold font-heading mb-4">{activeDomain.title}</h3>
                <p className="text-gray-300 mb-6">
                  {activeDomain.shortDescription}
                </p>
                
                <h4 className="text-secondary-400 font-bold mb-3">Key Achievements:</h4>
                <ul className="space-y-3">
                  {activeDomain.achievements.map((achievement, index) => (
                    <li key={index} className="flex gap-3">
                      <Check className="h-5 w-5 text-secondary-400 flex-shrink-0" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="md:w-3/5 p-8">
                <h4 className="text-xl font-bold font-heading mb-4 text-gray-900">Projects & Solutions</h4>
                
                <div className="space-y-6">
                  {activeDomain.projects.map((project, index) => (
                    <div key={index} className="card-hover rounded-xl bg-gray-50 p-6">
                      <h5 className="font-bold text-gray-900 mb-2">{project.title}</h5>
                      <p className="text-gray-600 mb-3">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant="secondary" className="bg-secondary-100 text-secondary-800 text-sm">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
