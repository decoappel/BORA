import { Simbolos, Sobreimg } from "./imagens";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Sobre() {
  const navigate = useNavigate();

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const puxabarra = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="Sobre">
      <header>
        <img
          src={Simbolos.Menu}
          alt="imagem"
          className="menu"
          onClick={puxabarra}
        />
        <img
          src={Simbolos.Logo}
          alt="imagem"
          className="logo"
          onClick={() => navigate("/")}
        />
        <div className="busca">
          <img src={Simbolos.Lupa} alt="imagem" className="lupa" />
          <input
            type="text"
            placeholder="Pesquise uma experiência, pessoa ou lugar..."
          />
        </div>
        <img src={Simbolos.Like} alt="imagem" className="like" />
        <img src={Simbolos.Notif} alt="imagem" className="notif" />
        <img src={Simbolos.Config} alt="imagem" className="config" />
        <img src={Simbolos.Perfil} alt="imagem" className="perfil" />
      </header>
      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <div className="head">
          <img src={Simbolos.Logonobg} alt="imagem" className="logo" />
          <img
            src={Simbolos.Setaesquerda}
            alt="setaesquerda"
            className="setaesquerda"
            onClick={puxabarra}
          />
        </div>
        <ul>
          <li onClick={puxabarra}>Eventos</li>
          <li onClick={() => navigate("/comunidades")}>Comunidades</li>
          <li onClick={() => navigate("/buscaavancada")}>Busca</li>
          <li onClick={() => navigate("/sobre")}>Contato</li>
        </ul>
      </div>
      <p className="Titulo">Sobre</p>
      <img
        src={Sobreimg.QuemSomos}
        alt="quemsomos"
        className="imagemsobre"
      ></img>
      <img src={Sobreimg.Contato} alt="Contato" className="imagemsobre"></img>
      <img
        src={Sobreimg.Parcerias}
        alt="Parcerias"
        className="imagemsobre fundobranco"
      ></img>
      <img
        src={Sobreimg.Patrocinio}
        alt="Patrocinio"
        className="imagemsobre fundobranco"
      ></img>

      <footer>
        <div className="headDofoot">
          <img src={Simbolos.LogoFoot} alt="Logo"></img>
          <div className="sobres">
            <div className="SobreDiv">
              <p>Sobre</p>
              <ul>
                <li>Quem somos</li>
                <li>Contato</li>
                <li>Parcerias</li>
                <li>Patrocínio</li>
              </ul>
            </div>
            <div className="SobreDiv">
              <p>Comunidade</p>
              <ul>
                <li>Eventos</li>
                <li>Blog</li>
                <li>Podcast</li>
                <li>Convide um amigo</li>
              </ul>
            </div>
            <div className="SobreDiv">
              <p>Redes Sociais</p>
              <ul>
                <li>Discord</li>
                <li>Instagram</li>
                <li>Twitter</li>
                <li>Facebook</li>
              </ul>
            </div>
          </div>
        </div>
        <hr />
        <div className="footDofoot">
          <p>Política de Privacidade</p>
          <p>Termos & Condições</p>
        </div>
      </footer>
    </div>
  );
}

export default Sobre;
