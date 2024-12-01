import { Simbolos, Eventos } from "../imagens";
import { useNavigate } from "react-router-dom";

const Proximo = ({ vai, volta }) => {
  const navigate = useNavigate()
  return (
    <div className="proximosEventos">
      <div className="head">
        <spam className="Titulo">Seus próximos eventos:</spam>
        <div className="botoes">
          <button className="bt" onClick={() => volta("pe")}>
            ←
          </button>
          <button className="bt" onClick={() => vai("pe", 480)}>
            →
          </button>
        </div>
      </div>
      <ul className="pe_carrossel" id="pe">
        <li>
          <div className="evento" onClick={() => navigate('/eventodetalhado')} >
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
        <li>
          <div className="evento">
            <img
              src={Simbolos.LikeDislike}
              alt="likeDislike"
              className="likeDislike"
            ></img>
            <img src={Eventos.Beach} alt="beach" className="fotoEvento" />
            <p className="tituloEvento ttbeach">
              Torneio Masters <span>(</span>50+<span>)</span> Beach Tennis
            </p>
            <p className="dataEvento dtbeach">19/12 17:00</p>
            <ul className="detalhesEvento detbeach">
              <br></br>
              <li>7 km</li>
              <li>Iniciante - Intermediário</li>
              <li>Quadra de areia</li>
            </ul>
            <p className="localEvento lcbeach">
              <img src={Simbolos.Pin} alt="pin" className="pin" />
              Posto 011 - Morumbi
            </p>
            <p className="amigosEvento agbeach">Myrian S. vai!</p>
            <div className="botoesEvento btbeach">
              <p className="convideAmigos">
                Convide<br></br> + Amigos
              </p>
              <p className="jaInscrito">
                Você já está<br></br>inscrito!
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
            <img src={Eventos.Sparring} alt="sparring" className="fotoEvento" />
            <p className="tituloEvento ttsparring">Sessão de Sparring</p>
            <p className="dataEvento dtsparring">05/12 12:30</p>
            <ul className="detalhesEvento detsparring ">
              <br></br>
              <li>3 km</li>
              <li>Iniciante</li>
              <li>Academia</li>
            </ul>
            <p className="localEvento lcsparring">
              <img src={Simbolos.Pin} alt="pin" className="pin" />
              Academia Lucas Mineiro
            </p>
            <div className="botoesEvento btsparring">
              <p className="convideAmigos">
                Convide<br></br> + Amigos
              </p>
              <p className="jaInscrito">
                Você já está<br></br>inscrito!
              </p>
            </div>
          </div>
        </li>
        <li>
          <div className="evento">

            <p className="meuseventosFim">
              Os eventos que você se inscreveu acabaram, procure por eventos com
              a sua cara!
            </p>
            <p className="btBuscaAvancadaEventos" onClick={() => navigate("/buscaavancada")}>Busca Avançada</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Proximo;
