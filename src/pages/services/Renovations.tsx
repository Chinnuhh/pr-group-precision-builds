
import React from 'react'
import { Phone, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import StickyWidgets from '@/components/StickyWidgets'

const Renovations = () => {
  const handleCallNow = () => {
    window.open('tel:8886663807', '_self')
  }

  const handleGetQuote = () => {
    const message = "Hi! I'm interested in getting a quote for renovation services. Can you help me with the details?"
    window.open(`https://wa.me/918886663807?text=${encodeURIComponent(message)}`, '_blank')
  }

  const renovationTypes = [
    {
      title: "Kitchen Renovation",
      description: "Complete kitchen makeovers with modern appliances and design",
      image: "photo-1721322800607-8c38375eef04"
    },
    {
      title: "Bathroom Renovation",
      description: "Transform your bathrooms into luxurious spa-like spaces",
      image: "photo-1488972685288-c3fd157d7c7a"
    },
    {
      title: "Home Renovation",
      description: "Complete home makeovers to modernize your living spaces",
      image: "photo-1487958449943-2429e8be8625"
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
            backgroundImage: `url(https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)`
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Renovation Services</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-slate-200">
            Breathe new life into your spaces with our comprehensive renovation services
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
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Renovation Expertise</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From minor updates to complete overhauls, we handle all types of renovation projects
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {renovationTypes.map((type, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={`https://images.unsplash.com/${type.image}?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`}
                    alt={type.title}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{type.title}</h3>
                  <p className="text-slate-600 mb-4">{type.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Benefits */}
          <div className="bg-slate-50 rounded-2xl p-12">
            <h3 className="text-3xl font-bold text-slate-900 mb-8 text-center">Why Choose Our Renovation Services?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-slate-900 mb-2">Minimal Disruption</h4>
                    <p className="text-slate-600">We work efficiently to minimize disruption to your daily life</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-slate-900 mb-2">Budget-Friendly</h4>
                    <p className="text-slate-600">Cost-effective solutions that deliver maximum value</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-slate-900 mb-2">Quality Upgrade</h4>
                    <p className="text-slate-600">Modern materials and techniques for lasting results</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-slate-900 mb-2">Expert Planning</h4>
                    <p className="text-slate-600">Detailed planning to ensure smooth project execution</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-slate-900 mb-2">Clean Work</h4>
                    <p className="text-slate-600">Maintaining cleanliness throughout the renovation process</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-slate-900 mb-2">Warranty Support</h4>
                    <p className="text-slate-600">Comprehensive warranty on all renovation work</p>
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
          <h2 className="text-4xl font-bold mb-6">Ready to Renovate Your Space?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your renovation ideas and get a detailed quote
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

export default Renovations
