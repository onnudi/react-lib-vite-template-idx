import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useIntersectionObserver } from 'usehooks-ts'

const Section = (props: { title: string }) => {
  const { isIntersecting, ref } = useIntersectionObserver({
    threshold: 1
  })

  console.log(`Render Section ${props.title}`, {
    isIntersecting,
  })

  return (
    <div
      ref={ref}
      style={{
        minHeight: '200px',
        display: 'flex',
        border: '1px dashed #000',
        fontSize: '2rem',
      }}
    >
      <div style={{ margin: 'auto' }}>{props.title}</div>
    </div>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
        {Array.from({ length: 5 }).map((_, index) => (
        <Section key={index + 1} title={`${index + 1}`} />
      ))}
    </div>
  )
}

export default App
