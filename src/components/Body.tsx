import "./body.css";

const Body = () => {
  return (
    <div className="container bg-dark p-2">
      <div className="mt-2 mb-2 row d-flex justify-content-center conteudo">
        <div className="col-md-1 text-center foto">
        <a href="#" target="_blank">
            <img
              className="images"
              src="../../public/linkedin.svg"
              alt="linkedin"
            />
          </a>
        </div>
        <div className="col-md-11 texto">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit qui, placeat tenetur veritatis non ipsa consequuntur libero nisi ut sequi eum temporibus, quisquam fugiat alias. Nisi atque possimus quibusdam ad?</p>
        </div>
      </div>

      <div className="mt-2 mb-2 row d-flex justify-content-center conteudo">
        <div className="col-md-1 text-center foto">
        <a href="#" target="_blank">
            <img
              className="images"
              src="../../public/github.svg"
              alt="linkedin"
            />
          </a>
        </div>
        <div className="col-md-11 texto">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit qui, placeat tenetur veritatis non ipsa consequuntur libero nisi ut sequi eum temporibus, quisquam fugiat alias. Nisi atque possimus quibusdam ad?</p>
        </div>
      </div>

      <div className="mt-2 mb-2 row d-flex justify-content-center conteudo">
        <div className="col-md-1 text-center foto">
        <a href="#" target="_blank">
            <img
              className="images"
              src="../../public/insta.svg"
              alt="linkedin"
            />
          </a>
        </div>
        <div className="col-md-11 texto">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit qui, placeat tenetur veritatis non ipsa consequuntur libero nisi ut sequi eum temporibus, quisquam fugiat alias. Nisi atque possimus quibusdam ad?</p>
        </div>
      </div>

      <div className="mt-2 mb-2 row d-flex justify-content-center conteudo">
        <div className="col-md-1 text-center foto">
        <a href="#" target="_blank">
            <img
              className="images"
              src="../../public/whatsapp.png"
              alt="linkedin"
            />
          </a>
        </div>
        <div className="col-md-11 texto">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit qui, placeat tenetur veritatis non ipsa consequuntur libero nisi ut sequi eum temporibus, quisquam fugiat alias. Nisi atque possimus quibusdam ad?</p>
        </div>
      </div>
    </div>
  );
};

export default Body;
