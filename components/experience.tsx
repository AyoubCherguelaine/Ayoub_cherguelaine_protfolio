import { Card } from "@/components/ui/card"

const experiences = [
  {
    title: "AI/NLP Engineer",
    company: "paseetah, Riyadh, Saudi Arabia",
    period: "2024/10 - Present",
    description:
      "Designed and deployed LLM-powered solutions for task automation" +
      "Built robust data pipelines (Web scraping, Preprocessing, cleaning)" +
      "Refactored and repaired legacy datasets",
  },
  {
    title: "Part Time LLM Engineer",
    company: "JURAI, Denmark",
    period: "2024/09 - 2025/10",
    description: "Propose RAG and LLM approaches for solution engineering." +
      "Develop AI agents for user query handling." +
      "Work on backend and front-end development.",
  },
  {
    title: "Front End Developer",
    company: "BuySell, Blida, Algeria",
    period: "2024/01 - 2024/12",
    description: "Develop and implement front-end solutions using Next.js and TypeScript." +
      "Conduct thorough testing of APIs to ensure reliability and performance." +
      "Collaborate with the team to contribute to the software architecture",
  },
  {
    title: "Python Developer",
    company: "SIG Service , Algiers, Algeria",
    period: "2023/09 - 2023/12",
    description: "Designing and implementing Odoo modules to meet business requirements, API Development & Testing",
  },

  {
    title: "Intelligent AI Engineer",
    company: "Icosnet, Algiers, Algeria",
    period: "2023/01 - 2023/07",
    description: "Create an intelligent system utilizing transformers for accurate and context-based" +
      "classification of company documents." +
      "Developed an intelligent system base on context for company documents classification.",
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="space-y-2">
          <h2 className="text-4xl font-bold">Experience</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
        </div>

        <div className="space-y-4">
          {experiences.map((exp, i) => (
            <Card key={i} className="p-6 border border-border">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                <div>
                  <h3 className="font-semibold text-lg">{exp.title}</h3>
                  <p className="text-blue-500 font-medium">{exp.company}</p>
                </div>
                <p className="text-sm text-muted-foreground whitespace-nowrap">{exp.period}</p>
              </div>
              <p className="text-muted-foreground">{exp.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
