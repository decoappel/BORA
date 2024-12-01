import { useEffect, useRef, useState } from "react";

const BusqueComunidades = ({classe}) => {
  const [isDraggingIndex, setIsDraggingIndex] = useState(null);
  const bolaRef = useRef([]);
  const linhaRef = useRef([]);

  const boxes = Array.from({ length: 10 }, (_, i) => (
    <div className="box" key={i}>
      <div className="risco"></div>
      <div className="kilometragem">{i + 1} km</div>
    </div>
  ));

  const habilidade = ["", "Iniciante", "Intermediario", "Experiente", "Profissional", ""];
  const ambiente = ["", "Natureza", "", "", "Urbano", ""];

  const boxes1 = Array.from({ length: 6 }, (_, i) => (
    <div className="box" key={i}>
      <div className="risco1"></div>
      <div className="kilometragem">{habilidade[i]}</div>
    </div>
  ));

  const boxes2 = Array.from({ length: 6 }, (_, i) => (
    <div className="box" key={i}>
      <div className="risco1"></div>
      <div className="kilometragem">{ambiente[i]}</div>
    </div>
  ));

  const nomeFiltros = [
    "Yoga",
    "Skate",
    "Corrida",
    "Ciclismo",
    "Altinha",
    "Calistenia",
    "Natação",
    "Futvôlei",
    "Futebol",
    "Basquete",
    "Volêi",
    "Crossfit",
    "Automobilismo",
    "Beach Tennis",
  ];
  const filtros = Array.from({ length: 14 }, (_, i) => (
    <div className="box" key={i}>
      <input className="radiofiltro" type="checkbox" id={nomeFiltros[i]} />
      <label className="filtro" htmlFor={nomeFiltros[i]}>
        {nomeFiltros[i]}
      </label>
    </div>
  ));

  useEffect(() => {
    const onMouseMove = (e) => {
      if (isDraggingIndex !== null) {
        const bola = bolaRef.current[isDraggingIndex];
        const linha = linhaRef.current[isDraggingIndex];

        if (bola && linha) {
          const bolaRect = bola.getBoundingClientRect();
          const linhaRect = linha.getBoundingClientRect();

          let newX = e.clientX - bolaRect.width / 2 - linhaRect.left;
          newX = Math.max(
            0,
            Math.min(linhaRect.width - bolaRect.width + 30, newX)
          );
          bola.style.left = `${newX}px`;
        }
      }
    };

    const onMouseUp = () => {
      setIsDraggingIndex(null);
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };

    if (isDraggingIndex !== null) {
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp);
    }

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };
  }, [isDraggingIndex]);

  const onMouseDown = (index, e) => {
    setIsDraggingIndex(index);
  };

  
  return (
    <div className={classe}>
      <div className="headbc">
        <p className="Titulo bc">Busque Comunidades:</p>
        <span className="deslize">Deslize para ajustar</span>
      </div>
      <div className="distancia">
        <p className="distanciatitulo">Distância</p>
        <div className="distanciascrol">
          <div className="linhascroll" ref={(el) => (linhaRef.current[0] = el)}>
            <div className="bola comeco"></div>
            {boxes}
            <div className="bola final"></div>
            <div
              className="bola mexe"
              ref={(el) => (bolaRef.current[0] = el)}
              onMouseDown={(e) => onMouseDown(0, e)}
            ></div>
          </div>
        </div>
      </div>
      <div className="distancia">
        <p className="distanciatitulo">Habilidade</p>
        <div className="habilidadescrol">
          <div className="linhascroll" ref={(el) => (linhaRef.current[1] = el)}>
            <div className="bola comeco"></div>
            {boxes1}
            <div className="bola final"></div>
            <div
              className="bola mexe"
              ref={(el) => (bolaRef.current[1] = el)}
              onMouseDown={(e) => onMouseDown(1, e)}
            ></div>
          </div>
        </div>
      </div>
      <div className="distancia">
        <p className="distanciatitulo">Ambiente</p>
        <div className="distanciascrol">
          <div className="linhascroll" ref={(el) => (linhaRef.current[2] = el)}>
            <div className="bola comeco"></div>
            {boxes2}
            <div className="bola final"></div>
            <div
              className="bola mexe"
              ref={(el) => (bolaRef.current[2] = el)}
              onMouseDown={(e) => onMouseDown(2, e)}
            ></div>
          </div>
        </div>
      </div>

      <div className="categorias">
        <p className="distanciatitulo categott"> Categorias</p>
        <span className="deslize">Selecione quantas quiser!</span>
        <div className="filtros">{filtros}<p className="mais">Mais...</p></div>
      </div>
    </div>
  );
};

export default BusqueComunidades;
