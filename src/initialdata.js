import { v4 } from 'uuid'

/***
 * Contains initial data
 */
const initialdata = [{
    id: v4(),
    brunch: "Breakfast",
    items: [{
        id: v4(),
        name: 'poha',
        calories: 200
    },
    {
        id: v4(),
        name: 'milk',
        calories: 140
    },
    {
        id: v4(),
        name: 'bread',
        calories: 300
    }

    ]
},
{
    id: v4(),
    brunch: "Lunch",
    items: [{
        id: v4(),
        name: 'dal',
        calories: 300
    },
    {
        id: v4(),
        name: 'roti',
        calories: 200
    }
    ]
},
{
    id: v4(),
    brunch: "Dinner",
    items: [{
        id: v4(),
        name: 'paneer',
        calories: 500
    },
    {
        id: v4(),
        name: 'roti',
        calories: 300
    },
    {
        id: v4(),
        name: 'cucumbers',
        calories: 100
    },
    ]
}
]

export default initialdata;