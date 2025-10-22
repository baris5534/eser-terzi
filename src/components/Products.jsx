// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

// Görseller
import img2 from "../assets/65095.jpg";
import img3 from "../assets/65098.jpg";
import img4 from "../assets/65101.jpg";
// import img5 from "../assets/65104.jpg";
import img6 from "../assets/65106.jpg";
import img7 from "../assets/65109.jpg";
// import img9 from "../assets/65112.jpg";
// import img10 from "../assets/65114.jpg";
import img11 from "../assets/65116.jpg";
import img12 from "../assets/65119.jpg";
import img13 from "../assets/65122.jpg";
import img14 from "../assets/65124.jpg";
// import img15 from "../assets/65126.jpg";
import img16 from "../assets/65128.jpg";
import img17 from "../assets/65130.jpg";
import img18 from "../assets/65132.jpg";
import img19 from "../assets/65134.jpg";
import img20 from "../assets/65136.jpg";
import img21 from "../assets/65138.jpg";
import img22 from "../assets/65141.jpg";
import img23 from "../assets/65144.jpg";
// import img24 from "../assets/65147.jpg";
import img25 from "../assets/65150.jpg";
import img26 from "../assets/65152.jpg";
import img27 from "../assets/65155.jpg";
import img28 from "../assets/65158.jpg";
import img29 from "../assets/65160.jpg";
import img30 from "../assets/65163.jpg";
import img31 from "../assets/65165.jpg";
import img32 from "../assets/65167.jpg";
import img33 from "../assets/65169.jpg";
import img34 from "../assets/65171.jpg";
// import img35 from "../assets/65173.jpg";
import img36 from "../assets/65174.jpg";
import img37 from "../assets/65176.jpg";
import img38 from "../assets/65178.jpg";
import img39 from "../assets/65179.jpg";
import img40 from "../assets/65180.jpg";
import img41 from "../assets/65181.jpg";

// Ürün verileri
const products = [
  {
    name: "Ahşap Çerçeve",
    description: "El yapımı doğal ahşaptan dekoratif çerçeve.",
    images: [img2, img3, img4, img6, img7],
  },
  {
    name: "Dekoratif Mum Seti",
    description: "Kokulu mumlarla evinizin havasını değiştirin.",
    images: [img7],
  },
  {
    name: "Seramik Vazo",
    description: "Modern tasarımlı el yapımı seramik vazo.",
    images: [img11, img12],
  },
  {
    name: "Vintage Lamba",
    description: "Rustik tarzda metal gövdeli masa lambası.",
    images: [img13],
  },
  {
    name: "Kanvas Tablo",
    description: "HD baskı kaliteli kanvas tablo seti.",
    images: [img14, img16],
  },
  {
    name: "Mini Saksı Seti",
    description: "Kaktüs ve sukulentler için ideal seramik saksı.",
    images: [img17, img21, img19, img20, img18, img26],
  },
  {
    name: "Duvar Saati",
    description: "Modern tasarım sessiz mekanizma duvar saati.",
    images: [img22, img23, img25],
  },
  {
    name: "Mutfak Rafı",
    description: "Doğal ahşap duvar rafı - minimalist tarz.",
    images: [img27, img28, img29],
  },
  {
    name: "Dekoratif Yastık Kılıfı",
    description: "Renkli desenli pamuklu yastık kılıfı seti.",
    images: [img30],
  },
  {
    name: "Bambu Kesme Tahtası",
    description: "Doğal bambudan dayanıklı kesme tahtası.",
    images: [img31, img32, img33, img34,],
  },
  {
    name: "Metal Duvar Sanatı",
    description: "Modern tasarım metal duvar dekoru.",
    images: [img36, img37, img38],
  },
  {
    name: "Ahşap Takı Kutusu",
    description: "El yapımı doğal ahşap takı kutusu.",
    images: [img39, img40, img41],
  },
];

export default function Products() {
  return (
    <div id="products" className="container mx-auto px-4 py-24">
      <h2 className="text-3xl font-bold text-white mb-12 text-center">
        Öne Çıkan Ürünlerimiz
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <div
            key={index}
            className="backdrop-blur-md bg-white/10 rounded-lg overflow-hidden shadow-lg transform transition-all"
          >
            <Swiper
              pagination={{ clickable: true }}
              modules={[Pagination]}
              className="mySwiper max-w-40 max-h-[270px]"
            >
              {product.images.map((img, i) => (
                <SwiperSlide
                  key={i}
                  className="text-center bg-[#444] flex justify-center items-center"
                >
                  <img
                    src={img}
                    alt={`${product.name} ${i + 1}`}
                    className="object-cover w-full h-full"
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="p-6 space-y-">
              <h3 className="text-xl font-semibold text-white mb-2">
                {product.name}
              </h3>
              <p className="text-gray-300 mb-4">{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
