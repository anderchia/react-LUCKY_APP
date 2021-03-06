/* eslint-disable array-callback-return */
import React, { useContext } from "react";
import "./Datos.scss";
import { useState } from "react";
import CustomPopup from "../CustomPopup/CustomPopup";
import Advertencia from "../Advertencia/Advertencia";
import AlreadyAdopted from "../AlreadyAdopted/AlreadyAdopted";
import HuellaImg from "../../../assets/PerfilAnimales/pawprint.png";
import { UserContext } from "../../contexts/UserContext";

export default function Datos({ mascotaDetail }) {
  const [visibility, setVisibility] = useState(false);
  const [adopted, setAdopted] = useState(false);
  const { user } = useContext(UserContext);

  const handleAdopted = () => {
    user.mascotas.map((mascota) => {
      if (mascota._id === mascotaDetail._id) {
        setAdopted(true);
      }
    });
  };

  const popupCloseHandler = (e) => {
    setVisibility(e);
  };

  return (
    <div className="c-adopcion-datos">
      <div className="c-adopcion-datos__box">
        <div className="c-adopcion-datos__row">
          <div className="c-adopcion-datos__row-left">
            <img src={HuellaImg} alt="pet" className="c-adopcion-datos__row-left" />
            <p className="c-adopcion-datos__p">Especie</p>
          </div>
          <div className="c-adopcion-datos__row-right">
            <p className="c-adopcion-datos__p">{mascotaDetail.especie}</p>
          </div>
        </div>

        <div className="c-adopcion-datos__row">
          <div className="c-adopcion-datos__row-left">
            <img src={HuellaImg} alt="pet" className="c-adopcion-datos__row-left" />
            <p className="c-adopcion-datos__p">Fecha de nacimiento</p>
          </div>
          <div className="c-adopcion-datos__row-right">
            <p className="c-adopcion-datos__p">{mascotaDetail.fecha}</p>
          </div>
        </div>

        <div className="c-adopcion-datos__row">
          <div className="c-adopcion-datos__row-left">
            <img src={HuellaImg} alt="pet" className="c-adopcion-datos__row-left" />
            <p className="c-adopcion-datos__p">Sexo</p>
          </div>
          <div className="c-adopcion-datos__row-right">
            <p className="c-adopcion-datos__p">{mascotaDetail.sexo}</p>
          </div>
        </div>

        <div className="c-adopcion-datos__row">
          <div className="c-adopcion-datos__row-left">
            <img src={HuellaImg} alt="pet" className="c-adopcion-datos__row-left" />
            <p className="c-adopcion-datos__p">Tama??o</p>
          </div>
          <div className="c-adopcion-datos__row-right">
            <p className="c-adopcion-datos__p">{mascotaDetail.tamano}</p>
          </div>
        </div>

        <div className="c-adopcion-datos__row">
          <div className="c-adopcion-datos__row-left">
            <img src={HuellaImg} alt="pet" className="c-adopcion-datos__row-left" />
            <p className="c-adopcion-datos__p">Peso</p>
          </div>
          <div className="c-adopcion-datos__row-right">
            <p className="c-adopcion-datos__p">{mascotaDetail.peso}Kg</p>
          </div>
        </div>
      </div>
      <div className="c-adopcion-datos__top">
        <h4 className="c-adopcion-datos__bottom__h4">Personalidad</h4>
        <div className="c-adopcion-datos__top-personalidad">
          {mascotaDetail.personality.map((personalidad, index) => (
            <p key={index} className="c-adopcion-datos__top__bocadillos">
              {personalidad}
            </p>
          ))}
        </div>
      </div>

      <div className="c-adopcion-datos__bottom">
        <h4 className="c-adopcion-datos__bottom__h4">Historia</h4>
        <p className="c-adopcion-datos__p">Lorem ipsum dolor natoascepellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo,{mascotaDetail.historia} </p>
      </div>

      <div className="btn">
        <button className="btn__2">Apadrinar</button>
        <button
          className="btn__1"
          onClick={(e) => {
            setVisibility(!visibility);
            handleAdopted();
          }}
        >
          Adoptar
        </button>
        <CustomPopup onClose={popupCloseHandler} show={visibility} title="">
          {adopted ? <AlreadyAdopted /> : <Advertencia mascotaDetail={mascotaDetail} />}
        </CustomPopup>
      </div>
    </div>
  );
}
