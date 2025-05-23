import { atom } from 'nanostores'
import {SYMBOLS} from '@/utils/emojis'

export const $agents = atom([
    {
        id: Math.random().toString(),
        emoji: '😀',
        title: 'Agent 1',
        role: 'your are a wonderful writer',
        response_format: 'text',
        temperature: 0.1,
        desired_response: 'a draft of scifi writing',
      },
      {
        id: Math.random().toString(),
        emoji: '😅',
        title: 'Agent 5',
        role: 'your are cool',
        response_format: 'text',
        temperature: 0.1,
        desired_response: 'a draft of scifi writing',
      },
      {
        id: Math.random().toString(),
        emoji: '😁',
        title: 'Agent 9',
        role: 'your are super',
        response_format: 'text',
        temperature: 0.1,
        desired_response: 'a draft of scifi writing',
      }
  ])

