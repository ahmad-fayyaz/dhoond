import './App.css'
import Box from './components/Box'
import BoxWithForm from './components/BoxWithForm'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-black h-screen flex flex-col justify-center items-center">
      <div className="pb-6">
        <Box/>
      </div>
      <div className="p-4">
        <h1 className="text-center font-bold text-8xl">Coming Soon!</h1>
      </div>
      <div className="pt-6 pb-24 mx-3">
        <BoxWithForm/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default App
