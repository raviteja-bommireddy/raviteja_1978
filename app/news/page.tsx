import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, Tag } from "lucide-react"

export default function NewsPage() {
  const newsItems = [
    {
      title: "Started Research on Multilingual Fake News Detection",
      date: "May 2024",
      category: "Research",
      content:
        "Began working as a Research Assistant at IIITDM Kancheepuram, focusing on developing a multi-modal fake news detection system for Indian regional languages.",
      tags: ["Research", "NLP", "Multilingual AI"],
    },
    {
      title: "Completed Data Science Internship",
      date: "April 2024",
      category: "Career",
      content:
        "Successfully completed internship at Cipher Byte Technologies, working on unemployment trend prediction models and ETL workflows.",
      tags: ["Internship", "Data Science", "Machine Learning"],
    },
    {
      title: "GazeGuard Project Implementation",
      date: "March 2024",
      category: "Project",
      content:
        "Developed and successfully tested an intelligent exam surveillance system using computer vision techniques at IIITDM campus.",
      tags: ["Computer Vision", "Academic Project", "Innovation"],
    },
    {
      title: "Advanced Certifications Completed",
      date: "February 2024",
      category: "Education",
      content:
        "Completed multiple professional certifications including Google Data Analytics, DeepLearning.AI specializations, and Stanford ML course.",
      tags: ["Certification", "Professional Development", "Learning"],
    },
    {
      title: "IIITConnect Chatbot Launch",
      date: "January 2024",
      category: "Project",
      content:
        "Successfully deployed AI-powered campus chatbot for IIIT Kancheepuram, improving student support services and reducing manual workload by 30%.",
      tags: ["NLP", "Chatbot", "Campus Innovation"],
    },
    {
      title: "Research Paper in Progress",
      date: "December 2023",
      category: "Research",
      content:
        "Currently working on research paper focusing on self-supervised learning techniques for medical image analysis and multilingual NLP applications.",
      tags: ["Research", "Medical AI", "Publication"],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">News & Updates</h1>
          <p className="text-lg text-muted-foreground">
            Latest updates on my research, projects, and professional journey in AI and data science.
          </p>
        </div>

        <div className="space-y-6">
          {newsItems.map((item, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl mb-2">{item.title}</CardTitle>
                    <div className="flex items-center gap-4 text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{item.date}</span>
                      </div>
                      <Badge variant="outline">{item.category}</Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{item.content}</p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      <Tag className="w-3 h-3 mr-1" />
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Upcoming Events */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Upcoming</h2>
          <Card className="border-dashed border-2 border-muted-foreground/25">
            <CardContent className="p-8 text-center">
              <div className="flex flex-col items-center space-y-4">
                <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-muted-foreground" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">More Updates Coming Soon</h3>
                  <p className="text-muted-foreground">
                    Stay tuned for updates on research publications, conference presentations, and new project
                    developments.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
