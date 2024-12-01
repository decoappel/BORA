import React from "react";
import { useNavigate } from "react-router-dom";
import { Simbolos, Eventos } from "./imagens";
import BusqueComunidades from "./componentes/busqueComunidades";
import { useState } from "react";

function BuscaAvancada() {
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
      <p className="Titulo bA">Busca Avançada</p>
      <BusqueComunidades classe="containerBusca cBbA" />
      <p className="Titulo bA">Eventos</p>
      <div className="head ebA">
        <p className="por">Por distância</p>
        <p className="cat">
          3km
          <img src={Simbolos.Seta} alt="seta" />
        </p>
      </div>
      <ul className="pe_carrossel crbA">
        <li>
          <div className="evento">
            <img
              src={Simbolos.LikeDislike}
              alt="likeDislike"
              className="likeDislike"
            ></img>
            <img src={Eventos.Crossfit} alt="sparring" className="fotoEvento" />
            <p className="tituloEvento ttsparring">Circuito de Crossfit</p>
            <p className="dataEvento dtsparring">15/12 19:00</p>
            <ul className="detalhesEvento detsparring ">
              <br></br>
              <li>1 km</li>
              <li>Intermediário</li>
              <li>Academia de Crossfit</li>
            </ul>
            <p className="localEvento lcsparring lcsimu">
              <img src={Simbolos.Pin} alt="pin" className="pin" />
              Crossfit Higienópolis
            </p>
            <div className="botoesEvento btsparring btsimu">
              <p className="jaInscrito bora">Bora!</p>
              <p className="convideAmigos">
                Convide<br></br> + Amigos
              </p>
            </div>
          </div>
        </li>
        <li>
          <div className="evento">
            <img
              src={Simbolos.LikeDislike}
              alt="likeDislike"
              className="likeDislike"
            ></img>
            <img src={Eventos.Skate} alt="skate" className="fotoEvento" />
            <p className="tituloEvento ttskate">
              Game of S.K.A.T.E Praça Roosvelt
            </p>
            <p className="dataEvento dtskate">08/12 16:30</p>
            <ul className="detalhesEvento detskate">
              <br></br>
              <li>2 km</li>
              <li>Intermediário</li>
              <li>Urbano</li>
            </ul>
            <p className="localEvento lcskate">
              <img src={Simbolos.Pin} alt="pin" className="pin" />
              Elevado Presidente João Goulart
            </p>
            <p className="amigosEvento agskate">Myrian S. vai!</p>
            <div className="botoesEvento btskate">
              <p className="jaInscrito bora">Bora!</p>
              <p className="convideAmigos">
                Convide<br></br> + Amigos
              </p>
            </div>
          </div>
        </li>
        <li>
          <div className="evento">
            <img
              src={Simbolos.LikeDislike}
              alt="likeDislike"
              className="likeDislike"
            ></img>
            <img src={Eventos.Bike} alt="bike" className="fotoEvento"></img>
            <p className="tituloEvento">Bike no Minhocão com o Dj Alma</p>
            <p className="dataEvento">07/12 13:00</p>
            <ul className="detalhesEvento">
              <li>3 km</li>
              <li>Iniciante</li>
              <li>Urbano</li>
            </ul>
            <p className="localEvento">
              <img src={Simbolos.Pin} alt="pin" className="pin" />
              Elevado Presidente João Goulart
            </p>
            <p className="amigosEvento">Camila B, Pedro F. e Thomas G. vão!</p>
            <div className="botoesEvento">
              <p className="convideAmigos">
                Convide<br></br> + Amigos
              </p>
              <p className="jaInscrito">
                Você já está<br></br>inscrito!
              </p>
            </div>
          </div>
        </li>
      </ul>
      <div className="head ebA">
        <p className="por">Por categoria </p>
        <p className="cat sk">
          Skate
          <img src={Simbolos.Seta} alt="seta" />
        </p>
      </div>
      <ul className="pe_carrossel crbA">
        <li>
          <div className="evento">
            <img
              src={Simbolos.LikeDislike}
              alt="likeDislike"
              className="likeDislike"
            ></img>
            <img src={Eventos.Aula} alt="sparring" className="fotoEvento" />
            <p className="tituloEvento ttsparring">
              Aulas de Skate<br></br>Praça Zilda Natel
            </p>
            <p className="dataEvento dtsparring">04/12 16:30</p>
            <ul className="detalhesEvento detsparring ">
              <br></br>
              <li>4 km</li>
              <li>Livre</li>
              <li>Praça</li>
            </ul>
            <p className="localEvento lcsparring lcsimu lcvolei">
              <img src={Simbolos.Pin} alt="pin" className="pin" />
              Praça Zilda Natel
            </p>
            <div className="botoesEvento btsparring btsimu">
              <p className="jaInscrito bora">Bora!</p>
              <p className="convideAmigos">
                Convide<br></br> + Amigos
              </p>
            </div>
          </div>
        </li>
        <li>
          <div className="evento">
            <img
              src={Simbolos.LikeDislike}
              alt="likeDislike"
              className="likeDislike"
            ></img>
            <img src={Eventos.Redbull} alt="sparring" className="fotoEvento" />
            <p className="tituloEvento ttsparring">
              Torneio Skate de<br></br>Rua Red Bull
            </p>
            <p className="dataEvento dtsparring">13/12 10:00</p>
            <ul className="detalhesEvento detsparring ">
              <br></br>
              <li>3 km</li>
              <li>Profissional</li>
              <li>Praça</li>
            </ul>
            <p className="localEvento lcsparring lcsimu lcvolei">
              <img src={Simbolos.Pin} alt="pin" className="pin" />
              Praça Roosvelt
            </p>
            <div className="botoesEvento btsparring btsimu">
              <p className="jaInscrito bora">Bora!</p>
              <p className="convideAmigos">
                Convide<br></br> + Amigos
              </p>
            </div>
          </div>
        </li>
        <li>
          <div className="evento">
            <img
              src={Simbolos.LikeDislike}
              alt="likeDislike"
              className="likeDislike"
            ></img>
            <img src={Eventos.Skate} alt="skate" className="fotoEvento" />
            <p className="tituloEvento ttskate">
              Game of S.K.A.T.E Praça Roosvelt
            </p>
            <p className="dataEvento dtskate">08/12 16:30</p>
            <ul className="detalhesEvento detskate">
              <br></br>
              <li>2 km</li>
              <li>Intermediário</li>
              <li>Urbano</li>
            </ul>
            <p className="localEvento lcskate">
              <img src={Simbolos.Pin} alt="pin" className="pin" />
              Elevado Presidente João Goulart
            </p>
            <p className="amigosEvento agskate">Myrian S. vai!</p>
            <div className="botoesEvento btskate">
              <p className="jaInscrito bora">Bora!</p>
              <p className="convideAmigos">
                Convide<br></br> + Amigos
              </p>
            </div>
          </div>
        </li>
      </ul>
      <div className="head ebA">
        <p className="por">Por ambiente</p>
        <p className="cat ub">
          Urbano
          <img src={Simbolos.Seta} alt="seta" />
        </p>
      </div>
      <ul className="pe_carrossel crbA">
        <li>
          <div className="evento">
            <img
              src={Simbolos.LikeDislike}
              alt="likeDislike"
              className="likeDislike"
            ></img>
            <img src={Eventos.Futsal} alt="sparring" className="fotoEvento" />
            <p className="tituloEvento ttsparring">
              Futsal Parque<br></br>Villa Lobos
            </p>
            <p className="dataEvento dtsparring">05/12 12:30</p>
            <ul className="detalhesEvento detsparring ">
              <br></br>
              <li>7 km</li>
              <li>Livre</li>
              <li>Parque</li>
            </ul>
            <p className="localEvento lcsparring lcsimu lcvolei">
              <img src={Simbolos.Pin} alt="pin" className="pin" />
              Parque Villa Lobos
            </p>
            <div className="botoesEvento btsparring btsimu">
              <p className="jaInscrito bora">Bora!</p>
              <p className="convideAmigos">
                Convide<br></br> + Amigos
              </p>
            </div>
          </div>
        </li>
        <li>
          <div className="evento ultimo">
            <img
              src={Simbolos.LikeDislike}
              alt="likeDislike"
              className="likeDislike"
            ></img>
            <img src={Eventos.Xadrez} alt="sparring" className="fotoEvento" />
            <p className="tituloEvento ttxadrez">3° Torneio Amador de Xadrez</p>
            <p className="dataEvento dtsparring">18/12 20:00</p>
            <ul className="detalhesEvento detsparring ">
              <br></br>
              <li>12 km</li>
              <li>Amador</li>
              <li>Biblioteca</li>
            </ul>
            <p className="localEvento lcsparring">
              <img src={Simbolos.Pin} alt="pin" className="pin" />
              Biblioteca de São Paulo
            </p>
            <div className="botoesEvento btsparring btsimu">
              <p className="jaInscrito bora">Bora!</p>
              <p className="convideAmigos">
                Convide<br></br> + Amigos
              </p>
            </div>
          </div>
        </li>
        <li>
          <div className="evento">
            <img
              src={Simbolos.LikeDislike}
              alt="likeDislike"
              className="likeDislike"
            ></img>
            <img src={Eventos.Skate} alt="skate" className="fotoEvento" />
            <p className="tituloEvento ttskate">
              Game of S.K.A.T.E Praça Roosvelt
            </p>
            <p className="dataEvento dtskate">08/12 16:30</p>
            <ul className="detalhesEvento detskate">
              <br></br>
              <li>2 km</li>
              <li>Intermediário</li>
              <li>Urbano</li>
            </ul>
            <p className="localEvento lcskate">
              <img src={Simbolos.Pin} alt="pin" className="pin" />
              Elevado Presidente João Goulart
            </p>
            <p className="amigosEvento agskate">Myrian S. vai!</p>
            <div className="botoesEvento btskate">
              <p className="jaInscrito bora">Bora!</p>
              <p className="convideAmigos">
                Convide<br></br> + Amigos
              </p>
            </div>
          </div>
        </li>
      </ul>
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

export default BuscaAvancada;
