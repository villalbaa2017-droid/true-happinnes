"use client";
import { useState, useMemo } from "react";
import { useCart } from "./context/CartContext";

type Producto = {
  img: string;
  nombre: string;
  precio: number;
  talle: string;
  mp: string;
};

export default function Zapatillas() {
  const { cart, addToCart, removeFromCart } = useCart();

  const [busqueda, setBusqueda] = useState("");
  const [filtro, setFiltro] = useState("TODOS");
  const [productoActivo, setProductoActivo] = useState<Producto | null>(null);

  // 🧠 PRODUCTOS
  const adidas: Producto[] = [
    { img: "ADIDAS.jpeg", nombre: "Adidas Campus", precio: 180000, talle: "39-44", mp: "https://mpago.la/TU_LINK" },
    { img: "ADIDAS1.jpeg", nombre: "Adidas Forum", precio: 195000, talle: "39-44", mp: "https://mpago.la/TU_LINK" },
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

  // 🔎 filtro
  const catalogo = useMemo(() => {
    const all = [
      ...adidas.map(p => ({ ...p, marca: "ADIDAS" })),
      ...nike.map(p => ({ ...p, marca: "NIKE" })),
      ...dc.map(p => ({ ...p, marca: "DC" })),
      ...vans.map(p => ({ ...p, marca: "VANS" })),
    ];

    return all.filter((p) =>
      p.nombre.toLowerCase().includes(busqueda.toLowerCase()) &&
      (filtro === "TODOS" || p.marca === filtro)
    );
  }, [busqueda, filtro]);

  return (
    <main className="min-h-screen text-white p-6 bg-cover bg-center bg-fixed"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.55)), url('/fondo.jpg')",
      }}
    >

      {/* HEADER */}
      <div className="flex items-center justify-between mb-8 max-w-6xl mx-auto w-full">

        <div className="flex items-center gap-3">
          <img src="/logo.jpg" className="w-14 h-14 rounded-full" />
          <h1 className="text-2xl md:text-3xl font-bold">
            TRUE HAPPINNES
          </h1>
        </div>

        {/* 🛒 CARRITO GLOBAL */}
        <button className="bg-white text-black px-4 py-2 rounded-xl font-bold">
          🛒 {cart.length}
        </button>
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
                  onClick={() => addToCart(p)}
                  className="flex-1 bg-white text-black py-2 rounded-lg font-bold"
                >
                  Agregar
                </button>

              </div>
            </div>
          </div>
        ))}
      </div>

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
              onClick={() => addToCart(productoActivo)}
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