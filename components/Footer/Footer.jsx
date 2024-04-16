"use client"

import Column from "./Column/Column"
import "./Footer.css"

const columns = [
  // {
  //   title: "Shop",
  //   links: ["alllinks"],
  // },
  {
    title: "Paginas",
    links: [
      {
        text: "Hombre",
        link: "/?genero=hombre",
      },
      {
        text: "Mujer",
        link: "/?genero=mujer",
      },
      {
        text: "Niños",
        link: "/?genero=niños",
      },
      {
        text: "Carrito",
        link: "/?genero=carrito",
      },
    ],
  },
  // {
  //   title: "Help",
  //   links: [
  //     {
  //       text: "Problemas con mi Pedido",
  //       link: "https://api.whatsapp.com/send/?phone=51983478551&text&type=phone_number&app_absent=0",
  //     },
  //     {
  //       text: "Hacer una Devolución",
  //       link: "https://api.whatsapp.com/send/?phone=51983478551&text&type=phone_number&app_absent=0",
  //     },
  //     {
  //       text: "Talla Incorrecta",
  //       link: "https://api.whatsapp.com/send/?phone=51983478551&text&type=phone_number&app_absent=0",
  //     },
  //   ],
  // },
  {
    title: "Políticas",
    links: [
      {
        text: "Políticas de Privacidad",
        link: "#",
      },
      {
        text: "Contáctanos",
        link: "https://api.whatsapp.com/send/?phone=51983478551&text&type=phone_number&app_absent=0",
      },
      {
        text: "Términos & Condiciones",
        link: "#",
      },
    ],
  },
]
const Footer = (props) => {
  const columnsrow = columns?.map((column) => {
    return <Column column={column} />
  })
  const date = new Date()
  return (
    <div className="footer ">
      <div className="columns">
        <Column logo />
        {columnsrow}
      </div>
      <div class="flex w-full items-center justify-center gap-4 hover:cursor-pointer">
        <a
          href="https://www.facebook.com/fritzsportsac/"
          target="_blank"
          rel="noreferrer"
        >
          <svg
            class="fill-white xl:fill-white"
            width="25px"
            height="25px"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path d="M12 2.03998C6.5 2.03998 2 6.52998 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.84998C10.44 7.33998 11.93 5.95998 14.22 5.95998C15.31 5.95998 16.45 6.14998 16.45 6.14998V8.61998H15.19C13.95 8.61998 13.56 9.38998 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96C15.9164 21.5878 18.0622 20.3855 19.6099 18.57C21.1576 16.7546 22.0054 14.4456 22 12.06C22 6.52998 17.5 2.03998 12 2.03998Z"></path>{" "}
            </g>
          </svg>
        </a>
        <a
          href="https://www.instagram.com/fritzsport/"
          target="_blank"
          rel="noreferrer"
        >
          <svg
            class="mt-[0.1rem] fill-white xl:fill-white"
            width="23px"
            height="23px"
            viewBox="0 0 20 20"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <title>Instagram [#167]</title> <desc>Created with Sketch.</desc>{" "}
              <defs> </defs>{" "}
              <g id="Page-1" stroke-width="0.3" fill="none" fill-rule="evenodd">
                {" "}
                <g
                  id="Dribbble-Light-Preview"
                  transform="translate(-340.000000, -7439.000000)"
                  class="mt-[0.1rem] fill-white xl:fill-white"
                >
                  {" "}
                  <g id="icons" transform="translate(56.000000, 160.000000)">
                    {" "}
                    <path
                      d="M289.869652,7279.12273 C288.241769,7279.19618 286.830805,7279.5942 285.691486,7280.72871 C284.548187,7281.86918 284.155147,7283.28558 284.081514,7284.89653 C284.035742,7285.90201 283.768077,7293.49818 284.544207,7295.49028 C285.067597,7296.83422 286.098457,7297.86749 287.454694,7298.39256 C288.087538,7298.63872 288.809936,7298.80547 289.869652,7298.85411 C298.730467,7299.25511 302.015089,7299.03674 303.400182,7295.49028 C303.645956,7294.859 303.815113,7294.1374 303.86188,7293.08031 C304.26686,7284.19677 303.796207,7282.27117 302.251908,7280.72871 C301.027016,7279.50685 299.5862,7278.67508 289.869652,7279.12273 M289.951245,7297.06748 C288.981083,7297.0238 288.454707,7296.86201 288.103459,7296.72603 C287.219865,7296.3826 286.556174,7295.72155 286.214876,7294.84312 C285.623823,7293.32944 285.819846,7286.14023 285.872583,7284.97693 C285.924325,7283.83745 286.155174,7282.79624 286.959165,7281.99226 C287.954203,7280.99968 289.239792,7280.51332 297.993144,7280.90837 C299.135448,7280.95998 300.179243,7281.19026 300.985224,7281.99226 C301.980262,7282.98483 302.473801,7284.28014 302.071806,7292.99991 C302.028024,7293.96767 301.865833,7294.49274 301.729513,7294.84312 C300.829003,7297.15085 298.757333,7297.47145 289.951245,7297.06748 M298.089663,7283.68956 C298.089663,7284.34665 298.623998,7284.88065 299.283709,7284.88065 C299.943419,7284.88065 300.47875,7284.34665 300.47875,7283.68956 C300.47875,7283.03248 299.943419,7282.49847 299.283709,7282.49847 C298.623998,7282.49847 298.089663,7283.03248 298.089663,7283.68956 M288.862673,7288.98792 C288.862673,7291.80286 291.150266,7294.08479 293.972194,7294.08479 C296.794123,7294.08479 299.081716,7291.80286 299.081716,7288.98792 C299.081716,7286.17298 296.794123,7283.89205 293.972194,7283.89205 C291.150266,7283.89205 288.862673,7286.17298 288.862673,7288.98792 M290.655732,7288.98792 C290.655732,7287.16159 292.140329,7285.67967 293.972194,7285.67967 C295.80406,7285.67967 297.288657,7287.16159 297.288657,7288.98792 C297.288657,7290.81525 295.80406,7292.29716 293.972194,7292.29716 C292.140329,7292.29716 290.655732,7290.81525 290.655732,7288.98792"
                      id="instagram-[#167]"
                    >
                      {" "}
                    </path>{" "}
                  </g>{" "}
                </g>{" "}
              </g>{" "}
            </g>
          </svg>
        </a>
        <a
          href="https://www.tiktok.com/@fritzsport"
          target="_blank"
          rel="noreferrer"
        >
          <svg
            class="fill-white xl:fill-white"
            width="25px"
            height="25px"
            viewBox="0 0 32 32"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <title>tiktok</title>{" "}
              <path d="M16.656 1.029c1.637-0.025 3.262-0.012 4.886-0.025 0.054 2.031 0.878 3.859 2.189 5.213l-0.002-0.002c1.411 1.271 3.247 2.095 5.271 2.235l0.028 0.002v5.036c-1.912-0.048-3.71-0.489-5.331-1.247l0.082 0.034c-0.784-0.377-1.447-0.764-2.077-1.196l0.052 0.034c-0.012 3.649 0.012 7.298-0.025 10.934-0.103 1.853-0.719 3.543-1.707 4.954l0.020-0.031c-1.652 2.366-4.328 3.919-7.371 4.011l-0.014 0c-0.123 0.006-0.268 0.009-0.414 0.009-1.73 0-3.347-0.482-4.725-1.319l0.040 0.023c-2.508-1.509-4.238-4.091-4.558-7.094l-0.004-0.041c-0.025-0.625-0.037-1.25-0.012-1.862 0.49-4.779 4.494-8.476 9.361-8.476 0.547 0 1.083 0.047 1.604 0.136l-0.056-0.008c0.025 1.849-0.050 3.699-0.050 5.548-0.423-0.153-0.911-0.242-1.42-0.242-1.868 0-3.457 1.194-4.045 2.861l-0.009 0.030c-0.133 0.427-0.21 0.918-0.21 1.426 0 0.206 0.013 0.41 0.037 0.61l-0.002-0.024c0.332 2.046 2.086 3.59 4.201 3.59 0.061 0 0.121-0.001 0.181-0.004l-0.009 0c1.463-0.044 2.733-0.831 3.451-1.994l0.010-0.018c0.267-0.372 0.45-0.822 0.511-1.311l0.001-0.014c0.125-2.237 0.075-4.461 0.087-6.698 0.012-5.036-0.012-10.060 0.025-15.083z"></path>{" "}
            </g>
          </svg>
        </a>
      </div>
      <div className="rights">
        <h5 className="graytext">
          <span>
            Todos los derechos Reservados Fritz Sport {date.getFullYear()}
          </span>
          <small>Images are the property of Adidas and Nike ecommerce</small>
        </h5>
      </div>
    </div>
  )
}

export default Footer
