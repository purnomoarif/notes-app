export type DataNote = {
  id: number
  name: string
  isDone: boolean
  description?: string
  createdDate?: string | Date
}

export const dataNotes: DataNote[] = [
  {
    id: 1,
    name: 'Month 01: Introduction',
    isDone: true,
    description: 'Frontend HTML & CSS',
    createdDate: new Date(),
  },
  {
    id: 2,
    name: 'Month 02: UI/UX Design',
    isDone: true,
    description: 'Frontend JavaScript',
    createdDate: new Date(),
  },
  {
    id: 3,
    name: 'Month 03: Code Editor',
    isDone: true,
    description: 'Frontend React',
    createdDate: new Date(),
  },
]
