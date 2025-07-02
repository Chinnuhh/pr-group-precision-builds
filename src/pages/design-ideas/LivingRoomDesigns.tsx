
import React from 'react'
import { Phone, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import StickyWidgets from '@/components/StickyWidgets'

const LivingRoomDesigns = () => {
  const handleCallNow = () => {
    window.open('tel:8886663807', '_self')
  }

  const handleGetQuote = () => {
    const message = "Hi! I'm interested in getting a quote for living room designs. Can you help me with the details?"
    window.open(`https://wa.me/918886663807?text=${encodeURIComponent(message)}`, '_blank')
  }

  const designs = [
    { image: "photo-1586023492125-27b2c045efd7", title: "Modern Living Room" },
    { image: "photo-1560448204-603b3fc33ddc", title: "Cozy Family Room" },
    { image: "photo-1616486338812-3dadae4b4ace", title: "Luxury Lounge" },
    { image: "photo-1505693416388-ac5ce068fe85", title: "Minimalist Design" }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <StickyWidgets />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-slate-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-slate-900 mb-6">Living Room Designs</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Create the perfect gathering space with our stunning living room designs.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button onClick={handleCallNow} size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Phone className="mr-2 h-5 w-5" />
              Call Now
            </Button>
            <Button onClick={handleGetQuote} size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
              <ArrowRight className="mr-2 h-5 w-5" />
              Get Quote
            </Button>
          </div>
        </div>
      </section>

      {/* Design Gallery */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {designs.map((design, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={`https://images.unsplash.com/${design.image}?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80`}
                    alt={design.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-slate-900">{design.title}</h3>
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

export default LivingRoomDesigns
