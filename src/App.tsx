const dataNotes = [
  { id: 1, name: 'Day 1: Introduction', isDone: true },
  { id: 2, name: 'Day 2: UI/UX Design', isDone: true },
  { id: 3, name: 'Day 3', isDone: true },
  { id: 4, name: 'Day 4', isDone: true },
  { id: 5, name: 'Day 5', isDone: true },
  { id: 6, name: 'Day 6', isDone: true },
  { id: 7, name: 'Day 7', isDone: true },
  { id: 8, name: 'Day 8', isDone: true },
  { id: 9, name: 'Day 9', isDone: true },
  { id: 10, name: 'Day 10', isDone: true },
  { id: 11, name: 'Day 11', isDone: true },
  { id: 12, name: 'Day 12', isDone: true },
  { id: 13, name: 'Day 13', isDone: true },
  { id: 14, name: 'Day 14', isDone: true },
  { id: 15, name: 'Day 15', isDone: true },
  { id: 16, name: 'Day 16', isDone: true },
  { id: 17, name: 'Day 17', isDone: true },
  { id: 18, name: 'Day 18', isDone: true },
  { id: 19, name: 'Day 19', isDone: false },
]

export function App() {
  return (
    <div className="App">
      <h1>Notes App</h1>

      <ul>
        {dataNotes.map((note) => {
          return (
            <li key={note.id}>
              <Notes name={note.name} isDone={note.isDone} />
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export function Notes({ name, isDone }: { name: string; isDone: boolean }) {
  return (
    <div>
      <h2>
        {name} {isDone && <span>✅</span>}
      </h2>

      {!isDone && <h3>Not done yet 📝</h3>}
    </div>
  )
}
