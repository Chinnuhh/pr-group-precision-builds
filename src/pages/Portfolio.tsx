
import React from 'react'
import { Phone, ArrowRight, MapPin, Calendar } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import StickyWidgets from '@/components/StickyWidgets'

const Portfolio = () => {
  const handleCallNow = () => {
    window.open('tel:8886663807', '_self')
  }

  const handleGetQuote = () => {
    const message = "Hi! I saw your portfolio and I'm interested in getting a quote for a similar project. Can you help me?"
    window.open(`https://wa.me/918886663807?text=${encodeURIComponent(message)}`, '_blank')
  }

  const projects = [
    {
      title: "Modern Villa Construction",
      location: "Visakhapatnam",
      type: "Construction",
      year: "2024",
      description: "Complete construction of a modern 3-bedroom villa with contemporary design and premium finishes.",
      image: "photo-1487958449943-2429e8be8625",
      beforeImage: "photo-1433086966358-54859d0ed716"
    },
    {
      title: "Luxury Living Room Interior",
      location: "Srikakulam",
      type: "Interior Design",
      year: "2024",
      description: "Complete transformation of living space with modern furniture and elegant decor.",
      image: "photo-1721322800607-8c38375eef04",
      beforeImage: "photo-1506744038136-46273834b3fb"
    },
    {
      title: "Kitchen Renovation Project",
      location: "Vizianagaram",
      type: "Renovation",
      year: "2023",
      description: "Full kitchen renovation with modular design and premium appliances.",
      image: "photo-1488972685288-c3fd157d7c7a",
      beforeImage: "photo-1433086966358-54859d0ed716"
    },
    {
      title: "Office Interior Design",
      location: "Visakhapatnam",
      type: "Interior Design",
      year: "2023",
      description: "Modern office space design with ergonomic furniture and professional aesthetics.",
      image: "photo-1506744038136-46273834b3fb",
      beforeImage: "photo-1721322800607-8c38375eef04"
    }
  ]

  const testimonials = [
    {
      name: "Rajesh Kumar",
      project: "Villa Construction",
      rating: 5,
      text: "Excellent work quality and timely completion. PR Group exceeded our expectations with their attention to detail."
    },
    {
      name: "Priya Sharma",
      project: "Interior Design",
      rating: 5,
      text: "Beautiful interior design that perfectly matched our vision. Highly professional team and great communication."
    },
    {
      name: "Venkat Reddy",
      project: "Kitchen Renovation",
      rating: 5,
      text: "Amazing transformation of our kitchen. The modular design is both functional and stylish."
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <StickyWidgets />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Portfolio</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-slate-200">
            Witness the transformation in our recent construction and interior design projects
          </p>
        </div>
      </section>

      {/* Projects Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Recent Projects</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Explore our latest construction and interior design projects across Andhra Pradesh
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-2xl transition-all duration-300">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                  {/* Before Image */}
                  <div className="relative">
                    <img 
                      src={`https://images.unsplash.com/${project.beforeImage}?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80`}
                      alt="Before"
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Before
                    </div>
                  </div>
                  
                  {/* After Image */}
                  <div className="relative">
                    <img 
                      src={`https://images.unsplash.com/${project.image}?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80`}
                      alt="After"
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      After
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                      {project.type}
                    </span>
                    <div className="flex items-center text-slate-500 text-sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      {project.year}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{project.title}</h3>
                  
                  <div className="flex items-center text-slate-600 mb-3">
                    <MapPin className="h-4 w-4 mr-1" />
                    {project.location}
                  </div>
                  
                  <p className="text-slate-600 mb-4">{project.description}</p>
                  
                  <Button 
                    onClick={handleGetQuote}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    Get Similar Project Quote
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Client Testimonials</h2>
            <p className="text-xl text-slate-600">
              What our clients say about their experience with PR Group
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-xl">★</span>
                    ))}
                  </div>
                  <p className="text-slate-600 mb-4 italic">"{testimonial.text}"</p>
                  <div>
                    <h4 className="font-semibold text-slate-900">{testimonial.name}</h4>
                    <p className="text-sm text-slate-500">{testimonial.project}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Join our satisfied clients and transform your space with PR Group's expertise
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

export default Portfolio
