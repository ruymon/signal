import { AirportFileInputForm } from "@/components/airport-file-input-form";
import { Separator } from "@/components/ui/separator";

export default async function NewAirportPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold">Novo aeroporto</h1>
          <span className="block text-muted-foreground">
            Importe o arquivo de dados do aeroporto para criar um novo ou insira os dados manualmente.
          </span>
        </div>
      </div>

      <Separator />

      <AirportFileInputForm />
    </div>
  );
}
