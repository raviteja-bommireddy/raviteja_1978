import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Building } from "lucide-react"

export default function ExperiencesPage() {
  const experiences = [
    {
      title: "Research Assistant",
      company: "IIITDM Kancheepuram",
      location: "Chennai, India",
      duration: "May 2024 - Present",
      type: "Research",
      description: [
        "Developed a multi-modal fake news detection model, seamlessly integrating text and image data across 10+ Indian regional languages for comprehensive analysis.",
        "Leveraged cutting-edge pre-trained models like m-BERT, XLM-RoBERTa and other diverse models, applying transfer learning and fine-tuning to achieve significant performance improvements on regional language datasets.",
        "Conducted rigorous model evaluation using statistical metrics and performance benchmarks, achieving state-of-the-art results and ensuring the model's reliability across real-world applications.",
        "Added functionality allowing users to send images to the model for fake news detection, leveraging pre-trained Hugging Face models with 93% accuracy.",
      ],
      skills: ["NLP", "Computer Vision", "Transfer Learning", "m-BERT", "XLM-RoBERTa", "Multilingual AI"],
    },
    {
      title: "Data Scientist & Data Analyst Intern",
      company: "Cipher Byte Technologies",
      location: "Remote",
      duration: "Mar 2024 - Apr 2024",
      type: "Internship",
      description: [
        "Streamlined ETL workflows to extract, transform, and load regional unemployment data, enhancing accuracy with VLOOKUP to link datasets and providing real-time, multidimensional insights for targeted interventions and strategic decision-making.",
        "Boosted model accuracy by 0.3% through feature fine-tuning using OLAP data, aiding in precise unemployment trend predictions for targeted skill development programs.",
        "Built and deployed ML models to predict regional unemployment trends, providing real-time insights for strategic decision-making.",
      ],
      skills: ["Data Science", "ETL", "Machine Learning", "OLAP", "Data Analysis", "Predictive Modeling"],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Professional Experience</h1>
          <p className="text-lg text-muted-foreground">
            My journey in research and industry, focusing on AI, NLP, and data science applications.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="border-l-4 border-l-primary">
              <CardHeader>
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl mb-2">{exp.title}</CardTitle>
                    <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Building className="w-4 h-4" />
                        <span className="font-medium">{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.duration}</span>
                      </div>
                    </div>
                  </div>
                  <Badge variant={exp.type === "Research" ? "default" : "secondary"}>{exp.type}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <ul className="space-y-2">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="text-muted-foreground flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div>
                    <h4 className="font-semibold mb-2">Key Technologies & Skills:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, idx) => (
                        <Badge key={idx} variant="outline">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Education Section */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold mb-6">Education</h2>
          <Card className="border-l-4 border-l-blue-500">
            <CardHeader>
              <CardTitle className="text-xl">Bachelor of Technology in Computer Science - AI</CardTitle>
              <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Building className="w-4 h-4" />
                  <span className="font-medium">Indian Institute of Information Technology</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  <span>Chennai</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>Aug 2023 - June 2027</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <p className="text-muted-foreground">
                  Specializing in Artificial Intelligence with comprehensive coursework in machine learning, data
                  science, and AI applications.
                </p>
                <div>
                  <h4 className="font-semibold mb-2">Relevant Coursework:</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Artificial Intelligence</Badge>
                    <Badge variant="outline">Machine Learning</Badge>
                    <Badge variant="outline">Statistics & Probability</Badge>
                    <Badge variant="outline">Database Systems</Badge>
                    <Badge variant="outline">Applied Data Science</Badge>
                    <Badge variant="outline">Optimization Techniques</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
