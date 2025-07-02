
import React from 'react'
import { Phone, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import StickyWidgets from '@/components/StickyWidgets'

const CommercialStructures = () => {
  const handleCallNow = () => {
    window.open('tel:8886663807', '_self')
  }

  const handleGetQuote = () => {
    const message = "Hi! I'm interested in getting a quote for commercial structure construction. Can you help me with the details?"
    window.open(`https://wa.me/918886663807?text=${encodeURIComponent(message)}`, '_blank')
  }

  const projects = [
    { image: "photo-1486406146926-c627a92ad1ab", title: "Office Buildings" },
    { image: "photo-1441986300917-64674bd600d8", title: "Retail Spaces" },
    { image: "photo-1497366216548-37526070297c", title: "Warehouses" },
    { image: "photo-1497366754035-f200968a6e72", title: "Industrial Units" }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <StickyWidgets />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-slate-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-slate-900 mb-6">Commercial Structures</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Building the future of business with robust commercial construction. From offices to retail spaces, we deliver excellence.
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
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Commercial Projects</h2>
            <p className="text-xl text-slate-600">Innovative designs for modern business needs</p>
          </div>
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
                  <p className="text-slate-600 text-sm mt-2">Professional construction for business success</p>
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

export default CommercialStructures
