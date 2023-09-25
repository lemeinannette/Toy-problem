function demeritPoints(speed) {
    const speedLimit = 70;
    const kmPoint = 5;

    if (speed <= speedLimit) {
        console.log ("OK");
    } else {
        const demeritPoints = Math.floor((speed- speedLimit) / kmPoint);
        if (demeritPoints >= 12) {
            console.log("License suspended");
        } else {
            console.log(`Points : ${demeritPoints}`);
        }
    }
}
demeritPoints(speed);