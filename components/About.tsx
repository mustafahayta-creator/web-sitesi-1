export default function About() {
  return (
    <section id="hakkimizda" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">Hakkımızda</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Çukurova bölgesinde gayrimenkul alanında öncü kurum
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">25 Yıllık Güvenilir Partneriniz</h3>
            <p className="text-gray-700 mb-4">
              Çukurova Gayrimenkul, 1999 yılından beri Adana ve bölgesinde gayrimenkul sektöründe 
              öncü rol oynayan bir kuruluştur. Binlerce müşteriye hizmet vermiş, sayısız başarılı 
              alım-satım ve yatırım işlemi gerçekleştirmiştir.
            </p>
            <p className="text-gray-700">
              Müşteri memnuniyeti ve etik çalışma ilkeleri bizim temel değerlerimizdir. 
              Profesyonel kadromuz sizin gayrimenkul hedeflerinizi gerçekleştirmek için hazırlanmıştır.
            </p>
          </div>

          <div className="bg-gradient-gold rounded-lg overflow-hidden shadow-lg p-8 flex items-center justify-center" style={{backgroundImage: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)'}}>
            <img 
              src="/logo.png" 
              alt="Çukurova Gayrimenkul" 
              className="w-full h-full object-contain max-h-64"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">5000+</div>
            <p className="text-gray-700">Mutlu Müşteri</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">1000+</div>
            <p className="text-gray-700">Başarılı Yatırım</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">500M+</div>
            <p className="text-gray-700">İşlem Tutarı</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">25+</div>
            <p className="text-gray-700">Yıl Deneyim</p>
          </div>
        </div>
      </div>
    </section>
  )
}
