import { useState } from "react";
import style from "./paginate.module.css";
import palmeritas from "../assets/palmeritas.png";
import alfajorNegro from "../assets/alfajorNegro.png";
import pastaFrola from "../assets/pastaFrola.png";
import alfajoresByN from "../assets/alfajoresByN.png";
import alfajoreMaicena from "../assets/alfajorMaicena.png";
import biscocosMiel from "../assets/biscochosMiel.png";
import cañoncitos from "../assets/cañoncitos.png";
import merenguitos from "../assets/merenguitos.png";
import milHojas from "../assets/milHojas.png";
import ojosBuey from "../assets/ojosBuey.png";
import panCasero from "../assets/panCasero.png";
import panDulce from "../assets/panDulce.png";
import roscas from "../assets/roscas.png";

export default function Paginate() {
  const [count, setCount] = useState(0);
  const producto = [
    {
      name: "Alfajor de Maicena",
      Img: alfajoreMaicena,
    },
    {
      name: "Cañoncitos de Dulce de Leche",
      Img: cañoncitos,
    },
    {
      name: "Biscochos Miel",
      Img: biscocosMiel,
    },
    {
      name: "Merenguitos",
      Img: merenguitos,
    },
    {
      name: "Mil Hojas",
      Img: milHojas,
    },
    {
      name: "Ojos de Buey",
      Img: ojosBuey,
    },
    {
      name: "Alfajores ",
      Img: alfajoresByN,
    },
    {
      name: "Pan Casero",
      Img: panCasero,
    },
    {
      name: "Pan Dulce",
      Img: panDulce,
    },
    {
      name: "Roscas",
      Img: roscas,
    },
    {
      name: "Pasta Frola",
      Img: pastaFrola,
    },
    {
      name: "Alfajor Negro",
      Img: alfajorNegro,
    },
    {
      name: "Palmeritas",
      Img: palmeritas,
    },
  ];
  const handleIncrement = () => {
    if (count <= producto.length - 2) {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <div className={style.paginate_body}>
      {producto[count].Img && (
        <div className={style.paginate_content}>
          <h1>{producto[count].name}</h1>
          <div className={style.image_container}>
            <button
              onClick={handleDecrement}
              className={style.paginate_content_btn_prev}
            >
              &lt;
            </button>
            <img
              src={producto[count].Img}
              className={style.paginate_image}
            ></img>
            <button
              onClick={handleIncrement}
              className={style.paginate_content_btn_next}
            >
              &gt;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
