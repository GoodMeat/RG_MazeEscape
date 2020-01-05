function wallCollisionDetect(direction) {
    /*if (zPosition >= 3.7) {
        speed = 0;
        zPosition = 3.69;
    } else if (-4.3 <= zPosition && zPosition <= -3.7 && ((-60.3 <= xPosition && xPosition <= -35.7) ||
        (-28.3 <= xPosition && xPosition <= -3.7) || (19.7 <= xPosition && xPosition <= 28.3))) {
        speed = 0;
        zPosition = -3.69;
    } else if (-12.3 <= zPosition && zPosition <= -11.7 && ((-60.3 <= xPosition && xPosition <= -43.7) ||
        (-20.3 <= xPosition && xPosition <= -11.7))) {
        speed = 0;
        zPosition = -12.31;
    } else if (-20.3 <= zPosition && zPosition <= -19.7 && (-67.7 <= xPosition && xPosition <= -43.7)) {
        speed = 0;
        zPosition = -19.69;
    } else if (-28.3 <= zPosition && zPosition <= -27.7 && ((-67.7 <= xPosition && xPosition <= -43.7) ||
        (-28.3 <= xPosition && xPosition <= -19.7) || (-12.3 <= xPosition && xPosition <= -3.7) ||
        (3.7 <= xPosition && xPosition <= 12.3))) {
        speed = 0;
        zPosition = -28.31;
    } else if (-36.3 <= zPosition && zPosition <= -35.7 && ((-60.3 <= xPosition && xPosition <= -51.7) ||
        (-28.3 <= xPosition && xPosition <= 20.3))) {
        speed = 0;
        zPosition = -35.69;
    } else if (-44.3 <= zPosition && zPosition <= -43.7 && (-28.3 <= xPosition && xPosition <= 28.3)) {
        speed = 0;
        zPosition = -44.31;
    } else if (-52.3 <= zPosition && zPosition <= -51.7 && ((-52.3 <= xPosition && xPosition <= -43.7) ||
        (-12.3 <= xPosition && xPosition <= 36.3))) {
        speed = 0;
        zPosition = -51.69;
    } else if (-60.3 <= zPosition && zPosition <= -59.7 && ((-60.3 <= xPosition && xPosition <= -35.7) ||
        (-12.3 <= xPosition && xPosition <= 36.3))) {
        speed = 0;
        zPosition = -60.31;
    } else if (-68.3 <= zPosition && zPosition <= -67.7 && ((-67.7 <= xPosition && xPosition <= -52.7) ||
        (-44.3 <= xPosition && xPosition <= 28.3))) {
        speed = 0;
        zPosition = -67.69;
    } else if (-76.3 <= zPosition && zPosition <= -75.7 && ((-67.7 <= xPosition && xPosition <= -59.7) ||
        (-44.3 <= xPosition && xPosition <= 28.3))) {
        speed = 0;
        zPosition = -76.31;
    } else if (-84.3 <= zPosition && zPosition <= -83.7 && (-28.3 <= xPosition && xPosition <= 12.3)) {
        speed = 0;
        zPosition = -83.69;
    } else if (-92.3 <= zPosition && zPosition <= -91.7 && (-20.3 <= xPosition && xPosition <= 12.3)) {
        speed = 0;
        zPosition = -92.31;
    } else if (-100.3 <= zPosition && zPosition <= -99.7 && ((-52.3 <= xPosition && xPosition <= -35.7) ||
        (-12.3 <= xPosition && xPosition <= 28.3))) {
        speed = 0;
        zPosition = -99.69;
    } else if (-108.3 <= zPosition && zPosition <= -107.7 && ((-60.3 <= xPosition && xPosition <= -35.7) ||
        (-4.3 <= xPosition && xPosition <= 28.3))) {
        speed = 0;
        zPosition = -108.31;
    } else if (zPosition <= -115.7) {
        speed = 0;
        zPosition = -115.69;
    } else if (xPosition >= 35.7) {
        speed = 0;
        xPosition = 35.69;
    } else if (27.7 <= xPosition && xPosition <= 28.3 && ((-108.3 <= zPosition && zPosition <= -99.7) ||
        (-76.3 <= zPosition && zPosition <= -67.7) || (-44.3 <= zPosition && zPosition <= -3.7))) {
        speed = 0;
        xPosition = 28.31;
    } else if (19.7 <= xPosition && xPosition <= 20.3 && (-35.7 <= zPosition && zPosition <= -4.3)) {
        speed = 0;
        xPosition = 19.69;
    } else if (11.7 <= xPosition && xPosition <= 12.3 && ((-92.3 <= zPosition && zPosition <= -83.7) ||
        (-28.3 <= zPosition && zPosition <= 4.3))) {
        speed = 0;
        xPosition = 12.31;
    } else if (3.7 <= xPosition && xPosition <= 4.3 && (-28.3 <= zPosition && zPosition <= 4.3)) {
        speed = 0;
        xPosition = 3.69;
    } else if (-4.3 <= xPosition && xPosition <= -3.7 && ((-116.3 <= zPosition && zPosition <= -107.7) ||
        (-28.3 <= zPosition && zPosition <= -3.7))) {
        speed = 0;
        xPosition = -3.69;
    } else if (-12.3 <= xPosition && xPosition <= -11.7 && ((-116.3 <= zPosition && zPosition <= -99.7) ||
        (-60.3 <= zPosition && zPosition <= -51.7) || (-28.3 <= zPosition && zPosition <= -11.7))) {
        speed = 0;
        xPosition = -12.31;
    } else if (-20.3 <= xPosition && xPosition <= -19.7 && ((-116.3 <= zPosition && zPosition <= -91.7) ||
        (-28.3 <= zPosition && zPosition <= -11.7))) {
        speed = 0;
        xPosition = -19.69;
    } else if (-28.3 <= xPosition && xPosition <= -27.7 && ((-116.3 <= zPosition && zPosition <= -83.7) ||
        (-44.3 <= zPosition && zPosition <= -35.7) || (-28.3 <= zPosition && zPosition <= -3.7))) {
        speed = 0;
        xPosition = -28.31;
    } else if (-36.3 <= xPosition && xPosition <= -35.7 && ((-108.3 <= zPosition && zPosition <= -99.7) ||
        (-60.3 <= zPosition && zPosition <= -3.7))) {
        speed = 0;
        xPosition = -35.69;
    } else if (-44.3 <= xPosition && xPosition <= -43.7 && ((-76.3 <= zPosition && zPosition <= -67.7) ||
        (-52.3 <= zPosition && zPosition <= -27.7) || (-20.3 <= zPosition && zPosition <= -11.7))) {
        speed = 0;
        xPosition = -44.31;
    } else if (-52.3 <= xPosition && xPosition <= -51.7 && ((-100.3 <= zPosition && zPosition <= -67.7) ||
        (-52.3 <= zPosition && zPosition <= -35.7))) {
        speed = 0;
        xPosition = -51.69;
    } else if (-60.3 <= xPosition && xPosition <= -59.7 && ((-108.3 <= zPosition && zPosition <= -75.7) ||
        (-60.3 <= zPosition && zPosition <=  -35.7) || (-12.3 <= zPosition && zPosition <= -3.7))) {
        speed = 0;
        xPosition = -60.31;
    } else if (xPosition <= -67.7) {
        speed = 0;
        xPosition = -67.69;
    } else {
        if(!speed1){
            speed = 0.03 * direction;
        }
        else{
            speed = 0.02 * direction;
        }
        
    }*/
    speed = 0.02 * direction;
}

