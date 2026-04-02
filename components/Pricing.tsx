export default function Pricing() {
  const plans = [
    {
      name: 'Standart Danışmanlık',
      description: 'Temel gayrimenkul işlemleri',
      price: 'Değişken',
      features: [
        'Gayrimenkul değerleme',
        'Yasal danışmanlık',
        'Alıcı-satıcı eşleştirme',
        'Tapu işlemleri'
      ]
    },
    {
      name: 'Premium Yatırım',
      description: 'Detaylı yatırım analizi',
      price: 'Değişken',
      featured: true,
      features: [
        'Pazar analizi',
        'Rentabilite raporu',
        'Yatırım stratejisi',
        'Takip ve yönetim',
        'Vergi optimizasyonu'
      ]
    },
    {
      name: 'Kurumsal Çözüm',
      description: 'Portföy yönetimi',
      price: 'Özel Fiyat',
      features: [
        'Portföy oluşturma',
        'Risk yönetimi',
        'Pazarlamaya yardımcı',
        'Finansman destekleri',
        '24/7 Destek'
      ]
    }
  ]

  return (
    <section id="fiyatlandirma" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">Fiyatlandırma</h2>
        <p className="text-center text-gray-600 mb-12">
          Her bütçe için uygun çözümlerimiz var
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`rounded-lg overflow-hidden transition ${
                plan.featured
                  ? 'bg-blue-600 text-white shadow-xl scale-105'
                  : 'bg-white text-gray-900 shadow-md'
              }`}
            >
              {plan.featured && (
                <div className="bg-gradient-to-r from-amber-400 to-amber-500 text-gray-900 text-center py-2 font-bold">
                  ⭐ EN ÇOK SEÇİLEN
                </div>
              )}
              <div className="p-8">
                <h3 className={`text-2xl font-bold mb-2 ${plan.featured ? 'text-white' : 'text-gray-900'}`}>
                  {plan.name}
                </h3>
                <p className={`mb-4 ${plan.featured ? 'text-blue-100' : 'text-gray-600'}`}>
                  {plan.description}
                </p>
                <div className={`text-4xl font-bold mb-6 ${plan.featured ? 'text-amber-300' : 'text-amber-500'}`}>
                  {plan.price}
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <span className={`mr-3 ${plan.featured ? 'text-yellow-300' : 'text-blue-600'}`}>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button 
                  className={`w-full py-3 rounded-lg font-bold transition ${
                    plan.featured
                      ? 'bg-amber-400 text-gray-900 hover:bg-amber-300'
                      : 'bg-amber-500 text-white hover:bg-amber-600'
                  }`}
                >
                  Başla
                </button>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-600 mt-12">
          Özel paketler ve kurumsal çözümler için bizimle iletişime geçin
        </p>
      </div>
    </section>
  )
}
