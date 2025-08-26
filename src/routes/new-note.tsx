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
import type { DataNote } from '@/modules/note/data'
import { Button } from '@/components/ui/button'
import { useNavigate } from 'react-router'

export function NewNote() {
  const navigate = useNavigate()

  const storedNotes = localStorage.getItem('notes')
  const notes = storedNotes ? (JSON.parse(storedNotes) as DataNote[]) : []

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
    localStorage.setItem('notes', JSON.stringify(updatedNotes))

    navigate(`/notes/${newNote.id}`)
  }

  return (
    <div>
      <h1>Create New Note</h1>
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
    </div>
  )
}
