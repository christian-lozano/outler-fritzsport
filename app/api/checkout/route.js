import mercadopago from "mercadopago"

export async function POST(req) {
  mercadopago.configure({
    access_token: `${process.env.ACCESS_TOKEN_MERCADO}`,
  })
  // console.log(data)

  try {
    const data = await req.json()
    // console.log(data)

    // let productosCantidad = data.productos.map((el) => {
    //   let productos = {
    //     id: el.idsanity,
    //     category_id: el.talla,
    //     title: el.name,
    //     description: el.id,
    //     picture_url: urlForImage(el.image).url(),
    //     quantity: el.quantity,
    //     unit_price: el.price,
    //   }

    //   return productos
    // })
    let preference = {
      items: data.productos,
      payer: {
        first_name: data.datosComprador.nombre,
        last_name: data.datosComprador.apellido,
        email: data.datosComprador.email,
        phone: {
          area_code: "51",
          number: 987654321,
        },
        address: {},
      },
      identification: {
        number: data.datosComprador.documento,
        type: "DNI",
      },
      shipments: {
        receiver_address: {
          zip_code: "121212",
          state_name: data.datosComprador.distrito,
          city_name: "Lima",
          street_name: data.datosComprador.distrito,
          street_number: 3003,
        },
      },

      back_urls: {
        success: `${process.env.URL_DOMINIO}/api/exito`,
        failure: `${process.env.URL_DOMINIO}`,
        pending: `${process.env.URL_DOMINIO}`,
      },

      // installments: 1,
      payment_methods: {
        excluded_payment_methods: [
          {
            id: "amex",
          },
        ],
        excluded_payment_types: [
          {
            id: "atm",
          },
        ],
        installments: 1,
      },
      auto_return: "approved",
  
      // notification_url: `${process.env.URL_DOMINIO}/api/exito`,
    }

    const response = await mercadopago.preferences.create(preference)
    // envio mongo db

    if (response.status === 201) {
      // const newPedido = new NewPedido(dataEnvioMongoUser)
      // const savePedido = await newPedido.save()
      // console.log(savePedido)
      
      return new Response(
        JSON.stringify({
          url: response.body.init_point,
          id_payer: response.body.id,
        }),
        {
          // return new Response(JSON.stringify({ url: "test" }), {
          status: 200,
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
    } else {
      return new Response(JSON.stringify({ error: "ocurrio un error" }), {
        // return new Response(JSON.stringify({ url: "test" }), {
        status: 401,
        headers: {
          "Content-Type": "application/json",
        },
      })
    }
  } catch (error) {
    console.log(error)
    return new Response(JSON.stringify({ error: "ocurrio un error" }), {
      // return new Response(JSON.stringify({ url: "test" }), {
      status: 401,
      headers: {
        "Content-Type": "application/json",
      },
    })
  }
}
