export default function Home() {
  const products = [
    {
      name: "Nike Air Force 1",
      price: 180000,
      img: "https://source.unsplash.com/600x600/?nike,sneakers",
    },
    {
      name: "Adidas Originals",
      price: 165000,
      img: "https://source.unsplash.com/600x600/?adidas,shoes",
    },
    {
      name: "Streetwear Hoodie",
      price: 95000,
      img: "https://source.unsplash.com/600x600/?streetwear,hoodie",
    },
    {
      name: "Nike Dunk Low",
      price: 200000,
      img: "https://source.unsplash.com/600x600/?nike,dunk",
    },
    {
      name: "Adidas Campus",
      price: 170000,
      img: "https://source.unsplash.com/600x600/?adidas,campus",
    },
    {
      name: "Urban Outfit",
      price: 85000,
      img: "https://source.unsplash.com/600x600/?urban,fashion",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white">

      {/* NAV */}
      <nav className="flex justify-between items-center p-6 border-b border-zinc-800">
        <h1 className="text-2xl font-bold tracking-widest">
          TRUE HAPPINESS STORE
        </h1>

        <a
          href="https://wa.me/5491156970809"
          className="bg-white text-black px-4 py-2 rounded-xl font-bold"
        >
          WhatsApp
        </a>
      </nav>

      {/* HERO */}
      <section className="text-center py-20 px-6">
        <h2 className="text-5xl font-bold mb-4">
          Nike • Adidas • Streetwear
        </h2>

        <p className="text-zinc-400 max-w-xl mx-auto mb-8">
          Ropa urbana, zapatillas importadas y estilo premium en un solo lugar.
        </p>

        <a
          href="https://wa.me/5491156970809"
          className="bg-white text-black px-6 py-3 rounded-xl font-bold"
        >
          Consultar por WhatsApp
        </a>
      </section>

      {/* PRODUCTOS */}
      <section className="px-6 pb-20">

        <h3 className="text-3xl font-bold text-center mb-10">
          🛍 Productos Destacados
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">

          {products.map((p, i) => (
            <div
              key={i}
              className="bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 hover:scale-105 transition"
            >

              <img
                src={p.img}
                className="w-full h-72 object-cover"
              />

              <div className="p-5">

                <h4 className="text-xl font-bold mb-2">
                  {p.name}
                </h4>

                <p className="text-zinc-400 mb-4">
                  ${p.price.toLocaleString()}
                </p>

                <a
                  href={`https://wa.me/5491156970809?text=Hola! quiero info de ${p.name}`}
                  className="bg-white text-black px-4 py-2 rounded-xl font-semibold inline-block w-full text-center"
                >
                  Comprar
                </a>

              </div>
            </div>
          ))}

        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center text-zinc-500 py-10 border-t border-zinc-800">
        © 2026 TRUE HAPPINESS
      </footer>

    </main>
  );
}