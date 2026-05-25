"use client";

export default function Home() {
  return (
    <main className="min-h-screen text-white bg-black">

      {/* HERO */}
      <section className="text-center py-20 px-6 bg-gradient-to-br from-black via-zinc-900 to-black">

        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          TRUE HAPPINNES
        </h1>

        <p className="text-zinc-400 max-w-2xl mx-auto mb-8">
          Streetwear • Zapatillas importadas • Adidas & Nike originales
        </p>

        <a
          href="https://wa.me/5491173600891"
          className="bg-white text-black px-6 py-3 rounded-xl font-bold"
        >
          Consultar por WhatsApp
        </a>

      </section>

      {/* MARCAS */}
      <section className="py-16 px-6 text-center">

        <h2 className="text-3xl font-bold mb-10">
          🏷️ Marcas destacadas
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">

          <img
            src="https://images.unsplash.com/photo-1600269452121-4f2416e55c28"
            className="rounded-2xl h-64 w-full object-cover"
            alt="Nike"
          />

          <img
            src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990"
            className="rounded-2xl h-64 w-full object-cover"
            alt="Adidas"
          />

          <img
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
            className="rounded-2xl h-64 w-full object-cover"
            alt="Sneakers"
          />

        </div>

      </section>

      {/* PRODUCTOS */}
      <section className="py-16 px-6">

        <h2 className="text-3xl font-bold text-center mb-10">
          🔥 Productos destacados
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">

          {/* NIKE */}
          <div className="bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800">
            <img
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
              className="h-72 w-full object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-bold">Nike Dunk Low</h3>
              <p className="text-zinc-400">Importadas premium</p>
              <p className="text-2xl font-bold mt-3">$180.000</p>
            </div>
          </div>

          {/* ADIDAS */}
          <div className="bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800">
            <img
              src="https://images.unsplash.com/photo-1600269452121-4f2416e55c28"
              className="h-72 w-full object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-bold">Adidas Originals</h3>
              <p className="text-zinc-400">Street style</p>
              <p className="text-2xl font-bold mt-3">$150.000</p>
            </div>
          </div>

          {/* SNEAKERS */}
          <div className="bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800">
            <img
              src="https://images.unsplash.com/photo-1528701800489-20be3c5f2c1a"
              className="h-72 w-full object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-bold">Street Sneakers</h3>
              <p className="text-zinc-400">Edición limitada</p>
              <p className="text-2xl font-bold mt-3">$120.000</p>
            </div>
          </div>

        </div>
      </section>

      {/* CONTACTO */}
      <section className="text-center py-20 border-t border-zinc-800">

        <h2 className="text-3xl font-bold mb-4">
          📲 Contacto
        </h2>

        <p className="text-zinc-400 mb-6">
          Pedidos directos por WhatsApp
        </p>

        <a
          href="https://wa.me/5491173600891"
          className="bg-white text-black px-6 py-3 rounded-xl font-bold"
        >
          Hablar ahora
        </a>

      </section>

      {/* FOOTER */}
      <footer className="text-center text-zinc-500 py-10 border-t border-zinc-800">
        © 2026 TRUE HAPPINNES
      </footer>

    </main>
  );
}