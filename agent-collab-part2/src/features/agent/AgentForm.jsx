import { useEffect, useState } from 'react'
import { CheckIcon } from '@radix-ui/react-icons'
import {
  Button, Flex, Select, Slider, TextArea, TextField, Text
} from '@radix-ui/themes'
import { useStore } from '@nanostores/react'
import { $agents } from '@/store/agents'
import { $selectedAgentId } from '@/store/agentForm'
import EmojiPicker from '@/components/EmojiPicker'


function AgentForm() {
  const agents = useStore($agents)
  const selectedAgentId = useStore($selectedAgentId)

  const [emoji, setEmoji] = useState('😀')
  const [title, setTitle] = useState('')
  const [role, setRole] = useState('')
  const [responseFormat, setResponseFormat] = useState('text')
  const [desiredResponse, setDesiredResponse] = useState('')
  const [temperature, setTemperature] = useState(0.70)

  const isEditMode = selectedAgentId && selectedAgentId !== 'new'

  useEffect(() => {
    if (!isEditMode) {
      setEmoji('😀')
      setTitle('')
      setRole('')
      setResponseFormat('text')
      setDesiredResponse('')
      setTemperature(0.70)
      return
    }

    const agent = agents.find(a => a.id === selectedAgentId)
    if (agent) {
      setEmoji(agent.emoji)
      setTitle(agent.title)
      setRole(agent.role)
      setResponseFormat(agent.response_format)
      setDesiredResponse(agent.desired_response)
      setTemperature(agent.temperature)
    }
  }, [selectedAgentId])

  const handleSubmit = () => {
    if (isEditMode) {
      const updatedAgents = agents.map(agent =>
        agent.id === selectedAgentId
          ? {
              ...agent,
              emoji,
              title,
              role,
              response_format: responseFormat,
              temperature,
              desired_response: desiredResponse,
            }
          : agent
      )
      $agents.set(updatedAgents)
    } else {
      const newAgent = {
        id: Math.random().toString(),
        emoji,
        title,
        role,
        response_format: responseFormat,
        temperature,
        desired_response: desiredResponse,
      }
      $agents.set([...agents, newAgent])
    }

    $selectedAgentId.set(null)
  }

  return (
    <Flex direction="column" justify="center" width="100%" gap="2">
      <Text>Emoji</Text>
      <TextField.Root value={emoji} onChange={(e) => setEmoji(e.target.value)} />


      <Text>Title</Text>
      <TextField.Root value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Agent title" />

      <Text>Role</Text>
      <TextField.Root value={role} onChange={(e) => setRole(e.target.value)} placeholder="Agent role" />

      <Text>Response Format</Text>
      <Select.Root defaultValue={responseFormat} onValueChange={(value) => setResponseFormat(value)}>
        <Select.Trigger />
        <Select.Content>
          <Select.Group>
            <Select.Item value="text">Texte</Select.Item>
            <Select.Item value="json">Json</Select.Item>
          </Select.Group>
        </Select.Content>
      </Select.Root>

      <Text>Desired Response</Text>
      <TextArea value={desiredResponse} onChange={(e) => setDesiredResponse(e.target.value)} placeholder="Desired response..." />

      <Text>Temperature</Text>
<Flex align="center" gap="3">
  <Slider
    color="blue"
    value={[temperature]}
    onValueChange={([value]) => setTemperature(value)}
    max={1}
    step={0.01}
    style={{ flex: 1 }}
  />
  <Text size="2">{temperature.toFixed(2)}</Text>
</Flex>

<Button
  type="button"
  onClick={handleSubmit}
  style={{ marginTop: '1rem', width: '30%' , display: Flex}}
>
  <CheckIcon /> Sauver
</Button>
    </Flex>
  )
}

export default AgentForm
