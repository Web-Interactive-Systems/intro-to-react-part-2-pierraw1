import { useStore } from '@nanostores/react'
import { $selectedAgentId } from '@/store/agentForm'
import AgentForm from './AgentForm'
import AgentList from './AgentList'
import { Flex, Separator,Box } from '@radix-ui/themes'


function Agent() {
  const selectedAgentId = useStore($selectedAgentId)

  return (
    <Flex direction="row" gap="4" width="100%" height="100%" p="1">
      <Box style={{ flex: selectedAgentId ? '1' : '1 0 100%' }}>
        <AgentList />
      </Box>
      {selectedAgentId && (
        <>
          <Separator style={{ height: '100%', width: 1 }} size="4" orientation="vertical" />
          <Box style={{ flex: '1' }}>
            <AgentForm />
          </Box>
        </>
      )}
    </Flex>
  )
}

export default Agent
