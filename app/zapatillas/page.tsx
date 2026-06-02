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

  // 💳 MÉTODO DE PAGO (NUEVO)
  const [metodoPago, setMetodoPago] = useState("WHATSAPP");

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

  // 💳 CHECKOUT FINAL
  const finalizarCompra = () => {
    const detalle = carrito
      .map((p) => `- ${p.nombre} x${p.cantidad}`)
      .join("%0A");

    if (metodoPago === "WHATSAPP") {
      window.open(
        `https://wa.me/5491173600891?text=Hola quiero comprar:%0A${detalle}%0A%0ATotal: $${total}`,
        "_blank"
      );
    }

    if (metodoPago === "MERCADOPAGO") {
      window.open("https://www.mercadopago.com.ar/", "_blank");
    }

    if (metodoPago === "TRANSFERENCIA") {
      alert("Alias: true.happiness / Enviar comprobante por WhatsApp");
    }
  };

  const adidas = [
    { img: "ADIDAS.jpeg", nombre: "Adidas Campus", precio: 180000, talle: "39-44", mp: "#" },
    { img: "ADIDAS1.jpeg", nombre: "Adidas Forum", precio: 195000, talle: "39-44", mp: "#" },
  ];

  const nike = [
    { img: "NIKE1.jpeg", nombre: "Nike Air Max", precio: 250000, talle: "39-44", mp: "#" },
    { img: "NIKE2.jpeg", nombre: "Nike React", precio: 220000, talle: "39-44", mp: "#" },
  ];

  const dc = [
    { img: "DC.jpeg", nombre: "DC Shoes", precio: 200000, talle: "39-44", mp: "#" },
    { img: "DCC.jpeg", nombre: "DC Shoes", precio: 200000, talle: "39-44", mp: "#" },
  ];

  const vans = [
    { img: "VANS1.jpeg", nombre: "VANS Shoes", precio: 180000, talle: "39-44", mp: "#" },
    { img: "VANS2.jpeg", nombre: "VANS Skater", precio: 160000, talle: "39-44", mp: "#" },
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

      {/* HEADER */}
      <div className="flex flex-col items-center gap-4 mb-8">
        <img src="/logo.jpg" className="w-24 h-24 rounded-full" />

        <h1 className="text-4xl font-bold">TRUE HAPPINNES</h1>

        <button
          onClick={() => setOpen(true)}
          className="bg-white text-black px-4 py-2 rounded-xl font-bold"
        >
          🛒 {carrito.length}
        </button>

        {/* 🔙 VOLVER */}
        <a href="/" className="text-sm underline text-zinc-300">
          ← Volver al inicio
        </a>
      </div>

      {/* FILTROS */}
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

      {/* 🛒 CARRITO */}
      {open && (
        <div className="fixed inset-0 bg-black/60 z-50">
          <div className="absolute right-0 top-0 w-[420px] h-full bg-black p-6">

            <h2 className="text-xl font-bold mb-4">Carrito</h2>

            {/* MÉTODOS DE PAGO */}
            <div className="mb-4">
              <p className="font-bold mb-2">Método de pago</p>

              <select
                className="w-full p-2 text-black rounded-lg"
                value={metodoPago}
                onChange={(e) => setMetodoPago(e.target.value)}
              >
                <option value="WHATSAPP">WhatsApp</option>
                <option value="MERCADOPAGO">MercadoPago</option>
                <option value="TRANSFERENCIA">Transferencia</option>
              </select>
            </div>

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

            <button
              onClick={finalizarCompra}
              className="mt-4 w-full bg-green-500 py-3 rounded-xl font-bold"
            >
              Finalizar compra
            </button>

            <button
              onClick={() => setOpen(false)}
              className="mt-2 w-full bg-red-500 py-2 rounded-xl"
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