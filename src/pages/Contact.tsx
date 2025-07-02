
import React from 'react'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import StickyWidgets from '@/components/StickyWidgets'

const Contact = () => {
  const handleCallNow = () => {
    window.open('tel:8886663807', '_self')
  }

  const handleEmailClick = () => {
    window.open('mailto:prconstructioninteriors@gmail.com', '_self')
  }

  const handleGetQuote = () => {
    const message = "Hi! I'm interested in getting a quote for my project. Can you help me with the details?"
    window.open(`https://wa.me/918886663807?text=${encodeURIComponent(message)}`, '_blank')
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <StickyWidgets />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-slate-200">
            Get in touch with PR Group for all your construction and interior design needs
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-8">Get In Touch</h2>
              <p className="text-xl text-slate-600 mb-8">
                Ready to transform your space? Contact us today for a consultation and free quote.
              </p>

              <div className="space-y-6">
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                        <Phone className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-slate-900">Phone</h3>
                        <p className="text-slate-600">8886663807</p>
                        <Button 
                          onClick={handleCallNow}
                          variant="link" 
                          className="text-blue-600 hover:text-blue-700 p-0 h-auto"
                        >
                          Call Now
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                        <Mail className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-slate-900">Email</h3>
                        <p className="text-slate-600">prconstructioninteriors@gmail.com</p>
                        <Button 
                          onClick={handleEmailClick}
                          variant="link" 
                          className="text-blue-600 hover:text-blue-700 p-0 h-auto"
                        >
                          Send Email
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-slate-900">Location</h3>
                        <p className="text-slate-600">Visakhapatnam, Andhra Pradesh</p>
                        <p className="text-sm text-slate-500 mt-1">
                          Serving Visakhapatnam, Srikakulam, and Vizianagaram
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                        <Clock className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-slate-900">Working Hours</h3>
                        <p className="text-slate-600">Mon - Sat: 9:00 AM - 7:00 PM</p>
                        <p className="text-slate-600">Sunday: By Appointment</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={handleCallNow}
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </Button>
                <Button 
                  onClick={handleGetQuote}
                  size="lg"
                  variant="outline"
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3"
                >
                  Get Quote on WhatsApp
                </Button>
              </div>
            </div>

            {/* Map */}
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-8">Find Us</h2>
              <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.25817782035!2d83.13419095755095!3d17.738609013242358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a39431389e6973f%3A0x92d9c20395498888!2sVisakhapatnam%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1642084593846!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="PR Group Location"
                />
              </div>
              <p className="text-slate-600 mt-4 text-center">
                Located in Visakhapatnam, serving the entire region with quality construction and interior design services
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Service Areas</h2>
            <p className="text-xl text-slate-600">
              We proudly serve clients across these locations in Andhra Pradesh
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Visakhapatnam</h3>
                <p className="text-slate-600">Our primary location with full-service capabilities</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Srikakulam</h3>
                <p className="text-slate-600">Comprehensive construction and interior services</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Vizianagaram</h3>
                <p className="text-slate-600">Quality construction and design solutions</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Contact
