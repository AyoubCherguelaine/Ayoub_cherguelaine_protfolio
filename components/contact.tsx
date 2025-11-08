"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Mail, Linkedin, Github } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto space-y-12">
        <div className="space-y-2 text-center">
          <h2 className="text-4xl font-bold">Get In Touch</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mx-auto"></div>
          <p className="text-muted-foreground mt-4">Let's discuss your AI/NLP project or just say hello</p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 my-12">
          <a
            href="mailto:cherguelainea@gmail.com"
            className="flex flex-col items-center gap-3 p-6 rounded-lg bg-card border border-border hover:border-blue-500 hover:bg-blue-500/5 transition-colors text-center"
          >
            <Mail size={32} className="text-blue-500" />
            <h3 className="font-semibold">Email</h3>
            <p className="text-sm text-muted-foreground">cherguelainea@gmail.com</p>
          </a>

          <a
            href="https://www.linkedin.com/in/ayoub-cherguelaine"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-3 p-6 rounded-lg bg-card border border-border hover:border-blue-500 hover:bg-blue-500/5 transition-colors text-center"
          >
            <Linkedin size={32} className="text-blue-500" />
            <h3 className="font-semibold">LinkedIn</h3>
            <p className="text-sm text-muted-foreground">Connect with me</p>
          </a>

          <a
            href="https://github.com/AyoubCherguelaine"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-3 p-6 rounded-lg bg-card border border-border hover:border-blue-500 hover:bg-blue-500/5 transition-colors text-center"
          >
            <Github size={32} className="text-blue-500" />
            <h3 className="font-semibold">GitHub</h3>
            <p className="text-sm text-muted-foreground">View my code</p>
          </a>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="w-full px-4 py-2 rounded-lg bg-card border border-border focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="w-full px-4 py-2 rounded-lg bg-card border border-border focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Message</label>
            <textarea
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              rows={5}
              className="w-full px-4 py-2 rounded-lg bg-card border border-border focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 resize-none"
              placeholder="Tell me about your project..."
            />
          </div>

          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700" size="lg">
            {submitted ? "Message Sent!" : "Send Message"}
          </Button>
        </form>
      </div>
    </section>
  )
}
