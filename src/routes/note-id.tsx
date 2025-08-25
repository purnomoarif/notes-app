import type { DataNote } from '@/modules/note/data'
import { useParams } from 'react-router'

export function NoteId() {
  let params = useParams()

  console.log(params)

  const id = Number(params.id)

  const storedNotes = localStorage.getItem('notes')
  const notes = storedNotes ? (JSON.parse(storedNotes) as DataNote[]) : []

  const note = notes.find((note) => note.id === id)
  console.log(note)

  if (!note) {
    return (
      <div>
        <p>Sorry, we couldn't find the note you're looking for.</p>
      </div>
    )
  }

  return (
    <div>
      <h1> {note.name}</h1>
      <p> {note.description}</p>
    </div>
  )
}
