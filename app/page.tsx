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

      {/* NAVBAR */}
      <header className="flex flex-col md:flex-row justify-between items-center gap-4 p-5 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-md">

        <h1 className="text-2xl md:text-3xl font-bold tracking-widest">
          TRUE HAPPINNES
        </h1>

        <div className="flex flex-wrap gap-3 justify-center">

          <a
            href="https://www.instagram.com/true.happinnes_/"
            target="_blank"
            className="px-4 py-2 rounded-xl border border-pink-500 hover:bg-pink-900/30"
          >
            📸 Instagram
          </a>

          <a
            href="https://www.tiktok.com"
            target="_blank"
            className="px-4 py-2 rounded-xl border border-purple-500 hover:bg-purple-900/30"
          >
            🎵 TikTok
          </a>

          <a
            href="https://wa.me/5491173600891"
            target="_blank"
            className="px-4 py-2 rounded-xl bg-white text-black font-bold hover:scale-105 transition"
          >
            WhatsApp
          </a>

        </div>
      </header>

      {/* HERO */}
      <section className="text-center py-28 px-6 bg-gradient-to-b from-black via-zinc-900 to-black">

        <h2 className="text-4xl md:text-6xl font-bold mb-4">
          Sneakers & Streetwear Premium
        </h2>

        <p className="text-zinc-400 max-w-2xl mx-auto mb-8">
          Zapatillas importadas Nike y Adidas • Estilo urbano • Calidad premium • Envíos rápidos
        </p>

        <a
          href="https://wa.me/5491173600891"
          className="bg-white text-black px-8 py-3 rounded-xl font-bold hover:scale-105 transition"
        >
          Comprar ahora
        </a>

      </section>

      {/* MARCAS */}
      <section className="px-6 py-16 text-center">

        <h3 className="text-3xl font-bold mb-10">🏷️ Marcas</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">

          <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800">
            <h4 className="text-2xl font-bold">Nike</h4>
            <p className="text-zinc-400">Just Do It</p>
          </div>

          <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800">
            <h4 className="text-2xl font-bold">Adidas</h4>
            <p className="text-zinc-400">Impossible is Nothing</p>
          </div>

          <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800">
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
              className="bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 hover:scale-105 transition"
            >

              <img src={p.img} className="h-72 w-full object-cover" />

              <div className="p-5">

                <span className="text-xs text-zinc-400">{p.brand}</span>

                <h4 className="text-xl font-bold">{p.name}</h4>

                <p className="text-2xl font-bold mt-2">
                  ${p.price.toLocaleString()}
                </p>

                <a
                  href={`https://wa.me/5491173600891?text=Hola! quiero ${p.name}`}
                  className="mt-4 block text-center bg-white text-black py-2 rounded-xl font-bold"
                >
                  Comprar
                </a>

              </div>

            </div>
          ))}

        </div>
      </section>

      {/* INFO EXTRA */}
      <section className="px-6 py-16 text-center border-t border-zinc-800">

        <h3 className="text-3xl font-bold mb-6">
          📦 Envíos y Pagos
        </h3>

        <p className="text-zinc-400 max-w-2xl mx-auto">
          Envíos a todo el país • Pagos por transferencia • Mercado Pago • Efectivo
        </p>

      </section>

      {/* FOOTER */}
      <footer className="text-center text-zinc-500 py-10 border-t border-zinc-800">

        <p>© 2026 TRUE HAPPINNES</p>

        <div className="flex justify-center gap-4 mt-3">
          <a href="https://www.instagram.com/true.happinnes_/">Instagram</a>
          <a href="https://wa.me/5491173600891">WhatsApp</a>
          <a href="https://www.tiktok.com">TikTok</a>
        </div>

      </footer>

    </main>
  );
}