import { Simbolos, Comu } from "./imagens";
import Proximo from "./componentes/proximosEventos";
import Sugestoes from "./componentes/sugestoes";
import BusqueComunidades from "./componentes/busqueComunidades";
import Propaganda from "./componentes/propagandas";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

function Home() {
  const navigate = useNavigate();
  var x = 0;
  function vai(setor, offset) {
    const carrossel = document.getElementById(setor);
    if (carrossel) {
      if (setor === "pe") {
        carrossel.style.left = `-${offset}px`;
      } else if (setor === "mC") {
        carrossel.style.marginLeft = `-700px`;
      } else {
        if (x < 3900) {
          x += offset;
          carrossel.style.left = `-${x}px`;
        } else {
          x = 4400;
          carrossel.style.left = "-4400px";
        }
      }
    }
  }

  function volta(setor, offset) {
    const carrossel = document.getElementById(setor);
    if (carrossel) {
      if (setor === "pe") {
        carrossel.style.left = `0px`;
      } else if (setor === "mC") {
        carrossel.style.marginLeft = `0px`;
      } else {
        if (x !== 4400) {
          x -= offset;
          carrossel.style.left = `-${x}px`;
        } else {
          x = 3900;
          carrossel.style.left = `-${x}px`;
        }
      }
    }
  }

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const puxabarra = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="Home">
      <header>
        <img
          src={Simbolos.Menu}
          alt="imagem"
          className="menu"
          onClick={puxabarra}
        />
        <img src={Simbolos.Logo} alt="imagem" className="logo" />
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
      <Proximo vai={vai} volta={volta} />
      <Sugestoes vai={vai} volta={volta} />
      <BusqueComunidades classe="containerBusca" />
      <Propaganda />
      <div className="mC">
        <div className="head">
          <spam
            className="Titulo ttmC"
            onClick={() => navigate("/comunidades")}
          >
            Minhas comunidades:
          </spam>
          <div className="botoes">
            <button className="bt" onClick={() => volta("mC")}>
              ←
            </button>
            <button className="bt" onClick={() => vai("mC", 600)}>
              →
            </button>
          </div>
        </div>
        <ul className="mCCarrossel" id="mC">
          <li>
            <img
              src={Comu.CorridaNoturna}
              alt="corrida"
              className="comunidade"
            />
          </li>
          <li>
            <img
              src={Comu.BaskaDeRua}
              alt="BaskadeRua"
              className="comunidade"
            />
          </li>
          <li>
            <img src={Comu.Altinha} alt="Altinha" className="comunidade" />
          </li>
          <li>
            <img src={Comu.Pedal} alt="Pedal" className="comunidade" />
          </li>
          <li>
            <img src={Comu.HotYoga} alt="HotYoga" className="comunidade" />
          </li>
          <li>
            <img src={Comu.Pesquise} alt="Pesquise" className="comunidade" />
          </li>
        </ul>
      </div>
      <footer>
        <div className="headDofoot">
          <img src={Simbolos.LogoFoot} alt="Logo"></img>
          <div className="sobres">
            <div className="SobreDiv">
              <p onClick={() => navigate("/sobre")}>Sobre</p>
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

export default Home;
