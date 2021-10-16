import React, { useRef } from "react";
import "./interactive-diagram.css";

function InteractiveDiagram() {
  const svgRef = useRef();

  const handleItemMouseOver = (element) => {
    if (element.target.value) {
      svgRef.current.children[element.target.value - 1].classList.add(
        "hovered"
      );
    }
  };

  const handleItemMouseOut = (element) => {
    if (element.target.value) {
      svgRef.current.children[element.target.value - 1].classList.toggle(
        "hovered"
      );
    }
  };

  return (
    <>
    <h1 className="main__title">Interactive SVG diagram</h1>
    <div className="canvas">
      <svg
        ref={svgRef}
        className="chart"
        width="500"
        height="500"
        viewBox="0 0 50 50"
      >
        <circle className="unit" r="15.9" cx="50%" cy="50%"></circle>
        <circle className="unit" r="15.9" cx="50%" cy="50%"></circle>
        <circle className="unit" r="15.9" cx="50%" cy="50%"></circle>
        <circle className="unit" r="15.9" cx="50%" cy="50%"></circle>
        <circle className="unit" r="15.9" cx="50%" cy="50%"></circle>
        <circle className="unit" r="15.9" cx="50%" cy="50%"></circle>
        <circle className="unit" r="15.9" cx="50%" cy="50%"></circle>
      </svg>
      <div className="legend">
        <p className="legend__title">Что мешает во время работы дома?</p>
        <ul
          onMouseOver={(element) => handleItemMouseOver(element)}
          onMouseOut={(element) => handleItemMouseOut(element)}
          className="legend__caption-list"
        >
          <li value="1" className="caption-item">
            еда
          </li>
          <li value="2" className="caption-item">
            соседи
          </li>
          <li value="3" className="caption-item">
            отсутствие рабочего места
          </li>
          <li value="4" className="caption-item">
            мало двигаюсь
          </li>
          <li value="5" className="caption-item">
            отсутствие чёткого графика работы
          </li>
          <li value="6" className="caption-item">
            неудобная коммуникация с коллегами
          </li>
          <li value="7" className="caption-item">
            много ленюсь
          </li>
        </ul>
      </div>
    </div>
    </>
  );
}

export default InteractiveDiagram;
