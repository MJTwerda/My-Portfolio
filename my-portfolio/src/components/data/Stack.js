export const stack = [
    {
        type: 'Front',
        list: [
            {
                name: 'JavaScript',
                icon: require('../utils/icons/javascript-original.png').default,
            },
            {
                name: 'HTML5',
                icon: require('../utils/icons/html-original.png').default,
            },
            {
                name: 'CSS3',
                icon: require('../utils/icons/css-original.png').default,
            },
            {
                name: 'React',
                icon: require('../utils/icons/react-original.png').default,
            },
            {
                name: 'Redux',
                icon: require('../utils/icons/redux-original.png').default,
            },
            {
                name: 'TypeScript',
                icon: require('../utils/icons/typescript-original.png').default,
            },
        ]
    },
    {
        type: 'Back',
        list: [
            {
                name: 'NodeJs',
                icon: require('../utils/icons/nodejs-original.png').default,
            },
            {
                name: 'PostgreSQL',
                icon: require('../utils/icons/postgresql-original.png').default,
            },
            /* {
                name: 'ExpressJs',
                icon: require('../utils/icons/expressjs-original.png').default,
            }, */
            {
                name: 'Sequelize',
                icon: require('../utils/icons/sequelize-original.png').default,
            },
            {
                name: 'Postman',
                icon: require('../utils/icons/postman-original.png').default,
            },
            {
                name: 'Swagger',
                icon: require('../utils/icons/swagger-original.png').default,
            },
        ]
    },
]

export const imageStack = [
    {
        icon: require('../utils/icons/javascript-original.png').default,
        position: 0
    },
    {
        icon: require('../utils/icons/html-original.png').default,
        position: 1
    },
    {
        icon: require('../utils/icons/css-original.png').default,
        position: 2
    },
    {
        icon: require('../utils/icons/react-original.png').default,
        position: 3
    },
    {
        icon: require('../utils/icons/redux-original.png').default,
        position: 4
    },
    {
        icon: require('../utils/icons/typescript-original.png').default,
        position: 5
    },
    {
        icon: require('../utils/icons/nodejs-original.png').default,
        position: 6
    },
    {
        icon: require('../utils/icons/postgresql-original.png').default,
        position: 7
    },
    {
        icon: require('../utils/icons/socialIcons/github-logos1.png').default
    },
    {
        icon: require('../utils/icons/sequelize-original.png').default,
        position: 8
    },
    {
        icon: require('../utils/icons/postman-original.png').default,
        position: 9
    },
    {
        icon: require('../utils/icons/swagger-original.png').default,
        position: 10
    },
]

export const mixCards = (cards) => {
    let cardOnGame = [];

    for (let i = 0; i < cards.length; i++) {
        cardOnGame.push({icon: cards[i].icon, position: cards[i].position})
        cardOnGame.unshift({icon: cards[i].icon, position: cards[i].position})
    }
    cardOnGame.forEach(card => {
        card.position = Math.random();
    })
    return cardOnGame.sort((a, b) => a.position - b.position);
}
