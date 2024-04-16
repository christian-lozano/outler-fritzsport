import { client } from "@/sanity/lib/client"
import { groq } from "next-sanity"

import { SanitySlider } from "@/config/inventory"
import { fontSans } from "@/lib/fonts"

import { cn } from "@/lib/utils"
import Footer from "@/components/Footer/Footer"
import { SiteHeader } from "@/components/Header/site-header"

import IconWhatapp from "@/components/icon-whatsapp/icon-whatapp"
import { Providers } from "@/components/providers"
import { SiteBlob } from "@/components/site-blob"

// export const metadata: Metadata = {
//   openGraph: {
//     title: "Fritz Sport Perú Tienda oficial | Zapatillas y ropa deportiva",
//     url: `${process.env.URL_DOMINIO}`,
//     description:
//       "Bienvenido(a) al sitio oficial de Fritz Sport Perú. Encuentra en esta tienda online zapatillas y ropa deportiva, creados con tecnología y diseño. ¡Conoce más!",
//     type: "website",
//     images: [
//       {
//         url: "https://www.example.com/path-to-your-image.jpg",
//         type: "image/jpg",
//         width: 1200,
//         height: 630,
//         alt: "EMM",
//       },
//     ],
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "Fritz Sport Perú Tienda oficial | Zapatillas y ropa deportiva",
//     description:
//       "Bienvenido(a) al Twitter oficial de Fritz Sport Perú. Encuentra todo nuestro contenido actualizado y ¡Conoce más sobre nosotros!",
//     images: [
//       {
//         url: "https://www.example.com/path-to-your-image.jpg",
//         type: "image/jpg",
//         width: 1200,
//         height: 630,
//         alt: "EMM",
//       },
//     ],
//   },
// }

interface RootLayoutProps {
  children: React.ReactNode
}
// connectMongoDB()

// app/layout.tsx
export default async function RootLayout({ children }: RootLayoutProps) {
  const urlWhatsApp = await client.fetch<
    SanitySlider[]
  >(groq`*[_type == "home"] {
  whatsapp
  }`)
  return (
    <>
      <html lang="es" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          <Providers>
            <div className="relative flex min-h-screen flex-col">
              <Providers>
                <SiteHeader />

                {children}
                <Footer />
              </Providers>
              <SiteBlob />
            </div>
          </Providers>
          <IconWhatapp urlWhatsApp={urlWhatsApp[0]}></IconWhatapp>
        </body>
      </html>
    </>
  )
}