function fixCoordShift() {
    /*if (zPosition >= 3.7) {
        zPosition = 3.69;
    } else if (-4.3 <= zPosition && zPosition <= -3.7 && ((-60.3 <= xPosition && xPosition <= -35.7) ||
        (-28.3 <= xPosition && xPosition <= -3.7) || (19.7 <= xPosition && xPosition <= 28.3))) {
        zPosition = -3.69;
    } else if (-12.3 <= zPosition && zPosition <= -11.7 && ((-60.3 <= xPosition && xPosition <= -43.7) ||
        (-20.3 <= xPosition && xPosition <= -11.7))) {
        zPosition = -12.31;
    } else if (-20.3 <= zPosition && zPosition <= -19.7 && (-67.7 <= xPosition && xPosition <= -43.7)) {
        zPosition = -19.69;
    } else if (-28.3 <= zPosition && zPosition <= -27.7 && ((-67.7 <= xPosition && xPosition <= -43.7) ||
        (-28.3 <= xPosition && xPosition <= -19.7) || (-12.3 <= xPosition && xPosition <= -3.7) ||
        (3.7 <= xPosition && xPosition <= 12.3))) {
        zPosition = -28.31;
    } else if (-36.3 <= zPosition && zPosition <= -35.7 && ((-60.3 <= xPosition && xPosition <= -51.7) ||
        (-28.3 <= xPosition && xPosition <= 20.3))) {
        zPosition = -35.69;
    } else if (-44.3 <= zPosition && zPosition <= -43.7 && (-28.3 <= xPosition && xPosition <= 28.3)) {
        zPosition = -44.31;
    } else if (-52.3 <= zPosition && zPosition <= -51.7 && ((-52.3 <= xPosition && xPosition <= -43.7) ||
        (-12.3 <= xPosition && xPosition <= 36.3))) {
        zPosition = -51.69;
    } else if (-60.3 <= zPosition && zPosition <= -59.7 && ((-60.3 <= xPosition && xPosition <= -35.7) ||
        (-12.3 <= xPosition && xPosition <= 36.3))) {
        zPosition = -60.31;
    } else if (-68.3 <= zPosition && zPosition <= -67.7 && ((-67.7 <= xPosition && xPosition <= -52.7) ||
        (-44.3 <= xPosition && xPosition <= 28.3))) {
        zPosition = -67.69;
    } else if (-76.3 <= zPosition && zPosition <= -75.7 && ((-67.7 <= xPosition && xPosition <= -59.7) ||
        (-44.3 <= xPosition && xPosition <= 28.3))) {
        zPosition = -76.31;
    } else if (-84.3 <= zPosition && zPosition <= -83.7 && (-28.3 <= xPosition && xPosition <= 12.3)) {
        zPosition = -83.69;
    } else if (-92.3 <= zPosition && zPosition <= -91.7 && (-20.3 <= xPosition && xPosition <= 12.3)) {
        zPosition = -92.31;
    } else if (-100.3 <= zPosition && zPosition <= -99.7 && ((-52.3 <= xPosition && xPosition <= -36.3) ||
        (-12.3 <= xPosition && xPosition <= 28.3))) {
        zPosition = -99.69;
    } else if (-108.3 <= zPosition && zPosition <= -107.7 && ((-60.3 <= xPosition && xPosition <= -36.3) ||
        (-4.3 <= xPosition && xPosition <= 28.3))) {
        zPosition = -108.31;
    } else if (zPosition <= -115.7) {
        zPosition = -115.69;
    } else if (xPosition >= 35.7) {
        xPosition = 35.69;
    } else if (27.7 <= xPosition && xPosition <= 28.3 && ((-108.3 <= zPosition && zPosition <= -99.7) ||
        (-76.3 <= zPosition && zPosition <= -67.7) || (-44.3 <= zPosition && zPosition <= -3.7))) {
        xPosition = 28.31;
    } else if (19.7 <= xPosition && xPosition <= 20.3 && (-35.7 <= zPosition && zPosition <= -4.3)) {
        xPosition = 19.69;
    } else if (11.7 <= xPosition && xPosition <= 12.3 && ((-92.3 <= zPosition && zPosition <= -83.7) ||
        (-28.3 <= zPosition && zPosition <= 4.3))) {
        xPosition = 12.31;
    } else if (3.7 <= xPosition && xPosition <= 4.3 && (-28.3 <= zPosition && zPosition <= 4.3)) {
        xPosition = 3.69;
    } else if (-4.3 <= xPosition && xPosition <= -3.7 && ((-116.3 <= zPosition && zPosition <= -107.7) ||
        (-28.3 <= zPosition && zPosition <= -3.7))) {
        xPosition = -3.69;
    } else if (-12.3 <= xPosition && xPosition <= -11.7 && ((-116.3 <= zPosition && zPosition <= -99.7) ||
        (-60.3 <= zPosition && zPosition <= -51.7) || (-28.3 <= zPosition && zPosition <= -11.7))) {
        xPosition = -12.31;
    } else if (-20.3 <= xPosition && xPosition <= -19.7 && ((-116.3 <= zPosition && zPosition <= -91.7) ||
        (-28.3 <= zPosition && zPosition <= -11.7))) {
        xPosition = -19.69;
    } else if (-28.3 <= xPosition && xPosition <= -27.7 && ((-116.3 <= zPosition && zPosition <= -83.7) ||
        (-44.3 <= zPosition && zPosition <= -35.7) || (-28.3 <= zPosition && zPosition <= -3.7))) {
        xPosition = -28.31;
    } else if (-36.3 <= xPosition && xPosition <= -35.7 && ((-108.3 <= zPosition && zPosition <= -99.7) ||
        (-60.3 <= zPosition && zPosition <= -3.7))) {
        xPosition = -35.69;
    } else if (-44.3 <= xPosition && xPosition <= -43.7 && ((-76.3 <= zPosition && zPosition <= -67.7) ||
        (-52.3 <= zPosition && zPosition <= -27.7) || (-20.3 <= zPosition && zPosition <= -11.7))) {
        xPosition = -44.31;
    } else if (-52.3 <= xPosition && xPosition <= -51.7 && ((-100.3 <= zPosition && zPosition <= -67.7) ||
        (-52.3 <= zPosition && zPosition <= -35.7))) {
        xPosition = -51.69;
    } else if (-60.3 <= xPosition && xPosition <= -59.7 && ((-108.3 <= zPosition && zPosition <= -75.7) ||
        (-60.3 <= zPosition && zPosition <=  -35.7) || (-12.3 <= zPosition && zPosition <= -3.7))) {
        xPosition = -60.31;
    } else if (xPosition <= -67.7) {
        xPosition = -67.69;
    }*/
}