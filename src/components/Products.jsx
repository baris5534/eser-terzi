export default function Products({ products }) {
  return (
    <div id="products" className="container mx-auto px-4 py-24">
      <h2 className="text-3xl font-bold text-white mb-12 text-center">
        Öne Çıkan Ürünlerimiz
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="backdrop-blur-md bg-white/10 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-all"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-2">
                {product.name}
              </h3>
              <p className="text-gray-300 mb-4">{product.description}</p>
              <div className="flex flex-wrap gap-2">
                <a
                  href={product.links.trendyol}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
                >
                  Trendyol
                </a>
                <a
                  href={product.links.letgo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition-colors"
                >
                  Letgo
                </a>
                <a
                  href={product.links.dolap}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition-colors"
                >
                  Dolap
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
