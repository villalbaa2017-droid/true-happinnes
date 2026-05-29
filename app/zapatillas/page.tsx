export default function zapatillas() {
return (
    <main className="min-h-screen bg-black text-white">

      {/* NAVBAR */}
    <nav className="flex flex-col md:flex-row justify-between items-center gap-4 p-4 md:p-6 border-b border-zinc-800 backdrop-blur-md bg-black/30">
        <div className="flex items-center gap-3">
                <img
            src="/logo.jpg"
            alt="True Happiness brand logo, circular emblem"
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
            Zapatillas
        </h1>
        <div className="p-10">

  <h2 className="text-4xl font-bold mb-6">
    Adidas
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
    <img src="/ADIDAS.jpg" alt="Adidas sneaker, classic style with white and black colorway" className="rounded-2xl w-full h-80 object-cover" />
    <img src="/ADIDAS1.jpg" alt="Adidas athletic shoe featuring modern design and performance sole" className="rounded-2xl w-full h-80 object-cover" />
    <img src="/ADIDAS2.jpg" alt="Adidas running shoe with enhanced cushioning and breathable materials" className="rounded-2xl w-full h-80 object-cover" />
    <img src="/ADIDAS3.jpg" alt="Adidas training shoe with supportive ankle collar and reinforced structure" className="rounded-2xl w-full h-80 object-cover" />
    <img src="/ADIDAS4.jpg" alt="Adidas casual sneaker with minimalist design and clean silhouette" className="rounded-2xl w-full h-80 object-cover" />
    <img src="/ADIDAS5.jpg" alt="Adidas basketball shoe with ankle support and textured grip sole" className="rounded-2xl w-full h-80 object-cover" />
    <img src="/ADIDAS6.jpg" alt="Adidas lifestyle shoe combining comfort and contemporary street style" className="rounded-2xl w-full h-80 object-cover" />
    <img src="/ADIDAS7.jpg" alt="Adidas sneaker with bold color accents and ergonomic design" className="rounded-2xl w-full h-80 object-cover" />
    <img src="/ADIDAS8.jpg" alt="Adidas performance shoe with specialized traction pattern and responsive cushioning" className="rounded-2xl w-full h-80 object-cover" />
    <img src="/ADIDAS9.jpg" alt="Adidas limited edition sneaker with premium materials and distinctive branding" className="rounded-2xl w-full h-80 object-cover" />
    <img src="/ADIDAS10.jpg" alt="Adidas retro-inspired shoe with heritage design elements and classic proportions" className="rounded-2xl w-full h-80 object-cover" />
    <img src="/ADIDAS11.jpg" alt="Adidas cross-training shoe built for versatility and multi-sport performance" className="rounded-2xl w-full h-80 object-cover" />
    <img src="/ADIDAS12.jpg" alt="Adidas hiking boot with rugged outsole and protective toe cap for outdoor terrain" className="rounded-2xl w-full h-80 object-cover" />
    <img src="/ADIDAS13.jpg" alt="Adidas women-specific sneaker with tailored fit and contemporary color palette" className="rounded-2xl w-full h-80 object-cover" />

  </div>

  <h2 className="text-4xl font-bold mb-6">
    Nike
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
    <img src="/nike1.jpg" alt="Nike running shoe featuring responsive foam and dynamic design" className="rounded-2xl w-full h-80 object-cover" />
    <img src="/nike2.jpg" alt="Nike athletic sneaker with enhanced ventilation and secure lacing system" className="rounded-2xl w-full h-80 object-cover" />
    <img src="/nike3.jpg" alt="Nike basketball shoe with ankle stability and cushioned midsole for court performance" className="rounded-2xl w-full h-80 object-cover" />
  </div>

  <h2 className="text-4xl font-bold mb-6">
    Jordan
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    <img src="/jordan1.jpg" alt="Air Jordan iconic basketball shoe with winged logo and premium leather construction" className="rounded-2xl w-full h-80 object-cover" />
    <img src="/jordan2.jpg" alt="Air Jordan retro model showcasing classic silhouette and heritage colorway" className="rounded-2xl w-full h-80 object-cover" />
    <img src="/jordan3.jpg" alt="Air Jordan limited release featuring bold graphics and premium material details" className="rounded-2xl w-full h-80 object-cover" />
  </div>

</div>
        </div>
        <a
  href="/"
  className="bg-white text-black px-4 py-2 rounded-xl font-semibold hover:scale-105 transition inline-block mb-6"
>
  ← Inicio
</a>

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