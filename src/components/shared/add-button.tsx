import { Button } from '@/components/ui/button'

export function AddButton() {
  function handleClick() {
    console.log('Added!')
  }

  return <Button onClick={handleClick}>Add Thing</Button>
}
