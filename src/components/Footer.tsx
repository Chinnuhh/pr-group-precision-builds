
import React from 'react'
import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin } from 'lucide-react'

const Footer = () => {
  const services = [
    { name: 'Construction', link: '/services/construction' },
    { name: 'Interior Design', link: '/services/interior-design' },
    { name: 'Renovations', link: '/services/renovations' }
  ]

  const constructionTypes = [
    { name: 'Residential Buildings', link: '/construction/residential-buildings' },
    { name: 'Commercial Structures', link: '/construction/commercial-structures' },
    { name: 'Infrastructure Projects', link: '/construction/infrastructure-projects' }
  ]

  const designIdeas = [
    { name: 'Modular Kitchen', link: '/design-ideas/modular-kitchen' },
    { name: 'Kitchen Interiors', link: '/design-ideas/kitchen-interiors' },
    { name: 'Wardrobe Designs', link: '/design-ideas/wardrobe' },
    { name: 'Bathroom Designs', link: '/design-ideas/bathroom' },
    { name: 'Living Room', link: '/design-ideas/living-room' },
    { name: 'Bedroom Designs', link: '/design-ideas/bedroom-designs' }
  ]

  const renovationTypes = [
    { name: 'Kitchen Renovation', link: '/renovations/kitchen' },
    { name: 'Bathroom Renovation', link: '/renovations/bathroom' },
    { name: 'Home Renovation', link: '/renovations/home' }
  ]

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">PR</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold">PR Group</h1>
                <p className="text-blue-400 font-medium">Precision Redefined</p>
              </div>
            </div>
            <p className="text-slate-300 mb-8 leading-relaxed">
              Expert construction and interior design services across Visakhapatnam, Srikakulam, and Vizianagaram.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <span className="text-slate-200">8886663807</span>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-200 break-all">prconstructioninteriors@gmail.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 flex-shrink-0 mt-1" />
                <span className="text-slate-200">Visakhapatnam, Andhra Pradesh</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Services</h3>
            <ul className="space-y-3 mb-8">
              {services.map((service) => (
                <li key={service.name}>
                  <Link 
                    to={service.link} 
                    className="text-slate-300 hover:text-blue-400 transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
            <h4 className="text-lg font-semibold mb-4">Construction</h4>
            <ul className="space-y-3">
              {constructionTypes.map((type) => (
                <li key={type.name}>
                  <Link 
                    to={type.link} 
                    className="text-slate-300 hover:text-blue-400 transition-colors text-sm"
                  >
                    {type.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Design Ideas */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Design Ideas</h3>
            <ul className="space-y-3">
              {designIdeas.map((idea) => (
                <li key={idea.name}>
                  <Link 
                    to={idea.link} 
                    className="text-slate-300 hover:text-blue-400 transition-colors"
                  >
                    {idea.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Renovations & Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Renovations</h3>
            <ul className="space-y-3 mb-8">
              {renovationTypes.map((type) => (
                <li key={type.name}>
                  <Link 
                    to={type.link} 
                    className="text-slate-300 hover:text-blue-400 transition-colors"
                  >
                    {type.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-slate-300 hover:text-blue-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-slate-300 hover:text-blue-400 transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-300 hover:text-blue-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Google Map */}
        <div className="mt-16 pt-8 border-t border-slate-700">
          <h3 className="text-xl font-semibold mb-6 text-center">Find Us</h3>
          <div className="w-full h-64 rounded-lg overflow-hidden">
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
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-slate-700 text-center">
          <p className="text-slate-400">
            © 2024 PR Group. All rights reserved. | Precision Redefined
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
