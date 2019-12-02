const CITY_SPEED_LIMIT = 50;
const TWO_LANE_EXPRESSWAY_SPEED_LIMIT = 120;
const HIGHWAY_SPEED_LIMIT = 140;
let speed = 49;
let typeOfRoad = 'city';

if (typeOfRoad === 'city' && speed<CITY_SPEED_LIMIT) {
    console.log('Miasto: jedziesz prawidlowo')
} else if (speed>CITY_SPEED_LIMIT) {
    console.log('Miasto: przekroczyles prędkość')
}

if (typeOfRoad === 'expressway' && speed<TWO_LANE_EXPRESSWAY_SPEED_LIMIT) {
    console.log('Eska: jedziesz prawidlowo')
} else if (speed>TWO_LANE_EXPRESSWAY_SPEED_LIMIT) {
    console.log('Eska: przekroczyles prędkość')
}

switch (true) {
    case typeOfRoad === 'highway' && speed<HIGHWAY_SPEED_LIMIT:
        console.log('Autostrada: jedziesz prawidlowo');
        break;
    case typeOfRoad === 'highway' && speed>HIGHWAY_SPEED_LIMIT:
        console.log('autostrada: przekroczyles prędkość')
        break;
}
