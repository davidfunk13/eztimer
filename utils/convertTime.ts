const convertTime = (input: number) => {
    let minutes = Math.floor(input / 60);
    let seconds = input - minutes * 60;

    let secondsString = seconds < 10 ? "0" + seconds : seconds;
    let minutesString = minutes < 10 ? "0" + minutes : minutes;

    return `${minutesString}:${secondsString}`;
}

export default convertTime;