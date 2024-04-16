import Link from "next/link"

import { siteConfig } from "@/config/site"
import { Icons } from "@/components/icons"

export function Logo() {
  return (
    <div className="  flex gap-6 md:gap-10">
      <Link
        href="https://www.fritzsport.pe/"
        className="flex items-center space-x-2"
      >
        <Icons.logo className="h-20 w-20 fill-black dark:fill-white xl:h-16 xl:w-16 2xl:h-28 2xl:w-28" />
      </Link>
    </div>
  )
}
