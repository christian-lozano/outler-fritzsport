import { useEffect, useState } from "react"
import Link from "next/link"

import NavMenuDesktop from "./nav-menu-desktop"
import NavMenuHoverDesktop from "./nav-menu-hover-desktop"
import NavSearch from "./nav-search"
import NavTop from "./nav-top"

const dataHeader = {
  menuSubmenu: [
    {
      id: "mujer",
      titulo: "Mujer",
      url: "?genero=mujer",

      infoNav: [
        {
          categoria: [
            {
              id: "1",
              title: "Ver Todas las Zapatillas",
              url: "?genero=mujer&category=zapatilla",
            },
            {
              id: "3",
              title: "Terrex",
              url: "?genero=mujer&category=terrex",
            },
            {
              id: "5",
              title: "Urbano",
              url: "?genero=mujer&category=urbano",
            },
            {
              id: "6",
              title: "Sandalias",
              url: "?genero=mujer&category=sandalias",
            },
            {
              id: "7",
              title: "Calzado de Plataforma",
              url: "?genero=mujer&category=plataforma",
            },
          ],
        },
        {
          categoria: [
            {
              id: "9",
              title: " Ropa",
              url: "?genero=mujer&category=ropa",
            },
            {
              id: "10",
              title: "Polos",
              url: "?genero=mujer&category=polo",
            },
            {
              id: "12",
              title: "Casacas",
              url: "?genero=mujer&category=casaca",
            },
            {
              id: "12",
              title: "Poleras",
              url: "?genero=mujer&category=polera",
            },
            {
              id: "12",
              title: "Pantalones",
              url: "?genero=mujer&category=pantalon",
            },
            {
              id: "12",
              title: "Buzos",
              url: "?genero=mujer&category=buzo",
            },
          ],
        },
        {
          categoria: [
            {
              id: "13",
              title: "Accesorios",
              url: "?tipo=accesorios&genero=mujer",
            },
            {
              id: "14",
              title: "Bolsos",
              url: "?tipo=accesorios&genero=mujer&category=bolso",
            },
            {
              id: "15",
              title: "Mochilas",
              url: "?tipo=accesorios&genero=mujer&category=mochila",
            },
            {
              id: "16",
              title: "Gorras",
              url: "?tipo=accesorios&genero=mujer&category=gorra",
            },
          ],
        },
      ],
    },
    {
      id: "Hombre",
      titulo: "Hombre",
      url: "?genero=hombre",
      infoNav: [
        {
          categoria: [
            {
              id: "1",
              title: "Ver Todas las Zapatillas",
              url: "?tipo=calzado&genero=hombre&category=zapatilla",
            },
            {
              id: "3",
              title: "Terrex",
              url: "?tipo=calzado&genero=hombre&category=terrex",
            },
            {
              id: "5",
              title: "Urbano",
              url: "?tipo=calzado&genero=hombre&category=urbano",
            },
            {
              id: "6",
              title: "Sandalias",
              url: "?tipo=calzado&genero=hombre&category=sandalia",
            },
          ],
        },
        {
          categoria: [
            {
              id: "9",
              title: " Ropa",
              url: "?tipo=ropa&genero=hombre",
            },
            {
              id: "10",
              title: "Polos",
              url: "?tipo=ropa&genero=hombre&category=polo",
            },
            {
              id: "12",
              title: "Casacas",
              url: "?tipo=ropa&genero=hombre&category=casaca",
            },
            {
              id: "12",
              title: "Poleras",
              url: "?tipo=ropa&genero=hombre&category=polera",
            },
            {
              id: "12",
              title: "Pantalones",
              url: "?tipo=ropa&genero=hombre&category=pantalon",
            },
            {
              id: "12",
              title: "Buzos",
              url: "?tipo=ropa&genero=hombre&category=buzo",
            },
          ],
        },
        {
          categoria: [
            {
              id: "13",
              title: "Accesorios",
              url: "?tipo=accesorios&genero=hombre",
            },

            {
              id: "15",
              title: "Mochilas",
              url: "?tipo=accesorios&genero=hombre&category=mochila",
            },
            {
              id: "16",
              title: "Gorras",
              url: "?tipo=accesorios&genero=hombre&category=gorra",
            },
          ],
        },
      ],
    },

    {
      id: "ninos",
      titulo: "Niños",
      url: "?genero=niños",
      infoNav: [
        {
          categoria: [
            {
              id: "35",
              title: "Calzado Niño",
              url: "?tipo=calzado&genero=niños",
            },
            {
              id: "36",
              title: "Zapatillas",
              url: "?tipo=calzado&genero=niño&category=zapatilla",
            },

            {
              id: "369",
              title: "Sandalias",

              url: "?tipo=calzado&genero=niño&category=sandalia",
            },
          ],
        },

        {
          categoria: [
            {
              id: "35",
              title: "Calzado Niña",
              url: "?tipo=calzado&genero=niña",
            },
            {
              id: "36",
              title: "Zapatillas",
              url: "?tipo=calzado&genero=niña&category=zapatilla",
            },
            {
              id: "39",
              title: "Sandalias",
              url: "?tipo=calzado&genero=niña&category=sandalia",
            },
          ],
        },
      ],
    },
    {
      id: "outlet",
      titulo: "OUTLET",
      url: "?price=desc",
    },
    {
      id: "",
      titulo: "Tienda",
      url: "",
    },
    {
      id: "Ntiendas",
      titulo: "Nuestras Tiendas",
      url: "nuestras-tiendas",
    },
  ],
}

export function NavNavigation({
  children,
  setActiveSearchDesk,
  activeSearchDesk,
}) {
  const [activeHoverNavDesktop, setActiveHoverNavDesktop] = useState()

  // desktop nav
  const [hoverMenu, setHoverMenu] = useState(dataHeader.menuSubmenu[0].infoNav)
  const [andler, setAndler] = useState(false)
  useEffect(() => {
    if (!andler) {
      setActiveHoverNavDesktop(undefined)
    }
  }, [andler])

  const handleHover = (index) => {
    setActiveHoverNavDesktop(index)

    setAndler(true)
    setHoverMenu(dataHeader.menuSubmenu[index].infoNav)
  }

  return (
    <ul className="flex w-full items-center justify-around">
      <div>{children}</div>
      <div className=" grid grid-flow-col items-center gap-x-10 2xl:gap-x-16">
        {/* <NavMenuDesktop
          handleHover={handleHover}
          setAndler={setAndler}
          dataHeader={dataHeader}
          activeHoverNavDesktop={activeHoverNavDesktop}
        /> */}
      </div>
      <div className="xl:hidden">
        <NavTop>
          <NavSearch />
        </NavTop>
      </div>
      <div className="hidden xl:block">
        <NavTop
          setActiveSearchDesk={setActiveSearchDesk}
          activeSearchDesk={activeSearchDesk}
        >
          <NavSearch />
        </NavTop>
      </div>
      <NavMenuHoverDesktop
        andler={andler}
        setAndler={setAndler}
        hoverMenu={hoverMenu}
      />
    </ul>
  )
}
