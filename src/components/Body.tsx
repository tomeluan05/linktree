import "./body.css";

const Body = () => {
  return (
    <div className="container bg-dark p-2">
      <div className="row mt-1 mb-1 conteudo">
        <div className="col-md-5 text-center foto">
        <a href="https://www.linkedin.com/in/tome-luan/" target="_blank">
            <img
              className="images"
              src="../../public/linkedin.svg"
              alt="linkedin"
            />
          </a>
        </div>
        <div className="col-md-7 texto">
          <a href="https://www.linkedin.com/in/tome-luan/" target="_blank">
            <p>Faça conexão comigo no linkedIn para acompanhar o meu processo de evolução nessa jornada.</p>
          </a>
        </div>
      </div>

      <div className="mt-2 mb-2 row conteudo">
        <div className="col-md-5 text-center foto">
        <a href="https://github.com/tomeluan05" target="_blank">
            <img
              className="images"
              src="../../public/github.svg"
              alt="linkedin"
            />
          </a>
        </div>
        <div className="col-md-7 texto">
        <a href="https://github.com/tomeluan05" target="_blank">
          <p>Venha conhecer mais sobre os projetos que eu já desenvolvi, me siga no GITHUB.</p>
        </a>
        </div>
      </div>

      <div className="mt-2 mb-2 row conteudo">
        <div className="col-md-5 text-center foto">
        <a href="https://www.instagram.com/emot_naul/" target="_blank">
            <img
              className="images"
              src="../../public/insta.svg"
              alt="linkedin"
            />
          </a>
        </div>
        <div className="col-md-7 texto">
        <a href="https://www.instagram.com/emot_naul/" target="_blank">
          <p>Se quiser saber um pouco mais sobre mim, me siga também na minha rede social pessoal.</p>
        </a>
        </div>
      </div>

      <div className="mt-2 mb-2 row conteudo">
        <div className="col-md-5 text-center foto">
          <a href="https://api.whatsapp.com/send?phone=5581991518998&text=Olá Tomé Luan,%20estou%20interessado(a)%20nos%20seus%20serviços." target="_blank">
            <img
              className="images"
              src="../../public/whatsapp.png"
              alt="linkedin"
            />
          </a>
        </div>
        <div className="col-md-7 texto">
        <a href="https://api.whatsapp.com/send?phone=5581991518998&text=Olá Tomé Luan,%20estou%20interessado(a)%20nos%20seus%20serviços." target="_blank">
          <p>Caso deseje entrar em contato comigo, estou a disposição também pelo whatsapp.</p>
        </a>
        </div>
      </div>
    </div>
  );
};

export default Body;
