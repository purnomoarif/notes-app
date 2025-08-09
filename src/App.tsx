import { Button } from '@/components/ui/button'
import { dataNotes } from '@/modules/note/data'
import { NoteItem } from '@/modules/components/note-item'

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
                <NoteItem name={note.name} isDone={note.isDone} />
              </li>
            )
          })}
        </ul>
      </section>
    </div>
  )
}
