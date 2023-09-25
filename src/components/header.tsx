import Link from "next/link";
import { Logo } from "./brand/logo";
import { NavLink } from "./nav-link";
import { ThemeSwitcher } from "./theme-switcher";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

export function Header() {
  return (
    <div className="flex h-16 items-center justify-between border-b border-border px-6">
      <div className="flex items-center gap-4">
        <Link href="/">
          <Logo />
        </Link>

        <Separator orientation="vertical" className="h-5" />

        <nav className="flex items-center space-x-6">
          <NavLink href="/live-flights">Voando agora</NavLink>
          <NavLink href="/logs">Logs</NavLink>
          <NavLink href="/airports">Aeroportos</NavLink>
          <NavLink href="/settings">Configurações</NavLink>
        </nav>
      </div>

      <div className="flex items-center gap-4">
        <Button variant="outline" size="sm">
          Feedback
        </Button>

        <Separator orientation="vertical" className="h-5" />

        <nav className="flex items-center space-x-6">
          <NavLink className="text-xs font-normal" href="/examples/dashboard">
            Changelog
          </NavLink>
          <NavLink className="text-xs font-normal" href="/examples/dashboard">
            Help
          </NavLink>
          <NavLink className="text-xs font-normal" href="/examples/dashboard">
            Docs
          </NavLink>
        </nav>

        <Separator orientation="vertical" className="h-5" />
        <ThemeSwitcher />
      </div>
    </div>
  );
}
