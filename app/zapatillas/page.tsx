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

export default function Zapatillas() {
  const zapatillas = [

    
    {
      name: "Adidas Grand Court Cloudfoam Comfort",
      price: "$200.000",
      img:"/zapa.jpg",
    },
    {
      name: "Air Force 1",
      price: "$210.000",
      img: "/zapa2.jpg",
    },
    {
      name: "Jordan 1",
      price: "$250.000",
      img: "/zapa3.jpg",
    },
    {
      name: "Adidas Campus",
      price: "$170.000",
      img: "/zapa4.jpg",
    },
    {
      name: "New Balance 550",
      price: "$230.000",
      img: "/zapa5.jpg",
    },
    {
      name: "Yeezy Boost",
      price: "$300.000",
      img: "/zapa6.jpg",
    },
    {
      name: "Yeezy Boost",
      price: "$300.000",
      img: "/zapa6.jpg",
    },
    {
      name: "Yeezy Boost",
      price: "$300.000",
      img: "/zapa6.jpg",
    },
    {
      name: "Yeezy Boost",
      price: "$300.000",
      img: "/zapa6.jpg",
    },
    {
      name: "Yeezy Boost",
      price: "$300.000",
      img: "/zapa6.jpg",
    },
    {
      name: "Yeezy Boost",
      price: "$300.000",
      img: "/zapa6.jpg",
    },
    {
      name: "Yeezy Boost",
      price: "$300.000",
      img: "/zapa6.jpg",
    },
    {
      name: "Yeezy Boost",
      price: "$300.000",
      img: "/zapa6.jpg",
    },
    {
      name: "Yeezy Boost",
      price: "$300.000",
      img: "/zapa6.jpg",
    },
    {
      name: "Yeezy Boost",
      price: "$300.000",
      img: "/zapa6.jpg",
    },
    {
      name: "Yeezy Boost",
      price: "$300.000",
      img: "/zapa6.jpg",
    },
    {
      name: "Yeezy Boost",
      price: "$300.000",
      img: "/zapa6.jpg",
    },
    {
      name: "Yeezy Boost",
      price: "$300.000",
      img: "/zapa6.jpg",
    },
    {
      name: "Yeezy Boost",
      price: "$300.000",
      img: "/zapa6.jpg",
    },
    {
      name: "Yeezy Boost",
      price: "$300.000",
      img: "/zapa6.jpg",
    },
    {
      name: "Yeezy Boost",
      price: "$300.000",
      img: "/zapa6.jpg",
    },
    {
      name: "Yeezy Boost",
      price: "$300.000",
      img: "/zapa6.jpg",
    },
    {
      name: "Yeezy Boost",
      price: "$300.000",
      img: "/zapa6.jpg",
    },
    {
      name: "Yeezy Boost",
      price: "$300.000",
      img: "/zapa6.jpg",
    },
    {
      name: "Yeezy Boost",
      price: "$300.000",
      img: "/zapa6.jpg",
    },
    {
      name: "Yeezy Boost",
      price: "$300.000",
      img: "/zapa6.jpg",
    },
    {
      name: "Yeezy Boost",
      price: "$300.000",
      img: "/zapa6.jpg",
    },
    {
      name: "Yeezy Boost",
      price: "$300.000",
      img: "/zapa6.jpg",
    },
    {
      name: "Yeezy Boost",
      price: "$300.000",
      img: "/zapa6.jpg",
    },
    {
      name: "Yeezy Boost",
      price: "$300.000",
      img: "/zapa6.jpg",
    },
    {
      name: "Yeezy Boost",
      price: "$300.000",
      img: "/zapa6.jpg",
    },
    {
      name: "Yeezy Boost",
      price: "$300.000",
      img: "/zapa6.jpg",
    },
    {
      name: "Yeezy Boost",
      price: "$300.000",
      img: "/zapa6.jpg",
    },
    {
      name: "Yeezy Boost",
      price: "$300.000",
      img: "/zapa6.jpg",
    },
];

  return (
    <main className="min-h-screen bg-black text-white p-10">
      
      <h1 className="text-5xl font-bold mb-10 text-center">
        Zapatillas
      </h1>

      <div className="grid md:grid-cols-3 gap-8">

        {zapatillas.map((zapa, i) => (
          <div
            key={i}
            className="bg-zinc-900 rounded-3xl overflow-hidden hover:scale-105 transition duration-300 border border-zinc-800"
          >
            <img
              src={zapa.img}
              alt={zapa.name}
              className="w-full h-72 object-cover"
            />

            <div className="p-6">

              <h2 className="text-2xl font-bold mb-2">
                {zapa.name}
              </h2>

              <p className="text-zinc-400 mb-4">
                Importadas 🔥
              </p>

              <p className="text-3xl font-bold mb-5">
                {zapa.price}
              </p>

              <a
                href="https://wa.me/5491173600891"
                target="_blank"
                className="bg-white text-black px-5 py-3 rounded-xl inline-block font-semibold hover:scale-105 transition"
              >
                Comprar
              </a>

            </div>
          </div>
        ))}

      </div>

    </main>
  );
}