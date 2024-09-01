const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
  ];

  const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
  ];

  // Some and Every Checks
  // Array.prototype.some() // is at least one person 19 or older?
  const date = new Date();

  const isAdult = people.some(pep => date.getFullYear() - pep.year >= 19);
  console.log(isAdult);

  // Array.prototype.every() // is everyone 19 or older?
  const isAllAdults = people.every(pep => date.getFullYear() - pep.year >= 19);
  console.log(isAllAdults);

  // Array.prototype.find()
  // Find is like filter, but instead returns just the one you are looking for
  // find the comment with the ID of 823423
  const ele = comments.find(comment => comment.id === 823423);
  console.log(ele);

  // Array.prototype.findIndex()
  // Find the comment with this ID
  // delete the comment with the ID of 823423
  const idx = comments.findIndex(comment => comment.id === 823423);
  // comments.splice(idx, 1); -> mutable way

  //immutable way
  const newComments = [
    ...comments.slice(0, idx),
    ...comments.slice(idx + 1)
  ]
  console.log(newComments);