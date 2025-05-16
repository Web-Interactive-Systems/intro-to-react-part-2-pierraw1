import { useState } from 'react'
import { CheckIcon } from '@radix-ui/react-icons'
import { Button, Flex, Select, Slider, TextArea, TextField, Text } from '@radix-ui/themes'

function AgentForm() {
  const [temperature, setTemperature] = useState(0.70)

  return (
    <Flex direction='column' justify='center' width='100%' gap="2">
      <Text>Emoji</Text>

      <Text>Title</Text>
      <TextField.Root placeholder='Agent title' />

      <Text>Role</Text>
      <TextField.Root placeholder='Agent role' />

      <Text>Response Format</Text>
      <Select.Root defaultValue='text'>
        <Select.Trigger />
        <Select.Content>
          <Select.Group>
            <Select.Item value='text'>Texte</Select.Item>
            <Select.Item value='json'>Json</Select.Item>
          </Select.Group>
        </Select.Content>
      </Select.Root>

      <Text>Desired Response</Text>
      <TextArea placeholder='Desired response...' />

      <Text>Temperature </Text>
      
      <Slider
        value={[temperature]}
        onValueChange={([value]) => setTemperature(value)}
        max={1}
        step={0.01}
      />
      <Text>{temperature.toFixed(2)}</Text>

      <Button type="submit">
        <CheckIcon /> Sauver
      </Button>
    </Flex>
  )
}

export default AgentForm
