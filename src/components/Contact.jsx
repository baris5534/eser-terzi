export default function Contact() {
  return (
    <div id="contact" className="container mx-auto px-4 py-24">
      <div className="backdrop-blur-md bg-white/10 rounded-lg p-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Bize Ulaşın</h2>
            <p className="text-gray-300 mb-2">
              Adres: Örnek Mahallesi, Terzi Sokak No:123
            </p>
            <p className="text-gray-300 mb-2">Telefon: (0555) 123 45 67</p>
            <p className="text-gray-300 mb-4">
              E-posta: iletisim@eserterzi.com
            </p>
            <div className="text-gray-300">
              <p className="font-semibold mb-2">Çalışma Saatleri:</p>
              <p>Pazartesi - Cumartesi: 09:00 - 19:00</p>
              <p>Pazar: Kapalı</p>
            </div>
          </div>
          <div className="h-64 md:h-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3019.9573481857067!2d29.0307845!3d41.0370475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDAyJzEzLjQiTiAyOcKwMDEnNTAuOSJF!5e0!3m2!1str!2str!4v1635000000000!5m2!1str!2str"
              className="w-full h-full rounded-lg"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
