import React from 'react';

const TechBadge = ({ technology, className = "" }) => {
  const getTechColor = (tech) => {
    const colors = {
      // AWS
      'AWS Lambda': 'bg-orange-100 text-orange-800 border-orange-200',
      'API Gateway': 'bg-orange-100 text-orange-800 border-orange-200',
      'DynamoDB': 'bg-orange-100 text-orange-800 border-orange-200',
      'S3': 'bg-orange-100 text-orange-800 border-orange-200',
      'CodeBuild': 'bg-orange-100 text-orange-800 border-orange-200',
      'CodeDeploy': 'bg-orange-100 text-orange-800 border-orange-200',
      'CloudFormation': 'bg-orange-100 text-orange-800 border-orange-200',
      'AWS EKS': 'bg-orange-100 text-orange-800 border-orange-200',
      'AWS Kinesis': 'bg-orange-100 text-orange-800 border-orange-200',
      'AWS Config': 'bg-orange-100 text-orange-800 border-orange-200',
      'GuardDuty': 'bg-orange-100 text-orange-800 border-orange-200',
      'CloudTrail': 'bg-orange-100 text-orange-800 border-orange-200',
      'Security Hub': 'bg-orange-100 text-orange-800 border-orange-200',
      'AWS RDS': 'bg-orange-100 text-orange-800 border-orange-200',
      'AWS S3': 'bg-orange-100 text-orange-800 border-orange-200',
      'AWS CloudWatch': 'bg-orange-100 text-orange-800 border-orange-200',
      'AWS CodePipeline': 'bg-orange-100 text-orange-800 border-orange-200',
      'AWS Security': 'bg-orange-100 text-orange-800 border-orange-200',
      'Redshift': 'bg-orange-100 text-orange-800 border-orange-200',
      'Glue': 'bg-orange-100 text-orange-800 border-orange-200',
      'QuickSight': 'bg-orange-100 text-orange-800 border-orange-200',

      // Kubernetes & Docker
      'Kubernetes': 'bg-blue-100 text-blue-800 border-blue-200',
      'Docker': 'bg-blue-100 text-blue-800 border-blue-200',
      'Helm': 'bg-blue-100 text-blue-800 border-blue-200',

      // Cloud Platforms
      'GCP': 'bg-green-100 text-green-800 border-green-200',
      'GCP GKE': 'bg-green-100 text-green-800 border-green-200',
      'Azure': 'bg-blue-100 text-blue-800 border-blue-200',

      // DevOps Tools
      'Terraform': 'bg-purple-100 text-purple-800 border-purple-200',
      'Jenkins': 'bg-red-100 text-red-800 border-red-200',
      'GitLab CI/CD': 'bg-orange-100 text-orange-800 border-orange-200',

      // Monitoring
      'Prometheus': 'bg-red-100 text-red-800 border-red-200',
      'Grafana': 'bg-orange-100 text-orange-800 border-orange-200',
      'ELK Stack': 'bg-yellow-100 text-yellow-800 border-yellow-200',
      'Elasticsearch': 'bg-yellow-100 text-yellow-800 border-yellow-200',

      // Programming Languages
      'Python': 'bg-yellow-100 text-yellow-800 border-yellow-200',
      'JavaScript': 'bg-yellow-100 text-yellow-800 border-yellow-200',
      'Node.js': 'bg-green-100 text-green-800 border-green-200',
      'Go': 'bg-blue-100 text-blue-800 border-blue-200',
      'Bash/Shell': 'bg-gray-100 text-gray-800 border-gray-200',
      'Java': 'bg-red-100 text-red-800 border-red-200',
      'Html:CSS': 'bg-purple-100 text-purple-800 border-purple-200',
      'React': 'bg-blue-100 text-blue-800 border-blue-200',

      // Databases
      'PostgreSQL': 'bg-blue-100 text-blue-800 border-blue-200',
      'MongoDB': 'bg-green-100 text-green-800 border-green-200',
      'Redis': 'bg-red-100 text-red-800 border-red-200',
      'MySQL': 'bg-blue-100 text-blue-800 border-blue-200',

      // Other
      'Istio': 'bg-blue-100 text-blue-800 border-blue-200',
      'Jaeger': 'bg-blue-100 text-blue-800 border-blue-200',
      'Vault': 'bg-purple-100 text-purple-800 border-purple-200',
      'Terratest': 'bg-purple-100 text-purple-800 border-purple-200',
      'Terraform Cloud': 'bg-purple-100 text-purple-800 border-purple-200',
      'YAML': 'bg-gray-100 text-gray-800 border-gray-200',
      'OWASP': 'bg-red-100 text-red-800 border-red-200',
      'OAuth 2.0 / JWT': 'bg-blue-100 text-blue-800 border-blue-200',
      'Security': 'bg-red-100 text-red-800 border-red-200',
      'Datadog': 'bg-purple-100 text-purple-800 border-purple-200',
      'IBM Cloud': 'bg-blue-100 text-blue-800 border-blue-200',
      'Golang': 'bg-blue-100 text-blue-800 border-blue-200',
    };

    return colors[tech] || 'bg-gray-100 text-gray-800 border-gray-200';
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getTechColor(
        technology
      )} ${className}`}
    >
      {technology}
    </span>
  );
};

export default TechBadge;
