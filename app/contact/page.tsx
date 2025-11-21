'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Send, Instagram, Clock, Calendar } from 'lucide-react'
import content from '@/public/data/content.json'

export default function Contact() {
  const { contact: contactData, faq } = content
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you for your inquiry! I\'ll get back to you within 24 hours.')
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      projectType: '',
      budget: '',
      timeline: '',
      message: ''
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="section-padding bg-fashion-gray">
        <div className="container-max text-center">
          <h1 className="font-serif text-4xl lg:text-6xl font-bold text-fashion-black mb-6">
            {contactData.heroTitle}
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            {contactData.heroDescription}
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="font-serif text-3xl font-semibold text-fashion-black mb-6">
                  {contactData.heading}
                </h2>
                <p className="text-gray-700 mb-8 leading-relaxed">
                  {contactData.description}
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-fashion-gold rounded-full flex items-center justify-center mr-4">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-fashion-black">Email</h4>
                    <p className="text-gray-600">{contactData.email}</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-fashion-gold rounded-full flex items-center justify-center mr-4">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-fashion-black">Phone</h4>
                    <p className="text-gray-600">{contactData.phone}</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-fashion-gold rounded-full flex items-center justify-center mr-4">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-fashion-black">Location</h4>
                    <p className="text-gray-600">{contactData.location}</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-fashion-gold rounded-full flex items-center justify-center mr-4">
                    <Instagram className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-fashion-black">Instagram</h4>
                    <p className="text-gray-600">{contactData.instagram}</p>
                  </div>
                </div>
              </div>

              {/* Availability */}
              <div className="bg-fashion-gray p-6 rounded-lg">
                <h3 className="font-serif text-xl font-semibold text-fashion-black mb-4">
                  Current Availability
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-fashion-gold mr-3" />
                    <span className="text-gray-700">Response Time: {contactData.responseTime}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 text-fashion-gold mr-3" />
                    <span className="text-gray-700">Next Available: {contactData.nextAvailable}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white border border-gray-200 p-8 rounded-lg shadow-sm">
              <h3 className="font-serif text-2xl font-semibold text-fashion-black mb-6">
                {contactData.formHeading}
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fashion-gold focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fashion-gold focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fashion-gold focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company/Publication
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fashion-gold focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Type *
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    required
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fashion-gold focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    <option value="bridal">Bridal Styling</option>
                    <option value="saree">Saree Styling</option>
                    <option value="celebrity">Celebrity Styling</option>
                    <option value="ethnic">Ethnic Wear Consulting</option>
                    <option value="festival">Festival Styling</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fashion-gold focus:border-transparent"
                    >
                      <option value="">Select budget range</option>
                      <option value="under-25k">Under ₹25,000</option>
                      <option value="25k-50k">₹25,000 - ₹50,000</option>
                      <option value="50k-100k">₹50,000 - ₹1,00,000</option>
                      <option value="100k-plus">₹1,00,000+</option>
                      <option value="discuss">Prefer to discuss</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
                      Timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fashion-gold focus:border-transparent"
                    >
                      <option value="">Select timeline</option>
                      <option value="asap">ASAP</option>
                      <option value="1-month">Within 1 month</option>
                      <option value="2-3-months">2-3 months</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Please describe your project, vision, specific requirements, and any other relevant details..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fashion-gold focus:border-transparent"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary flex items-center justify-center"
                >
                  <Send className="w-5 h-5 mr-2" />
                  {contactData.submitButtonText}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-fashion-gray">
        <div className="container-max">
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-fashion-black text-center mb-12">
            {contactData.faqHeading}
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {faq.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg">
                <h3 className="font-semibold text-fashion-black mb-2">
                  {item.question}
                </h3>
                <p className="text-gray-700">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}