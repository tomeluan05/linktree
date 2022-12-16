import styles from "../../styles/Header/styles.module.css";

type Props = {
  title: string;
  subtitle: string;
};

function Header({ title, subtitle }: Props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 d-flex flex-column align-items-center bg-dark pt-3">
          <img
            className={`${styles.imagem_tomeluan}`}
            src="/tome_luan.jpeg"
            alt="Tomé Luan"
            width={120}
          />
          <h3 className={styles.title}>{title}</h3>
          <h4 className={styles.subtitle}>{subtitle}</h4>
          <p className={styles.apresentacao}>Estudante Autodidata na área da tecnologia, buscando ser um desenvolvedor full stack, iniciando pela área do front end.</p><span><img className={styles.boneco_programador} src="/pessoa.png" alt="boneco-programador" width={40} /></span>
        </div>
        
      </div>
    </div>
  );
}

export default Header;
