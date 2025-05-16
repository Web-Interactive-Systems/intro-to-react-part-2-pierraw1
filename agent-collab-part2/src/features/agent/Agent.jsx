import { Flex } from '@radix-ui/themes'
import AgentForm from './AgentForm'
import AgentList from './AgentList'
import { Separator } from '@radix-ui/themes/dist/cjs/components/context-menu'

function Agent() {
  return (
    <Flex
      direction='row'
      gap='4'
      width='100%'
      height='100%'
      p='1'>
      
      <AgentList />
      <Separator style={{height: '100%', width: 1}} size="4" orientation="vertical" />
      <AgentForm />
    </Flex>
  )
}

export default Agent