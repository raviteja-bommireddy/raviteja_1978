import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, Linkedin, Github } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-2">Raviteja Bommireddy</h1>
              <p className="text-xl text-muted-foreground mb-4">Research Assistant & AI Enthusiast</p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                B.Tech Computer Science with AI specialization at IIITDM Kancheepuram. Passionate about multilingual
                NLP, computer vision, and building AI solutions that bridge linguistic divides and serve
                underrepresented communities.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button variant="outline" size="sm" asChild>
                <Link href="mailto:cs23b2011@iiitdm.ac.in">
                  <Mail className="w-4 h-4 mr-2" />
                  Email
                </Link>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <Link href="tel:+919391985287">
                  <Phone className="w-4 h-4 mr-2" />
                  Phone
                </Link>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <Link href="https://linkedin.com/in/raviteja-bommireddy" target="_blank">
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </Link>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <Link href="https://github.com/raviteja-bommireddy" target="_blank">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </Link>
              </Button>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/my%20photo%20HD.jpg-gebuwVanQmFEsf4NqmCJxWjTXhsMz1.jpeg"
                alt="Raviteja Bommireddy"
                width={280}
                height={350}
                className="rounded-lg shadow-lg object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* About Section */}
        <Card className="mb-12">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-6">About Me</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="mb-4">
                My fascination with how language and data shape human understanding has always guided me. I find joy not
                just in building models, but in uncovering insights, solving meaningful problems, and exploring the
                unknown. It is this curiosity, not titles or accolades, that drives me.
              </p>
              <p className="mb-4">
                Currently working as a Research Assistant at IIITDM Kancheepuram, I'm developing a multi-modal fake news
                detection model that integrates text and image data across 10+ Indian regional languages. This work has
                shown me that data science is not just about performance, but also about representation, accessibility,
                and responsibility.
              </p>
              <p>
                I believe technology should adapt to people, not the other way around. My goal is to develop tools that
                empower speakers of underrepresented languages and bridge linguistic divides in AI systems.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Current Research */}
        <Card className="mb-12">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-6">Current Research</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">Multi-modal Fake News Detection</h3>
                <p className="text-muted-foreground mb-3">
                  Developing a comprehensive fake news detection system that seamlessly integrates text and image
                  analysis across 10+ Indian regional languages, leveraging cutting-edge pre-trained models like m-BERT
                  and XLM-RoBERTa.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">NLP</Badge>
                  <Badge variant="secondary">Computer Vision</Badge>
                  <Badge variant="secondary">Multilingual AI</Badge>
                  <Badge variant="secondary">Transfer Learning</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Skills Overview */}
        <Card>
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-6">Technical Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <h3 className="font-semibold mb-3">Programming</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Python</Badge>
                  <Badge variant="outline">SQL</Badge>
                  <Badge variant="outline">C++</Badge>
                  <Badge variant="outline">Git</Badge>
                  <Badge variant="outline">LaTeX</Badge>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-3">AI/ML</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">TensorFlow</Badge>
                  <Badge variant="outline">PyTorch</Badge>
                  <Badge variant="outline">Scikit-learn</Badge>
                  <Badge variant="outline">NLTK</Badge>
                  <Badge variant="outline">OpenCV</Badge>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-3">Specializations</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">NLP</Badge>
                  <Badge variant="outline">Computer Vision</Badge>
                  <Badge variant="outline">Data Science</Badge>
                  <Badge variant="outline">Deep Learning</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
