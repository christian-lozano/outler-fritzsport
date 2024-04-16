"use client"

import "@/styles/exito.css"
import { useEffect } from "react"
import { useCart } from "react-use-cart"

export default function Page() {
  const { emptyCart } = useCart()
  useEffect(() => {
    emptyCart()
  }, [])
  //asds
  return (
    <div className="flex h-screen items-center justify-center bg-black">
      <div className="bg-black p-6  md:mx-auto">
        <svg
          viewBox="0 0 24 24"
          className="mx-auto my-6 h-16 w-16 text-green-600"
        >
          <path
            fill="currentColor"
            d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
          ></path>
        </svg>
        <div className="text-center">
          <h3 className="text-center text-base font-semibold text-white md:text-2xl">
            ¡Pago Realizado con éxito!
          </h3>
          <p className="my-2 text-white">
            Gracias por completar su pago seguro en línea.
          </p>
          <p className="text-white">
            Nos Estaremos comunicando contigo Para coordinar la entrega de tu
            pedido!
          </p>
          {/*  */}
          <p className="text-white">¡Qué tengas un lindo día!</p>
          <div className="py-10 text-center">
            <a
              href={`${process.env.URL_DOMINIO}`}
              className="bg-indigo-600 px-12 py-3 font-semibold text-white hover:bg-indigo-500"
            >
              Seguir Comprando
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
