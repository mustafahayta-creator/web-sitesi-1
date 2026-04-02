export default function Hero() {
  return (
    <section className="relative bg-gray-900 text-white py-20 md:py-40 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-transparent to-gray-900 z-10"></div>
      <div className="absolute inset-0 bg-gradient-gold opacity-5"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-300 via-yellow-300 to-amber-400 bg-clip-text text-transparent">
            Gayrimenkul Yatırımlarınıza Güvenli Rehberlik
          </h1>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            25 yıldan fazla deneyimle, Çukurova Gayrimenkul olarak Çukurova bölgesinde en güvenilir gayrimenkul danışmanlığını sunuyoruz. 
            Kârlı, güvenli ve uzun vadeli yatırımlar için bizi seçin.
          </p>
          <div className="flex gap-4 flex-wrap">
            <button className="px-8 py-4 bg-gradient-to-r from-amber-400 to-amber-500 text-gray-900 font-bold rounded-lg hover:from-amber-300 hover:to-amber-400 transition shadow-lg hover:shadow-xl">
              Ücretsiz Danışma
            </button>
            <button className="px-8 py-4 border-2 border-amber-400 text-amber-400 font-bold rounded-lg hover:bg-amber-400 hover:text-gray-900 transition">
              Daha Fazla Bilgi
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
