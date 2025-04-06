"use client"

import * as React from "react"
import { useState, useEffect } from "react"
import { 
  Github, 
  Twitter, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  Send,
  Check,
  AlertCircle
} from "lucide-react"
import { InlineWidget } from "react-calendly"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface ContactFormProps extends React.HTMLAttributes<HTMLFormElement> {}

function ContactForm({ className, ...props }: ContactFormProps) {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")
    
    try {
      // In a real implementation, you would send the form data to your backend
      // For demo purposes, we'll simulate a successful submission after a delay
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      console.log("Form submitted:", formState)
      setSubmitStatus("success")
      
      // Reset form after successful submission
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: ""
      })
    } catch (error) {
      console.error("Form submission error:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className={cn("space-y-4", className)} {...props}>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Input 
            name="name"
            placeholder="Your Name" 
            value={formState.name}
            onChange={handleChange}
            required 
            disabled={isSubmitting}
          />
        </div>
        <div className="space-y-2">
          <Input 
            name="email"
            type="email" 
            placeholder="Your Email" 
            value={formState.email}
            onChange={handleChange}
            required 
            disabled={isSubmitting}
          />
        </div>
      </div>
      <div className="space-y-2">
        <Input 
          name="subject"
          placeholder="Subject" 
          value={formState.subject}
          onChange={handleChange}
          required 
          disabled={isSubmitting}
        />
      </div>
      <div className="space-y-2">
        <Textarea 
          name="message"
          placeholder="Your Message" 
          className="min-h-[120px]" 
          value={formState.message}
          onChange={handleChange}
          required 
          disabled={isSubmitting}
        />
      </div>
      
      {submitStatus === "success" && (
        <div className="rounded-md bg-green-950/50 p-3 text-sm text-green-400 flex items-center">
          <Check className="h-4 w-4 mr-2" />
          Your message has been sent successfully! We'll get back to you soon.
        </div>
      )}
      
      {submitStatus === "error" && (
        <div className="rounded-md bg-red-950/50 p-3 text-sm text-red-400 flex items-center">
          <AlertCircle className="h-4 w-4 mr-2" />
          There was an error sending your message. Please try again.
        </div>
      )}
      
      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send Message"}
        <Send className="ml-2 h-4 w-4" />
      </Button>
    </form>
  )
}

interface SocialLinkProps {
  href: string
  icon: React.ReactNode
  label: string
}

function SocialLink({ href, icon, label }: SocialLinkProps) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
    >
      {icon}
      <span>{label}</span>
    </a>
  )
}

interface ContactInfoProps {
  icon: React.ReactNode
  label: string
}

function ContactInfo({ icon, label }: ContactInfoProps) {
  return (
    <div className="flex items-center gap-2 text-white/70">
      {icon}
      <span>{label}</span>
    </div>
  )
}

export function ContactSection() {
  const [activeTab, setActiveTab] = useState("message")
  const [calendlyLoaded, setCalendlyLoaded] = useState(false)

  useEffect(() => {
    // Load Calendly script dynamically
    if (activeTab === "schedule" && !calendlyLoaded) {
      const script = document.createElement('script')
      script.src = "https://assets.calendly.com/assets/external/widget.js"
      script.async = true
      document.body.appendChild(script)
      setCalendlyLoaded(true)
    }
  }, [activeTab, calendlyLoaded])

  const handleTabChange = (value: string) => {
    setActiveTab(value)
  }

  return (
    <section id="contact" className="relative py-20 overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-purple-900/20 to-black/80" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Let's Build Something{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Brilliant
            </span>
          </h2>
          <p className="text-white/60">
            Book a creative session to discuss your project and explore how we can collaborate.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <Card className="col-span-1 bg-black/80 backdrop-blur-sm border-white/10 text-white">
            <CardHeader>
              <CardTitle className="text-white">Contact Info</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                <ContactInfo 
                  icon={<Mail className="h-5 w-5" />} 
                  label="hello@example.com" 
                />
                <ContactInfo 
                  icon={<Phone className="h-5 w-5" />} 
                  label="+1 (555) 123-4567" 
                />
                <ContactInfo 
                  icon={<MapPin className="h-5 w-5" />} 
                  label="New York, NY" 
                />
              </div>

              <Separator className="bg-white/10" />

              <div className="space-y-3">
                <SocialLink 
                  href="https://github.com" 
                  icon={<Github className="h-5 w-5" />} 
                  label="GitHub" 
                />
                <SocialLink 
                  href="https://twitter.com" 
                  icon={<Twitter className="h-5 w-5" />} 
                  label="Twitter" 
                />
                <SocialLink 
                  href="https://linkedin.com" 
                  icon={<Linkedin className="h-5 w-5" />} 
                  label="LinkedIn" 
                />
              </div>
            </CardContent>
          </Card>

          <Card className="col-span-1 md:col-span-2 bg-black/80 backdrop-blur-sm border-white/10 text-white">
            <CardHeader>
              <Tabs defaultValue="message" className="w-full" onValueChange={handleTabChange}>
                <TabsList className="grid w-full grid-cols-2 bg-black/50 text-white">
                  <TabsTrigger value="message">Send Message</TabsTrigger>
                  <TabsTrigger value="schedule">Schedule Meeting</TabsTrigger>
                </TabsList>
              </Tabs>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="message" value={activeTab} onValueChange={handleTabChange}>
                <TabsContent value="message" className="mt-0">
                  <ContactForm />
                </TabsContent>
                <TabsContent value="schedule" className="mt-0">
                  <div className="h-[500px] rounded-lg overflow-hidden">
                    {activeTab === "schedule" && (
                      <InlineWidget 
                        url="https://calendly.com/lin-kevin-1923/30min" 
                        styles={{
                          height: '100%',
                          width: '100%',
                        }}
                      />
                    )}
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
