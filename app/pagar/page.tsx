import React from "react"

import PaginaPagar from "@/components/pagar/pagar"

import "@/styles/globals.css"
import { Metadata } from "next"

export const metadata: Metadata = {
  openGraph: {
    title: " Fritz Sport Perú Tienda oficial | Zapatillas y ropa deportiva",
    description:
      "Bienvenido(a) al sitio oficial de Fritz Sport Perú. Encuentra en esta tienda online zapatillas y ropa deportiva, creados con tecnología y diseño. ¡Conoce más!",
    url: `${process.env.URL_DOMINIO}`,
    siteName: "Fritz Sport",
    images: [
      {
        url: `https://res.cloudinary.com/dmtq82guq/image/upload/v1712332042/fritz_sport/ecommerce_nti3ij.jpg`,
        width: 800,
        height: 600,
        alt: `Fritz Sport share Imagen`,
      },
      {
        url: `https://res.cloudinary.com/dmtq82guq/image/upload/v1712332042/fritz_sport/ecommerce_nti3ij.jpg`,

        width: 1200,
        height: 630,
        alt: `Fritz Sport share Imagen`,
      },
    ],
  },
}
export default function page() {
  return (
    <div className="overflow-x-hidden">
      <PaginaPagar></PaginaPagar>
    </div>
  )
}
