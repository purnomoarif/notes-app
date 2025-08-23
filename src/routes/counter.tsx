import { Button } from '@/components/ui/button'
import { useEffect, useState } from 'react'

export function Counter() {
  const [count, setCount] = useState(() => {
    const storedCount = localStorage.getItem('count')
    return storedCount ? Number(storedCount) : 0
  })

  useEffect(() => {
    localStorage.setItem('count', String(count))
  }, [count])

  return (
    <div>
      <p>Count: {count}</p>

      <Button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increment
      </Button>
    </div>
  )
}
