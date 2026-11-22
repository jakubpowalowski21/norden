"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation } from "@/lib/studio";
import { Brand } from "./brand";

export function SiteHeader() {
  const pathname = usePathname();

  function isCurrent(href: string) {
    return pathname === href || pathname.startsWith(href + "/");
  }

  return (
    <header className={pathname === "/" ? "site-header site-header-overlay" : "site-header"}>
      <div className="container-wide header-row">
        <Brand />
        <nav className="desktop-nav" aria-label="Menu główne">
          {navigation.map(({ href, label }) => (
            <Link href={href} key={href} aria-current={isCurrent(href) ? "page" : undefined}>{label}</Link>
          ))}
        </nav>
        <Link className="button header-contact" href="/kontakt" aria-current={isCurrent("/kontakt") ? "page" : undefined}>Kontakt</Link>
        <Dialog.Root key={pathname}>
          <Dialog.Trigger asChild>
            <button type="button" className="mobile-menu icon-button" aria-label="Otwórz menu"><Menu size={24} /></button>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="menu-overlay" />
            <Dialog.Content className="menu-panel" aria-describedby={undefined}>
              <div className="menu-top">
                <Dialog.Title className="eyebrow">Menu</Dialog.Title>
                <Dialog.Close asChild><button type="button" className="icon-button" aria-label="Zamknij menu"><X size={25} /></button></Dialog.Close>
              </div>
              <nav className="mobile-nav" aria-label="Menu główne">
                {[...navigation, { href: "/kontakt", label: "Kontakt" }].map(({ href, label }) => (
                  <Dialog.Close asChild key={href}>
                    <Link href={href} aria-current={isCurrent(href) ? "page" : undefined}>{label}</Link>
                  </Dialog.Close>
                ))}
              </nav>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </header>
  );
}
