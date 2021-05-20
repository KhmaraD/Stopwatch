import React from "react";
import Display from "../Display/Display";
import Button from "../Btn/Button";
import style from "./Stopwatch.module.scss";

const Stopwatch = ({time, isRun, start, stop, reset, wait}) => {
    return (
        <div className={style.stopwatchWrapper}>
            <Display time={time}/>
            <Button isRun={isRun}
                    start={start}
                    stop={stop}
                    reset={reset}
                    wait={wait}/>
        </div>
    );
}

export default Stopwatch;
