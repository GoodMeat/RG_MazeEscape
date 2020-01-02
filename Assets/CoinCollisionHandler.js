function coinCollisionDetect(){
	if(navaden1){
		if(xPosition <= -49.5 && xPosition >= -50.0 && zPosition >= -0.50 && zPosition <= 0.50){
			tocke++;
			zascita = false;
            protMonster = "Protection against monster: Off"
			navaden1 = false;
		}
	}
	
	if(navaden2){
		if(xPosition <= -9.5 && xPosition >= -10.5 && zPosition >= -32.5 && zPosition <= -31.5){
			tocke++;
			zascita = false;
            protMonster = "Protection against monster: Off"
			navaden2 = false;
		}
	}

	if(navaden3){
		if(xPosition <= 7.35 && xPosition >= 6.85 && zPosition >= -64.40 && zPosition <= -63.75){
			tocke++;
			zascita = false;
            protMonster = "Protection against monster: Off"
			navaden3 = false;
		}
	}

	if(navaden4){
		if(xPosition <= -51.70 && xPosition >= -52.20 && zPosition >= -112.10 && zPosition <= -111.85){
			tocke++;
			zascita = false;
            protMonster = "Protection against monster: Off"
			navaden4 = false;
		}
	}

	if(navaden5){
		if(xPosition <= 8.26 && xPosition >= 7.90 && zPosition >= -112.30 && zPosition <= -111.70){
			tocke++;
			zascita = false;
            protMonster = "Protection against monster: Off"
			navaden5 = false;
		}
	}

	if(bonus1){
		if(xPosition <= 32.20 && xPosition >= 31.60 && zPosition >= -16.95 && zPosition <= -16.75){
			tocke += 5;
			zascita = false;
            protMonster = "Protection against monster: Off"
			bonus1 = false;
		}
	}

	if(bonus2){
		if(xPosition <= -2.75 && xPosition >= -3.00 && zPosition >= -80.20 && zPosition <= -79.50){
			tocke += 5;
			zascita = false;
            protMonster = "Protection against monster: Off"
			bonus2 = false;
		}
	}

	if(bonus3){
		if(xPosition <= -63.65 && xPosition >= -64.10 && zPosition >= -53.20 && zPosition <= -52.80){
			tocke += 5;
			zascita = false;
            protMonster = "Protection against monster: Off"
			bonus3 = false;
		}
	}

	if(speed1){
		if(xPosition <= -15.80 && xPosition >= -16.20 && zPosition >= -112.10 && zPosition <= -111.90){
			tocke += 2;
			zascita = false;
            protMonster = "Protection against monster: Off"
			speed1 = false;
		}
	}

	if(protection1){
		if(xPosition <= -15.90 && xPosition >= -16.20 && zPosition >= -17.0 && zPosition <= -16.0){
			tocke++;
			zascita = true;
            protMonster = "Protection against monster: On"
			protection1 = false;
		}
	}
}