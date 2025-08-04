const dataNotes = [
  { id: 1, name: 'Day 01: Introduction', isDone: true },
  { id: 2, name: 'Day 02: UI/UX Design', isDone: true },
  { id: 3, name: 'Day 03: Code Editor', isDone: true },
  { id: 4, name: 'Day 4: Terminal, Github', isDone: true },
  { id: 5, name: 'Day 5: HTML, Domain', isDone: true },
  { id: 6, name: 'Day 6: CSS Layout', isDone: true },
  { id: 7, name: 'Day 7: Framework, Tailwind CSS', isDone: true },
  {
    id: 8,
    name: 'Day 8: Website Project Presentation and Evaluation',
    isDone: true,
  },

  { id: 9, name: 'Day 9: Algorithm, Data Structure', isDone: true },
  {
    id: 10,
    name: 'Day 10: JavaScript, Console, Variables, Types',
    isDone: true,
  },
  { id: 11, name: 'Day 11: Loops, Function', isDone: true },
  { id: 12, name: 'Day 12: Globals/Properties/Methods', isDone: true },
  {
    id: 13,
    name: 'Day 13: Storage, Async, Web API, Data Fetching',
    isDone: true,
  },
  { id: 14, name: 'Day 14: DOM (Document Object Model)', isDone: true },
  { id: 15, name: 'Day 15: OOP', isDone: true },
  { id: 16, name: 'Day 16: Project Presentation and Evaluation', isDone: true },
  {
    id: 17,
    name: 'Day 17: JavaScript Modules, Runtime, Package Manager, Bundler, TypeScript',
    isDone: true,
  },
  {
    id: 18,
    name: 'Day 18: JavaScript Library/Framework, React, Components, Props',
    isDone: true,
  },
  { id: 19, name: 'Day 19: React Styling, React UI Components', isDone: true },
  { id: 20, name: 'Day 20: React Hooks, React State', isDone: false },
]

export function App() {
  return (
    <div className="flex justify-center">
      <section className="w-full max-w-xl space-y-10 p-10">
        <h1 className="text-3xl font-bold">Notes App</h1>

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
    <div className="rounded-lg border-2 bg-gray-200 p-4">
      <h2 className="text-xl font-semibold">
        {name} {isDone && <span>✅</span>}
      </h2>

      {!isDone && <h3 className="text-gray-600">Not done yet 📝</h3>}
    </div>
  )
}
