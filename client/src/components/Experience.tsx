import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { Check, Briefcase, MapPin, Clock } from 'lucide-react';
import { TECHNICAL_SKILLS } from '@/lib/constants';

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-gray-900">Professional Experience</h2>
            <div className="w-20 h-1 bg-secondary-500 mx-auto"></div>
          </div>

          <div className="flex flex-col md:flex-row gap-10 items-start">
            <div className="w-full md:w-2/5 sticky top-24">
              <Card className="bg-gray-800 text-white border-none shadow-xl">
                <CardContent className="p-8">
                  <svg 
                    viewBox="0 0 200 60" 
                    className="h-12 mb-6"
                    aria-label="Livspace Logo"
                  >
                    <rect width="200" height="60" fill="none" />
                    <text x="10" y="40" fill="white" fontSize="24" fontWeight="bold">Livspace</text>
                  </svg>
                  
                  <h3 className="text-2xl font-bold font-heading mb-2">Livspace</h3>
                  <p className="text-gray-300 mb-6">Product & Tech Lead</p>
                  
                  <Separator className="my-6 bg-gray-700" />
                  
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 text-secondary-400 mr-3" />
                      <span>2018 - Present</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-5 w-5 text-secondary-400 mr-3" />
                      <span>Bangalore, India</span>
                    </div>
                    <div className="flex items-start">
                      <Briefcase className="h-5 w-5 text-secondary-400 mr-3 mt-1" />
                      <span>Leading technology initiatives across Finance, Supply Chain, and People Operations domains</span>
                    </div>
                  </div>
                  
                  <Button 
                    className="w-full mt-6 bg-secondary-600 hover:bg-secondary-700"
                    onClick={() => document.getElementById('domains')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    View Domain Expertise
                  </Button>
                </CardContent>
              </Card>
            </div>
            
            <div className="w-full md:w-3/5">
              <Card className="mb-8 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold font-heading mb-4 text-gray-900">About My Role</h3>
                  <p className="text-gray-600 mb-4">
                    As a Product and Tech Lead at Livspace, I bridge the gap between business needs and technology solutions. I collaborate with cross-functional teams to design, develop, and implement innovative solutions that drive operational efficiency and business growth.
                  </p>
                  <p className="text-gray-600">
                    My expertise spans across multiple domains, allowing me to understand complex business requirements and translate them into scalable technological implementations.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="mb-8 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold font-heading mb-4 text-gray-900">Key Responsibilities</h3>
                  <ul className="space-y-3">
                    {[
                      "Leading product development lifecycle from concept to launch",
                      "Defining technical architecture and implementation strategy",
                      "Collaborating with stakeholders to understand business requirements",
                      "Managing cross-functional teams to deliver high-quality solutions",
                      "Implementing best practices for scalable, maintainable code"
                    ].map((responsibility, index) => (
                      <li key={index} className="flex gap-3">
                        <Check className="h-5 w-5 text-secondary-600 flex-shrink-0" />
                        <span className="text-gray-600">{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold font-heading mb-4 text-gray-900">Technical Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {TECHNICAL_SKILLS.map((skill, index) => (
                      <Badge key={index} variant="secondary" className="bg-secondary-100 text-secondary-800 hover:bg-secondary-200">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Button({ children, className, onClick }: { children: React.ReactNode, className?: string, onClick?: () => void }) {
  return (
    <button
      className={`inline-block w-full text-center py-3 px-6 bg-secondary-600 hover:bg-secondary-700 rounded-lg transition-colors ${className || ''}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
