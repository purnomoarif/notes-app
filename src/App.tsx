export function App() {
  return (
    <div className="App">
      <h1>Notes App</h1>
      <button>Click Me</button>
      <Notes name="Day 01 Bearmentor" />
      <Notes name="Day 02 Bearmentor" />
      <Notes name="Day 03 Bearmentor" />
      <Notes name="Day 04 Bearmentor" />
      <Notes name="Day 05 Bearmentor" />
    </div>
  );
}

export function Notes({ name }: { name: string }) {
  return (
    <div>
      <h2>{name}</h2>
    </div>
  );
}
