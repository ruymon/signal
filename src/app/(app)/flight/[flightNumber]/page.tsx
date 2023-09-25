import { Separator } from '@/components/ui/separator'

export default async function FlightsPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-1.5">
        <h1 className="text-3xl font-bold space-x-1">
          <span>SMB9654</span>
          <span className='text-base font-medium text-muted-foreground'>(M1 9654)</span>
        </h1>
        <span className="text-muted-foreground">
          Gerencie os eventos desse voo.
        </span>
      </div>
      <Separator />


    </div>
  )
}