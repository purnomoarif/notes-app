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

import { dataNotes, type DataNote } from '@/modules/note/data'
import { useEffect, useState } from 'react'
import { Link } from 'react-router'

export function App() {
  const [notes, setNotes] = useState(() => {
    const storedNotes = localStorage.getItem('notes')
    return storedNotes ? (JSON.parse(storedNotes) as DataNote[]) : dataNotes
  })

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes])

  const removeNote = (id: number) => {
    const updatedNotes = notes.filter((note) => note.id !== id)
    setNotes(updatedNotes)
  }

  const handleAddNote = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const name = formData.get('name')?.toString()
    const description = formData.get('description')?.toString()
    if (!name) return
    if (!description) return

    const newNote: DataNote = {
      id: notes[notes.length - 1]?.id + 1 || 1,
      name,
      description,
      isDone: false,
      createdDate: new Date(),
    }

    const updatedNotes = [...notes, newNote]
    setNotes(updatedNotes)
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
                onSubmit={handleAddNote}
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
                    description={note.description ?? ''}
                    isDone={note.isDone}
                    onRemove={removeNote}
                    createdDate={note.createdDate}
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
  description: string
  isDone: boolean
  onRemove: (id: number) => void
  createdDate?: string | Date
}

export function Notes({
  id,
  name,
  description,
  isDone,
  onRemove,
  createdDate,
}: NotesProps) {
  return (
    <div className="flex justify-between rounded-lg border-2 bg-gray-200 p-4">
      <div>
        <h2 className="text-xl font-semibold">
          {name} {isDone && <span>✅</span>}
        </h2>

        <p>{description}</p>
        {createdDate && (
          <p className="text-xs text-gray-500">
            {new Date(createdDate).toLocaleDateString('en-US', {
              day: 'numeric',
              weekday: 'short',
              month: 'long',
              year: 'numeric',
            })}
          </p>
        )}
      </div>

      <div className="flex gap-2">
        <Button asChild variant="outline" size="sm">
          <Link to={`/notes/${id}`}>View</Link>
        </Button>
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
