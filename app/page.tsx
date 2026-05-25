"use client";

export default function Home() {

  const products = [
    {
      name: "Nike Air Force 1",
      price: 180000,
      brand: "Nike",
      img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    },
    {
      name: "Adidas Superstar",
      price: 150000,
      brand: "Adidas",
      img: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28",
    },
    {
      name: "Street Sneakers",
      price: 120000,
      brand: "Streetwear",
      img: "https://images.unsplash.com/photo-1528701800489-20be3c5f2c1a",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white">

      {/* HEADER */}
      <header className="flex flex-col md:flex-row justify-between items-center p-6 border-b border-zinc-800 bg-zinc-950/70 backdrop-blur-md">

        <h1 className="text-2xl md:text-3xl font-bold tracking-widest">
          TRUE HAPPINNES
        </h1>

        <div className="flex gap-3 mt-4 md:mt-0">

          <a className="px-4 py-2 border border-zinc-700 rounded-xl hover:bg-zinc-800 transition">
            Nike
          </a>

          <a className="px-4 py-2 border border-zinc-700 rounded-xl hover:bg-zinc-800 transition">
            Adidas
          </a>

          <a
            href="https://wa.me/5491173600891"
            className="px-4 py-2 bg-white text-black rounded-xl font-bold hover:scale-105 transition"
          >
            WhatsApp
          </a>

        </div>

      </header>

      {/* HERO */}
      <section className="text-center py-20 px-6 bg-gradient-to-br from-black via-zinc-900 to-black">

        <h2 className="text-4xl md:text-6xl font-bold mb-4">
          Sneakers & Streetwear Premium
        </h2>

        <p className="text-zinc-400 max-w-2xl mx-auto mb-8">
          Zapatillas importadas Nike y Adidas • Calidad premium • Envíos rápidos
        </p>

        <a
          href="https://wa.me/5491173600891"
          className="bg-white text-black px-8 py-3 rounded-xl font-bold hover:scale-105 transition"
        >
          Comprar ahora
        </a>

      </section>

      {/* MARCAS */}
      <section className="px-6 py-14 text-center">

        <h3 className="text-3xl font-bold mb-10">
          🏷️ Marcas oficiales
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">

          <div className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800 hover:scale-105 transition">
            <h4 className="text-2xl font-bold">Nike</h4>
            <p className="text-zinc-400">Just Do It</p>
          </div>

          <div className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800 hover:scale-105 transition">
            <h4 className="text-2xl font-bold">Adidas</h4>
            <p className="text-zinc-400">Impossible is Nothing</p>
          </div>

          <div className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800 hover:scale-105 transition">
            <h4 className="text-2xl font-bold">Streetwear</h4>
            <p className="text-zinc-400">Urban Style</p>
          </div>

        </div>

      </section>

      {/* PRODUCTOS */}
      <section className="px-6 py-16">

        <h3 className="text-3xl font-bold text-center mb-10">
          🔥 Productos destacados
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          {products.map((p, i) => (
            <div
              key={i}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:scale-105 transition shadow-lg"
            >

              <img
                src={p.img}
                className="h-72 w-full object-cover"
              />

              <div className="p-5">

                <span className="text-xs text-zinc-400">
                  {p.brand}
                </span>

                <h4 className="text-xl font-bold mt-1">
                  {p.name}
                </h4>

                <p className="text-2xl font-bold mt-3">
                  ${p.price.toLocaleString()}
                </p>

                <a
                  href={`https://wa.me/5491173600891?text=Hola! quiero comprar ${p.name}`}
                  className="mt-4 inline-block bg-white text-black px-4 py-2 rounded-xl font-bold w-full text-center hover:scale-105 transition"
                >
                  Comprar
                </a>

              </div>

            </div>
          ))}

        </div>

      </section>

      {/* FOOTER */}
      <footer className="text-center text-zinc-500 py-10 border-t border-zinc-800 mt-10">
        © 2026 TRUE HAPPINNES • Sneakers Premium
      </footer>

    </main>
  );
}