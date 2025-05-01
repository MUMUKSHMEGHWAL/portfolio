import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { FileText, File, Download } from 'lucide-react';
import { TECH_SKILLS, LEADERSHIP_SKILLS, RESUME_FILES } from '@/lib/constants';

interface SkillBarProps {
  name: string;
  percentage: number;
}

const SkillBar = ({ name, percentage }: SkillBarProps) => (
  <div>
    <div className="flex justify-between mb-1">
      <span className="font-medium">{name}</span>
      <span>{percentage}%</span>
    </div>
    <div className="w-full bg-gray-600 rounded-full h-2">
      <div 
        className="bg-secondary-500 h-2 rounded-full" 
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  </div>
);

export default function Resume() {
  return (
    <section id="resume" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-gray-900">Resume</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Download my resume to learn more about my professional background, skills, and qualifications.
            </p>
            <div className="w-20 h-1 bg-secondary-500 mx-auto mt-4"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gray-50 rounded-2xl shadow-lg card-hover">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 flex-shrink-0 rounded-full bg-secondary-100 flex items-center justify-center">
                    <FileText className="h-6 w-6 text-secondary-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold font-heading text-gray-900">Technical Resume</h3>
                    <p className="text-gray-600">Senior Frontend Engineer</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">
                  This version highlights technical expertise in developing high-performance web applications, optimizing user experiences, and delivering scalable solutions.
                </p>
                <Button 
                  className="w-full bg-secondary-600 hover:bg-secondary-700"
                  onClick={() => window.location.href = RESUME_FILES.TECHNICAL}
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download Technical Resume
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gray-50 rounded-2xl shadow-lg card-hover">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 flex-shrink-0 rounded-full bg-secondary-100 flex items-center justify-center">
                    <File className="h-6 w-6 text-secondary-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold font-heading text-gray-900">Supply Chain Resume</h3>
                    <p className="text-gray-600">Product Management Focus</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">
                  This version emphasizes product management experience in supply chain and finance products, with focus on marketplace technologies and order fulfillment.
                </p>
                <Button 
                  className="w-full bg-secondary-600 hover:bg-secondary-700"
                  onClick={() => window.location.href = RESUME_FILES.PRODUCT}
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download Supply Chain Resume
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-50 rounded-2xl shadow-lg card-hover">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 flex-shrink-0 rounded-full bg-secondary-100 flex items-center justify-center">
                    <File className="h-6 w-6 text-secondary-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold font-heading text-gray-900">Finance Resume</h3>
                    <p className="text-gray-600">Financial Operations Focus</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">
                  This resume showcases experience in building finance products with a strong focus on financial operations, compliance, and process automation.
                </p>
                <Button 
                  className="w-full bg-secondary-600 hover:bg-secondary-700"
                  onClick={() => window.location.href = RESUME_FILES.MEESHO}
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download Finance Resume
                </Button>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-16 bg-gray-800 text-white rounded-2xl shadow-xl border-none">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold font-heading mb-6">Skills & Expertise</h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-bold text-secondary-400 mb-4">Technical Skills</h4>
                  <div className="space-y-4">
                    {TECH_SKILLS.map((skill, index) => (
                      <SkillBar key={index} name={skill.name} percentage={skill.percentage} />
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-xl font-bold text-secondary-400 mb-4">Leadership Skills</h4>
                  <div className="space-y-4">
                    {LEADERSHIP_SKILLS.map((skill, index) => (
                      <SkillBar key={index} name={skill.name} percentage={skill.percentage} />
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
