# Çukurova Gayrimenkul - Web Sitesi

Modern ve profesyonel gayrimenkul danışmanlığı web sitesi.

## 🎯 Özellikler

- ✅ Hakkımızda Bölümü
- ✅ Hizmetler Listesi
- ✅ Portföy/Proje Galerisi
- ✅ Fiyatlandırma Planları
- ✅ İletişim Formu (Fonksiyonel)
- ✅ Mobil Responsive Tasarım
- ✅ Hızlı Yükleme (Next.js)
- ✅ SEO Optimizasyonu

## 🚀 Başlangıç

### Gereksinimler
- Node.js 18+
- npm veya yarn

### Kurulum

```bash
# Dependencies yükle
npm install

# Development server başlat
npm run dev

# Tarayıcıda aç
# http://localhost:3000
```

### Build & Deploy

```bash
# Production build
npm run build

# Production sunucusunu başlat
npm start
```

## 📁 Proje Yapısı

```
├── app/
│   ├── layout.tsx       # Ana layout
│   ├── page.tsx         # Ana sayfa
│   └── globals.css      # Global stiller
├── components/
│   ├── Header.tsx       # Üst navigasyon
│   ├── Hero.tsx         # Hero section
│   ├── About.tsx        # Hakkımızda
│   ├── Services.tsx     # Hizmetler
│   ├── Portfolio.tsx    # Portföy
│   ├── Pricing.tsx      # Fiyatlandırma
│   ├── Contact.tsx      # İletişim formu
│   └── Footer.tsx       # Altbilgi
├── package.json
├── next.config.js
├── tailwind.config.js
└── tsconfig.json
```

## 🎨 Kustomizasyon

### Logo ve Renk Değiştirme

1. **Header.tsx** dosyasında `Ç` logosunu değiştir
2. **tailwind.config.js**'de renk şemasını güncelle

```javascript
colors: {
  primary: '#your-color',
  secondary: '#your-color',
}
```

### İletişim Bilgileri

**Footer.tsx** ve **Contact.tsx** dosyalarında:
- Telefon numarasını değiştir
- E-posta adresini güncelle
- Adresi değiştir

### İçerik Düzenleme

Her bölüm kendi dosyasında (components/). İçeriği ve metinleri doğrudan orada düzenleyebilirsin.

## 🔧 Teknolojiler

- **Next.js 14** - React framework
- **Tailwind CSS** - Styling
- **TypeScript** - Type safety
- **React 18** - UI library

## 📞 Destek

Sorularınız varsa, iletişim formu aracılığıyla bizle ulaşabilirsiniz.

---

**© 2024 Çukurova Gayrimenkul. Tüm hakları saklıdır.**
