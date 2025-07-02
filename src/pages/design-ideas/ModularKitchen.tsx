
import React from 'react'
import { Phone, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import StickyWidgets from '@/components/StickyWidgets'

const ModularKitchen = () => {
  const handleCallNow = () => {
    window.open('tel:8886663807', '_self')
  }

  const handleGetQuote = () => {
    const message = "Hi! I'm looking to get a quote for modular kitchen design. Can you guide me through the process?"
    window.open(`https://wa.me/918886663807?text=${encodeURIComponent(message)}`, '_blank')
  }

  const kitchenStyles = [
    {
      title: "L-Shaped Kitchen",
      description: "Perfect for corner spaces with optimal storage solutions",
      image: "photo-1721322800607-8c38375eef04"
    },
    {
      title: "U-Shaped Kitchen",
      description: "Maximum storage and counter space for larger kitchens",
      image: "photo-1506744038136-46273834b3fb"
    },
    {
      title: "Island Kitchen",
      description: "Modern design with central island for cooking and dining",
      image: "photo-1721322800607-8c38375eef04"
    }
  ]

  const designTips = [
    "Choose materials that are easy to clean and maintain",
    "Ensure proper ventilation and lighting in your kitchen",
    "Plan your storage according to your cooking habits",
    "Consider the kitchen triangle for efficient workflow",
    "Select colors that complement your home's overall design",
    "Invest in quality hardware for longevity"
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
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Modular Kitchen Designs</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-slate-200">
            Create your dream kitchen with our modern modular designs that blend functionality with style
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

      {/* Kitchen Styles */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Popular Kitchen Layouts</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Explore different modular kitchen layouts that suit your space and lifestyle
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {kitchenStyles.map((style, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={`https://images.unsplash.com/${style.image}?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`}
                    alt={style.title}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{style.title}</h3>
                  <p className="text-slate-600 mb-4">{style.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Design Tips */}
          <div className="bg-slate-50 rounded-2xl p-12">
            <h3 className="text-3xl font-bold text-slate-900 mb-8 text-center">Kitchen Design Tips</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {designTips.map((tip, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <p className="text-slate-700">{tip}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Why Choose Our Modular Kitchens?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">🏠</span>
              </div>
              <h4 className="text-xl font-semibold text-slate-900 mb-2">Custom Fit</h4>
              <p className="text-slate-600">Designed to fit your space perfectly</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">⚡</span>
              </div>
              <h4 className="text-xl font-semibold text-slate-900 mb-2">Quick Install</h4>
              <p className="text-slate-600">Fast and efficient installation process</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">💎</span>
              </div>
              <h4 className="text-xl font-semibold text-slate-900 mb-2">Premium Materials</h4>
              <p className="text-slate-600">High-quality materials for durability</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">🛠️</span>
              </div>
              <h4 className="text-xl font-semibold text-slate-900 mb-2">Easy Maintenance</h4>
              <p className="text-slate-600">Simple to clean and maintain</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Design Your Dream Kitchen?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Get in touch with our experts to start planning your perfect modular kitchen today
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

export default ModularKitchen
