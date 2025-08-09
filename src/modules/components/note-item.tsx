import { Button } from '@/components/ui/button'

export function NoteItem({ name, isDone }: { name: string; isDone: boolean }) {
  return (
    <div className="flex justify-between rounded-lg border-2 bg-gray-200 p-4">
      <div>
        <h2 className="text-xl font-semibold">
          {name} {isDone && <span>✅</span>}
        </h2>

        {!isDone && <h3 className="text-gray-600">Not done yet 📝</h3>}
      </div>

      <div className="flex gap-2">
        <Button variant="secondary" size="sm">
          View
        </Button>

        <Button variant="destructive" size="icon-sm">
          X
        </Button>
      </div>
    </div>
  )
}
