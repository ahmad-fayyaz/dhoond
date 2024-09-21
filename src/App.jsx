import './App.css'
import Box from './components/Box'
import BoxWithForm from './components/BoxWithForm'

function App() {
  return (
    <div className="bg-black h-screen flex flex-col justify-center items-center">
      <div className="pb-6">
        <Box/>
      </div>
      <div className="p-4">
        <h1 className="font-bold text-8xl">Coming Soon!</h1>
      </div>
      <div className="pt-6">
        <BoxWithForm/>
      </div>
    </div>
  )
}

export default App
