import Link from 'next/link'
import { Instagram, Mail, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-fashion-black text-white">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-serif text-2xl font-bold mb-4">Piyush Bholla Fashion</h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Celebrating the beauty of Indian fashion through expert styling and creative direction. 
              Bringing traditional elegance and contemporary flair to every ensemble.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" className="text-gray-300 hover:text-white transition-colors">
                <Instagram size={24} />
              </a>
              <a href="mailto:hello@piyushbabu.com" className="text-gray-300 hover:text-white transition-colors">
                <Mail size={24} />
              </a>
              <a href="tel:+1234567890" className="text-gray-300 hover:text-white transition-colors">
                <Phone size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/portfolio" className="text-gray-300 hover:text-white transition-colors">Portfolio</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">About</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Saree Styling</li>
              <li>Wedding Fashion</li>
              <li>Ethnic Wear Styling</li>
              <li>Bollywood Styling</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Piyush Bholla Fashion. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}