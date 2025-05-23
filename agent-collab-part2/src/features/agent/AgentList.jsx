import { $agents } from "@/store/agents"
import { useStore } from "@nanostores/react"
import { Pencil1Icon, TrashIcon } from "@radix-ui/react-icons"
import { Flex, Box, Card, Text, Button } from "@radix-ui/themes"
import { $selectedAgentId } from "@/store/agentForm"

function AgentList() {
  const agents = useStore($agents)
  const selectedAgentId = useStore($selectedAgentId)

  const handleDelete = (id) => {
    const updatedAgents = agents.filter(agent => agent.id !== id)
    $agents.set(updatedAgents)
    if (selectedAgentId === id) {
      $selectedAgentId.set(null)
    }
  }

  const handleEdit = (id) => {
    $selectedAgentId.set(id)
  }

  const handleAdd = () => {
    $selectedAgentId.set('new')
  }

  return (
    <Flex direction="row" wrap="wrap" gap="2" align="start">
      {/* Bouton Ajouter en card */}
      <Box width="240px">
        <Card style={{ height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Button onClick={handleAdd}>+ Ajouter</Button>
        </Card>
      </Box>

      {/* Cartes agents */}
      {agents.map((agent) => {
        const isSelected = agent.id === selectedAgentId

        return (
          <Box key={agent.id} width="240px">
            <Card style={{ background: isSelected ? 'var(--accent-a3)' : '', minHeight: '100px' }}>
              <Flex gap="3" align="center">
                <span style={{ fontSize: '1.5rem' }}>{agent.emoji}</span>
                <Box>
                  <Text as="div" size="2" weight="bold">{agent.title}</Text>
                  <Text as="div" size="2" color="gray">{agent.role}</Text>
                </Box>
              </Flex>

              <Flex direction="row" justify="end" gap="2" mt="2">
                <Pencil1Icon onClick={() => handleEdit(agent.id)} style={{ cursor: 'pointer' }} />
                <TrashIcon color="crimson" onClick={() => handleDelete(agent.id)} style={{ cursor: 'pointer' }} />
              </Flex>
            </Card>
          </Box>
        )
      })}
    </Flex>
  )
}

export default AgentList
