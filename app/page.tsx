export default function Home() {
  return (
    <main
      className="min-h-screen text-white bg-cover bg-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.8)), url('/publicskate.jpg')",
      }}
    >
      {/* NAVBAR */}
      <nav className="flex justify-between items-center p-6 border-b border-zinc-800">
        <div className="flex items-center gap-4">
          <img
            src="/pagina-de-lu.jpg"
            alt="logo"
            className="w-16 h-16 rounded-full object-cover"
          />

          <h1 className="text-3xl font-bold tracking-widest">
            TRUE HAPPINNES
          </h1>
        </div>

        <a
          href="https://www.instagram.com/true.happinnes_/"
          target="_blank"
          className="border border-pink-500 px-4 py-2 rounded-xl hover:bg-pink-900/30 transition"
        >
          Instagram
        </a>
      </nav>

      {/* HERO */}
      <section className="text-center py-24 px-6">
        <h2 className="text-5xl md:text-7xl font-bold mb-6">
          Streetwear & Zapas
        </h2>

        <p className="text-zinc-400 text-lg max-w-2xl mx-auto mb-10">
          Ropa urbana, zapatillas importadas y estilo auténtico.
        </p>

        <a
          href="https://wa.me/5491173600891"
          target="_blank"
          className="bg-white text-black px-8 py-4 rounded-2xl text-lg font-semibold hover:scale-105 transition inline-block"
        >
          Consultar Productos
        </a>
      </section>

      {/* CATEGORIAS */}
      <section className="px-6 py-16">
        <h3 className="text-4xl font-bold text-center mb-12">
          Categorías
        </h3>

        <div className="grid md:grid-cols-3 gap-8">
          {/* ZAPATILLAS */}
          <a
            href="/zapatillas"
            className="relative rounded-3xl overflow-hidden group cursor-pointer block"
          >
            <img
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
              alt="zapatillas"
              className="w-full h-80 object-cover group-hover:scale-110 transition duration-500"
            />

            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <h4 className="text-4xl font-bold">Zapatillas</h4>
            </div>
          </a>

          {/* ROPA */}
          <div className="relative rounded-3xl overflow-hidden group cursor-pointer">
            <img
              src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"
              alt="ropa"
              className="w-full h-80 object-cover group-hover:scale-110 transition duration-500"
            />

            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <h4 className="text-4xl font-bold">Ropa</h4>
            </div>
          </div>

          {/* ACCESORIOS */}
          <div className="relative rounded-3xl overflow-hidden group cursor-pointer">
            <img
              src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f"
              alt="accesorios"
              className="w-full h-80 object-cover group-hover:scale-110 transition duration-500"
            />

            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <h4 className="text-4xl font-bold">Accesorios</h4>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTOS */}
      <section className="px-6 py-20">
        <h3 className="text-4xl font-bold text-center mb-14">
          Productos Destacados
        </h3>

        <div className="grid md:grid-cols-3 gap-8">
          {/* PRODUCTO 1 */}
          <div className="bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 hover:scale-105 transition">
            <img
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
              alt="Nike Dunk"
              className="w-full h-80 object-cover"
            />

            <div className="p-6">
              <h4 className="text-2xl font-bold mb-2">
                Nike Dunk Low
              </h4>

              <p className="text-zinc-400 mb-2">
                Importadas 🔥
              </p>

              <p className="text-3xl font-bold mb-5">
                $180.000
              </p>

              <a
                href="https://wa.me/5491173600891"
                target="_blank"
                className="bg-white text-black px-5 py-3 rounded-xl font-semibold inline-block"
              >
                Comprar
              </a>
            </div>
          </div>

          {/* PRODUCTO 2 */}
          <div className="bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 hover:scale-105 transition">
            <img
              src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"
              alt="Buzos"
              className="w-full h-80 object-cover"
            />

            <div className="p-6">
              <h4 className="text-2xl font-bold mb-2">
                Buzos Oversize
              </h4>

              <p className="text-zinc-400 mb-2">
                Calidad premium
              </p>

              <p className="text-3xl font-bold mb-5">
                $95.000
              </p>

              <a
                href="https://wa.me/5491173600891"
                target="_blank"
                className="bg-white text-black px-5 py-3 rounded-xl font-semibold inline-block"
              >
                Comprar
              </a>
            </div>
          </div>

          {/* PRODUCTO 3 */}
          <div className="bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 hover:scale-105 transition">
            <img
              src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f"
              alt="Accesorios"
              className="w-full h-80 object-cover"
            />

            <div className="p-6">
              <h4 className="text-2xl font-bold mb-2">
                Accesorios
              </h4>

              <p className="text-zinc-400 mb-2">
                Streetwear original
              </p>

              <p className="text-3xl font-bold mb-5">
                $35.000
              </p>

              <a
                href="https://wa.me/5491173600891"
                target="_blank"
                className="bg-white text-black px-5 py-3 rounded-xl font-semibold inline-block"
              >
                Comprar
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-zinc-800 py-10 text-center text-zinc-500">
        <p>© 2026 TRUE HAPPINNES</p>
      </footer>
    </main>
  )
}