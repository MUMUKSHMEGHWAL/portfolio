import { Card, CardContent } from '@/components/ui/card';
import { Mail, Linkedin, Phone } from 'lucide-react';
import { SOCIAL_LINKS, CONTACT_INFO } from '@/lib/constants';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 opacity-0" data-scroll="fade-in-up" data-scroll-once="true">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-gray-900">Let's Connect</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              I'm open to discussing how my expertise in product and technology leadership can help drive innovation and growth for your organization.
            </p>
            <div className="w-20 h-1 bg-secondary-500 mx-auto mt-4"></div>
          </div>

          <div className="max-w-4xl mx-auto opacity-0" data-scroll="fade-in-up" data-scroll-once="true" data-scroll-delay="0.3">
            <Card className="bg-gradient-to-br from-gray-800 to-gray-900 text-white rounded-2xl shadow-lg border-none overflow-hidden transition-all duration-500 hover:shadow-2xl hover:scale-[1.02]">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="md:col-span-2 text-center mb-6">
                    <h3 className="text-xl font-bold font-heading mb-4">Ready to collaborate?</h3>
                    <p className="text-gray-300">
                      Reach out through any of these channels to discuss potential opportunities.
                    </p>
                  </div>
                  
                  <div className="flex items-center p-4 bg-gray-700/30 rounded-xl opacity-0 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                    <div className="w-12 h-12 rounded-full bg-secondary-100 flex items-center justify-center flex-shrink-0 animate-pulse-slow">
                      <Mail className="h-5 w-5 text-secondary-600" />
                    </div>
                    <div className="ml-4">
                      <h4 className="font-medium text-gray-100">Email</h4>
                      <a href={`mailto:${CONTACT_INFO.EMAIL}`} className="text-secondary-400 hover:text-secondary-300 transition-colors hover:underline">
                        {CONTACT_INFO.EMAIL}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center p-4 bg-gray-700/30 rounded-xl opacity-0 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
                    <div className="w-12 h-12 rounded-full bg-secondary-100 flex items-center justify-center flex-shrink-0 animate-pulse-slow">
                      <Phone className="h-5 w-5 text-secondary-600" />
                    </div>
                    <div className="ml-4">
                      <h4 className="font-medium text-gray-100">Phone</h4>
                      <a href={`tel:${CONTACT_INFO.PHONE}`} className="text-secondary-400 hover:text-secondary-300 transition-colors hover:underline">
                        {CONTACT_INFO.PHONE}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center p-4 bg-gray-700/30 rounded-xl md:col-span-2 opacity-0 animate-fade-in-up" style={{ animationDelay: '1s' }}>
                    <div className="w-12 h-12 rounded-full bg-secondary-100 flex items-center justify-center flex-shrink-0 animate-pulse-slow">
                      <Linkedin className="h-5 w-5 text-secondary-600" />
                    </div>
                    <div className="ml-4">
                      <h4 className="font-medium text-gray-100">LinkedIn</h4>
                      <a href={SOCIAL_LINKS.LINKEDIN} target="_blank" rel="noopener noreferrer" className="text-secondary-400 hover:text-secondary-300 transition-colors hover:underline">
                        linkedin.com/in/mumukshmeghwal
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="mt-10 border-t border-gray-700 pt-6 text-center opacity-0 animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
                  <p className="mb-4 text-gray-300">
                    Connect with me on LinkedIn for professional updates and discussions.
                  </p>
                  <div className="flex justify-center">
                    <SocialButton href={SOCIAL_LINKS.LINKEDIN} icon={<Linkedin className="h-6 w-6" />} />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

interface SocialButtonProps {
  href: string;
  icon: React.ReactNode;
}

const SocialButton = ({ href, icon }: SocialButtonProps) => (
  <a 
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-12 h-12 rounded-full bg-gray-600 hover:bg-secondary-600 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
  >
    {icon}
  </a>
);
