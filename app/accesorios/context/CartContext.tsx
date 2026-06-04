"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Producto = {
  img: string;
  nombre: string;
  precio: number;
  talle: string;
  mp: string;
};

type CarritoItem = Producto & { cantidad: number };

type CartContextType = {
  cart: CarritoItem[];
  addToCart: (p: Producto) => void;
  removeFromCart: (nombre: string) => void;
};

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CarritoItem[]>([]);

  // cargar
  useEffect(() => {
    const data = localStorage.getItem("cart");
    if (data) setCart(JSON.parse(data));
  }, []);

  // guardar
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (producto: Producto) => {
    setCart((prev) => {
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
  };

  const removeFromCart = (nombre: string) => {
    setCart((prev) => prev.filter((p) => p.nombre !== nombre));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart debe usarse dentro de CartProvider");
  return context;
};