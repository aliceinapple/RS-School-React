import { PopUpProps } from 'interfaces/interfaces';
import React from 'react';

const PopUp = (props: PopUpProps) => {
  return (
    <div className="popup_bg">
      <div className="popup">
        <p>{props.popUp?.status}</p>
        <p>{props.popUp?.species}</p>
      </div>
      <button onClick={props.hahdleClick}>x</button>
    </div>
  );
};

export default PopUp;
