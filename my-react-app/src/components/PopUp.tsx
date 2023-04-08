import { PopUpProps } from 'interfaces/interfaces';
import React, { Fragment } from 'react';

const PopUp = (props: PopUpProps) => {
  return (
    <Fragment>
      <div className="popup_bg" onClick={props.hahdleClick}></div>
      <div className="popup">
        <p style={{ fontSize: '25px' }}>{props.popUpData?.name}</p>
        <img className="popup_img" src={props.popUpData?.image}></img>
        <p>Gender: {props.popUpData?.gender}</p>
        <p>Species: {props.popUpData?.species}</p>
        <p>Status: {props.popUpData?.status}</p>
        <p>Origin: {props.popUpData?.origin?.name}</p>
      </div>
      <button className="popup_btn" onClick={props.hahdleClick}>
        x
      </button>
    </Fragment>
  );
};

export default PopUp;
