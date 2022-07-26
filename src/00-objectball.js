function gameObject() {
return {
        home: {
            teamName: 'Brooklyn Nets',
            colors: ['black', 'white'],
            players: {
                'Alan Anderson': {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1
                },
                'Reggie Evans': {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7
                },
                'Brook Lopez': {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15
                },
                'Mason Plumlee': {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5
                },
                'Jason Terry': {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1
                }
            }   
        },
        away: {
            teamName: 'Charlotte Hornets',
            colors: ['turquoise', 'purple'],
            players: {
                'Jeff Adrien': {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2 
                },
                'Bismak Biyombo': {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10 
                },
                'DeSagna Diop': {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5 
                },
                'Ben Gordon': {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0 
                },
                'Brendan Haywood': {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12 
                },
            }
        }
    } 
}

//Functions

const game = gameObject

function numPointsScored(playerName) {
    const game = gameObject();
    for (const key in game) {
        const team = game[key]
        const players = team['players']
        if (players[playerName] !== undefined) {
            return players[playerName]['points'];
        }
    } 
}

function shoeSize(playerName) {
    const game = gameObject();
    for (const key in game) {
        const team = game[key]
        const players = team['players']
        if (players[playerName] !== undefined) {
            return players[playerName]['shoe'];
        }
    }
}

function teamColors(teamName) {
    const game = gameObject();
    for (const key in game) {
        const team = game[key]
        if (team['teamName'] === teamName) {
            return team['colors'];
        }
    }
}

function teamNames() {
    const game = gameObject();
    const array = [];
    for (const key in game) {
        const team = game[key];
        array.push(team['teamName']);
    }
    return array;
}

function playerNumbers(teamName) {
    const game = gameObject();
    const array = [];
    for (const key in game) {
        const team = game[key];
        if (team['teamName'] === teamName) {
            const players = team['players'];
            for (player in players) {
                array.push(players[player]['number'])
            }
        } return array;
    }
}

function playerStats(playerName) {
    const game = gameObject();
    for (const key in game) {
        const team = game[key]
        const players = team['players'];
        if (players[playerName] !== undefined) {
            return players[playerName];
        }
    }
}

function bigShoeRebounds() {
    let shoeCounter = null;
    let reboundCounter = null;
    let playerBiggestShoe = null;
    const game = gameObject();
    for (const key in game) {
        const team = game[key];
        const players = team['players'];
        for (player in players) {
            const currentShoe = players[player]['shoe'];
            if (currentShoe > shoeCounter) {
                shoeCounter = currentShoe;
                playerBiggestShoe = player;
                reboundCounter = players[player]['rebounds'];
            }
        }
    } return `${playerBiggestShoe} has big feet! His size-${shoeCounter} shoes were the largest of any player in last night's game, where he had ${reboundCounter} rebounds.`
}