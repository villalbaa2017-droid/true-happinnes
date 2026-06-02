"use client";

import { useState, useMemo } from "react";

type Producto = {
  img: string;
  nombre: string;
  precio: number;
  talle: string;
  mp: string;
};

type CarritoItem = Producto & { cantidad: number };

export default function Zapatillas() {
  const [carrito, setCarrito] = useState<CarritoItem[]>([]);
  const [open, setOpen] = useState(false);

  const [busqueda, setBusqueda] = useState("");
  const [filtro, setFiltro] = useState("TODOS");
  const [productoActivo, setProductoActivo] = useState<Producto | null>(null);

  const agregarAlCarrito = (producto: Producto) => {
    setCarrito((prev) => {
      const existe = prev.find((p) => p.nombre === producto.nombre);

      if (existe) {
        return prev.map((p) =>
          p.nombre === producto.nombre
            ? { ...p, cantidad: p.cantidad + 1 }
            : p
        );
      }

      return [...prev, { ...producto, cantidad: 1 }];
    });

    setOpen(true);
  };

  const eliminarDelCarrito = (nombre: string) => {
    setCarrito((prev) => prev.filter((p) => p.nombre !== nombre));
  };

  const total = carrito.reduce(
    (acc, p) => acc + p.precio * p.cantidad,
    0
  );

  const adidas: Producto[] = [
    { img: "ADIDAS.jpeg", nombre: "Adidas Campus", precio: 180000, talle: "39-44", mp: "https://mpago.la/TU_LINK" },
    { img: "ADIDAS1.jpeg", nombre: "Adidas Forum", precio: 195000, talle: "39-44", mp: "https://mpago.la/TU_LINK" },  
    { img: "ADIDAS2.jpeg", nombre: "Adidas Forum", precio: 195000, talle: "39-44", mp: "https://mpago.la/TU_LINK" },
    { img: "ADIDAS3.jpeg", nombre: "Adidas Forum", precio: 195000, talle: "39-44", mp: "https://mpago.la/TU_LINK" },
    { img: "ADIDAS10.jpeg", nombre: "Adidas Forum", precio: 195000, talle: "39-44", mp: "https://mpago.la/TU_LINK" },
    { img: "ADIDAS5.jpeg", nombre: "Adidas Forum", precio: 195000, talle: "39-44", mp: "https://mpago.la/TU_LINK" },
    { img: "ADIDAS6.jpeg", nombre: "Adidas Forum", precio: 195000, talle: "39-44", mp: "https://mpago.la/TU_LINK" },
    { img: "ADIDAS7.jpeg", nombre: "Adidas Forum", precio: 195000, talle: "39-44", mp: "https://mpago.la/TU_LINK" },
    { img: "ADIDAS8.jpeg", nombre: "Adidas Forum", precio: 195000, talle: "39-44", mp: "https://mpago.la/TU_LINK" },
    { img: "ADIDAS9.jpeg", nombre: "Adidas Forum", precio: 195000, talle: "39-44", mp: "https://mpago.la/TU_LINK" },
    { img: "ADIDAS11.jpeg", nombre: "Adidas Forum", precio: 195000, talle: "39-44", mp: "https://mpago.la/TU_LINK" },
    { img: "ADIDAS12.jpeg", nombre: "Adidas Forum", precio: 195000, talle: "39-44", mp: "https://mpago.la/TU_LINK" },
    { img: "ADIDAS13.jpeg", nombre: "Adidas Forum", precio: 195000, talle: "39-44", mp: "https://mpago.la/TU_LINK" },
  ];

  const nike: Producto[] = [
    { img: "NIKE1.jpeg", nombre: "Nike Air Max", precio: 250000, talle: "39-44", mp: "https://mpago.la/TU_LINK" },
    { img: "NIKE2.jpeg", nombre: "Nike React", precio: 220000, talle: "39-44", mp: "https://mpago.la/TU_LINK" },
  ];

  const dc: Producto[] = [
    { img: "DC.jpeg", nombre: "DC Shoes", precio: 200000, talle: "39-44", mp: "https://mpago.la/TU_LINK" },
    { img: "DCC.jpeg", nombre: "DC Shoes", precio: 200000, talle: "39-44", mp: "https://mpago.la/TU_LINK" },
  ];

  const vans: Producto[] = [
    { img: "VANS1.jpeg", nombre: "VANS Shoes", precio: 180000, talle: "39-44", mp: "https://mpago.la/TU_LINK" },
    { img: "VANS2.jpeg", nombre: "VANS Skater", precio: 160000, talle: "39-44", mp: "https://mpago.la/sebastianvillalba" },
  ];

  const catalogo = useMemo(() => {
    const all = [
      ...adidas.map(p => ({ ...p, marca: "ADIDAS" })),
      ...nike.map(p => ({ ...p, marca: "NIKE" })),
      ...dc.map(p => ({ ...p, marca: "DC" })),
      ...vans.map(p => ({ ...p, marca: "VANS" })),
    ];

    return all.filter((p) => {
      return (
        p.nombre.toLowerCase().includes(busqueda.toLowerCase()) &&
        (filtro === "TODOS" || p.marca === filtro)
      );
    });
  }, [busqueda, filtro]);

  return (
    <main className="min-h-screen text-white p-6 bg-cover bg-center bg-fixed"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.55)), url('/fondo.jpg')",
      }}
    >

      {/* ================= HEADER PRO (NUEVO) ================= */}
      <div className="flex items-center justify-between mb-8 max-w-6xl mx-auto w-full">

        {/* LOGO + NOMBRE */}
        <div className="flex items-center gap-3">
          <img src="/logo.jpg" className="w-14 h-14 rounded-full" />

          <h1 className="text-2xl md:text-3xl font-bold">
            TRUE HAPPINNES
          </h1>
        </div>

        {/* BOTONES CENTRO */}
        <div className="flex items-center gap-4">

          <a
            href="/"
            className="text-sm text-zinc-300 hover:text-white transition"
          >
            ← Volver al inicio
          </a>

          <button
            onClick={() => setOpen(true)}
            className="bg-white text-black px-4 py-2 rounded-xl font-bold"
          >
            🛒 {carrito.length}
          </button>

        </div>

        {/* INSTAGRAM */}
        <a
          href="https://www.instagram.com/true.happinnes_/"
          target="_blank"
          className="border border-pink-500 px-4 py-2 rounded-xl hover:bg-pink-500/20 transition"
        >
          Instagram
        </a>

      </div>

      {/* BUSQUEDA */}
      <div className="max-w-4xl mx-auto mb-10">
        <input
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          placeholder="Buscar zapatillas..."
          className="w-full p-3 rounded-xl text-black"
        />

        <div className="flex gap-2 mt-4 justify-center flex-wrap">
          {["TODOS", "ADIDAS", "NIKE", "DC", "VANS"].map((f) => (
            <button
              key={f}
              onClick={() => setFiltro(f)}
              className={`px-4 py-2 rounded-xl ${
                filtro === f ? "bg-white text-black" : "bg-zinc-800"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* PRODUCTOS */}
      <div className="grid md:grid-cols-4 gap-4">
        {catalogo.map((p, i) => (
          <div key={i} className="bg-black/50 rounded-2xl overflow-hidden">

            <img src={p.img} className="h-72 w-full object-cover" />

            <div className="p-4">
              <h4 className="font-bold">{p.nombre}</h4>

              <p className="text-green-400 text-xl font-bold">
                ${p.precio.toLocaleString()}
              </p>

              <div className="flex gap-2 mt-3">

                <button
                  onClick={() => setProductoActivo(p)}
                  className="flex-1 bg-zinc-800 py-2 rounded-lg"
                >
                  Vista rápida
                </button>

                <button
                  onClick={() => agregarAlCarrito(p)}
                  className="flex-1 bg-white text-black py-2 rounded-lg font-bold"
                >
                  Agregar
                </button>

              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CARRITO */}
      {open && (
        <div className="fixed inset-0 bg-black/60 z-50">
          <div className="absolute right-0 top-0 w-[420px] h-full bg-black p-6">

            <h2 className="text-xl font-bold mb-4">Carrito</h2>

            {carrito.map((p, i) => (
              <div key={i} className="flex justify-between border-b py-2">
                <div>
                  <p>{p.nombre}</p>
                  <p className="text-green-400">
                    ${p.precio.toLocaleString()} x {p.cantidad}
                  </p>
                </div>

                <button onClick={() => eliminarDelCarrito(p.nombre)}>
                  X
                </button>
              </div>
            ))}

            <p className="mt-4 font-bold">
              Total: ${total.toLocaleString()}
            </p>
<a
  href={`https://wa.me/5491173600891?text=Hola%20quiero%20comprar:%0A${carrito
    .map((p) => `- ${p.nombre} x${p.cantidad} $${p.precio}`)
    .join("%0A")}%0A%0ATotal:%20$${total.toLocaleString()}`}
  target="_blank"
  className="mt-4 block w-full bg-green-500 text-black py-3 rounded-xl font-bold text-center"
>
  Finalizar compra por WhatsApp
</a>

<a
  href="https://link.mercadopago.com.ar/TU_LINK"
  target="_blank"
  className="mt-3 block w-full bg-sky-500 text-black py-3 rounded-xl font-bold text-center"
>
  Pagar con MercadoPago
</a>

            <button
              onClick={() => setOpen(false)}
              className="mt-4 w-full bg-red-500 py-2 rounded-xl"
            >
              Cerrar
            </button>

          </div>
        </div>
      )}

      {/* QUICK VIEW */}
      {productoActivo && (
        <div
          onClick={() => setProductoActivo(null)}
          className="fixed inset-0 bg-black/70 flex items-center justify-center"
        >
          <div className="bg-black p-6 rounded-xl w-[400px]">
            <img src={productoActivo.img} className="w-full h-60 object-cover rounded-xl" />

            <h2 className="text-xl font-bold mt-4">
              {productoActivo.nombre}
            </h2>

            <p className="text-green-400 text-xl">
              ${productoActivo.precio.toLocaleString()}
            </p>

            <button
              onClick={() => agregarAlCarrito(productoActivo)}
              className="w-full mt-4 bg-white text-black py-2 rounded-xl font-bold"
            >
              Agregar al carrito
            </button>
          </div>
        </div>
      )}

    </main>
  );
}