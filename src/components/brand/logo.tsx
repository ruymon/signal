import { siteConfig } from "@/config/site";
import { LogoIcon } from "./logo-icon";

interface LogoProps {}

export function Logo({}: LogoProps) {
  return (
    <figure className="flex items-center gap-2">
      <LogoIcon />
      <span className="font-heading font-medium">{siteConfig.name}</span>
    </figure>
  );
}
