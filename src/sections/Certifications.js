import React from 'react';
import { Award, ExternalLink, Calendar, Shield, CheckCircle } from 'lucide-react';
import { certifications } from '../data/certifications';
import TechBadge from '../components/TechBadge';

const Certifications = () => {
  const getCertificationIcon = (issuer) => {
    switch (issuer.toLowerCase()) {
      case 'amazon web services':
        return 'aws';
      case 'cloud native computing foundation':
        return 'kubernetes';
      case 'hashicorp':
        return 'terraform';
      case 'google cloud':
        return 'gcp';
      case 'microsoft':
        return 'azure';
      default:
        return 'award';
    }
  };

  const getIssuerColor = (issuer) => {
    switch (issuer.toLowerCase()) {
      case 'amazon web services':
        return 'from-orange-500 to-orange-600';
      case 'cloud native computing foundation':
        return 'from-blue-500 to-blue-600';
      case 'hashicorp':
        return 'from-purple-500 to-purple-600';
      case 'google cloud':
        return 'from-green-500 to-green-600';
      case 'microsoft':
        return 'from-blue-500 to-blue-600';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <section id="certifications" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Certifications
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Industry-recognized certifications that validate my expertise in cloud technologies and best practices.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {certifications.map((cert) => (
            <div key={cert.id} className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover">
              {/* Certificate Header */}
              <div className={`bg-gradient-to-r ${getIssuerColor(cert.issuer)} p-6 text-white`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-white/20 rounded-lg">
                    <Award className="h-6 w-6" />
                  </div>
                  <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full">
                    {cert.date}
                  </span>
                </div>
                
                <h3 className="text-lg font-semibold mb-2 line-clamp-2">
                  {cert.name}
                </h3>
                <p className="text-sm opacity-90">{cert.issuer}</p>
              </div>

              {/* Certificate Content */}
              <div className="p-6">
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                  {cert.description}
                </p>
                
                {/* Technology Badge */}
                <div className="mb-4">
                  <TechBadge technology={cert.issuer} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certification Timeline */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Certification Timeline</h3>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-200 to-cloud-200"></div>
            
            <div className="space-y-8">
              {certifications
                .sort((a, b) => new Date(b.date) - new Date(a.date))
                .map((cert, index) => (
                <div key={cert.id} className="relative flex items-start space-x-6">
                  {/* Timeline Dot */}
                  <div className={`relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${getIssuerColor(cert.issuer)} shadow-lg`}>
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  
                  {/* Timeline Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-3 mb-2">
                      <h4 className="text-lg font-semibold text-gray-900">{cert.name}</h4>
                      <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                        {cert.date}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-2">{cert.issuer}</p>
                    <p className="text-sm text-gray-600 leading-relaxed">{cert.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Certification Benefits */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="h-8 w-8 text-primary-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Industry Recognition</h3>
            <p className="text-gray-600">
              Validated expertise recognized by leading cloud providers and industry organizations.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-cloud-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-cloud-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Security & Compliance</h3>
            <p className="text-gray-600">
              Deep understanding of cloud security best practices and compliance requirements.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Continuous Learning</h3>
            <p className="text-gray-600">
              Commitment to staying current with evolving cloud technologies and methodologies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
