'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form gönderildi:', formData)
    alert('Mesajınız alındı! Kısa sürede sizinle iletişime geçeceğiz.')
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
  }

  return (
    <section id="iletisim" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">İletişim</h2>
        <p className="text-center text-gray-600 mb-12">
          Sorularınız veya yatırım fırsatları hakkında bize ulaşın
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <div className="text-3xl mb-2">📍</div>
            <h3 className="font-bold text-gray-900 mb-2">Adres</h3>
            <p className="text-gray-600">Adana, Çukurova<br/>Merkez Mahallesi</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <div className="text-3xl mb-2">📞</div>
            <h3 className="font-bold text-gray-900 mb-2">Telefon</h3>
            <p className="text-gray-600">+90 (XXX) XXX-XXXX<br/>Pazartesi-Cuma 9:00-18:00</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <div className="text-3xl mb-2">✉️</div>
            <h3 className="font-bold text-gray-900 mb-2">E-posta</h3>
            <p className="text-gray-600">info@cukurovagayrimenkul.com</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Adınız *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                placeholder="Adınız"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">E-posta *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                placeholder="E-posta"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Telefon</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                placeholder="Telefon"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Konu *</label>
              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
              >
                <option value="">Seç...</option>
                <option value="alim-satim">Alım-Satım</option>
                <option value="yatirim">Yatırım Danışmanlığı</option>
                <option value="degerleme">Gayrimenkul Değerlemesi</option>
                <option value="diger">Diğer</option>
              </select>
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">Mesaj *</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
              placeholder="Mesajınızı yazın..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold rounded-lg hover:from-amber-600 hover:to-amber-700 transition shadow-lg"
          >
            Gönder
          </button>
        </form>
      </div>
    </section>
  )
}
