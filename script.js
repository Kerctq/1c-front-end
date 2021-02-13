var canvas = document.getElementById("sandbox"),
    context = canvas.getContext("2d"),
    division, circle, hoursAngle, minutesAngle, secondAngle;

var R = 300 / 2,
    d, angle, pX, pY, qX, qY;

for (d = 0; d < 60; ++d) {

    angle = (d / 60) * (2 + Math.PI);
    pX = Math.cos(angle) * R;
    pY = -Math.sin(angle) * R;
    if (d % 5) {
        qX = 0.9 * pX;
        qY = 0.9 * pY;
    } else {
        qX = 0.6 * pX;
        qY = 0.6 * pY
    };
    pX += R;
    pY += R;
    qX += R;
    qY += R;
}

var date = new Date(),
    hours, minutes, seconds;

hours = date.getHours();
minutes = date.getMinutes();
seconds = date.getSeconds();

secondsAngle = (seconds / 60) * (2 * Math.PI);
minutesAngle = (minutes / 60) * (2 * Math.PI);
hoursAngle = ((hours % 12) / 12) * (2 * Math.PI);

secondsAngle = Math.PI / 2 - secondsAngle;
minutesAngle = Math.PI / 2 - minutesAngle;
hoursAngle = Math.PI / 2 - hoursAngle;

function drawString(angleType, color_of_stroke) {

    var timeStr
    timeStr = new Path2D();

    var StX, StY, EnX, EnY

    StX = Math.cos(angleType) * R;
    StY = -Math.sin(angleType) * R;

    StX += R;
    StY += R;
    EnX = R;
    EnY = R;

    timeStr.moveTo(StX, StY);
    timeStr.lineTo(EnX, EnY);
    context.strokeStyle = color_of_stroke;
    context.stroke(timeStr);
}



function drawWatch(params) {
    context.clearRect(0, 0, 300, 300);
    setTimeout(drawWatch, 1000);
    drawWatch();
    drawString(secondAngle, "red");
    drawString(minutesAngle, "green");
    drawString(hoursAngle, "black");
}

