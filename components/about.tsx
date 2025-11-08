export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="space-y-2">
          <h2 className="text-4xl font-bold">About Me</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
        </div>

        <p className="text-lg text-muted-foreground leading-relaxed">
          Hi, I'm <span className="font-semibold text-foreground">Ayoub Cherguelaine</span>, an AI and NLP Engineer with a strong background in Software Development.
Skilled in various technologies and dedicated to creating innovative Solutions. Passionate
about artificial intelligence and NLP, with a particular interest in Generative Language
Models.
        </p>

        <div className="grid sm:grid-cols-3 gap-6">
          <div className="p-6 rounded-lg bg-background border border-border">
            <h3 className="font-semibold text-lg mb-2">LLM Engineering</h3>
            <p className="text-muted-foreground text-sm">
              Building and fine-tuning large language models for specialized tasks
            </p>
          </div>
          <div className="p-6 rounded-lg bg-background border border-border">
            <h3 className="font-semibold text-lg mb-2">Production Ready</h3>
            <p className="text-muted-foreground text-sm">Deploying AI solutions at scale with proven reliability</p>
          </div>
          <div className="p-6 rounded-lg bg-background border border-border">
            <h3 className="font-semibold text-lg mb-2">Continuous Learning</h3>
            <p className="text-muted-foreground text-sm">Staying at the forefront of AI/ML research and development</p>
          </div>
        </div>
      </div>
    </section>
  )
}
