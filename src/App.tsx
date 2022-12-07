import styles from './styles/App/styles.module.css'
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'

function App() {
  return (
    <div className={styles.principal}>
      <Header title={'Tomé Luan Jorge Coelho'} subtitle={'Desenvolvedor Júnior - Full Stack'} />
      <Body/>
      <Footer/>
    </div>
  )
}

export default App
