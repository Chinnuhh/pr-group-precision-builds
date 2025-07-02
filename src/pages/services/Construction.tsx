
import React from 'react'
import { Phone, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import StickyWidgets from '@/components/StickyWidgets'

const Construction = () => {
  const handleCallNow = () => {
    window.open('tel:8886663807', '_self')
  }

  const handleGetQuote = () => {
    const message = "Hi! I'm interested in getting a quote for construction services. Can you help me with the details?"
    window.open(`https://wa.me/918886663807?text=${encodeURIComponent(message)}`, '_blank')
  }

  const projects = [
    {
      title: "Residential Buildings",
      description: "Modern homes with precision engineering and quality materials",
      image: "photo-1487958449943-2429e8be8625"
    },
    {
      title: "Commercial Structures",
      description: "Office buildings and commercial spaces built to perfection",
      image: "photo-1488972685288-c3fd157d7c7a"
    },
    {
      title: "Infrastructure Projects",
      description: "Roads, bridges, and public infrastructure development",
      image: "photo-1433086966358-54859d0ed716"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <StickyWidgets />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)`
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Construction Services</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-slate-200">
            Building your dreams with precision, quality, and expertise across Visakhapatnam, Srikakulam, and Vizianagaram
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              onClick={handleCallNow}
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Now
            </Button>
            <Button 
              onClick={handleGetQuote}
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 text-lg"
            >
              <ArrowRight className="mr-2 h-5 w-5" />
              Get Quote
            </Button>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Construction Expertise</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From foundation to finishing, we deliver exceptional construction services with precision and quality
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {projects.map((project, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={`https://images.unsplash.com/${project.image}?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`}
                    alt={project.title}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{project.title}</h3>
                  <p className="text-slate-600 mb-4">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Features List */}
          <div className="bg-slate-50 rounded-2xl p-12">
            <h3 className="text-3xl font-bold text-slate-900 mb-8 text-center">Why Choose PR Group Construction?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-slate-900 mb-2">Quality Materials</h4>
                    <p className="text-slate-600">We use only premium materials from trusted suppliers</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-slate-900 mb-2">Expert Team</h4>
                    <p className="text-slate-600">Skilled professionals with years of experience</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-slate-900 mb-2">Timely Delivery</h4>
                    <p className="text-slate-600">Projects completed on schedule without compromising quality</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-slate-900 mb-2">Competitive Pricing</h4>
                    <p className="text-slate-600">Fair and transparent pricing with no hidden costs</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-slate-900 mb-2">Safety Standards</h4>
                    <p className="text-slate-600">Strict adherence to safety protocols and regulations</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-slate-900 mb-2">Post-Construction Support</h4>
                    <p className="text-slate-600">Comprehensive support and maintenance services</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Construction Project?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and detailed quote for your construction needs
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              onClick={handleCallNow}
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Now
            </Button>
            <Button 
              onClick={handleGetQuote}
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 text-lg"
            >
              <ArrowRight className="mr-2 h-5 w-5" />
              Get Quote on WhatsApp
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Construction
