export default function Portfolio() {
  const projects = [
    {
      title: 'Merkez Lokasyonda Daire Satışı',
      location: 'Adana, Çukurova',
      price: '₺850,000',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500&h=300&fit=crop'
    },
    {
      title: 'Ticari Gayrimenkul Kiralama',
      location: 'Adana, Seyhan',
      price: '₺25,000/ay',
      image: 'https://images.unsplash.com/photo-1486325212027-8081e3e4e816?w=500&h=300&fit=crop'
    },
    {
      title: 'Arsa Yatırım Fırsatı',
      location: 'Adana, Yüreğir',
      price: '₺1,200,000',
      image: 'https://images.unsplash.com/photo-1500382017468-7049ffd0c72c?w=500&h=300&fit=crop'
    },
    {
      title: 'Lüks Konut Projesi',
      location: 'Adana, Çukurova',
      price: '₺1,500,000+',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500&h=300&fit=crop'
    },
    {
      title: 'Modern Ofis Binası',
      location: 'Adana, Merkez',
      price: '₺2,800,000',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415cff?w=500&h=300&fit=crop'
    },
    {
      title: 'Turizm Potansiyeli Taşıyan İşyeri',
      location: 'Adana, Sahil',
      price: '₺950,000',
      image: 'https://images.unsplash.com/photo-1551632786-de41ecbe17d3?w=500&h=300&fit=crop'
    }
  ]

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">Son Projelerimiz</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Başarılı işlem örneklerimizden bazıları
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition transform hover:scale-105">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold mb-2 text-gray-900">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.location}</p>
                <div className="text-2xl font-bold text-blue-600">{project.price}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
