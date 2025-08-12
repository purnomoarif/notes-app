import { Button } from '@/components/ui/button'
import { Trash } from 'lucide-react'

import { dataNotes } from '@/modules/note/data'
import { useState } from 'react'

export function App() {
  const [notes, setNotes] = useState(dataNotes)

  const addNote = () => {
    const newNote = {
      id: notes.length + 1,
      name: 'New Note',
      isDone: true,
    }

    setNotes([...notes, newNote])
  }

  const removeNote = (id: number) => {
    const updatedNotes = notes.filter((note) => note.id !== id)
    setNotes(updatedNotes)
  }

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-xl space-y-10 bg-gray-300 p-10">
        <h1 className="text-3xl font-bold">Notes App</h1>

        <Button onClick={addNote}>Add Note</Button>

        <section>
          <ul className="space-y-2">
            {notes.map((note) => {
              return (
                <li key={note.id}>
                  <Notes name={note.name} isDone={note.isDone} />
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => removeNote(note.id)}
                  >
                    Remove
                  </Button>
                </li>
              )
            })}
          </ul>
        </section>
      </div>
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
        <Button variant="destructive" size="icon-sm">
          <Trash />
        </Button>
      </div>
    </div>
  )
}
