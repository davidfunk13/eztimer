import React, { FC, useEffect, useState } from "react";
import { Text } from "react-native";
import convertTime from '../../utils/convertTime';

interface TimerProps {
    seconds?: number
}

const Timer: React.FC<TimerProps> = ({ seconds = 80 }) => {
    let interval: NodeJS.Timer;

    const [localSeconds, setLocalSeconds] = useState(seconds);

    const bootStrapTimer = () => {
        interval = setInterval(() => {

            if (localSeconds > 0) {
                setLocalSeconds(localSeconds - 1);
            }

            if (localSeconds === 0) {
                clearInterval(interval)
            }
        }, 1000)
    }

    useEffect(() => {
        bootStrapTimer();

        return () => {
            clearInterval(interval);
        };
    });

    return <Text>{convertTime(localSeconds)}</Text>
}

export default Timer;