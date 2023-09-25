import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { ArrowRight, Inbox } from 'lucide-react'
import Link from 'next/link'

export default async function LiveFlightsPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold">Voando agora</h1>
          <span className="block text-muted-foreground">
            Emita notificações em tempo real para as aeronaves em voo.
          </span>
        </div>

        <div>
          <Button asChild>
            <Link href="/events/new">Add event</Link>
          </Button>
        </div>
      </div>

      <Separator />

      <div className="grid grid-cols-[15rem_1fr] items-start gap-8">
        <nav className="flex flex-col gap-6">
          <Input id="search" placeholder="Search events..." />
          <Separator />
          <div className="space-y-6">
            <span className="block text-sm font-semibold">
              Filtrar por status (7)
            </span>

            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Checkbox id="service-1" />
                <Label htmlFor="service-1">Gate atribuído</Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="service-2" />
                <Label htmlFor="service-2">Sem gate</Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="service-3" />
                <Label htmlFor="service-3">Em solo</Label>
              </div>
            </div>
          </div>
        </nav>

        <div className="grid grid-cols-2 gap-3">
          {Array.from({ length: 12 }).map((_, i) => {
            return (
              <Link href="/flight/SMB9654"
                key={i}
                className="group"
              >
                <Card className="group-hover:border-primary">
                  <CardHeader className="text-left">
                    <CardTitle className="flex items-center gap-2">
                      SMB9654
                      <span className="text-xs text-muted-foreground">
                        (SMB001)
                      </span>
                    </CardTitle>
                    <CardDescription className='flex items-center gap-1'>
                      <span>SBSP</span>
                      <ArrowRight className="h-3 w-3 text-primary" />
                      <span>SBGR</span>
                    </CardDescription>
                  </CardHeader>
                  <CardFooter className="flex items-center gap-3 text-xs font-semibold text-muted-foreground">
                    <Badge size="sm" variant="secondary">
                      110 L
                    </Badge>
                    <div className="flex items-center gap-2">
                      <Inbox className="h-3 w-3 text-theme" />
                      3 notificações enviadas
                    </div>
                  </CardFooter>
                </Card>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}