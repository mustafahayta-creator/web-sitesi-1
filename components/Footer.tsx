export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold mb-4">Çukurova Gayrimenkul</h3>
            <p className="text-sm">
              25 yıldan fazla deneyimle gayrimenkul sektöründe hizmet vermekteyiz.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Hızlı Linkler</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition">Anasayfa</a></li>
              <li><a href="#hakkimizda" className="hover:text-white transition">Hakkımızda</a></li>
              <li><a href="#hizmetler" className="hover:text-white transition">Hizmetler</a></li>
              <li><a href="#portfolio" className="hover:text-white transition">Portföy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Hizmetler</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition">Alım-Satım</a></li>
              <li><a href="#" className="hover:text-white transition">Yatırım Danışmanlığı</a></li>
              <li><a href="#" className="hover:text-white transition">Değerleme</a></li>
              <li><a href="#" className="hover:text-white transition">Kiralama</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">İletişim</h4>
            <ul className="space-y-2 text-sm">
              <li>📞 +90 (XXX) XXX-XXXX</li>
              <li>📧 info@cukurovagayrimenkul.com</li>
              <li>📍 Adana, Çukurova</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">
              © 2024 Çukurova Gayrimenkul. Tüm hakları saklıdır.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition">Gizlilik Politikası</a>
              <a href="#" className="hover:text-white transition">Kullanım Şartları</a>
              <a href="#" className="hover:text-white transition">İletişim</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
