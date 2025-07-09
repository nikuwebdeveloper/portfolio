// Dependency relationship is: developerData -> gameData -> companyData

const developerData = {
    "Hironobu Sakaguchi":
    {
        born: 1962,
        nationality: "Japanese"
    },
    "Nobuo Uematsu":
    {
        born: 1959,
        nationality: "Japanese"
    },
    "Shinji Hashimoto":
    {
        born: 1958,
        nationality: "Japanese"
    },
    "Yoshitaka Amano":
    {
        born: 1952,
        nationality: "Japanese"
    },
    "Naoki Yoshida":
    {
        born: 1973,
        nationality: "Japanese"
    },
    "Yoshinori Kitase":
    {
        born: 1966,
        nationality: "Japanese"
    },
    "Tetsuya Nomura":
    {
        born: 1970,
        nationality: "Japanese"
    },
}

const gameData = {
    "Final Fantasy":
    {
        name: "Final Fantasy",
        developers: [
            // developerData["Yoshinori Kitase"],
        ],
        year: 1987
    },
    "Final Fantasy II":
    {
        name: "Final Fantasy II",
        developers: [
            // developerData["Yoshinori Kitase"],
        ],
        year: 19
    },
    "Final Fantasy III":
    {
        name: "Final Fantasy III",
        developers: [
            // developerData["Yoshinori Kitase"],
        ],
        year: 19
    },
    "Final Fantasy IV":
    {
        name: "Final Fantasy IV",
        developers: [
            // developerData["Yoshinori Kitase"],
        ],
        year: 19
    },
    "Final Fantasy V":
    {
        name: "Final Fantasy V",
        developers: [
            // developerData["Yoshinori Kitase"],
        ],
        year: 19
    },
    "Final Fantasy VI":
    {
        name: "Final Fantasy VI",
        developers: [
            developerData["Yoshinori Kitase"],
            developerData["Tetsuya Nomura"],
        ],
        year: 1994
    },
    "Final Fantasy VII":
    {
        name: "Final Fantasy VII",
        developers: [
            developerData["Yoshinori Kitase"],
            developerData["Tetsuya Nomura"],
        ],
        year: 1997
    },
    "Final Fantasy VIII":
    {
        name: "Final Fantasy VIII",
        developers: [
            developerData["Yoshinori Kitase"],
            developerData["Tetsuya Nomura"],
        ],
        year: 1999
    },
    "Final Fantasy IX":
    {
        name: "Final Fantasy IX",
        developers: [
            // developerData["Yoshinori Kitase"],
        ],
        year: 19
    },
    "Final Fantasy X":
    {
        name: "Final Fantasy X",
        developers: [
            // developerData["Yoshinori Kitase"],
        ],
        year: 19
    },
}

const companyData = {
    "Square Enix": {
        name: "Square Enix",
        games: [
            gameData["Final Fantasy VI"],
            gameData["Final Fantasy VII"],
            gameData["Final Fantasy VIII"],
        ]
    },
};


let gamesList = companyData["Square Enix"].games.map(game => game.name).join(", ");

console.log(`${companyData["Square Enix"].name} has published ${gamesList}.`)