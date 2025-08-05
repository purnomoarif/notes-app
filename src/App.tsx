import { Button } from '@/components/ui/button'
import { dataNotes } from '@/modules/note/data'
import { TrashIcon } from 'lucide-react'

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
                <Note
                  name={note.name}
                  isDone={note.isDone}
                  description={note.description}
                />
              </li>
            )
          })}
        </ul>
      </section>
    </div>
  )
}

export function Note({
  name,
  isDone,
  description,
}: {
  name: string
  isDone: boolean
  description?: string
}) {
  return (
    <div className="flex justify-between rounded-lg border-2 bg-gray-200 p-4">
      <div>
        <h2 className="text-lg font-medium">{name}</h2>

        {isDone && <p>Has been done ✅</p>}
        {!isDone && <p className="text-gray-600">Not done yet 📝</p>}

        {description && <p>{description}</p>}
      </div>

      <Button variant="destructive" size="icon-sm">
        <TrashIcon />
      </Button>
    </div>
  )
}
