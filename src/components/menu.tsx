import * as React from "react";
import { List, DownloadSimple } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

type MenuItem = {
  isMobile?: boolean;
  name: string;
  href: string;
};

function MenuItems({ isMobile = false, href, name }: MenuItem) {
  return (
    <>
      {isMobile ? (
        <DrawerClose asChild>
          <Link
            href={href}
            className="block py-2 text-lg font-medium  hover:text-popover"
          >
            {name}
          </Link>
        </DrawerClose>
      ) : (
        <Link href={href} className="text-sm font-medium hover:text-popover">
          {name}
        </Link>
      )}
    </>
  );
}

export default function ResponsiveMenu() {
  return (
    <>
      {/* Mobile Menu */}
      <Drawer>
        <DrawerTrigger asChild>
          <Button variant="outline" size="icon" className="md:hidden">
            <List className="h-6 w-6" />
            <span className="sr-only">Abrir menu</span>
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <div className="mx-auto w-full max-w-sm">
            <nav className="flex flex-col space-y-4 p-4">
              <MenuItems isMobile href="#" name="Trabalhos" />
              <MenuItems isMobile href="#contact" name="Contato" />
              <Separator className="my-2" />
              <DrawerClose asChild>
                <Button
                  variant="secondary"
                  size="sm"
                  className="rounded-xl w-f"
                >
                  <DownloadSimple className="mr-2 h-4 w-4" /> Download
                </Button>
              </DrawerClose>
            </nav>
          </div>
        </DrawerContent>
      </Drawer>

      {/* Desktop Menu */}
      <nav className="hidden md:flex items-center space-x-4">
        <MenuItems href="#" name="Trabalhos" />
        <MenuItems href="#contact" name="Contato" />
        <Separator orientation="vertical" className="h-6" />
        <Button variant="secondary" size="sm" className="rounded-xl">
          <DownloadSimple className="mr-2 h-4 w-4" /> Download
        </Button>
      </nav>
    </>
  );
}
