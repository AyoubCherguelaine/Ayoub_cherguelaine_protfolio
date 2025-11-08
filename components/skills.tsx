import { Badge } from "@/components/ui/badge"

const skillCategories = [
  {
    category: "Languages",
    skills: ["Python", "JavaScript/TypeScript", "SQL", "Bash"],
  },
  {
    category: "AI/ML Frameworks",
    skills: ["PyTorch", "TensorFlow", "Hugging Face Transformers", "Scikit-learn"],
  },
  {
    category: "NLP Specialties",
    skills: ["LLMs", "Fine-tuning", "RAG", "Agents", "Embeddings", "Vector Databases" , "LangChain", "OpenAI", "Anthropic", "Google"]
  },
  {
    category: "Data Engineering",
    skills: ["Data Scraping", "Data Pipelines", "Data Visualization"],
  }
  ,
  {
    category: "Web Development",
    skills: ["FASTAPI","FLASK", "Next.js", "React", "Tailwind CSS", "Shadcn UI"],
  }
  ,
  {
    category: "Tools & Platforms",
    skills: ["Jupyter", "Docker", "Git", "AWS", "Google Cloud", "Hugging Face", "OpenAI API", "Anthropic API", "Google API"],
  },
  {
    category: "Databases",
    skills: ["PostgreSQL", "MongoDB", "Vector Databases", "Redis"],
  },
  {
    category: "DevOps & Deployment",
    skills: ["Docker", "AWS EC2", "AWS Lambda", "API Development"],
  },
  {
    category: "Version Control",
    skills: ["Git", "GitHub", "GitLab", "Bitbucket"],
  }
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="space-y-2">
          <h2 className="text-4xl font-bold">Skills & Expertise</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
        </div>

        <div className="grid sm:grid-cols-2 gap-8">
          {skillCategories.map((cat, i) => (
            <div key={i}>
              <h3 className="font-semibold text-lg mb-4 text-blue-500">{cat.category}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <Badge key={skill} variant="outline" className="text-xs py-1.5">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
