import React from "react";
import { useNavigate } from "react-router-dom";
import { Simbolos, Comu, Amizades } from "./imagens";
import BusqueComunidades from "./componentes/busqueComunidades";
import { useState } from "react";

function Comunidades() {
  const navigate = useNavigate();

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const puxabarra = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
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
      <p className="Titulo bA">Comunidades</p>
      <div className="mC mCC">
        <div className="head">
          <spam className="Titulo ttmC ttmCC">Minhas comunidades:</spam>
        </div>
        <ul className="mCCCarrossel" id="mC">
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

      <div className="mC">
        <div className="head">
          <spam className="Titulo ttmC ttmCC">Sugestões de comunidade</spam>
          <p className="sub">Explore novas comunidades</p>
        </div>
        <ul className="mCCCarrossel" id="mC">
          <li>
            <img src={Comu.OnFire} alt="Onfire" className="comunidade" />
          </li>
          <li>
            <img src={Comu.Sk8} alt="sk8" className="comunidade" />
          </li>
          <li>
            <img src={Comu.Pedalada} alt="pedalada" className="comunidade" />
          </li>
        </ul>
      </div>

      <div className="mC amzmC">
        <div className="head">
          <spam className="Titulo ttmC ttmCC">Amizades</spam>
          <p className="sub">Encontre novas pessoas</p>
        </div>
        <ul className="mCCCarrossel amg" id="mC">
          <li>
            <img src={Amizades.ThiagoM} alt="thiago" className="amizade" />
          </li>
          <li>
            <img src={Amizades.FelipeM} alt="felipe" className="amizade" />
          </li>
          <li>
            <img src={Amizades.CamilaB} alt="camila" className="amizade" />
          </li>
          <li>
            <img src={Amizades.ThomasG} alt="thomas" className="amizade" />
          </li>
          <li>
            <img src={Amizades.RodrigoL} alt="rodrigo" className="amizade" />
          </li>
          <li>
            <img src={Amizades.MyriamS} alt="myriam" className="amizade" />
          </li>
        </ul>
      </div>
      <BusqueComunidades classe="containerBusca cBbA am" />

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

export default Comunidades;
