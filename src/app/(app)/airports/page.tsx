import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Info, ParkingCircle } from "lucide-react";
import Link from "next/link";

export default async function AirportsPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold">Aeroportos</h1>
          <span className="block text-muted-foreground">
            Gerencie os aeroportos operados pela companhia.
          </span>
        </div>

        <div>
          <Button asChild>
            <Link href="/airports/new">Novo aeroporto</Link>
          </Button>
        </div>
      </div>

      <Separator />

      <div className="grid grid-cols-3 gap-3">
        {Array.from({ length: 12 }).map((_, i) => {
          return (
            <Link href="/services/pluto" key={i} className="group">
              <Card className="group-hover:border-primary">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 font-bold">
                    SBGR/GRU
                  </CardTitle>
                  <CardDescription>
                    Governor André Franco Montoro Intl.
                  </CardDescription>
                </CardHeader>
                <CardFooter className="flex items-center gap-3 text-xs font-semibold text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <ParkingCircle className="h-3 w-3 text-theme" />8 posições
                  </div>
                  <div className="flex items-center gap-2">
                    <Info className="h-3 w-3 text-theme" />3 informações
                    adicionais
                  </div>
                </CardFooter>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
