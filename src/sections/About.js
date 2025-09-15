import React from 'react';
import { User, MapPin, Mail, Phone, Download, Award, Clock, Target } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

const About = () => {
  const stats = [
    { icon: Award, label: 'Certifications', value: '6', color: 'text-yellow-600' },
    { icon: Clock, label: 'Learning Journey', value: '1+ Year', color: 'text-blue-600' },
    { icon: Target, label: 'Projects Completed', value: '6+', color: 'text-green-600' },
  ];

  return (
    <section id="about" className="section-padding bg-white dark:bg-gray-900">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Passionate about building scalable cloud solutions and driving digital transformation through innovative technology.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Profile Section */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-primary-50 to-cloud-50 rounded-2xl p-8 text-center">
              {/* Profile Image Placeholder */}
              <div className="w-32 h-32 bg-gradient-to-br from-primary-400 to-cloud-400 rounded-full mx-auto mb-6 flex items-center justify-center">
                <User className="h-16 w-16 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{personalInfo.name}</h3>
              <p className="text-primary-600 font-semibold mb-4">{personalInfo.title}</p>
              
              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-center space-x-2 text-gray-600">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">{personalInfo.location}</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-gray-600">
                  <Mail className="h-4 w-4" />
                  <span className="text-sm">{personalInfo.email}</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-gray-600">
                  <Phone className="h-4 w-4" />
                  <span className="text-sm">{personalInfo.phone}</span>
                </div>
              </div>

              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center w-full justify-center"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </a>
            </div>
          </div>

          {/* Content Section */}
          <div className="lg:col-span-2 space-y-8">
            {/* Bio */}
            <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Professional Summary</h4>
              <p className="text-gray-600 leading-relaxed mb-4">
                {personalInfo.bio}
              </p>
              <p className="text-gray-600 leading-relaxed">
                {personalInfo.summary}
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center">
                  <stat.icon className={`h-8 w-8 mx-auto mb-3 ${stat.color}`} />
                  <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Key Strengths */}
            <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Key Strengths</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  'AWS Cloud Services',
                  'Docker Containerization',
                  'Linux Administration',
                  'Python Scripting',
                  'Terraform Basics',
                  'Git Version Control',
                  'Problem Solving',
                  'Continuous Learning'
                ].map((strength, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    <span className="text-gray-700">{strength}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Professional Approach */}
            <div className="bg-gradient-to-r from-primary-50 to-cloud-50 rounded-xl p-6">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Learning Approach</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-semibold text-gray-800 mb-2">Hands-On Learning</h5>
                  <p className="text-gray-600 text-sm">
                    I believe in learning by doing - building projects and experimenting with cloud technologies to gain practical experience.
                  </p>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-800 mb-2">Curiosity-Driven</h5>
                  <p className="text-gray-600 text-sm">
                    Always exploring new technologies and following cloud industry trends to stay current with best practices.
                  </p>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-800 mb-2">Security-Conscious</h5>
                  <p className="text-gray-600 text-sm">
                    Learning security fundamentals and implementing best practices from the beginning of my cloud journey.
                  </p>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-800 mb-2">Automation-Minded</h5>
                  <p className="text-gray-600 text-sm">
                    Focusing on learning automation tools and practices to build efficient and reliable cloud solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
