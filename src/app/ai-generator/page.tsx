import Link from 'next/link'
import Image from 'next/image'
import { FaArrowLeft, FaImage, FaFileAlt, FaMusic } from 'react-icons/fa'

export default function AIGenerator() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Navigation */}
      <nav className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md fixed w-full z-10 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link href="/" className="font-display text-2xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
            Build with Brilliance
          </Link>
          <div className="hidden md:flex space-x-8 items-center">
            <Link href="/#about" className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">About</Link>
            <Link href="/#services" className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Services</Link>
            <Link href="/#portfolio" className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Portfolio</Link>
            <Link href="/#contact" className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300">Let's Connect</Link>
          </div>
          <button className="md:hidden text-gray-700 dark:text-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Back to Home */}
      <div className="pt-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <Link href="/" className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium">
          <FaArrowLeft className="mr-2" /> Back to Home
        </Link>
      </div>

      {/* Header */}
      <section className="pt-8 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
            AI Media Generator
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-12">
            Create stunning visuals, compelling bios, and creative content tailored to your brand using advanced AI technology.
          </p>
        </div>

        {/* Generator Options */}
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="card p-8 text-center hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaFileAlt className="text-primary-600 dark:text-primary-400 text-2xl" />
            </div>
            <h3 className="text-xl font-bold mb-4">Bio & Tagline Generator</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Create compelling professional bios and catchy taglines that capture your unique creative identity.
            </p>
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg mb-6 border border-gray-200 dark:border-gray-700">
              <p className="text-sm text-gray-500 dark:text-gray-400 italic mb-2">Example:</p>
              <p className="text-gray-700 dark:text-gray-300">
                "A visionary designer merging technology and artistry to craft immersive digital experiences that inspire and transform."
              </p>
            </div>
            <button className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 w-full">
              Generate Bio
            </button>
          </div>

          <div className="card p-8 text-center hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-secondary-100 dark:bg-secondary-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaImage className="text-secondary-600 dark:text-secondary-400 text-2xl" />
            </div>
            <h3 className="text-xl font-bold mb-4">Visual Content Creator</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Generate unique images and graphics that align with your brand's creative style and vision.
            </p>
            <div className="relative h-48 mb-6 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-sm text-gray-500 dark:text-gray-400">AI-generated image preview</p>
              </div>
            </div>
            <button className="px-6 py-3 bg-secondary-600 hover:bg-secondary-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 w-full">
              Generate Image
            </button>
          </div>

          <div className="card p-8 text-center hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-yellow-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaMusic className="text-yellow-600 dark:text-yellow-400 text-2xl" />
            </div>
            <h3 className="text-xl font-bold mb-4">Creative Audio Generator</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Create unique audio clips, jingles, or background music that enhances your creative projects.
            </p>
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg mb-6 border border-gray-200 dark:border-gray-700">
              <div className="w-full h-12 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                <div className="flex space-x-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div 
                      key={i}
                      className="w-1 bg-primary-500 rounded-full animate-pulse"
                      style={{ 
                        height: `${Math.random() * 24 + 8}px`,
                        animationDelay: `${i * 0.1}s`
                      }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
            <button className="px-6 py-3 bg-yellow-600 hover:bg-yellow-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 w-full">
              Generate Audio
            </button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              How It Works
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Our AI-powered generator uses advanced algorithms to create content that aligns with your creative identity.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mx-auto mb-4 relative">
                <span className="text-primary-600 dark:text-primary-400 font-bold">1</span>
                <div className="absolute top-1/2 left-full h-0.5 w-full bg-gray-200 dark:bg-gray-700 -translate-y-1/2 hidden md:block"></div>
              </div>
              <h3 className="text-lg font-bold mb-2">Define Your Style</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Select your creative archetype and preferences
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mx-auto mb-4 relative">
                <span className="text-primary-600 dark:text-primary-400 font-bold">2</span>
                <div className="absolute top-1/2 left-full h-0.5 w-full bg-gray-200 dark:bg-gray-700 -translate-y-1/2 hidden md:block"></div>
              </div>
              <h3 className="text-lg font-bold mb-2">AI Generation</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Our AI creates multiple options based on your style
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mx-auto mb-4 relative">
                <span className="text-primary-600 dark:text-primary-400 font-bold">3</span>
                <div className="absolute top-1/2 left-full h-0.5 w-full bg-gray-200 dark:bg-gray-700 -translate-y-1/2 hidden md:block"></div>
              </div>
              <h3 className="text-lg font-bold mb-2">Review & Refine</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Select your favorite options and request adjustments
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-600 dark:text-primary-400 font-bold">4</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Download & Use</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Download your content and integrate it into your projects
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="card p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
            Ready to Create Something Brilliant?
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Book a creative session to explore how our AI Media Generator can help bring your creative vision to life.
          </p>
          <Link href="/#contact" className="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 inline-block">
            Book a Creative Session
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Link href="/" className="font-display text-2xl font-bold bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent inline-block mb-4">
                Build with Brilliance
              </Link>
              <p className="text-gray-400 mb-4">
                Creating innovative digital experiences powered by AI and human creativity.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4">Navigation</h4>
              <ul className="space-y-2">
                <li><Link href="/#about" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
                <li><Link href="/#services" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
                <li><Link href="/#portfolio" className="text-gray-400 hover:text-white transition-colors">Portfolio</Link></li>
                <li><Link href="/#contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4">Services</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Creator Archetype</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">AI Media Generation</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Chatbot Development</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Social Content</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
            <p> 2025 Build with Brilliance. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
