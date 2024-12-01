import { Simbolos, Eventos } from "../imagens";
import { useNavigate } from "react-router-dom";

const Sugestoes = ({vai, volta}) => {
  const navigate = useNavigate()
    return(
        <div className="Sugestoes">
        <div className="head sugest">
          <spam className="Titulo">Sugestões para você</spam>
          <div className="botoes">
            <button className="bt" onClick={() => volta("s", 1300)}>
              ←
            </button>
            <button className="bt" onClick={() => vai("s", 1300)}>
              →
            </button>
          </div>
        </div>
        <ul className="pe_carrossel" id="s">
          <li>
            <div className="evento">
              <img
              src={Simbolos.LikeDislike}
              alt="likeDislike"
              className="likeDislike"
            ></img>
              <img src={Eventos.Yoga} alt="yoga" className="fotoEvento" />
              <p className="tituloEvento">
                Yoga coletivo no <br></br> Parque Ibirapuera
              </p>
              <p className="dataEvento">08/12 10:00</p>
              <ul className="detalhesEvento">
                <li>6 km</li>
                <li>Intermediário</li>
                <li>Natureza</li>
              </ul>
              <p className="localEvento lcyoga">
                <img src={Simbolos.Pin} alt="pin" className="pin" />
                Parque Ibirapuera
              </p>
              <p className="amigosEvento agyoga">Thomas G. vai!</p>
              <div className="botoesEvento btyoga">
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
              <img
                src={Eventos.Simulador}
                alt="sparring"
                className="fotoEvento"
              />
              <p className="tituloEvento ttsparring">Simuladores<br></br> F1/Indy</p>
              <p className="dataEvento dtsparring">11/12 11:30</p>
              <ul className="detalhesEvento detsparring ">
                <br></br>
                <li>8 km</li>
                <li>Intermediário</li>
                <li>Urbano</li>
              </ul>
              <p className="localEvento lcsparring lcsimu">
                <img src={Simbolos.Pin} alt="pin" className="pin" />
                Elevado Presidente João Goulart
              </p>
              <p className="amigosEvento agyoga agsimu">Rodrigo L. vai!</p>
              <div className="botoesEvento btsparring btsimu">
                <p className="jaInscrito bora">
                  Bora!
                </p>
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
              <img
                src={Eventos.Volei}
                alt="sparring"
                className="fotoEvento"
              />
              <p className="tituloEvento ttsparring">Rachão Vôlei <br></br>Vila Lobos</p>
              <p className="dataEvento dtsparring">11/12 12:30</p>
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
                <p className="jaInscrito bora">
                  Bora!
                </p>
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
              <img
                src={Eventos.Baska}
                alt="sparring"
                className="fotoEvento"
              />
              <p className="tituloEvento ttsparring">Baska de Rua<br></br>Ibirapuera</p>
              <p className="dataEvento dtsparring">06/12 14:30</p>
              <ul className="detalhesEvento detsparring ">
                <br></br>
                <li>6 km</li>
                <li>Intermediário</li>
                <li>Parque</li>
              </ul>
              <p className="localEvento lcsparring lcbaska ">
                <img src={Simbolos.Pin} alt="pin" className="pin" />
                Parque Ibirapuera
              </p>
              <div className="botoesEvento btsparring btsimu">
                <p className="jaInscrito bora">
                  Bora!
                </p>
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
              <img
                src={Eventos.Basquete}
                alt="sparring"
                className="fotoEvento"
              />
              <p className="tituloEvento ttsparring">Basquete<br></br>Ibirapuera</p>
              <p className="dataEvento dtsparring">06/12 14:30</p>
              <ul className="detalhesEvento detsparring ">
                <br></br>
                <li>6 km</li>
                <li>Iniciante</li>
                <li>Parque</li>
              </ul>
              <p className="localEvento lcsparring lcsimu lcvolei">
                <img src={Simbolos.Pin} alt="pin" className="pin" />
                Parque Ibirapuera
              </p>
              <div className="botoesEvento btsparring btsimu">
                <p className="jaInscrito bora">
                  Bora!
                </p>
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
              <img
                src={Eventos.Aula}
                alt="sparring"
                className="fotoEvento"
              />
              <p className="tituloEvento ttsparring">Aulas de Skate<br></br>Praça Zilda Natel</p>
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
                <p className="jaInscrito bora">
                  Bora!
                </p>
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
              <img
                src={Eventos.Futsal}
                alt="sparring"
                className="fotoEvento"
              />
              <p className="tituloEvento ttsparring">Futsal Parque<br></br>Villa Lobos</p>
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
                <p className="jaInscrito bora">
                  Bora!
                </p>
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
              <img
                src={Eventos.Redbull}
                alt="sparring"
                className="fotoEvento"
              />
              <p className="tituloEvento ttsparring">Torneio Skate de<br></br>Rua Red Bull</p>
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
                <p className="jaInscrito bora">
                  Bora!
                </p>
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
              <img
                src={Eventos.Xadrez}
                alt="sparring"
                className="fotoEvento"
              />
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
                <p className="jaInscrito bora">
                  Bora!
                </p>
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
              <img
                src={Eventos.Futvolei}
                alt="sparring"
                className="fotoEvento"
              />
              <p className="tituloEvento ttfutvolei">Torneio Masters<br></br> <span>(</span>50+<span>)</span>Futvôlei</p>
              <p className="dataEvento dtsparring">20/12 17:00</p>
              <ul className="detalhesEvento detsparring ">
                <br></br>
                <li>5 km</li>
                <li>Intermediário</li>
                <li>Quadra de areia</li>
              </ul>
              <p className="localEvento lcsparring lcsimu lcfutvolei">
                <img src={Simbolos.Pin} alt="pin" className="pin" />
                Posto 011-Moema
              </p>
              <p className="amigosEvento agbeach agfutvolei">Myrian S. vai!</p>
              <div className="botoesEvento btsimu btfutvolei">
                <p className="jaInscrito bora">
                  Bora!
                </p>
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
              <img
                src={Eventos.Crossfit}
                alt="sparring"
                className="fotoEvento"
              />
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
                <p className="jaInscrito bora">
                  Bora!
                </p>
                <p className="convideAmigos">
                Convide<br></br> + Amigos
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="evento">
              <p className="meuseventosFim">
                Suas sugestões acabaram, procure por eventos com a sua cara!
              </p>
              <p className="btBuscaAvancadaEventos" onClick={() => navigate("/buscaavancada")}>Busca Avançada</p>
            </div>
          </li>
        </ul>
      </div>
    )

}

export default Sugestoes