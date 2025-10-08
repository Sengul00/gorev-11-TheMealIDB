# RecipeHub: Dinamik Yemek Tarifleri Listesi
Bu proje, temel React Hook'ları (useState, useEffect) ve harici bir API (TheMealDB) kullanarak tam responsive çalışan bir yemek tarifi listeleme uygulamasıdır.

🎯 Proje Amacı
React Temellerini Uygulamak: useState ile uygulama durumunu ve useEffect ile yan etkileri (API çağrılarını) yönetmek.

Asenkron Veri Yönetimi: fetch API'sini kullanarak harici bir kaynaktan (TheMealDB) veri çekmek.

Responsive Tasarım: Tailwind CSS ile tüm cihaz boyutlarına uyumlu (mobil, tablet, masaüstü) bir grid sistemi oluşturmak.

✨ Özellikler
Dinamik Listeleme: Uygulama ilk açıldığında varsayılan bir arama terimine (örneğin 'chicken') göre tarifleri listeler.

Gecikmeli Arama (Debounced Search): Kullanıcı arama çubuğuna yazmayı bıraktıktan 500ms sonra API isteği gönderilir, bu da sunucu yükünü azaltır.

Responsive Grid:

Mobil: 1 Sütun

Tablet (md): 2 Sütun

Desktop (lg/xl): 3-4 Sütun

Kompakt Tarif Kartları: Her kartta yemek adı, resmi, kategori ve ülke bilgileri gösterilir.

🛠 Kullanılan Teknolojiler
React: Kullanıcı arayüzü kütüphanesi

TypeScript: Statik tip kontrolü

Vite: Hızlı geliştirme ortamı ve build aracı

Tailwind CSS: Utility-first CSS çerçevesi (Responsive tasarım için kullanıldı)

TheMealDB API: Yemek tarifleri verisi kaynağı

🚀 Kurulum ve Çalıştırma
Projeyi yerel makinenizde çalıştırmak için aşağıdaki adımları takip edin:

Projeyi Klonlayın:

git clone [GitHub Repo Adresiniz]
cd gorev8-RecipeHub

Bağımlılıkları Yükleyin:

npm install

Geliştirme Sunucusunu Başlatın:

npm run dev

Uygulama genellikle http://localhost:5173 adresinde çalışmaya başlayacaktır.
