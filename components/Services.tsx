export default function Services() {
  const services = [
    {
      icon: '🏠',
      title: 'Gayrimenkul Alım-Satım',
      description: 'Ev, daire, işyeri ve arsa alım-satımında profesyonel danışmanlık hizmeti'
    },
    {
      icon: '📈',
      title: 'Yatırım Danışmanlığı',
      description: 'Kârlı gayrimenkul yatırım fırsatlarını belirleme ve analiz'
    },
    {
      icon: '🔍',
      title: 'Taşınmaz Değer Tespiti',
      description: 'Müstakil gayrimenkullerin eksper raporları ve değer tayin işlemleri'
    },
    {
      icon: '📋',
      title: 'Bütün Yasal İşlemler',
      description: 'Tapu işlemleri, vergi, sigorta ve diğer tüm resmi formüliteleri halı'
    },
    {
      icon: '🏢',
      title: 'Ticari Gayrimenkul',
      description: 'İşletme, depo, showroom gibi ticari gayrimenkul işlemleri'
    },
    {
      icon: '🎯',
      title: 'Kiralanmış Gayrimenkul',
      description: 'Gelir getiren gayrimenkul bul ve yönetimi hizmetleri'
    }
  ]

  return (
    <section id="hizmetler" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">Hizmetlerimiz</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Gayrimenkul alanında kapsamlı ve profesyonel hizmetler sunuyoruz
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition transform hover:-translate-y-2 border-t-4 border-amber-500">
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
