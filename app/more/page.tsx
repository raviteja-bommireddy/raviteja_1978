import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Lightbulb, MessageCircle, Users, BookOpen, Coffee, Mail, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function MorePage() {
  const brainstormAreas = [
    {
      title: "Multilingual AI Ethics",
      description:
        "Exploring ethical considerations in developing AI systems for low-resource languages and ensuring fair representation.",
      icon: <Users className="w-6 h-6" />,
      topics: ["Bias in NLP", "Cultural Sensitivity", "Language Preservation", "Inclusive AI"],
    },
    {
      title: "Multimodal Learning",
      description:
        "Investigating novel approaches to combine text, image, and audio data for comprehensive AI understanding.",
      icon: <Lightbulb className="w-6 h-6" />,
      topics: ["Cross-modal Learning", "Fusion Techniques", "Representation Learning", "Zero-shot Learning"],
    },
    {
      title: "AI for Social Good",
      description:
        "Brainstorming applications of AI technology to address societal challenges and improve quality of life.",
      icon: <BookOpen className="w-6 h-6" />,
      topics: ["Healthcare AI", "Education Technology", "Environmental Monitoring", "Accessibility Tools"],
    },
    {
      title: "Research Collaboration",
      description: "Open to discussing potential research collaborations and interdisciplinary projects.",
      icon: <MessageCircle className="w-6 h-6" />,
      topics: ["Joint Research", "Data Sharing", "Methodology Exchange", "Publication Opportunities"],
    },
  ]

  const discussionTopics = [
    "Self-supervised learning in low-resource settings",
    "Contrastive learning for medical image analysis",
    "Transfer learning across linguistic families",
    "Evaluation metrics for multilingual models",
    "Edge computing for real-time AI applications",
    "Federated learning for privacy-preserving AI",
    "Explainable AI in critical applications",
    "AI model compression and optimization",
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Brainstorm & Collaborate</h1>
          <p className="text-lg text-muted-foreground">
            Let's explore ideas, discuss research opportunities, and collaborate on meaningful AI projects that can make
            a positive impact on society.
          </p>
        </div>

        {/* Brainstorm Areas */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Areas of Interest</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {brainstormAreas.map((area, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">{area.icon}</div>
                    <CardTitle className="text-lg">{area.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{area.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {area.topics.map((topic, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {topic}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Discussion Topics */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Open Discussion Topics</h2>
          <Card>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {discussionTopics.map((topic, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-sm">{topic}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Collaboration Opportunities */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Collaboration Opportunities</h2>
          <div className="space-y-4">
            <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Users className="w-5 h-5 text-blue-600" />
                  <h3 className="font-semibold">Research Partnerships</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  Interested in collaborating on research projects related to multilingual NLP, computer vision, or AI
                  ethics. Open to both academic and industry partnerships.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <BookOpen className="w-5 h-5 text-green-600" />
                  <h3 className="font-semibold">Knowledge Exchange</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  Happy to share insights on my research areas and learn from others working on similar problems. Let's
                  build a community of responsible AI researchers.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Coffee className="w-5 h-5 text-purple-600" />
                  <h3 className="font-semibold">Informal Discussions</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  Always up for a coffee chat about AI, research methodologies, or the future of technology. Sometimes
                  the best ideas come from casual conversations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Contact for Collaboration */}
        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="p-8 text-center">
            <div className="flex flex-col items-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <MessageCircle className="w-8 h-8 text-primary" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Let's Start a Conversation</h3>
                <p className="text-muted-foreground max-w-md">
                  Have an interesting idea or want to discuss potential collaboration? I'd love to hear from you and
                  explore how we can work together.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 mt-6">
                <Button asChild>
                  <Link href="mailto:cs23b2011@iiitdm.ac.in">
                    <Mail className="w-4 h-4 mr-2" />
                    Send Email
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="https://linkedin.com/in/raviteja-bommireddy" target="_blank">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Connect on LinkedIn
                  </Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
