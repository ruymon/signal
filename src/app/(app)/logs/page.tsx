import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Plane, Split } from "lucide-react";

export default async function Logs() {
  return (
    <div className="space-y-8">
      <div className="space-y-1">
        <h1 className="text-3xl font-bold">Logs</h1>
        <span className="block text-muted-foreground">
          Visualize os logs das notificações emitidas.
        </span>
      </div>

      <Separator />

      <div className="grid grid-cols-[15rem_1fr] items-start gap-8">
        <nav className="flex flex-col gap-6">
          <div className="space-y-2">
            <Label htmlFor="timeline">Linha do tempo</Label>
            <Select defaultValue="30">
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="30">Últimos 30 minutos</SelectItem>
                <SelectItem value="hour">Última hora</SelectItem>
                <SelectItem value="two">Últimos 3 dias</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Separator />
          <div className="space-y-6">
            <span className="block text-sm font-semibold">
              Filtrar por status:
            </span>

            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Checkbox id="service-1" />
                <Label htmlFor="service-1">Sucesso</Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="service-2" />
                <Label htmlFor="service-1">Erro</Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="service-3" />
                <Label htmlFor="service-1">Aguardando</Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="service-3" />
                <Label htmlFor="service-1">Tentando novamente</Label>
              </div>
            </div>
          </div>

          <Separator />
          <div className="space-y-6">
            <span className="block text-sm font-semibold">
              Filtrar por tipo:
            </span>

            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Checkbox id="service-1" />
                <Label htmlFor="service-1">Atribuição de Gate</Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="service-2" />
                <Label htmlFor="service-2">Atualização de dados</Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="service-3" />
                <Label htmlFor="service-3">Mensagem manual</Label>
              </div>
            </div>
          </div>

          <Separator />
          <div className="space-y-6">
            <span className="block text-sm font-semibold">
              Filter by events (3)
            </span>

            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Checkbox id="event-1" />
                <Label htmlFor="event-1">pluto.signature-created</Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="event-2" />
                <Label htmlFor="event-2">pluto.subscription-created</Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="event-3" />
                <Label htmlFor="event-3">pluto.subscription-renewed</Label>
              </div>
            </div>
          </div>
        </nav>

        <div className="">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Hora</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Destinatário</TableHead>
                <TableHead>Evento</TableHead>
                <TableHead>Conteúdo</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {Array.from({ length: 24 }).map((_, i) => (
                <TableRow key={i}>
                  <TableCell className="text-xs text-muted-foreground">
                    AUG 30 12:44:17.15
                  </TableCell>
                  <TableCell>
                    <Badge
                      size="sm"
                      variant="secondary"
                      className="bg-green-600/10 hover:bg-green-600/10 cursor-default"
                    >
                      Sucesso
                    </Badge>
                  </TableCell>
                  <TableCell className="space-x-2 font-medium">
                    <Plane className="inline-block h-3 w-3" />
                    <span>SMB9651</span>
                  </TableCell>
                  <TableCell className="space-x-2 font-medium">
                    <Split className="inline-block h-3 w-3 text-theme" />
                    <span>gate.assigned</span>
                  </TableCell>
                  <TableCell className="max-w-[200px] truncate font-mono text-xs text-muted-foreground">
                    {`[HEAD] [middleware: "discover-2022/_middleware"]
                    /discover-2022/course/o-guia-estelar-de-git/conceitos-6/estagios-do-arquivo
                    status=200`}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
