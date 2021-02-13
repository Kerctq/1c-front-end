var canvas = document.getElementById("sandbox"),
context = canvas.getContext("2d"),
division, circle,  hoursAngle, minutesAngle, secondsAngle;

var R = 300 /2, d, angle, pX, pY, qX, qY;
/*var d, angle, pX, pY, qX, qY;*/

function drawWatch(params) { //нужно засунуть код в эту процедуру
    //обрати внимание, что у тебя происходит в процедуре drawWatch
    context.clearRect(0,0,300,300); //очищаем канвас

    circle = new Path2D(); //Так же у тебя нет объявления круга
circle.arc(150,150,R,0,Math.PI * 2);

context.stroke(circle); //тут мы рисуем круг


//получаем дату
var date = new Date(), hours, minutes, seconds;
hours = date.getHours();
minutes = date.getMinutes();
seconds = date.getSeconds();
console.log(hours, minutes, seconds);

//тут мы задаём значения угла относительно времени
secondsAngle = (seconds / 60) * (2 * Math.PI); //секунды
minutesAngle = (minutes / 60) * (2 * Math.PI); //минуты
hoursAngle = ((hours % 12) / 12) * (2 * Math.PI); //часы

//а тут подгоняем по формулам
secondsAngle = Math.PI / 2 - secondsAngle;
minutesAngle = Math.PI / 2 - minutesAngle;
hoursAngle = Math.PI / 2 - hoursAngle;

//рисуем деления
division = new Path2D();
for (d = 0; d < 60; ++d) {
     
    angle = (d/60) * (2*Math.PI);
    pX = Math.cos(angle)*R;
    pY = -Math.sin(angle)*R;
    if (d % 5){
        qX=0.9*pX;
        qY=0.9*pY;
    } else {
    qX = 0.6*pX;
    qY = 0.6*pY}
    ;
    pX += R; pY += R;
    qX += R; qY += R;
    
    division.moveTo(pX, pY);
    division.lineTo(qX, qY);
    
    context.stroke(division);
}


    drawString(secondsAngle, "red");    //Вот уже тут мы вызываем метод drawStrings
    drawString(minutesAngle, "green");  //Вот уже тут мы вызываем метод drawStrings
    drawString(hoursAngle, "black");    //Вот уже тут мы вызываем метод drawStrings

    //Ставим таймер
    setTimeout(drawWatch,1000);
}


function drawString(angleType,color_of_stroke) {
    var timeStr;
    timeStr = new Path2D();

    var StX, StY, EnX, EnY;
    EnX=Math.cos(angleType)*R;
    EnY=-Math.sin(angleType)*R;

    StX=R; StY=R;
    EnX+=R; EnY+=R;
    
    timeStr.moveTo(StX,StY);
    timeStr.lineTo(EnX,EnY);
    context.strokeStyle = color_of_stroke;
    context.stroke(timeStr);
}

drawWatch();