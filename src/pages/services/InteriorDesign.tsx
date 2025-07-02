
import React from 'react'
import { Phone, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import StickyWidgets from '@/components/StickyWidgets'

const InteriorDesign = () => {
  const handleCallNow = () => {
    window.open('tel:8886663807', '_self')
  }

  const handleGetQuote = () => {
    const message = "Hi! I'm interested in getting a quote for interior design services. Can you help me with the details?"
    window.open(`https://wa.me/918886663807?text=${encodeURIComponent(message)}`, '_blank')
  }

  const services = [
    {
      title: "Living Room Design",
      description: "Create stunning living spaces that reflect your personality",
      image: "photo-1721322800607-8c38375eef04"
    },
    {
      title: "Kitchen Interiors",
      description: "Modern modular kitchens designed for functionality and style",
      image: "photo-1506744038136-46273834b3fb"
    },
    {
      title: "Bedroom Design",
      description: "Peaceful and comfortable bedroom spaces for perfect rest",
      image: "photo-1721322800607-8c38375eef04"
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
            backgroundImage: `url(https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)`
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Interior Design</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-slate-200">
            Transform your spaces with our expert interior design solutions that blend aesthetics with functionality
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
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Interior Design Services</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From concept to completion, we create beautiful interiors that enhance your lifestyle
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={`https://images.unsplash.com/${service.image}?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`}
                    alt={service.title}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-600 mb-4">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Design Process */}
          <div className="bg-slate-50 rounded-2xl p-12">
            <h3 className="text-3xl font-bold text-slate-900 mb-8 text-center">Our Design Process</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h4 className="text-xl font-semibold text-slate-900 mb-2">Consultation</h4>
                <p className="text-slate-600">Understanding your vision, needs, and budget</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h4 className="text-xl font-semibold text-slate-900 mb-2">Design</h4>
                <p className="text-slate-600">Creating detailed designs and 3D visualizations</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h4 className="text-xl font-semibold text-slate-900 mb-2">Planning</h4>
                <p className="text-slate-600">Material selection and project timeline</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">4</span>
                </div>
                <h4 className="text-xl font-semibold text-slate-900 mb-2">Execution</h4>
                <p className="text-slate-600">Professional installation and finishing</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Space?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Let's create beautiful interiors that reflect your style and enhance your living experience
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

export default InteriorDesign
