import { marked } from 'marked'
import { Text } from '@radix-ui/themes'
import { styled } from '@/lib/stitches'

marked.setOptions({
  gfm: true,
  breaks: true,
})

const MdContent = styled(Text, {
  width: '100%',
  br: '$100',
  fontSize: '1rem',
  lineHeight: 1.5,
  margin: '0 auto',
  h1: {
    fontSize: '1.3rem',
  },
  h2: {
    fontSize: '1.2rem',
  },
  '> *': { marginTop: '0.6em', px: '0.2em' },
  ul: { padding: '0 1.1rem' },
  ol: { padding: '0 1.6rem' },
  'h1,  h2,  h3,  h4,  h5,  h6': {
    marginTop: '0.6em',
    lineHeight: 1.1,
  },
  code: {
    backgroundColor: 'rgba(#616161, 0.1)',
    color: '#616161',
  },
  pre: {
    background: '#0D0D0D',
    color: '#FFF',
    fontFamily: "'JetBrainsMono', monospace",
    padding: '0.75rem 1rem',
    borderRadius: '0.5rem',
    whiteSpace: 'pre-wrap',
    code: {
      color: 'inherit',
      padding: '0',
      background: 'none',
      fontSize: '0.8rem',
    },
  },
})

export function Markdown({ ref, content }) {
  return (
    <MdContent
      ref={ref}
      dangerouslySetInnerHTML={{
        __html: '' + marked.parse(content || ''),
      }}
    />
  )
}
