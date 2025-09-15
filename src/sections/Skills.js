import React from 'react';
import { Cloud, Code, Database, Shield, Monitor, Lock } from 'lucide-react';
import { skills } from '../data/skills';
import TechBadge from '../components/TechBadge';

const Skills = () => {
  const categoryIcons = {
    'Cloud Platforms': Cloud,
    'Infrastructure & DevOps': Code,
    'Programming Languages': Code,
    'Databases & Storage': Database,
    'Monitoring & Observability': Monitor,
    'Security & Compliance': Shield,
  };

  const getLevelColor = (level) => {
    switch (level) {
      case 'Expert':
        return 'bg-green-500';
      case 'Advanced':
        return 'bg-blue-500';
      case 'Intermediate':
        return 'bg-yellow-500';
      default:
        return 'bg-gray-400';
    }
  };

  const getLevelWidth = (level) => {
    switch (level) {
      case 'Expert':
        return 'w-full';
      case 'Advanced':
        return 'w-4/5';
      case 'Intermediate':
        return 'w-3/5';
      default:
        return 'w-2/5';
    }
  };

  return (
    <section id="skills" className="section-padding bg-white dark:bg-gray-900">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Technical Skills
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise across cloud platforms, DevOps tools, and programming languages.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Skills by Category */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Skills by Category</h3>
            
            {skills.map((category, categoryIndex) => {
              const IconComponent = categoryIcons[category.category] || Code;
              
              return (
                <div key={categoryIndex} className="bg-gray-50 rounded-xl p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2 bg-primary-100 rounded-lg">
                      <IconComponent className="h-5 w-5 text-primary-600" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900">{category.category}</h4>
                  </div>
                  
                  <div className="space-y-4">
                    {category.items.map((skill, skillIndex) => (
                      <div key={skillIndex} className="bg-white rounded-lg p-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium text-gray-900">{skill.name}</span>
                          <span className="text-sm text-gray-600">{skill.level}</span>
                        </div>
                        
                        {/* Progress Bar */}
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full transition-all duration-1000 ${getLevelColor(skill.level)} ${getLevelWidth(skill.level)}`}
                            style={{ animationDelay: `${skillIndex * 100}ms` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Skills Overview & Badges */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Technology Stack</h3>
            
            {/* Cloud Platforms */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Cloud className="h-5 w-5 text-orange-600 mr-2" />
                Cloud Platforms
              </h4>
              <div className="flex flex-wrap gap-2">
                {skills.find(s => s.category === 'Cloud Platforms')?.items.map((skill) => (
                  <TechBadge key={skill.name} technology={skill.name} />
                ))}
              </div>
            </div>

            {/* DevOps Tools */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Code className="h-5 w-5 text-blue-600 mr-2" />
                DevOps & Infrastructure
              </h4>
              <div className="flex flex-wrap gap-2">
                {skills.find(s => s.category === 'Infrastructure & DevOps')?.items.map((skill) => (
                  <TechBadge key={skill.name} technology={skill.name} />
                ))}
              </div>
            </div>

            {/* Programming Languages */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Code className="h-5 w-5 text-green-600 mr-2" />
                Programming Languages
              </h4>
              <div className="flex flex-wrap gap-2">
                {skills.find(s => s.category === 'Programming Languages')?.items.map((skill) => (
                  <TechBadge key={skill.name} technology={skill.name} />
                ))}
              </div>
            </div>

            {/* Databases */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Database className="h-5 w-5 text-purple-600 mr-2" />
                Databases & Storage
              </h4>
              <div className="flex flex-wrap gap-2">
                {skills.find(s => s.category === 'Databases & Storage')?.items.map((skill) => (
                  <TechBadge key={skill.name} technology={skill.name} />
                ))}
              </div>
            </div>

            {/* Monitoring */}
            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Monitor className="h-5 w-5 text-red-600 mr-2" />
                Monitoring & Observability
              </h4>
              <div className="flex flex-wrap gap-2">
                {skills.find(s => s.category === 'Monitoring & Observability')?.items.map((skill) => (
                  <TechBadge key={skill.name} technology={skill.name} />
                ))}
              </div>
            </div>

            {/* Security */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Lock className="h-5 w-5 text-gray-600 mr-2" />
                Security & Compliance
              </h4>
              <div className="flex flex-wrap gap-2">
                {skills.find(s => s.category === 'Security & Compliance')?.items.map((skill) => (
                  <TechBadge key={skill.name} technology={skill.name} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Skills Summary */}
        <div className="mt-16 bg-gradient-to-r from-primary-50 to-cloud-50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Skills Summary</h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              My learning journey spans across multiple cloud technologies, with a strong focus on AWS services, 
              containerization, and automation fundamentals as I build my cloud engineering skills.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">Intermediate</div>
              <div className="text-gray-600">AWS, Docker, Python, Terraform</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">Learning</div>
              <div className="text-gray-600">Kubernetes, Azure, GCP, Jenkins</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-600 mb-2">Exploring</div>
              <div className="text-gray-600">Go, IBM Cloud, Advanced Security</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
