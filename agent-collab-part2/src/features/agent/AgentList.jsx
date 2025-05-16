import { $agents } from "@/store/agents"
import { useStore } from "@nanostores/react"
import { Pencil1Icon, TrashIcon } from "@radix-ui/react-icons"
import { Flex, Box, Card, Text } from "@radix-ui/themes"


function AgentList(){
    const agents = useStore($agents)

  return (
    <Flex
      direction='row'
      gap='2'>
      {agents.map((agent) => (
        <Flex key={`message-${agent.id}`}>
            <Box maxWidth="300px">
            <Card>
                <Flex gap="3" align="center">
			    {agent.emoji}
			    <Box>
				    <Text as="div" size="2" weight="bold">
                    {agent.title}
				    </Text>
				    <Text as="div" size="2" color="gray">
                    {agent.role}
				    </Text>
			    </Box>
                
		        </Flex>

                <Flex direction="row" justify='end'>
                    <Pencil1Icon />
                    <TrashIcon color="crimson"/>
                </Flex>

            </Card>
            </Box>
        </Flex>

      ))}
    </Flex>
  )
}

export default AgentList
