import { Flex, Separator, Text } from '@radix-ui/themes'

export function Footer() {
  return (
    <Flex
      style={{ height: 18 }}
      direction='column'
      justify='center'
      align='center'>
      <Separator
        size='1'
        orientation='horizontal'
        style={{
          width: '90%',
        }}
      />
      <Flex
        justify='center'
        width='100%'
        align='center'
        gap='3'
        px='3'
        py='3'>
        <Text size='1'>AgentCollab</Text>
      </Flex>
    </Flex>
  )
}
