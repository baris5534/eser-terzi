export default function Contact() {
  return (
    <div id="contact" className="container mx-auto px-4 py-24">
      <div className="backdrop-blur-md bg-white/10 rounded-lg p-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Bize Ulaşın</h2>
            <p className="text-gray-300 mb-2">
              Adres: Mevlana, Evliya Çelebi Cd. İnciler çarşısı, 34100
              Esenyurt/İstanbul
            </p>
            <p className="text-gray-300 mb-2">Telefon: +90 532 605 80 55</p>
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d188.1629143666376!2d28.655238961484127!3d41.01198236366924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b55f88759cedfd%3A0x67acf7e3d7f76155!2sES-ER%20TERZ%C4%B0!5e0!3m2!1str!2str!4v1761129967737!5m2!1str!2str"
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
