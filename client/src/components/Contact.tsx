import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Mail, Linkedin, Github, Twitter, Send } from 'lucide-react';
import { apiRequest } from '@/lib/queryClient';
import { SOCIAL_LINKS, CONTACT_INFO } from '@/lib/constants';

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await apiRequest('POST', '/api/contact', formData);
      
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-gray-900">Get In Touch</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Interested in discussing a project or opportunity? Feel free to reach out through any of the channels below.
            </p>
            <div className="w-20 h-1 bg-secondary-500 mx-auto mt-4"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-white rounded-2xl shadow-lg mb-8">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold font-heading mb-6 text-gray-900">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-secondary-100 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 text-secondary-600" />
                    </div>
                    <div className="ml-4">
                      <h4 className="font-medium text-gray-900">Email</h4>
                      <a href={`mailto:${CONTACT_INFO.EMAIL}`} className="text-secondary-600 hover:underline">
                        {CONTACT_INFO.EMAIL}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-secondary-100 flex items-center justify-center flex-shrink-0">
                      <Linkedin className="h-5 w-5 text-secondary-600" />
                    </div>
                    <div className="ml-4">
                      <h4 className="font-medium text-gray-900">LinkedIn</h4>
                      <a href={SOCIAL_LINKS.LINKEDIN} target="_blank" rel="noopener noreferrer" className="text-secondary-600 hover:underline">
                        linkedin.com/in/username
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-secondary-100 flex items-center justify-center flex-shrink-0">
                      <Github className="h-5 w-5 text-secondary-600" />
                    </div>
                    <div className="ml-4">
                      <h4 className="font-medium text-gray-900">GitHub</h4>
                      <a href={SOCIAL_LINKS.GITHUB} target="_blank" rel="noopener noreferrer" className="text-secondary-600 hover:underline">
                        github.com/username
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-800 text-white rounded-2xl shadow-lg border-none">
              <CardContent className="p-8">
                <p className="mb-6">
                  Let's connect to discuss how my expertise in product and technology leadership can help drive innovation and growth for your organization.
                </p>
                <div className="flex space-x-4">
                  <SocialButton href={SOCIAL_LINKS.LINKEDIN} icon={<Linkedin className="h-5 w-5" />} />
                  <SocialButton href={SOCIAL_LINKS.GITHUB} icon={<Github className="h-5 w-5" />} />
                  <SocialButton href={SOCIAL_LINKS.TWITTER} icon={<Twitter className="h-5 w-5" />} />
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
    className="w-10 h-10 rounded-full bg-gray-600 hover:bg-secondary-600 flex items-center justify-center transition-colors"
  >
    {icon}
  </a>
);
