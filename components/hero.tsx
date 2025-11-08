import { Button } from "@/components/ui/button"
import { Github, Linkedin, ExternalLink, Download } from "lucide-react"

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-pretty">
            <span className="bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
              Ayoub Cherguelaine
            </span>
          </h1>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-muted-foreground">
            AI & NLP Engineer
          </h2>
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Crafting intelligent language solutions with Large Language Models, and advanced machine learning
          </p>
        </div>

        <div className="flex gap-4 justify-center flex-wrap">
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
            <a href="#projects">
              View Projects
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="#contact">Get in Touch</a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="/CHERGUELAINE_Ayoub.pdf" download="CHERGUELAINE_Ayoub.pdf">
              Download CV
              <Download className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>

        <div className="flex gap-6 justify-center">
          <a
            href="https://github.com/AyoubCherguelaine"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-card hover:bg-accent transition-colors"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/ayoub-cherguelaine"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-card hover:bg-accent transition-colors"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://huggingface.co/AyoubChLin"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-card hover:bg-accent transition-colors"
          >
            <ExternalLink size={24} />
          </a>
        </div>
      </div>
    </section>
  )
}
