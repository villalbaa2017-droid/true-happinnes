export default function Ropa() {
return (
    <main className="min-h-screen bg-black text-white">

      {/* NAVBAR */}
    <nav className="flex flex-col md:flex-row justify-between items-center gap-4 p-4 md:p-6 border-b border-zinc-800 backdrop-blur-md bg-black/30">
        <div className="flex items-center gap-3">
                <img
            src="/logo.jpg"
            alt="logo"
            className="w-14 h-14 md:w-20 md:h-20 rounded-full object-cover"
            />

            <h1 className="text-xl md:text-3xl font-bold tracking-widest text-center md:text-left">
            TRUE HAPPINNES
            </h1>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 w-full md:w-auto">
            <input
            type="text"
            placeholder="Buscar..."
            className="px-3 py-2 rounded bg-zinc-800 text-white outline-none w-full md:w-auto"
            />

            <a
            href="https://www.instagram.com/true.happinnes_/"
            target="_blank"
            className="border border-pink-500 px-4 py-2 rounded-xl hover:bg-pink-900/30 transition text-center"
            >
            Instagram
            </a>
        </div>
        </nav>

        <div className="p-10">
        <h1 className="text-5xl font-bold text-center">
            Ropa
        </h1>
        <a
  href="/"
  className="bg-white text-black px-4 py-2 rounded-xl font-semibold hover:scale-105 transition inline-block mb-6"
>
  ← Inicio
</a>
        </div>
        

        <main
  className="min-h-screen text-white bg-cover bg-center bg-fixed"
  style={{
    backgroundImage:
      "linear-gradient(rgba(0,0,0,0.75), rgba(118,212,235,0.85)), url('/publicskate.jpg')",
  }}
></main>

    </main>
    );
}