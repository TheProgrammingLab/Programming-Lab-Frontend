import './App.css'
import "./styles/_fontface.css" // Fonts import
import { Layout } from "./_layout"
import { MessageQueue } from './components/ui'

function App() {

  return (
    <main className='app'>
      <Layout />
      <MessageQueue />
    </main>
  )
}

export default App
