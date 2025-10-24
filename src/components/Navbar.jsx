export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 backdrop-blur-md bg-black/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 text-white">
          <div className="text-white font-bold text-xl">ES-ER TERZİ</div>
          <div className="md:hidden">|</div>
          <div className="flex space-x-8 max-md:space-x-4">
           
            {/* <a href="#services" className="text-white hover:text-blue-400">
              Hizmetler
            </a> */}
            <a href="#products" className="text-white hover:text-blue-400">
              Ürünler
            </a>
            <a href="#contact" className="text-white hover:text-blue-400">
              İletişim
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
