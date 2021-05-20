import React from "react";
import style from "./Button.module.scss"

const Button = (props) => {
    return (
        <div>
            {!props.isRun
                ? <button onClick={props.start} className={style.btn}>Start</button>
                : <button onClick={props.stop} className={style.btn}>Stop</button>
            }
            <button onClick={props.wait} className={style.btn}>Wait</button>
            <button onClick={props.reset} className={style.btn}>Reset</button>
        </div>
    );
}
export default Button;