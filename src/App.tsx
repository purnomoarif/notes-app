import { Button } from '@/components/ui/button'
import { dataNotes } from '@/modules/note/data'

export function App() {
  return (
    <div className="flex justify-center">
      <section className="w-full max-w-xl space-y-10 p-10">
        <h1 className="text-3xl font-bold">Notes App</h1>

        <Button>Add Note</Button>

        <ul className="space-y-2">
          {dataNotes.map((note) => {
            return (
              <li key={note.id}>
                <Notes name={note.name} isDone={note.isDone} />
              </li>
            )
          })}
        </ul>
      </section>
    </div>
  )
}

export function Notes({ name, isDone }: { name: string; isDone: boolean }) {
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
