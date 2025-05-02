import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { Check, Briefcase, MapPin, Clock, Building } from 'lucide-react';
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

          {/* Livspace Experience */}
          <div className="mb-20 opacity-0" data-scroll="fade-in-up" data-scroll-once="true">
            <div className="flex flex-col-reverse md:flex-row gap-8 items-center md:items-start">
              <div className="w-full md:w-3/4">
                <div className="p-6 rounded-2xl transition-all duration-300 hover:bg-gray-50 hover:shadow-lg hover:translate-y-[-5px]">
                  <h3 className="text-2xl font-bold font-heading mb-2 text-gray-900">Product & Tech Lead</h3>
                  <div className="flex flex-wrap gap-4 mb-4 text-gray-600">
                    <div className="flex items-center">
                      <Building className="h-4 w-4 mr-1 text-secondary-600" />
                      <span>Livspace</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1 text-secondary-600" />
                      <span>Bangalore, India</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1 text-secondary-600" />
                      <span>May 2020 - Present</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Leading a team of 2 Product Managers and 18 engineers across Finance Operations, Supply Chain Management, and People Operations domains at Livspace, a unicorn in the interior design sector with a portfolio of $200M.
                  </p>
                
                  <h4 className="font-bold text-gray-800 mb-2 mt-6">Key Business Achievements:</h4>
                  <ul className="space-y-2 mb-4">
                    <li className="flex gap-3">
                      <Check className="h-5 w-5 text-secondary-600 flex-shrink-0" />
                      <span className="text-gray-600">Automated finance ops processes for accounts receivable and payable, saving 8 CR/yr</span>
                    </li>
                    <li className="flex gap-3">
                      <Check className="h-5 w-5 text-secondary-600 flex-shrink-0" />
                      <span className="text-gray-600">Spearheading IPO readiness across functions</span>
                    </li>
                    
                    <li className="flex gap-3">
                      <Check className="h-5 w-5 text-secondary-600 flex-shrink-0" />
                      <span className="text-gray-600">Optimized last-mile deliveries reducing warehouse and transportation costs by 1.6 CR/yr</span>
                    </li>
                    
                    <li className="flex gap-3">
                      <Check className="h-5 w-5 text-secondary-600 flex-shrink-0" />
                      <span className="text-gray-600">Scaled Livspace's Home Services platform from 1 to 10x, serving 1000+ DAUs</span>
                    </li>
                    <li className="flex gap-3">
                      <Check className="h-5 w-5 text-secondary-600 flex-shrink-0" />
                      <span className="text-gray-600">Introduced proof-of-delivery reducing short/wrong supply by 80%, saving 2.6 CR/yr</span>
                    </li>
                  </ul>
                  
                  <h4 className="font-bold text-gray-800 mb-2 mt-6">Technical Leadership:</h4>
                  <ul className="space-y-2 mb-4">
                    <li className="flex gap-3">
                      <Check className="h-5 w-5 text-secondary-600 flex-shrink-0" />
                      <span className="text-gray-600">Led revamp of livspace.com/in/magazine and livspace.com/in/design-ideas to drive better adoption</span>
                    </li>
                    <li className="flex gap-3">
                      <Check className="h-5 w-5 text-secondary-600 flex-shrink-0" />
                      <span className="text-gray-600">Led development of content management system (CMS) for organization to be consumed by 10+ apps</span>
                    </li>
                    <li className="flex gap-3">
                      <Check className="h-5 w-5 text-secondary-600 flex-shrink-0" />
                      <span className="text-gray-600">Led development for marketplace web-app and app to enable growth of business</span>
                    </li>
                    <li className="flex gap-3">
                      <Check className="h-5 w-5 text-secondary-600 flex-shrink-0" />
                      <span className="text-gray-600">Core contributor to in-house micro-frontend architecture-based apps</span>
                    </li>
                    <li className="flex gap-3">
                      <Check className="h-5 w-5 text-secondary-600 flex-shrink-0" />
                      <span className="text-gray-600">Core contributor to design system, powering 13+ apps</span>
                    </li>
                    <li className="flex gap-3">
                      <Check className="h-5 w-5 text-secondary-600 flex-shrink-0" />
                      <span className="text-gray-600">Led Finance operations workflow automation to bring efficiency of team</span>
                    </li>
                  </ul>
                  
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge variant="secondary" className="bg-secondary-100 text-secondary-800">Java</Badge>
                    <Badge variant="secondary" className="bg-secondary-100 text-secondary-800">Python</Badge>
                    <Badge variant="secondary" className="bg-secondary-100 text-secondary-800">Golang</Badge>
                    <Badge variant="secondary" className="bg-secondary-100 text-secondary-800">NodeJS</Badge>
                    <Badge variant="secondary" className="bg-secondary-100 text-secondary-800">VueJS</Badge>
                    <Badge variant="secondary" className="bg-secondary-100 text-secondary-800">ReactJS</Badge>
                    <Badge variant="secondary" className="bg-secondary-100 text-secondary-800">AWS</Badge>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/4 flex justify-center items-start">
                <div className="w-full max-w-[160px] bg-white rounded-lg shadow-md p-5 transform transition-all duration-300 hover:shadow-lg">
                  <img 
                    src="/images/logos/livspace-logo-v2.svg" 
                    alt="Livspace Logo" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* Deutsche Telekom Experience */}
          <div className="mb-20 opacity-0" data-scroll="fade-in-up" data-scroll-once="true" data-scroll-delay="0.2">
            <div className="flex flex-col-reverse md:flex-row gap-8 items-center md:items-start">
              <div className="w-full md:w-3/4">
                <div className="p-6 rounded-2xl transition-all duration-300 hover:bg-gray-50 hover:shadow-lg hover:translate-y-[-5px]">
                  <h3 className="text-2xl font-bold font-heading mb-2 text-gray-900">Software Engineer</h3>
                  <div className="flex flex-wrap gap-4 mb-4 text-gray-600">
                    <div className="flex items-center">
                      <Building className="h-4 w-4 mr-1 text-secondary-600" />
                      <span>Deutsche Telekom</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1 text-secondary-600" />
                      <span>Aug 2018 - March 2020</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Worked at a global telecommunications leader catering to a $30-35 billion enterprise market segment.
                  </p>
                
                  <h4 className="font-bold text-gray-800 mb-2 mt-6">Key Projects:</h4>
                  <ul className="space-y-2 mb-4">
                    <li className="flex gap-3">
                      <Check className="h-5 w-5 text-secondary-600 flex-shrink-0" />
                      <span className="text-gray-600">Built an e-commerce platform with a team of 4 members from scratch, deployed to 12 different countries serving 30 million users</span>
                    </li>
                    <li className="flex gap-3">
                      <Check className="h-5 w-5 text-secondary-600 flex-shrink-0" />
                      <span className="text-gray-600">Developed cart/basket and checkout module single-handedly</span>
                    </li>
                    <li className="flex gap-3">
                      <Check className="h-5 w-5 text-secondary-600 flex-shrink-0" />
                      <span className="text-gray-600">Created a component-based UI library for ready-to-use components, reducing development time from 6 to 4 months</span>
                    </li>
                  </ul>
                  
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge variant="secondary" className="bg-secondary-100 text-secondary-800">React</Badge>
                    <Badge variant="secondary" className="bg-secondary-100 text-secondary-800">Redux</Badge>
                    <Badge variant="secondary" className="bg-secondary-100 text-secondary-800">NextJS</Badge>
                    <Badge variant="secondary" className="bg-secondary-100 text-secondary-800">GraphQL</Badge>
                    <Badge variant="secondary" className="bg-secondary-100 text-secondary-800">Java</Badge>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/4 flex justify-center items-start">
                <div className="w-full max-w-[160px] bg-white rounded-lg shadow-md p-5 transform transition-all duration-300 hover:shadow-lg">
                  <img 
                    src="/images/logos/deutsche-telekom-logo-v2.svg" 
                    alt="Deutsche Telekom Logo" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* Sapient Experience */}
          <div className="opacity-0" data-scroll="fade-in-up" data-scroll-once="true" data-scroll-delay="0.4">
            <div className="flex flex-col-reverse md:flex-row gap-8 items-center md:items-start">
              <div className="w-full md:w-3/4">
                <div className="p-6 rounded-2xl transition-all duration-300 hover:bg-gray-50 hover:shadow-lg hover:translate-y-[-5px]">
                  <h3 className="text-2xl font-bold font-heading mb-2 text-gray-900">Software Engineer</h3>
                  <div className="flex flex-wrap gap-4 mb-4 text-gray-600">
                    <div className="flex items-center">
                      <Building className="h-4 w-4 mr-1 text-secondary-600" />
                      <span>Publicis Sapient</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1 text-secondary-600" />
                      <span>Oct 2016 - July 2018</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Worked at a leading digital transformation firm serving a $15-20 billion global consulting market segment.
                  </p>
                
                  <h4 className="font-bold text-gray-800 mb-2 mt-6">Key Projects:</h4>
                  <ul className="space-y-2 mb-4">
                    <li className="flex gap-3">
                      <Check className="h-5 w-5 text-secondary-600 flex-shrink-0" />
                      <span className="text-gray-600">Developed UI components for Marriott International Website with a team of 4 frontend and 3 backend developers</span>
                    </li>
                    <li className="flex gap-3">
                      <Check className="h-5 w-5 text-secondary-600 flex-shrink-0" />
                      <span className="text-gray-600">Integrated UI components with backend REST APIs to build web pages</span>
                    </li>
                    <li className="flex gap-3">
                      <Check className="h-5 w-5 text-secondary-600 flex-shrink-0" />
                      <span className="text-gray-600">Developed an internal Hiring Calendar tool to streamline interviewer and interviewee matching, reducing manual work by 80%</span>
                    </li>
                  </ul>
                  
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge variant="secondary" className="bg-secondary-100 text-secondary-800">Handlebars</Badge>
                    <Badge variant="secondary" className="bg-secondary-100 text-secondary-800">SCSS</Badge>
                    <Badge variant="secondary" className="bg-secondary-100 text-secondary-800">jQuery</Badge>
                    <Badge variant="secondary" className="bg-secondary-100 text-secondary-800">Angular 2.0</Badge>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/4 flex justify-center items-start">
                <div className="w-full max-w-[160px] bg-white rounded-lg shadow-md p-5 transform transition-all duration-300 hover:shadow-lg">
                  <img 
                    src="/images/logos/publicis-sapient-logo.svg" 
                    alt="Publicis Sapient Logo" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* Technical Skills Section */}
          <div className="mt-16 opacity-0" data-scroll="fade-in-up" data-scroll-once="true" data-scroll-delay="0.6">
            <Card className="shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold font-heading mb-4 text-gray-900">Technical Expertise</h3>
                <div className="flex flex-wrap gap-2">
                  {TECHNICAL_SKILLS.map((skill, index) => (
                    <Badge 
                      key={index} 
                      variant="secondary" 
                      className="bg-secondary-100 text-secondary-800 hover:bg-secondary-200 transition-all duration-300 hover:translate-y-[-2px] hover:shadow-md"
                      style={{ animationDelay: `${0.1 * index}s` }}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

        </div>
      </div>
    </section>
  );
}