"use client";

export default function ropa() {
  const marcas: Record<string, string[]> = {
    NIKE: [
      "nik1.jpeg",
      "nik2.jpeg",
      "nik3.jpeg",
      "nik4.jpeg",
      "nik5.jpeg",
      "nik6.jpeg",
      "nik7.jpeg",
      "nik8.jpeg",
      "nik9.jpeg",
      "nik10.jpeg",
      "nik11.jpeg",
      "nik12.jpeg",
      "nik13.jpeg",
      "nik14.jpeg",
      "nik15.jpeg",
      "nik16.jpeg",
      "nik17.jpeg",
      "nik18.jpeg",
      "nik19.jpeg",
      "nik21.jpeg",
      "nik2011.jpeg",
    ],
    Argentina: [
      "argentina1.jpeg",
      
      "argentina3.jpeg",
      "argentina4.jpeg",
      "argentina5.jpeg",
      "argentina6.jpeg",
      "argentina7.jpeg",
    ],
    ADIDAS:[
      "ropa.jpeg",
      "ropa1.jpeg",
      "ropa3.jpeg",
      "ropa4.jpeg",
      "ropa5.jpeg",
      "ropa6.jpeg",
      "ropa7.jpeg",
    ],
    OTRAS_MARCAS:[
        "face1.jpeg", 
        "face2.jpeg",
    ],
  };

  return (
    <main
      className="min-h-screen text-white p-6 bg-cover bg-center bg-fixed"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.40), rgba(0,0,0,0.50)), url('/fondo.jpg')",
      }}
    >
      <div className="flex flex-col items-center gap-4 mb-10">
        <img
          src="/logo.jpg"
          alt="logo"
          className="w-24 h-24 rounded-full"
        />

        <h1 className="text-4xl font-bold">
          TRUE HAPPINNES
        </h1>

        <a
          href="https://www.instagram.com/true.happinnes_/"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-pink-500 px-4 py-2 rounded-xl"
        >
          Instagram
        </a>
      </div>

      <h2 className="text-5xl font-bold text-center mb-4">
        Ropa
      </h2>

      <p className="text-center text-zinc-300 max-w-2xl mx-auto mb-10">
        Modelos disponibles por encargo. Consultanos stock, talles y precios por WhatsApp.
      </p>

      <div className="grid md:grid-cols-3 gap-4 mb-12">
        <div className="bg-black/40 border border-zinc-700 p-4 rounded-xl text-center">
          🚚 Envíos a todo el país
        </div>

        <div className="bg-black/40 border border-zinc-700 p-4 rounded-xl text-center">
          💳 Transferencia con descuento
        </div>

        <div className="bg-black/40 border border-zinc-700 p-4 rounded-xl text-center">
          📱 Atención personalizada
        </div>
      </div>

      <a
        href="/"
        className="inline-block mb-10 bg-white text-black px-4 py-2 rounded-xl"
      >
        ← Inicio
      </a>

      <section className="mb-16">
        <h3 className="text-3xl font-bold mb-6">NIKE</h3>

        <div className="grid md:grid-cols-4 gap-4">
          {marcas.NIKE.map((img, i) => (
            <img
              key={i}
              src={img}
              alt="Nikw"
              className="rounded-2xl h-72 w-full object-cover hover:scale-105 transition duration-500 border border-zinc-800"
            />
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h3 className="text-3xl font-bold mb-6">ARGENTINA</h3>

        <div className="grid md:grid-cols-4 gap-4">
          {marcas.Argentina.map((img, i) => (
            <img
              key={i}
              src={img}
              alt="Argentina"
              className="rounded-2xl h-72 w-full object-cover hover:scale-105 transition duration-500 border border-zinc-800"
            />
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h3 className="text-3xl font-bold mb-6">ADIDAS</h3>

        <div className="grid md:grid-cols-4 gap-4">
          {marcas.ADIDAS.map((img, i) => (
            <img
              key={i}
              src={img}
              alt="ADIDAS"
              className="rounded-2xl h-72 w-full object-cover hover:scale-105 transition duration-500 border border-zinc-800"
            />
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-3xl font-bold mb-6">OTRAS MARCAS</h3>

        <div className="grid md:grid-cols-4 gap-4">
          {marcas.OTRAS_MARCAS.map((img, i) => (
            <img
              key={i}
              src={img}
              alt="face"
              className="rounded-2xl h-72 w-full object-cover hover:scale-105 transition duration-500 border border-zinc-800"
            />
          ))}
        </div>
      </section>

      <div className="text-center py-12">
        <h3 className="text-2xl font-bold mb-4">
          ¿No encontrás el modelo que buscás?
        </h3>

        <a
          href="https://wa.me/5491173600891"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-black px-6 py-3 rounded-xl font-bold"
        >
          Consultar por WhatsApp
        </a>
      </div>

      <a
        href="https://wa.me/5491173600891"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 w-16 h-16 rounded-full flex items-center justify-center text-3xl shadow-2xl hover:scale-110 transition z-50"
      >
        💬
      </a>
    </main>
  );
}