export default function Promo() {
  return (
    <section className="my-12 mx-auto max-w-5xl rounded-lg overflow-hidden shadow-2xl bg-gradient-to-r from-purple-700 via-indigo-700 to-blue-700">
      <div className="p-10 md:flex items-center gap-8">
        <div className="flex-1 text-white">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            ES-ER TERZİ — Size Özel, Kusursuz İşçilik
          </h2>
          <p className="opacity-90 mb-6">
            Her dikimde kalite ve detaylara gösterdiğimiz özenle fark
            yaratıyoruz. Uzman terzilerimiz ölçülerinize özel, modern ve
            zamansız tasarımlar sunar.
          </p>
          <ul className="space-y-2 mb-6">
            <li className="flex items-start gap-3">
              <span className="inline-flex items-center justify-center w-8 h-8 bg-white/20 rounded">
                ✓
              </span>
              <span className="opacity-95">
                Özenli el işçiliği ve hassas ölçü çalışması
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-flex items-center justify-center w-8 h-8 bg-white/20 rounded">
                ✓
              </span>
              <span className="opacity-95">Hızlı teslimat seçenekleri</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-flex items-center justify-center w-8 h-8 bg-white/20 rounded">
                ✓
              </span>
              <span className="opacity-95">
                Malzeme ve dikişte kalite garantisi
              </span>
            </li>
          </ul>
          <a
            href="#contact"
            className="inline-block bg-white text-blue-800 font-semibold px-6 py-3 rounded shadow hover:scale-105 transition"
          >
            Randevu Al
          </a>
        </div>
        <div className="hidden md:block w-56 flex-none">
          <img
            src="https://images.unsplash.com/photo-1520975912718-2d1a3f2d3d4f?auto=format&fit=crop&q=80&w=560"
            alt="terzi"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
