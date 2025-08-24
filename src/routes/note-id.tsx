import { useParams } from 'react-router'

export function NoteId() {
  let params = useParams()

  console.log(params)

  const id = params.id

  return (
    <div>
      <h1>Note: {id}</h1>
    </div>
  )
}
