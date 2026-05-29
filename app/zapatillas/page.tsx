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
        <a
  href="/"
  className="bg-white text-black px-4 py-2 rounded-xl font-semibold hover:scale-105 transition inline-block mb-6"
>
  ← Inicio
</a>
        <div className="p-10">

  <h2 className="text-4xl font-bold mb-6">
    ADIDAS
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
    <img src="/ADIDAS.jpeg" alt="Classic Adidas sneaker featuring white and black colorway with iconic three stripes design" className="rounded-2xl w-full h-80 object-cover" />
    <img src="/ADIDAS1.jpeg" alt="Adidas athletic shoe with modern streamlined silhouette, cushioned midsole, and performance-oriented design" className="rounded-2xl w-full h-80 object-cover" />
    <img src="/ADIDAS2.jpeg" alt="Adidas running shoe with thick cushioned midsole and mesh upper for breathability, designed for long-distance comfort" className="rounded-2xl w-full h-80 object-cover" />
    <img src="/ADIDAS3.jpeg" alt="Adidas training shoe with padded ankle collar, reinforced heel counter, and stable base for lateral movements" className="rounded-2xl w-full h-80 object-cover" />
    <img src="/ADIDAS5.jpeg" alt="Adidas basketball shoe with extended ankle support collar, textured outsole for court grip, and reinforced side panels" className="rounded-2xl w-full h-80 object-cover" />
    <img src="/ADIDAS6.jpeg" alt="Adidas lifestyle shoe blending comfort cushioning with contemporary street style aesthetics for casual everyday use" className="rounded-2xl w-full h-80 object-cover" />
    <img src="/ADIDAS7.jpeg" alt="Adidas sneaker showcasing bold color accents against neutral base, with ergonomic curves and contoured fit" className="rounded-2xl w-full h-80 object-cover" />
    <img src="/ADIDAS8.jpeg" alt="Adidas performance shoe featuring specialized traction pattern on sole for multiple surfaces and responsive foam cushioning" className="rounded-2xl w-full h-80 object-cover" />
    <img src="/ADIDAS9.jpeg" alt="Adidas limited edition sneaker crafted with premium materials, featuring distinctive branding elements and exclusive design details" className="rounded-2xl w-full h-80 object-cover" />
    <img src="/ADIDAS10.jpeg" alt="Adidas retro-inspired shoe celebrating heritage with classic design proportions, vintage colorways, and timeless silhouette" className="rounded-2xl w-full h-80 object-cover" />
    <img src="/ADIDAS11.jpeg" alt="Adidas cross-training shoe engineered for versatility across multiple sports, featuring balanced cushioning and lateral stability" className="rounded-2xl w-full h-80 object-cover" />
    <img src="/ADIDAS12.jpeg" alt="Adidas hiking boot with rugged traction outsole and protective reinforced toe cap, designed for challenging outdoor terrain" className="rounded-2xl w-full h-80 object-cover" />
    <img src="/ADIDAS13.jpeg" alt="Adidas women-specific sneaker with tailored proportions for optimized fit, contemporary color palette, and inclusive design" className="rounded-2xl w-full h-80 object-cover" />

  </div>

  <h2 className="text-4xl font-bold mb-6">
    NIKE
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
    <img src="/NIKE1.jpeg" alt="Nike running shoe featuring responsive foam midsole, aerodynamic mesh upper with ventilation, and sleek silhouette designed for rapid movement and endurance activities" className="rounded-2xl w-full h-80 object-cover" />
    <img src="/NIKE2.jpeg" alt="Nike athletic sneaker displaying perforated mesh panels for airflow, reinforced eyelets with secure lacing system, and cushioned midsole for everyday comfort" className="rounded-2xl w-full h-80 object-cover" />
    <img src="/NIKE3.jpeg" alt="Nike basketball shoe with extended ankle collar for lateral support, padded heel counter, thick foam midsole, and textured outsole for court traction during high-impact movements" className="rounded-2xl w-full h-80 object-cover" />
    <img src="/NIKE4.jpeg" alt="Nike basketball shoe featuring reinforced ankle support, cushioned midsole technology, durable rubber outsole, and stable base engineered for intense court performance" className="rounded-2xl w-full h-80 object-cover" />
    <img src="/NIKE5.jpeg" alt="Nike basketball shoe with protective ankle reinforcement, responsive cushioning system, grip-focused outsole pattern, and supportive heel structure for dynamic play" className="rounded-2xl w-full h-80 object-cover" />
    <img src="/NIKE6.jpeg" alt="Nike basketball shoe combining padded ankle collar, cushioned midsole for shock absorption, textured court grip sole, and contoured fit for enhanced stability" className="rounded-2xl w-full h-80 object-cover" />
    <img src="/NIKE7.jpeg" alt="Nike basketball shoe showcasing reinforced ankle support system, responsive foam cushioning, patterned outsole traction, and engineered base for explosive court movements" className="rounded-2xl w-full h-80 object-cover" />

  </div>

  <h2 className="text-4xl font-bold mb-6">
    DC
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    <img src="/DC.jpeg" alt="Air Jordan iconic basketball shoe featuring signature winged Jumpman logo and premium leather upper with heritage construction" className="rounded-2xl w-full h-80 object-cover" />
    <img src="/DCC.jpeg" alt="Air Jordan retro model displaying classic silhouette and heritage colorway evoking basketball nostalgia and cultural legacy" className="rounded-2xl w-full h-80 object-cover" />
    <img src="/DCCC.jpeg" alt="Air Jordan limited release showcasing bold graphic elements, premium material details, and exclusive collector-focused design" className="rounded-2xl w-full h-80 object-cover" />
    <img src="/DCCCC.jpeg" alt="Air Jordan limited release showcasing bold graphic elements, premium material details, and exclusive collector-focused design" className="rounded-2xl w-full h-80 object-cover" />
    <img src="/DCCCCC.jpeg" alt="Air Jordan limited release showcasing bold graphic elements, premium material details, and exclusive collector-focused design" className="rounded-2xl w-full h-80 object-cover" />
    <img src="/DCCCCCC.jpeg" alt="Air Jordan limited release showcasing bold graphic elements, premium material details, and exclusive collector-focused design" className="rounded-2xl w-full h-80 object-cover" />
    <img src="/DCCCCCCC.jpeg" alt="Air Jordan limited release showcasing bold graphic elements, premium material details, and exclusive collector-focused design" className="rounded-2xl w-full h-80 object-cover" />
    <img src="/DCCCCCCCC.jpeg" alt="Air Jordan limited release showcasing bold graphic elements, premium material details, and exclusive collector-focused design" className="rounded-2xl w-full h-80 object-cover" />
  </div>


  <h2 className="text-4xl font-bold mb-6">
    VANS
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    <img src="/VANS.jpeg" alt="Air Jordan iconic basketball shoe featuring signature winged Jumpman logo and premium leather upper with heritage construction" className="rounded-2xl w-full h-80 object-cover" />
    <img src="/VANS1.jpeg" alt="Air Jordan retro model displaying classic silhouette and heritage colorway evoking basketball nostalgia and cultural legacy" className="rounded-2xl w-full h-80 object-cover" />
    <img src="/VANS2.jpeg" alt="Air Jordan limited release showcasing bold graphic elements, premium material details, and exclusive collector-focused design" className="rounded-2xl w-full h-80 object-cover" />
    <img src="/VANS3.jpeg" alt="Air Jordan limited release showcasing bold graphic elements, premium material details, and exclusive collector-focused design" className="rounded-2xl w-full h-80 object-cover" />
    <img src="/VANS4.jpeg" alt="Air Jordan limited release showcasing bold graphic elements, premium material details, and exclusive collector-focused design" className="rounded-2xl w-full h-80 object-cover" />
    <img src="/VANS5.jpeg" alt="Air Jordan limited release showcasing bold graphic elements, premium material details, and exclusive collector-focused design" className="rounded-2xl w-full h-80 object-cover" />
    <img src="/VANS6.jpeg" alt="Air Jordan limited release showcasing bold graphic elements, premium material details, and exclusive collector-focused design" className="rounded-2xl w-full h-80 object-cover" />
    <img src="/VANS7.jpeg" alt="Air Jordan limited release showcasing bold graphic elements, premium material details, and exclusive collector-focused design" className="rounded-2xl w-full h-80 object-cover" />
    <img src="/VANS8.jpeg" alt="Air Jordan limited release showcasing bold graphic elements, premium material details, and exclusive collector-focused design" className="rounded-2xl w-full h-80 object-cover" />
    <img src="/VANS9.jpeg" alt="Air Jordan limited release showcasing bold graphic elements, premium material details, and exclusive collector-focused design" className="rounded-2xl w-full h-80 object-cover" />
    <img src="/VANS10.jpeg" alt="Air Jordan limited release showcasing bold graphic elements, premium material details, and exclusive collector-focused design" className="rounded-2xl w-full h-80 object-cover" />

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