export function App() {
  return (
    <div className="App">
      <h1>Notes App</h1>
      <button>Click Me</button>
      <Notes name="Day 01 Bearmentor" isIntroduction={true} />
      <Notes name="Day 02 Bearmentor" isIntroduction={false} />
      <Notes name="Day 03 Bearmentor" isIntroduction={false} />
      <Notes name="Day 04 Bearmentor" isIntroduction={false} />
      <Notes name="Day 05 Bearmentor" isIntroduction={false} />
    </div>
  );
}

export function Notes({
  name,
  isIntroduction,
}: {
  name: string;
  isIntroduction: boolean;
}) {
  return (
    <div>
      <h2>{name} 🔰</h2>
      {isIntroduction && <h3>Introduction</h3>}
    </div>
  );
}
