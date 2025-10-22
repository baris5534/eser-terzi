import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import Services from "./components/Services";
import Products from "./components/Products";
import Contact from "./components/Contact";
// import Promo from "./components/Promo";
// import Paginationn from "./components/Pagination";

const slideData = [
  {
    image:
      "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&q=80&w=1000",
    title: "Profesyonel Terzilik",
    description: "20 yıllık tecrübe ile kaliteli hizmet",
  },
  {
    image:
      "https://images.unsplash.com/photo-1607344645866-009c320c9969?auto=format&fit=crop&q=80&w=1000",
    title: "Özel Dikim",
    description: "Size özel tasarım ve ölçüler",
  },
  {
    image:
      "https://images.unsplash.com/photo-1518019671582-55004f1bc9ab?auto=format&fit=crop&q=80&w=1000",
    title: "Modern Tasarımlar",
    description: "En son moda trendleri",
  },
];

const productData = [
  {
    id: 1,
    name: "Erkek Takım Elbise",
    description: "Özel dikim slim fit takım elbise",
    image:
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&q=80&w=500",
    links: {
      trendyol: "https://www.trendyol.com",
      letgo: "https://www.letgo.com",
      dolap: "https://www.dolap.com",
    },
  },
  {
    id: 2,
    name: "Kadın Blazer Ceket",
    description: "El işçiliği ile özel dikim blazer",
    image:
      "https://images.unsplash.com/photo-1608234808654-2a8875faa7fd?auto=format&fit=crop&q=80&w=500",
    links: {
      trendyol: "https://www.trendyol.com",
      letgo: "https://www.letgo.com",
      dolap: "https://www.dolap.com",
    },
  },
  {
    id: 3,
    name: "Gömlek",
    description: "Kişiye özel ölçü ile dikim gömlek",
    image:
      "https://images.unsplash.com/photo-1604695573706-53170668f6a6?auto=format&fit=crop&q=80&w=500",
    links: {
      trendyol: "https://www.trendyol.com",
      letgo: "https://www.letgo.com",
      dolap: "https://www.dolap.com",
    },
  },
];

const serviceData = [
  { name: "Paça Daraltma", price: "50₺" },
  { name: "Paça Boyutma", price: "60₺" },
  { name: "Bel Daraltma", price: "80₺" },
  { name: "Elbise Tadilat", price: "150₺" },
  { name: "Ceket Tadilat", price: "200₺" },
  { name: "Fermuar Değişimi", price: "70₺" },
];

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [products] = useState(productData);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideData.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <Navbar />
      <Carousel slides={slideData} currentSlide={currentSlide} />
      {/* <Promo /> */}
      <Services services={serviceData} />
      <Products products={products} />
      {/* <Paginationn /> */}
      <Contact />
    </div>
  );
}

export default App;
