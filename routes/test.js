const carData = [
    {
        "car": "Toyota Prius",
        "img": "../public/imgs/prius.jpg",
        "roadtrips": 4,
        "outdoor": 1,
        "alone": 4,
        "electric": 4,
        "miami": 0,
        "batman": 0
    },
    {
        "car": "Batmobile",
        "img": "../public/imgs/batmobile.jpeg",
        "roadtrips": 2,
        "outdoor": 5,
        "alone": 1,
        "electric": 1,
        "miami": 2,
        "batman": 5
    },
    {
        "car": "Toyota Highlander",
        "img": "../public/imgs/highlander.jpg",
        "roadtrips": 4,
        "outdoor": 4,
        "alone": 4,
        "electric": 2,
        "miami": 3,
        "batman": 2
    },
    {
        "car": "Jeep Wrangler",
        "img": "../public/imgs/jeep.jpg",
        "roadtrips": 4,
        "outdoor": 5,
        "alone": 4,
        "electric": 1,
        "miami": 2,
        "batman": 4
    },
    {
        "car": "Lamborghini",
        "img": "../public/imgs/lamborghini.jpg",
        "roadtrips": 1,
        "outdoor": 1,
        "alone": 2,
        "electric": 1,
        "miami": 5,
        "batman": 4
    },
    {
        "car": "Mazda Miata",
        "img": "../public/imgs/miata.jpg",
        "roadtrips": 3,
        "outdoor": 1,
        "alone": 2,
        "electric": 3,
        "miami": 4,
        "batman": 2
    },
    {
        "car": "Mini Van",
        "img": "../public/imgs/minivan.jpg",
        "roadtrips": 5,
        "outdoor": 2,
        "alone": 5,
        "electric": 2,
        "miami": 1,
        "batman": 1
    },
    {
        "car": "Tesla Model 3",
        "img": "../public/imgs/tesla.jpg",
        "roadtrips": 4,
        "outdoor": 3,
        "alone": 4,
        "electric": 5,
        "miami": 5,
        "batman": 4
    },
    {
        "car": "Van Life 4 U",
        "img": "../public/imgs/vanlife.jpg",
        "roadtrips": 5,
        "outdoor": 3,
        "alone": 3,
        "electric": 1,
        "miami": 1,
        "batman": 1
    }
];

const userData =  {
        "roadtrips": 1,
        "outdoor": 1,
        "alone": 1,
        "electric": 1,
        "miami": 1,
        "batman": 1
    }


let eachDiffArr = [];   // Holds the difference every user and data (userData.roadtrip - carData.roadtrip... for every property)
let totalSumOfDiff = 0; // Holds the total sum of the difference for every car in our data
let finalResultArr = [];    // Holds all total sums of all the differences between the user's values and our cars

// Loop through our carData array
for (let i = 0; i < carData.length; i++) {
    // Loop through the properties in the user's data
    for (let key in userData) {
        // Get the difference between the user's point for a property and the same property in current iteration's car in our data
        eachDiffArr.push( Math.abs(userData[key] - carData[i][key]) ); 
    }
    // When it finishes looping through all the first car's properties, getting the difference on every property
    // Sum all those differences 
    totalSumOfDiff = eachDiffArr.reduce( (total, points) => total + points, 0);
    // Push the value to an array
    finalResultArr.push(totalSumOfDiff);
    // Clear the array to start pushing the differences between the user's data and the next car
    eachDiffArr = [];
}

console.log(finalResultArr);
const x = finalResultArr.indexOf((Math.min(...finalResultArr)));
console.log(carData[x]);