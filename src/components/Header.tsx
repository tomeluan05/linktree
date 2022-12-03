import "./header.css";

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
            className="imagem-tome-luan"
            src="../../public/tome_luan.jpeg"
            alt="Tomé Luan"
            width={120}
          />
          <h3 className="title">{title}</h3>
          <h4 className="subtitle">{subtitle}</h4>
          <p className="apresentacao">Estudante Autodidata na área da tecnologia, buscando ser um desenvolvedor full stack, iniciando pela área do front end.</p><span><img className="boneco-programador" src="../../public/pessoa.png" alt="boneco-programador" width={40} /></span>
        </div>
        
      </div>
    </div>
  );
}

export default Header;
