import React, { useRef, useState } from "react";
import { hexToRgb } from "../../../helpers/utils";

const Colors = () => {
  const container = useRef();

  const [color, setColor] = useState();

  const setContainerColor = (color) => {
    container.current.style.backgroundColor = color;
  };

  const changeColor = (color) => {
    let rgb = color;
    setColor(color);

    if (color === "Ошибка") {
      rgb = "rgb(200,0,0)";
    }

    if (color === "") {
      rgb = "rgb(255,255,255)";
    }

    setContainerColor(rgb);
  };

  const handleChange = ({ target }) => {
    const { value } = target;

    if (!value.length) {
      changeColor("");
      return;
    }

    if (value.length > 7) {
      changeColor("Ошибка");
    }

    if (value.length === 7 && value[0] === "#") {
      const rgb = hexToRgb(value);

      if (rgb === null) {
        changeColor("Ошибка");
      }

      const rgbString = `rgb(${rgb.r},${rgb.g},${rgb.b})`;
      changeColor(rgbString);
    }
  };

  return (
    <div
      ref={container}
      className="d-flex h-100 justify-content-center align-items-center"
    >
      <div className="w-25 d-flex flex-column">
        <input
          className="form-control mb-2"
          onInput={handleChange}
          type="text"
        />
        <input className="form-control" disabled value={color} type="text" />
      </div>
    </div>
  );
};

export default Colors;
