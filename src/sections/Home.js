import React from 'react';
import { ArrowDown, Cloud, Code, Database, Shield, Zap } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

const Home = () => {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const highlights = [
    { icon: Cloud, text: 'Cloud Architecture' },
    { icon: Code, text: 'DevOps & Automation' },
    { icon: Database, text: 'Database Solutions' },
    { icon: Shield, text: 'Security & Compliance' },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-cloud-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cloud-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container-max section-padding relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
                Hi, I'm{' '}
                <span className="gradient-text">
                  {personalInfo.name}
                </span>
              </h1>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
                {personalInfo.title}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0">
                {personalInfo.bio}
              </p>
            </div>

            {/* Highlight Cards */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {highlights.map((highlight, index) => (
                <div key={index} className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-lg p-4 shadow-sm border border-white/20 dark:border-gray-700/20">
                  <highlight.icon className="h-6 w-6 text-primary-600 dark:text-primary-400 mx-auto mb-2" />
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300">{highlight.text}</p>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={scrollToAbout}
                className="btn-primary inline-flex items-center justify-center"
              >
                Learn More About Me
                <ArrowDown className="ml-2 h-4 w-4" />
              </button>
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center justify-center"
              >
                Download Resume
              </a>
            </div>
          </div>

          {/* Right Content - Hero Visual */}
          <div className="relative">
            <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 dark:border-gray-700/20">
              {/* Cloud Architecture Diagram */}
              <div className="space-y-6">
                <div className="text-center">
                  <Cloud className="h-16 w-16 text-primary-600 dark:text-primary-400 mx-auto mb-4 animate-pulse-slow" />
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">Cloud Architecture</h3>
                  <p className="text-gray-600 dark:text-gray-400">Scalable & Secure Solutions</p>
                </div>
                
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-primary-50 rounded-lg p-3 text-center">
                    <Database className="h-8 w-8 text-primary-600 mx-auto mb-2" />
                    <p className="text-xs font-medium text-gray-700">Databases</p>
                  </div>
                  <div className="bg-cloud-50 rounded-lg p-3 text-center">
                    <Zap className="h-8 w-8 text-cloud-600 mx-auto mb-2" />
                    <p className="text-xs font-medium text-gray-700">Serverless</p>
                  </div>
                  <div className="bg-primary-50 rounded-lg p-3 text-center">
                    <Shield className="h-8 w-8 text-primary-600 mx-auto mb-2" />
                    <p className="text-xs font-medium text-gray-700">Security</p>
                  </div>
                </div>

                <div className="flex justify-center">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-primary-400 rounded-full animate-pulse"></div>
                    <div className="w-3 h-3 bg-cloud-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                    <div className="w-3 h-3 bg-primary-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-primary-100 rounded-full p-3 animate-float">
              <Code className="h-6 w-6 text-primary-600" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-cloud-100 rounded-full p-3 animate-float" style={{ animationDelay: '3s' }}>
              <Database className="h-6 w-6 text-cloud-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-gray-400" />
      </div>
    </section>
  );
};

export default Home;
