"use client"

import * as React from "react"
import { useState } from "react"
import { 
  Instagram, 
  Twitter, 
  Linkedin, 
  Facebook,
  Send,
  Calendar,
  Check,
  AlertCircle,
  Copy,
  Download
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"

type SocialPlatform = "twitter" | "instagram" | "linkedin" | "facebook"

interface ContentFormState {
  topic: string
  tone: string
  keywords: string
  platform: SocialPlatform
  includeImage: boolean
}

interface GeneratedContent {
  text: string
  imagePrompt?: string
  imageUrl?: string
  platform: SocialPlatform
}

const TONES = [
  "Professional",
  "Casual",
  "Enthusiastic",
  "Informative",
  "Humorous",
  "Inspirational"
]

const PLATFORMS = [
  { value: "twitter", label: "Twitter", icon: <Twitter className="h-4 w-4 mr-2" /> },
  { value: "instagram", label: "Instagram", icon: <Instagram className="h-4 w-4 mr-2" /> },
  { value: "linkedin", label: "LinkedIn", icon: <Linkedin className="h-4 w-4 mr-2" /> },
  { value: "facebook", label: "Facebook", icon: <Facebook className="h-4 w-4 mr-2" /> }
]

const getPlatformIcon = (platform: SocialPlatform) => {
  switch (platform) {
    case "twitter": return <Twitter className="h-5 w-5" />
    case "instagram": return <Instagram className="h-5 w-5" />
    case "linkedin": return <Linkedin className="h-5 w-5" />
    case "facebook": return <Facebook className="h-5 w-5" />
  }
}

const getPlatformColor = (platform: SocialPlatform) => {
  switch (platform) {
    case "twitter": return "bg-blue-500/10 text-blue-500 border-blue-500/20"
    case "instagram": return "bg-pink-500/10 text-pink-500 border-pink-500/20"
    case "linkedin": return "bg-blue-700/10 text-blue-700 border-blue-700/20"
    case "facebook": return "bg-blue-600/10 text-blue-600 border-blue-600/20"
  }
}

// Example content templates for different platforms
const generateContentExample = (formState: ContentFormState): GeneratedContent => {
  const { topic, tone, keywords, platform, includeImage } = formState
  const keywordArray = keywords.split(',').map(k => k.trim()).filter(Boolean)
  
  let text = ""
  let imagePrompt = ""
  
  // Simple template-based generation (in a real app, this would use an AI API)
  switch (platform) {
    case "twitter":
      text = `Just published a new article on ${topic}! ${keywordArray.map(k => `#${k.replace(/\s+/g, '')}`).join(' ')}`;
      break;
    case "instagram":
      text = `📸 Exploring ${topic} today!\n\n${keywordArray.map(k => `#${k.replace(/\s+/g, '')}`).join(' ')}`;
      break;
    case "linkedin":
      text = `I'm excited to share my latest insights on ${topic}. This is particularly relevant for professionals interested in ${keywordArray.join(', ')}. What are your thoughts on this topic?`;
      break;
    case "facebook":
      text = `Just wanted to share some thoughts on ${topic}. I'd love to hear your perspectives!`;
      break;
  }
  
  if (includeImage) {
    imagePrompt = `Professional image related to ${topic} with ${tone.toLowerCase()} mood`;
    // In a real implementation, this would call an image generation API
  }
  
  return {
    text,
    imagePrompt: includeImage ? imagePrompt : undefined,
    imageUrl: includeImage ? "/social-image-placeholder.jpg" : undefined,
    platform
  }
}

export function SocialContentGenerator() {
  const [formState, setFormState] = useState<ContentFormState>({
    topic: "",
    tone: "Professional",
    keywords: "",
    platform: "twitter",
    includeImage: true
  })
  
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedContent, setGeneratedContent] = useState<GeneratedContent | null>(null)
  const [zapierStatus, setZapierStatus] = useState<"idle" | "sending" | "success" | "error">("idle")
  
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormState(prev => ({ ...prev, [name]: value }))
  }
  
  const handleSelectChange = (name: keyof ContentFormState, value: string) => {
    setFormState(prev => ({ ...prev, [name]: value }))
  }
  
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target
    setFormState(prev => ({ ...prev, [name]: checked }))
  }
  
  const handleGenerate = async () => {
    setIsGenerating(true)
    
    try {
      // In a real implementation, this would call an AI API
      // For demo purposes, we'll use a simple template-based approach
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      const content = generateContentExample(formState)
      setGeneratedContent(content)
    } catch (error) {
      console.error("Error generating content:", error)
    } finally {
      setIsGenerating(false)
    }
  }
  
  const handleSchedule = async () => {
    if (!generatedContent) return
    
    setZapierStatus("sending")
    
    try {
      // In a real implementation, this would send the content to Zapier
      // For demo purposes, we'll simulate a successful API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      console.log("Content scheduled via Zapier:", generatedContent)
      setZapierStatus("success")
      
      // Reset after successful scheduling
      setTimeout(() => {
        setZapierStatus("idle")
      }, 3000)
    } catch (error) {
      console.error("Error scheduling content:", error)
      setZapierStatus("error")
    }
  }
  
  const handleCopyText = () => {
    if (!generatedContent) return
    navigator.clipboard.writeText(generatedContent.text)
  }
  
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Social Media{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Content Generator
            </span>
          </h2>
          <p className="text-white/60">
            Create engaging social media content with AI and schedule posts automatically with Zapier integration.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2">
          {/* Content Generation Form */}
          <Card className="bg-black/80 backdrop-blur-sm border-white/10 text-white">
            <CardHeader>
              <CardTitle className="text-white">Generate Content</CardTitle>
              <CardDescription className="text-white/60">
                Fill in the details to create tailored social media content
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm text-white/70">Topic</label>
                <Input
                  name="topic"
                  placeholder="What do you want to post about?"
                  value={formState.topic}
                  onChange={handleChange}
                  className="bg-black/50 border-white/20"
                  disabled={isGenerating}
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm text-white/70">Tone</label>
                <Select
                  value={formState.tone}
                  onValueChange={(value) => handleSelectChange("tone", value)}
                  disabled={isGenerating}
                >
                  <SelectTrigger className="bg-black/50 border-white/20">
                    <SelectValue placeholder="Select tone" />
                  </SelectTrigger>
                  <SelectContent className="bg-black/90 border-white/20 text-white">
                    {TONES.map((tone) => (
                      <SelectItem key={tone} value={tone}>
                        {tone}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm text-white/70">Keywords (comma separated)</label>
                <Input
                  name="keywords"
                  placeholder="marketing, design, creativity"
                  value={formState.keywords}
                  onChange={handleChange}
                  className="bg-black/50 border-white/20"
                  disabled={isGenerating}
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm text-white/70">Platform</label>
                <Select
                  value={formState.platform}
                  onValueChange={(value) => handleSelectChange("platform", value as SocialPlatform)}
                  disabled={isGenerating}
                >
                  <SelectTrigger className="bg-black/50 border-white/20">
                    <SelectValue placeholder="Select platform" />
                  </SelectTrigger>
                  <SelectContent className="bg-black/90 border-white/20 text-white">
                    {PLATFORMS.map((platform) => (
                      <SelectItem key={platform.value} value={platform.value}>
                        <div className="flex items-center">
                          {platform.icon}
                          {platform.label}
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="includeImage"
                  name="includeImage"
                  checked={formState.includeImage}
                  onChange={handleCheckboxChange}
                  className="h-4 w-4 rounded border-white/20 bg-black/50"
                  disabled={isGenerating}
                />
                <label htmlFor="includeImage" className="text-sm text-white/70">
                  Generate matching image
                </label>
              </div>
            </CardContent>
            <CardFooter>
              <Button 
                onClick={handleGenerate} 
                className="w-full" 
                disabled={isGenerating || !formState.topic}
              >
                {isGenerating ? "Generating..." : "Generate Content"}
              </Button>
            </CardFooter>
          </Card>
          
          {/* Generated Content Preview */}
          <Card className="bg-black/80 backdrop-blur-sm border-white/10 text-white">
            <CardHeader>
              <CardTitle className="text-white">Content Preview</CardTitle>
              <CardDescription className="text-white/60">
                Preview and schedule your generated content
              </CardDescription>
            </CardHeader>
            <CardContent className="min-h-[300px] flex flex-col">
              {generatedContent ? (
                <>
                  <div className="mb-4 flex items-center">
                    <Badge className={cn("flex items-center gap-1", getPlatformColor(generatedContent.platform))}>
                      {getPlatformIcon(generatedContent.platform)}
                      {PLATFORMS.find(p => p.value === generatedContent.platform)?.label}
                    </Badge>
                  </div>
                  
                  <div className="p-4 rounded-md border border-white/10 bg-black/50 mb-4">
                    <p className="text-white/90 whitespace-pre-line">{generatedContent.text}</p>
                  </div>
                  
                  {generatedContent.imageUrl && (
                    <div className="relative rounded-md overflow-hidden h-40 mb-4">
                      <div className="absolute inset-0 flex items-center justify-center bg-gray-900/50 text-white/50">
                        Image placeholder (would be generated in production)
                      </div>
                    </div>
                  )}
                  
                  <div className="flex gap-2 mt-auto">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={handleCopyText}
                      className="flex-1"
                    >
                      <Copy className="h-4 w-4 mr-2" />
                      Copy Text
                    </Button>
                    
                    <Button 
                      onClick={handleSchedule} 
                      size="sm"
                      className="flex-1"
                      disabled={zapierStatus === "sending"}
                    >
                      {zapierStatus === "sending" ? (
                        "Scheduling..."
                      ) : (
                        <>
                          <Calendar className="h-4 w-4 mr-2" />
                          Schedule via Zapier
                        </>
                      )}
                    </Button>
                  </div>
                  
                  {zapierStatus === "success" && (
                    <div className="mt-4 rounded-md bg-green-950/50 p-3 text-sm text-green-400 flex items-center">
                      <Check className="h-4 w-4 mr-2" />
                      Content successfully scheduled via Zapier!
                    </div>
                  )}
                  
                  {zapierStatus === "error" && (
                    <div className="mt-4 rounded-md bg-red-950/50 p-3 text-sm text-red-400 flex items-center">
                      <AlertCircle className="h-4 w-4 mr-2" />
                      Error scheduling content. Please try again.
                    </div>
                  )}
                </>
              ) : (
                <div className="flex flex-col items-center justify-center h-full text-white/40">
                  <p>Generated content will appear here</p>
                  <p className="text-sm mt-2">Fill out the form and click "Generate Content"</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
        
        {/* Zapier Integration Info */}
        <div className="mt-12 p-6 rounded-lg border border-white/10 bg-gradient-to-br from-blue-900/20 to-purple-900/20">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center">
                <svg className="w-8 h-8 text-orange-400" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Zapier Integration</h3>
              <p className="text-white/70 mb-4">
                This social media content generator connects with Zapier to automate your content scheduling. 
                Connect with 3,000+ apps including Buffer, Hootsuite, Later, and more.
              </p>
              <Button variant="outline" className="border-white/20 hover:bg-white/10">
                Configure Zapier Integration
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
