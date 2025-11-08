import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const education = [
  {
    degree: "Master's Degree",
    field: "NATURAL LANGUAGE PROCESSING (Artificial Intelligence)",
    school: "Saad Dahleb Blida University, Blida, Algeira",
    year: "2023",
    honors: "GPA: 4.0/5.0",
  },
  {
    degree: "Bachelor's Degree",
    field: "INFORMATION SYSTEMS AND SOFTWARE ENGINEERING",
    school: "Saad Dahleb Blida University, Blida, Algeira",
    year: "2021",
    honors: "GPA: 3.5/5.0",
  },
]

const certifications = [
  "NVIDIA Deep Learning Institute Certification",
  "Advanced NLP with Transformers",
  "Production Machine Learning Engineering",
  "Cloud Architecture Specialization",
]

export default function Education() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="space-y-2">
          <h2 className="text-4xl font-bold">Education & Certifications</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="font-semibold text-xl">Education</h3>
            {education.map((edu, i) => (
              <Card key={i} className="p-4 border border-border">
                <h4 className="font-semibold">{edu.degree}</h4>
                <p className="text-blue-500 text-sm">{edu.field}</p>
                <p className="text-muted-foreground text-sm">
                  {edu.school} • {edu.year}
                </p>
                <p className="text-xs text-muted-foreground mt-2">{edu.honors}</p>
              </Card>
            ))}
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-xl">Certifications</h3>
            <div className="flex flex-wrap gap-2">
              {certifications.map((cert, i) => (
                <Badge key={i} variant="secondary" className="text-xs py-2">
                  {cert}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
