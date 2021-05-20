import React, {useState, useEffect} from "react";
import Stopwatch from "./Stopwatch";
import {Subject, interval, timer} from "rxjs"
import {takeUntil} from "rxjs/operators";

const StopwatchContainer = () => {
    const [time, setTime] = useState(0); // data of stopwatch
    const [isRun, setIsRun] = useState(false); // flag to start stopwatch
    const [isClick, setIsClick] = useState(false); // flag on double click "wait" button

    useEffect(() => {

        const stream$ = new Subject();
        interval(1000)
            .pipe(takeUntil(stream$))
            .subscribe(() => {
                if (isRun) {
                    setTime(val => val + 1000);
                }
            });
        return () => {
            stream$.next();
            stream$.complete();
        };
    }, [isRun]);

    const start = () => {
        setIsRun(true);
    }

    const stop = () => {
        setIsRun(false);
        setTime(0);
    }

    const reset = () => {
        if (time !== 0 ) {
            setTime(0);
            setIsRun(true);
        }
    }

    const wait = () => {
        setIsClick(true);

        timer(300).subscribe( () => {
                if (isClick) {
                    setIsRun(false);
                }
                setIsClick(false);
            })
    }

    return <Stopwatch time={time}
                      isRun={isRun}
                      start={start}
                      stop={stop}
                      reset={reset}
                      wait={wait}/>
}

export default StopwatchContainer;
