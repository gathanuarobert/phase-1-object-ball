function gameObject(){
    const home = {
        teamName:"Brooklyn Nets",
        colors:["Black", "White"],
        players: {
            "Alan Anderson": {
            number:0,
            shoe:16,
            points:22,
            rebounds:12,
            assists:12,
            steals:3,
            blocks:1,
            slamDunks:1,
        },

            "Reggie Evans": {
                number:30,
                shoe:14,
                points:12,
                rebounds:12,
                assists:12,
                steals:12,
                blocks:12,
                slamDunks:7,
        },

            "Brook Lopez": {
                number:11,
                shoe:17,
                points:17,
                rebounds:19,
                assists:10,
                steals:3,
                blocks:1,
                slamDunks:15,
            },

            "Mason Plumlee": {
                number:1,
                shoe:19,
                points:26,
                rebounds:12,
                assists:6,
                steals:3,
                blocks:8,
                slamDunks:5,
            },

            "Jason Terry": {
                number:31,
                shoe:15,
                points:19,
                rebounds:2,
                assists:2,
                steals:4,
                blocks:11,
                slamDunks:1,
            },

          }
            
        
    }

    const away = {
        teamName:"Charlotte Hornets",
        colors:["Turqoise", "Purple"],
        players:  {
            "Jeff Adrien": {
            number:4,
            shoe:18,
            points:10,
            rebounds:1,
            assists:1,
            steals:2,
            blocks:7,
            slamDunks:2,
        },

            "Bismak Biyombo": {
                number:0,
                shoe:16,
                points:12,
                rebounds:4,
                assists:7,
                steals:7,
                blocks:15,
                slamDunks:10,
        },

            "DeSagna Diop": {
                number:2,
                shoe:14,
                points:24,
                rebounds:12,
                assists:12,
                steals:4,
                blocks:5,
                slamDunks:5,
            },

            "Ben Gordon": {
                number:8,
                shoe:15,
                points:33,
                rebounds:3,
                assists:2,
                steals:1,
                blocks:1,
                slamDunks:0,
            },
            "Brendan Haywood": {
                number:33,
                shoe:15,
                points:6,
                rebounds:12,
                assists:12,
                steals:22,
                blocks:5,
                slamDunks:12,
            },

          }
    }
}

function homeTeamName() {
    let object = gameObject();
    return object["home"]["teamName"];
  }
  

function homeColors(){
    let object1 = gameObject1();
    return object1["home"]["colors"]
}

function homePlayers(){
    let object2 = gameObject2()
    return object2["home"]["players"]
}

function awayTeamName(){
    let object3 = gameObject3()
    return object2["away"]["players"]
}

function awayColors(){
    let obj = gameObj()
    return obj["away"]["colors"]
}

function awayPlayers(){
    let obj2 = gameobj2()
    return obj2["away"]["players"]
}