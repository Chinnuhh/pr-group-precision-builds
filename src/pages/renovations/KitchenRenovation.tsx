
import React from 'react'
import { Phone, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import StickyWidgets from '@/components/StickyWidgets'

const KitchenRenovation = () => {
  const handleCallNow = () => {
    window.open('tel:8886663807', '_self')
  }

  const handleGetQuote = () => {
    const message = "Hi! I'm interested in getting a quote for kitchen renovation. Can you help me with the details?"
    window.open(`https://wa.me/918886663807?text=${encodeURIComponent(message)}`, '_blank')
  }

  const projects = [
    { image: "photo-1556909114-f6e7ad7d3136", title: "Complete Kitchen Makeover" },
    { image: "photo-1556909049-f4ba5e73b21b", title: "Cabinet Renovation" },
    { image: "photo-1556909114-f6e7ad7d3136", title: "Countertop Upgrade" },
    { image: "photo-1556909049-f4ba5e73b21b", title: "Kitchen Layout Redesign" }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <StickyWidgets />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-slate-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-slate-900 mb-6">Kitchen Renovation</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Transform your old kitchen into a modern culinary space with our comprehensive renovation services.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button onClick={handleCallNow} size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Phone className="mr-2 h-5 w-5" />
              Call Now
            </Button>
            <Button onClick={handleGetQuote} size="lg" className="bg-gold-600 hover:bg-gold-700 border-2 border-gold-400">
              <ArrowRight className="mr-2 h-5 w-5" />
              Get Quote
            </Button>
          </div>
        </div>
      </section>

      {/* Projects Gallery */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={`https://images.unsplash.com/${project.image}?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80`}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-slate-900">{project.title}</h3>
                  <p className="text-slate-600 text-sm mt-2">Expert kitchen renovation services</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default KitchenRenovation
