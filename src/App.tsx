import './App.css'
import Header from './components/Header/Header'
import Body from './components/Body/Body'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className='principal'>
      <Header title={'Tomé Luan Jorge Coelho'} subtitle={'Desenvolvedor Júnior - Full Stack'} />
      <Body/>
      <Footer/>
    </div>
  )
}

export default App
