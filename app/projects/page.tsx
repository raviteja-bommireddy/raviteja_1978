import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Eye, Brain, BarChart3, MessageSquare, FileText, Camera, Activity } from "lucide-react"
import Link from "next/link"

export default function ProjectsPage() {
  const projects = [
    {
      title: "GazeGuard: Intelligent Exam Surveillance System",
      category: "Computer Vision",
      description:
        "Real-time gaze and head pose detection system using OpenCV, DLIB, and deep learning to monitor user behavior during exams and interviews, achieving 90%+ accuracy in gaze detection.",
      features: [
        "Integrated YOLOv8, v12 based mobile detection to identify phone usage and distractions",
        "Real-time alerts and automatic screenshot capture",
        "Interactive dashboard displaying behavioral analysis with 95% accuracy",
        "Successfully tested with computer exams at IIITDM",
      ],
      technologies: ["OpenCV", "DLIB", "YOLOv8", "Deep Learning", "Computer Vision"],
      icon: <Eye className="w-6 h-6" />,
      color: "border-l-blue-500",
    },
    {
      title: "MedVision: Self-supervised Learning for Medical Images",
      category: "Computer Vision & Healthcare",
      description:
        "Advanced medical image analysis using contrastive learning techniques (SimCLR, MoCo) for extracting high-quality features without requiring large labeled datasets.",
      features: [
        "Implemented contrastive learning for medical image feature extraction",
        "Specialized image augmentation strategies for medical imaging tasks",
        "Achieved 87% IoU for tumor detection",
        "92% improvement in feature extraction efficiency",
      ],
      technologies: ["SimCLR", "MoCo", "PyTorch", "Medical Imaging", "Self-supervised Learning"],
      icon: <Brain className="w-6 h-6" />,
      color: "border-l-green-500",
    },
    {
      title: "IIITConnect: AI-Powered Campus Chatbot",
      category: "Natural Language Processing",
      description:
        "Intelligent, multi-platform chatbot for IIIT Kancheepuram using Dialogflow, streamlining student interactions and providing real-time responses to academic queries.",
      features: [
        "Advanced NLP techniques with Dialogflow integration",
        "Multi-platform support reducing manual workload by 30%",
        "Dynamic data fetching through custom webhooks",
        "Real-time information on admissions, courses, and campus events",
      ],
      technologies: ["Dialogflow", "NLP", "Webhooks", "API Integration", "Chatbot Development"],
      icon: <MessageSquare className="w-6 h-6" />,
      color: "border-l-purple-500",
    },
    {
      title: "News Article Text Summarization",
      category: "Natural Language Processing",
      description:
        "Advanced news summarization system using T5 Transformer and text-ranking algorithms, reducing article length by 60% while maintaining key information.",
      features: [
        "Built using T5 Transformer and text-ranking algorithms",
        "45% improvement in summarization accuracy over traditional models",
        "Real-time interactive interface using Streamlit",
        "Evaluated with ROUGE scores for quality assurance",
      ],
      technologies: ["T5 Transformer", "Streamlit", "ROUGE", "Text Processing", "NLP"],
      icon: <FileText className="w-6 h-6" />,
      color: "border-l-orange-500",
    },
    {
      title: "Real-Time Object Detection for Traffic Monitoring",
      category: "Computer Vision",
      description:
        "YOLOv11 implementation for real-time vehicle and pedestrian detection in traffic video streams, achieving 95% accuracy in classification.",
      features: [
        "Real-time vehicle and pedestrian detection with 95% accuracy",
        "Integrated with Raspberry Pi for edge computing",
        "98% detection rate with low-latency processing",
        "30% reduction in computational overhead",
      ],
      technologies: ["YOLOv11", "Raspberry Pi", "Edge Computing", "Real-time Processing"],
      icon: <Camera className="w-6 h-6" />,
      color: "border-l-red-500",
    },
    {
      title: "AirGuard: Air Quality Prediction",
      category: "Data Science & Environmental",
      description:
        "Comprehensive air quality prediction system processing 40,000+ records from multiple sources to forecast AQI levels with 92% accuracy.",
      features: [
        "Integrated real-time data from 3+ sources",
        "Advanced ML algorithms including Random Forest and XGBoost",
        "92% prediction accuracy with 15% error reduction",
        "Comprehensive data preprocessing and feature engineering",
      ],
      technologies: ["Random Forest", "XGBoost", "Data Processing", "Environmental Data"],
      icon: <BarChart3 className="w-6 h-6" />,
      color: "border-l-teal-500",
    },
    {
      title: "Anomalyze: Time Series Anomaly Detection",
      category: "Data Science & Analytics",
      description:
        "Advanced time series analysis system detecting real-time anomalies with 95% accuracy in noisy and mislabeled datasets.",
      features: [
        "Real-time anomaly detection with 95% accuracy",
        "ARIMA and Prophet models for time series forecasting",
        "40% reduction in processing time",
        "Automated resource management workflows",
      ],
      technologies: ["ARIMA", "Prophet", "Time Series Analysis", "Anomaly Detection"],
      icon: <Activity className="w-6 h-6" />,
      color: "border-l-indigo-500",
    },
  ]

  const categories = ["All", "Computer Vision", "Natural Language Processing", "Data Science & Analytics", "Healthcare"]

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Projects</h1>
          <p className="text-lg text-muted-foreground">
            A showcase of my academic and research projects spanning AI, ML, NLP, Computer Vision, and Data Science.
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Badge
                key={category}
                variant="outline"
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground"
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className={`border-l-4 ${project.color} hover:shadow-lg transition-shadow`}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-muted rounded-lg">{project.icon}</div>
                    <div>
                      <CardTitle className="text-lg">{project.title}</CardTitle>
                      <Badge variant="secondary" className="mt-1">
                        {project.category}
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{project.description}</p>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* GitHub Link */}
        <div className="mt-12 text-center">
          <Card className="bg-muted/50">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-4">Explore More Projects</h3>
              <p className="text-muted-foreground mb-6">
                Visit my GitHub profile to see more projects, code repositories, and contributions to open source.
              </p>
              <Button asChild>
                <Link href="https://github.com/raviteja-bommireddy" target="_blank">
                  <Github className="w-4 h-4 mr-2" />
                  View GitHub Profile
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
