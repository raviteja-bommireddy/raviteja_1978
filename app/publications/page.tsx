import { Card, CardContent } from "@/components/ui/card"
import { FileText, Calendar, Users } from "lucide-react"

export default function PublicationsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Publications</h1>
          <p className="text-lg text-muted-foreground">
            Research papers, conference proceedings, and academic contributions.
          </p>
        </div>

        <Card className="border-dashed border-2 border-muted-foreground/25">
          <CardContent className="p-12 text-center">
            <div className="flex flex-col items-center space-y-4">
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center">
                <FileText className="w-8 h-8 text-muted-foreground" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Publications Coming Soon</h3>
                <p className="text-muted-foreground max-w-md">
                  Currently working on research papers related to multilingual fake news detection and multimodal AI
                  systems. Publications will be updated here as they become available.
                </p>
              </div>
              <div className="flex items-center gap-6 text-sm text-muted-foreground mt-6">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>In Progress</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  <span>Research Collaboration</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Future Publications Preview */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Upcoming Research</h2>
          <div className="space-y-4">
            <Card className="bg-muted/50">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Multi-modal Fake News Detection for Low-Resource Languages</h3>
                <p className="text-muted-foreground text-sm">
                  Research on developing comprehensive fake news detection systems for Indian regional languages,
                  integrating text and image analysis using transformer-based architectures.
                </p>
                <div className="mt-2 text-xs text-muted-foreground">
                  Status: Under Development | Expected: 2024-2025
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
