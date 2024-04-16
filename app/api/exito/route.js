import { NextResponse } from "next/server"
import { client } from "@/sanity/lib/client"
// sanity.js

import mercadopago from "mercadopago"

mercadopago.configure({
  access_token: `${process.env.ACCESS_TOKEN_MERCADO}`,
})

// Import using ESM URL imports in environments that supports it:
// import {createClient} from 'https://esm.sh/@sanity/client'

export async function GET(req) {
  async function updateDocumentTitle(_id, key, stock) {
    const result = client
      .patch(_id)
      .dec({ [`tallas[_key == \"${key}\"].stock`]: stock })
      // .append("tallas", [{ talla: talla, stock: 5 - stock }])
      .commit()

    return result
  }
  try {
    const searchParams = req.nextUrl.searchParams
    const collection_id = searchParams.get("collection_id")
    const preference_id = searchParams.get("preference_id")
   

    // console.log(searchParams)

    // const filter = { id_payer: preference_id }
    // const update = {
    //   pedido_pagado: true,
    //   id_mercado_pago: collection_id,
    // }
    // let PedidoUpdate = await Pagos.findOneAndUpdate(filter, update)

    fetch(`https://api.mercadopago.com/v1/payments/${collection_id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.ACCESS_TOKEN_MERCADO}`,
      },
    })
      .then((res) => res.json())
      .then(async (result) => {
        // console.log(preference_id)
        const resulta = client
          .patch(preference_id)
          .set({ estado: "pagado", id_mercado_pago: collection_id })
          .commit()

        result.additional_info.items.map(async (el) => {
          await updateDocumentTitle(el.id, el.description, Number(el.quantity))
        })
      })

    return NextResponse.redirect(new URL("/exito", req.url))
  } catch (error) {
    console.log(error)
    return new Response(JSON.stringify({ error: "ocurrio un error" }))
  }
}
