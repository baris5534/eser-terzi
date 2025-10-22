export default function Services({ services }) {
  return (
    <div id="services" className="container mx-auto px-4 py-24">
      <h2 className="text-3xl font-bold text-white mb-8 text-center">
        Hizmetlerimiz ve Fiyatlar
      </h2>

      <p className="max-w-2xl mx-auto text-center text-gray-300 mb-10">
        Her bütçeye uygun, şeffaf fiyatlarla profesyonel terzilik hizmeti
        sunuyoruz. Aşağıdaki fiyatlar ortalama başlangıç ücretleridir; detaylar
        için lütfen iletişime geçin.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative rounded-xl overflow-hidden border border-white/10 bg-gradient-to-b from-white/5 to-white/2 p-6 shadow-lg hover:scale-105 transition-transform"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-white">
                  {service.name}
                </h3>
                <p className="text-sm text-gray-300 mt-1">Hızlı ve güvenilir</p>
              </div>
              <div className="ml-4">
                <span className="inline-block bg-blue-500 text-white font-bold px-4 py-2 rounded-full shadow">
                  {service.price}
                </span>
              </div>
            </div>

            <div className="mt-4 text-sm text-gray-300">
              <p>
                İlk muayene ve küçük tadilatlar genellikle bu fiyat
                aralığındadır.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
