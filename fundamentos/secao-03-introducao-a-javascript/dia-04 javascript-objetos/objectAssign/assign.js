// let person = {
//     name: 'Alberto',
//     lastName: 'Gomes',
//     age: 20,
//   };
  
//   let info = {
//     age: 23,
//     job: 'engenheiro',
//   };
  
//   let family = {
//     children: ['Maria', 'João'],
//     wife: 'Ana',
//   };
  
//   Object.assign(person, info, family)
//   console.log(person)

// let person = {
//     name:'Roberto',
//   };
  
//   let lastName = {
//     lastName: 'Silva',
//   };
  
//   let newPerson = Object.assign({},person,lastName);
//   newPerson.name = 'Gilberto';
//   console.log(newPerson);
//   console.log(person);
  

// let object = { a: 1, b: 2, c: 3 };

// for (let property in object) {
//   console.log(property + ' = ' + object[property]);
// }


// let top3Albums = {
//     1: 'Nightfall in Middle-Earth',
//     2: 'Imaginations from the Other Side',
//     3: 'Somewhere Far Beyond',
//   };
//   console.log(Object.entries(top3Albums));

let band = {
    name: 'Blind Guardian',
    formedIn: 1986,
    lastAlbum: 'Beyond the Red Mirror',
  };
  
  let info = {
    genre: 'Power Metal',
    lastAlbum: 'Twilight Orchestra: Legacy of the Dark Lands',
  };

  console.log(Object.assign(band,info));
