import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Trash } from 'lucide-react'

import { dataNotes } from '@/modules/note/data'
import { useState } from 'react'

export function App() {
  const [notes, setNotes] = useState(dataNotes)

  const removeNote = (id: number) => {
    const updatedNotes = notes.filter((note) => note.id !== id)
    setNotes(updatedNotes)
  }

  const handleAddName = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log('Add name')
  }

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-xl space-y-10 bg-gray-300 p-10">
        <h1 className="text-3xl font-bold">Notes App</h1>

        <section className="mt-8 max-w-md">
          <Card>
            <CardHeader>
              <CardTitle>Add Note</CardTitle>
              <CardDescription>
                Fill in the details below to add a new note.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form
                onSubmit={handleAddName}
                method="post"
                className="flex flex-col gap-4"
              >
                <div className="flex flex-col gap-2">
                  <Label htmlFor="note-name">Note Name</Label>
                  <Input
                    id="note-name"
                    name="name"
                    placeholder="Note name"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="note-description">Description</Label>
                  <Textarea
                    id="note-description"
                    name="description"
                    placeholder="Note description"
                    required
                  />
                </div>
                <Button type="submit" className="self-end">
                  Add Note
                </Button>
              </form>
            </CardContent>
          </Card>
        </section>

        <section>
          <ul className="space-y-2">
            {notes.map((note) => {
              return (
                <li key={note.id}>
                  <Notes
                    id={note.id}
                    name={note.name}
                    isDone={note.isDone}
                    onRemove={removeNote}
                  />
                </li>
              )
            })}
          </ul>
        </section>
      </div>
    </div>
  )
}

interface NotesProps {
  id: number
  name: string
  isDone: boolean
  onRemove: (id: number) => void
}

export function Notes({ id, name, isDone, onRemove }: NotesProps) {
  return (
    <div className="flex justify-between rounded-lg border-2 bg-gray-200 p-4">
      <div>
        <h2 className="text-xl font-semibold">
          {name} {isDone && <span>✅</span>}
        </h2>

        {!isDone && <h3 className="text-gray-600">Not done yet 📝</h3>}
      </div>

      <div className="flex gap-2">
        <Button
          variant="destructive"
          size="icon-sm"
          onClick={() => onRemove(id)}
        >
          <Trash />
        </Button>
      </div>
    </div>
  )
}
