function areaOfSquare(a){
    return a ** a;
}


function areaOfRectangle(len,width){
    return len * width;
}

function areaOfCircle(rad){
    let area = 3.14159 * (rad ** rad);
    return area;
}


module.exports = {
    areaOfSquare : areaOfSquare,
    areaOfRectangle : areaOfRectangle,
    areaOfCircle : areaOfCircle
}