// start with strings, numbers and booleans
    let name = 'Kanishk';
    let lastName = name;
    lastName = 'Badola';
    console.log(name, lastName);

    let age = 29;
    let newAge = age;
    newAge = 30;
    console.log(age, newAge);

    // Let's say we have an array
    const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

    // and we want to make a copy of it.

    // You might think we can just do something like this:
    const newPlayers = players;

    // however what happens when we update that array?
    newPlayers[3] = 'Jake';

    // now here is the problem!
    console.log(newPlayers)

    // oh no - we have edited the original array too!
    console.log(players);

    // Why? It's because that is an array reference, not an array copy. They both point to the same array!

    // So, how do we fix this? We take a copy instead!

    // one way
    const newPlayersCopy1 = players.slice();

    // or create a new array and concat the old one in
    const newPlayersCopy2 = [].concat(players);

    // or use the new ES6 Spread
    const newPlayersCopy3 = [...players];

    // now when we update it, the original one isn't changed
    newPlayersCopy1[3] = 'Tyler';
    newPlayersCopy2[3] = 'Durden';
    newPlayersCopy3[3] = 'Kai';

    console.log('Original: ', players);
    console.log(newPlayersCopy1);
    console.log(newPlayersCopy2);
    console.log(newPlayersCopy3);

    // The same thing goes for objects, let's say we have a person object

    // with Objects
    const person = {
      name: 'Wes Bos',
      age: 80
    };

    // and think we make a copy:
    const newPerson = person;
    newPerson.name = 'Kanishk Badola'
    console.log(person);
    console.log(newPerson);

    // how do we take a copy instead?
    newPerson.name = 'Wes Bos';

    const newPersonCopy1 = Object.assign({}, person, /* Add more properties */ {age: 29, hobby: 'music'});
    newPersonCopy1.name = 'Kanishk Badola';
    console.log(person);
    console.log(newPersonCopy1);

    // We will hopefully soon see the object ...spread
    const newPersonCopy2 = {...person, age: 4, hobby: 'Fun and play!!'};
    newPersonCopy2.name = 'Naughty Doggo';
    console.log(person);
    console.log(newPersonCopy2);

    // Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
    const naughtyInfo = {
        name: 'Naughty Doggo',
        age: 4,
        likings: {
            food: 'Chicken',
            friend: 'Kiwi',
            activity: {
                favourite: 'Walking',
                hated: 'Bathing'
            }
        }
    };

    // Update friend to Jeenu
    const naughtyInfoCopy1 = {
        ...naughtyInfo,
        likings: {
            ...naughtyInfo.likings,
            friend: 'Jeenu'
        }
    };
    console.log(naughtyInfo);
    console.log(naughtyInfoCopy1);

    // Update favourite activity to Play
    const naughtyInfoCopy2 = {
        ...naughtyInfo,
        likings: {
            ...naughtyInfo.likings,
            activity: {
                ...naughtyInfo.likings.activity,
                favourite: 'Play'
            }
        }
    };

    console.log(naughtyInfo);
    console.log(naughtyInfoCopy2);

    