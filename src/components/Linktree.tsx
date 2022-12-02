import "./linktree.css";

function Linktree() {
  return (
    <div className="container">
      <div className="row">
          <div className="col-md-12 d-flex flex-column align-items-center bg-dark pt-4">
            <img
              className="imagem-tome-luan"
              src="../../public/tome_luan.jpeg"
              alt="Tomé Luan"
              width={120}
            />
            <h4>Tomé Luan Jorge Coelho</h4>
          </div>
      </div>
    </div>
  );
}

export default Linktree;
