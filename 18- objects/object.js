//Object de - structure


let player = {
    name: "babar",
    totalScore: 190,
    isOut: false
}

let { totalScore: score } = player // changed/shortened the name to score
console.log(score);
console.log(player.totalScore);