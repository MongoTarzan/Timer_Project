import React, {useEffect, useRef, useState} from 'react';

const Timer = () => {
    let [on, setOn] = useState(false);
    let [seconds, setSeconds] = useState(0);
    const timerRef = useRef(null);

    const start = () => {
        setOn(true);
    }

    const stop = () => {
        setOn(false);
        setSeconds(0);
    }

    useEffect(() => {
        const i = setInterval(() => {
            if (on) {
                timerRef.current.innerText = timeFormat(seconds);
                setSeconds(i => i + 1);
            }
        }, 1000);

        function timeFormat(sec) {
            let min = 0;
            while (sec >= 60) {
                min++;
                sec-=60;
            }
            return `${min}m ${sec}s`
        }

        return () => clearInterval(i);
    }, [seconds, setSeconds, on, timerRef]);

    return (
        <div>
            <button onClick={start}>Start</button>
            <button onClick={stop}>Stop</button>
            <span ref={timerRef}>0m 0s</span>
        </div>
    );
}

export default Timer;