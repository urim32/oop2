class Plant {
    constructor(season, color, isBlossom) {
        this.season = season;
        this.color = color;
        this.isBlossom = isBlossom;
    }
}
const plant1 = new Plant('winter', 'purple', true);
const plant2 = new Plant('summer', 'red', false);
const plant3 = new Plant('spring', 'white', true);
const plant4 = new Plant('winter', 'yellow', true);
const plant5 = new Plant('summer', 'green', false);
const plants = [ plant1, plant2, plant3, plant4, plant5 ];

function getPlantsBySeason(plants, season) {
    let newplants = [];
    for (let i = 0; i < plants.length; i++) {
        if (season === plants[i].season && plants[i].isBlossom === true) {
            newplants.push(plants[i]);
        }
    }
    return newplants;
}
getPlantsBySeason(plants, 'winter');
