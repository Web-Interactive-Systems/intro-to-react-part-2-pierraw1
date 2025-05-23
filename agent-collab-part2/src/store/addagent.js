import { atom } from 'nanostores'

export const $addagent = atom([
  {
    id: Math.random().toString(),
    emoji: '😀',
    title: 'Agent 1',
    role: 'your are a wonderful writer',
    response_format: 'text',
    temperature: 0.1,
    desired_response: 'a draft of scifi writing',
  }
])

export const addMessage = (msg) => {
  // get current messages
  const msgs = $messages.get()
  // add msg to the messages
  $messages.set([...msgs, msg])
}