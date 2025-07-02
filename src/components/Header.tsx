
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, ChevronDown, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const services = [
    { name: 'Construction', link: '/services/construction' },
    { name: 'Interior Design', link: '/services/interior-design' },
    { name: 'Renovations', link: '/services/renovations' }
  ]

  const designIdeas = [
    { name: 'Modular Kitchen Designs', link: '/design-ideas/modular-kitchen' },
    { name: 'Wardrobe Designs', link: '/design-ideas/wardrobe' },
    { name: 'Bathroom Designs', link: '/design-ideas/bathroom' },
    { name: 'Master Bedroom Designs', link: '/design-ideas/master-bedroom' },
    { name: 'Living Room Designs', link: '/design-ideas/living-room' },
    { name: 'Pooja Room Designs', link: '/design-ideas/pooja-room' },
    { name: 'TV Unit Designs', link: '/design-ideas/tv-unit' },
    { name: 'False Ceiling Designs', link: '/design-ideas/false-ceiling' },
    { name: 'Kids Bedroom Designs', link: '/design-ideas/kids-bedroom' },
    { name: 'Balcony Designs', link: '/design-ideas/balcony' }
  ]

  const handleCallNow = () => {
    window.open('tel:8886663807', '_self')
  }

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">PR</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-slate-900">PR Group</h1>
              <p className="text-sm text-blue-600 font-medium">Precision Redefined</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-slate-700 hover:text-blue-600 font-medium transition-colors">
              Home
            </Link>
            
            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-slate-700 hover:text-blue-600 font-medium transition-colors">
                Services <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-white border shadow-lg">
                {services.map((service) => (
                  <DropdownMenuItem key={service.name} asChild>
                    <Link to={service.link} className="w-full px-4 py-2 hover:bg-slate-50">
                      {service.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Design Ideas Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-slate-700 hover:text-blue-600 font-medium transition-colors">
                Design Ideas <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-64 bg-white border shadow-lg max-h-96 overflow-y-auto">
                {designIdeas.map((idea) => (
                  <DropdownMenuItem key={idea.name} asChild>
                    <Link to={idea.link} className="w-full px-4 py-2 hover:bg-slate-50">
                      {idea.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
                <DropdownMenuItem asChild>
                  <Link to="/design-ideas" className="w-full px-4 py-2 hover:bg-slate-50 font-semibold text-blue-600">
                    View All Design Ideas
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link to="/portfolio" className="text-slate-700 hover:text-blue-600 font-medium transition-colors">
              Portfolio
            </Link>
            <Link to="/contact" className="text-slate-700 hover:text-blue-600 font-medium transition-colors">
              Contact
            </Link>
          </nav>

          {/* Call Button */}
          <div className="hidden lg:block">
            <Button 
              onClick={handleCallNow}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2"
            >
              <Phone className="mr-2 h-4 w-4" />
              Call Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="text-slate-700 hover:text-blue-600 font-medium">
                Home
              </Link>
              <div className="text-slate-700 font-medium">Services</div>
              {services.map((service) => (
                <Link key={service.name} to={service.link} className="text-slate-600 hover:text-blue-600 ml-4">
                  {service.name}
                </Link>
              ))}
              <div className="text-slate-700 font-medium">Design Ideas</div>
              {designIdeas.slice(0, 5).map((idea) => (
                <Link key={idea.name} to={idea.link} className="text-slate-600 hover:text-blue-600 ml-4">
                  {idea.name}
                </Link>
              ))}
              <Link to="/design-ideas" className="text-blue-600 hover:text-blue-700 ml-4 font-semibold">
                View All Design Ideas
              </Link>
              <Link to="/portfolio" className="text-slate-700 hover:text-blue-600 font-medium">
                Portfolio
              </Link>
              <Link to="/contact" className="text-slate-700 hover:text-blue-600 font-medium">
                Contact
              </Link>
              <Button 
                onClick={handleCallNow}
                className="bg-blue-600 hover:bg-blue-700 text-white w-full mt-4"
              >
                <Phone className="mr-2 h-4 w-4" />
                Call Now
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
