
import React from 'react'
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import StickyWidgets from '@/components/StickyWidgets'

const Index = () => {
  const handleCallNow = () => {
    window.open('tel:8886663807', '_self')
  }

  const handleGetQuote = () => {
    const message = "Hi! I'm interested in getting a quote for my project. Can you help me with the details?"
    window.open(`https://wa.me/918886663807?text=${encodeURIComponent(message)}`, '_blank')
  }

  const services = [
    {
      title: "Construction",
      description: "Premium construction services with precision and quality",
      image: "photo-1487958449943-2429e8be8625",
      link: "/services/construction"
    },
    {
      title: "Interior Design",
      description: "Transform your spaces with our expert interior design solutions",
      image: "photo-1721322800607-8c38375eef04",
      link: "/services/interior-design"
    },
    {
      title: "Renovations",
      description: "Complete renovation services to modernize your spaces",
      image: "photo-1488972685288-c3fd157d7c7a",
      link: "/services/renovations"
    }
  ]

  const designIdeas = [
    { title: "Modular Kitchen Designs", link: "/design-ideas/modular-kitchen" },
    { title: "Wardrobe Designs", link: "/design-ideas/wardrobe" },
    { title: "Bathroom Designs", link: "/design-ideas/bathroom" },
    { title: "Master Bedroom Designs", link: "/design-ideas/master-bedroom" },
    { title: "Living Room Designs", link: "/design-ideas/living-room" },
    { title: "TV Unit Designs", link: "/design-ideas/tv-unit" }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <StickyWidgets />
      
      {/* Hero Section with Video Background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 animate-pulse"></div>
            <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-xl animate-bounce animation-delay-2000"></div>
            <div className="absolute top-0 right-0 w-72 h-72 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-xl animate-bounce animation-delay-4000"></div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-72 h-72 bg-pink-500/10 rounded-full mix-blend-multiply filter blur-xl animate-bounce"></div>
          </div>
        </div>
        
        {/* Background Image with Animation */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 animate-pulse"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)`
          }}
        />
        
        <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-gold-400 bg-clip-text text-transparent animate-fade-in">
            PR GROUP
          </h1>
          <p className="text-2xl md:text-4xl font-light mb-4 text-blue-200 animate-fade-in shadow-text">
            Precision Redefined
          </p>
          <p className="text-xl md:text-2xl mb-12 text-white max-w-3xl mx-auto animate-fade-in shadow-text font-medium">
            Build Smart. Live Beautiful. Choose PR Group.
          </p>
          <p className="text-lg mb-8 text-blue-100 animate-fade-in shadow-text">
            Your dream space is one click away.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in">
            <Button 
              onClick={handleCallNow}
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-xl"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Now
            </Button>
            <Button 
              onClick={handleGetQuote}
              size="lg"
              className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-xl border-2 border-gold-400"
            >
              <ArrowRight className="mr-2 h-5 w-5" />
              Get a Quote
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Our Services</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Expert construction and interior design services across Visakhapatnam, Srikakulam, and Vizianagaram
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={`https://images.unsplash.com/${service.image}?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`}
                    alt={service.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-600 mb-4">{service.description}</p>
                  <Link to={service.link}>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Design Ideas Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Design Ideas</h2>
            <p className="text-xl text-slate-600">
              Explore our curated collection of design inspirations
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {designIdeas.map((idea, index) => (
              <Link 
                key={index} 
                to={idea.link}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-slate-100"
              >
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{idea.title}</h3>
                <div className="flex items-center text-blue-600 font-medium">
                  Explore Ideas
                  <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/design-ideas">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                View All Design Ideas
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Our Portfolio</h2>
            <p className="text-xl text-slate-600">
              Witness the transformation in our recent projects
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="relative group overflow-hidden rounded-lg shadow-lg">
                <img 
                  src={`https://images.unsplash.com/photo-150639${item}386-61ad8a8c5e23?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80`}
                  alt={`Portfolio ${item}`}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 text-white">
                    <h4 className="font-semibold">Project {item}</h4>
                    <p className="text-sm text-slate-200">Visakhapatnam</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/portfolio">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                View Full Portfolio
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
            <p className="text-xl text-slate-300">
              Ready to start your dream project? Contact us today!
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <Phone className="h-12 w-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Call Us</h3>
              <p className="text-slate-300">8886663807</p>
            </div>
            <div className="text-center">
              <Mail className="h-12 w-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Email Us</h3>
              <p className="text-slate-300">prconstructioninteriors@gmail.com</p>
            </div>
            <div className="text-center">
              <MapPin className="h-12 w-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
              <p className="text-slate-300">Visakhapatnam, Andhra Pradesh</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              onClick={handleCallNow}
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Now
            </Button>
            <Button 
              onClick={handleGetQuote}
              size="lg"
              className="bg-gold-600 hover:bg-gold-700 text-white px-8 py-4 border-2 border-gold-400"
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

export default Index
