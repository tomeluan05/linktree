import styles from './styles/App/styles.module.css'
import Header from './pages/Header'
import Body from './pages/Body'
import Footer from './pages/Footer'

function App() {
  return (
    <div className={styles.principal}>
      <Header title={'Tomé Luan Jorge Coelho'} subtitle={'Desenvolvedor - Full Stack'} />
      <Body/>
      <Footer/>
    </div>
  )
}

export default App
