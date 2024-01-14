

// // STEP 1
// // Cat class created using a named declaration
// class Cat {
//     constructor() {
//     }
//   }
  
//   // Dog class created using an anonymous declaration
//   const Dog = class {
//     constructor() {
//     }
//   }
  


// // STEP 2
// // Cat class created using a named declaration
// class Cat {
//     constructor() {
//     }
//   }
  
//   // Dog class created using an anonymous declaration
//   const Dog = class {
//     constructor() {
//     }
//   }
//   // Creating instances of Cat
//   const myCat = new Cat()




// // // STEP 3
// // Animal class created using constructor syntax
// class Animal {
//     constructor() {
//     }
//     // Method to display a message when called
//     display() {
//       console.log("The Animal has been created")
//     }
//   }
//   // Creating an instance of the Animal class
//   const myAnimal = new Animal()
//   myAnimal.display()




// // STEP 4
// // Animal class created using constructor syntax
// class Animal {
//     constructor(message) {
//       this._message = message
//     }

//     display() {
//       console.log(this._message)
//     }
//   }
//   const myAnimal = new Animal("The Animal has been created")
//   myAnimal.display()




// // STEP 5
// // Animal class created using constructor syntax
// class Animal {
//     constructor(type, breed, color, height, length) {
//       this._type = type
//       this._breed = breed
//       this._color = color
//       this._height = height
//       this._length = length
//     }
//   }
//   const myAnimal = new Animal("Dog", "Labrador", "Golden", "24 inches", "36 inches")




// // STEP 6
// // Animal class created using constructor syntax
// class Animal {
//     constructor(type, breed, color, height, length) {
//       this._type = type
//       this._breed = breed
//       this._color = color
//       this._height = height
//       this._length = length
//     }
//   } 
//   const myAnimal = new Animal("Dog", "Labrador", "Golden", "24 inches", "36 inches")  
//   // Displaying all properties using a for-in loop
//   console.log("Properties of the Animal class:")
//   for (const property in myAnimal) {
//     console.log(`${property}: ${myAnimal[property]}`)
//   }



// // STEP 7
// // Animal class created using constructor syntax
// class Animal {
//     constructor(type, breed, color, height, length) {
//       this._type = type
//       this._breed = breed
//       this._color = color
//       this._height = height
//       this._length = length
//     }
//     speak() {
//       if (this.type.toLowerCase() === "dog") {
//         return `The ${this._color} dog is barking!`
//       } else if (this.type.toLowerCase() === "cat") {
//         return `The ${this._color} cat is meowing!`
//       } else {
//         return "Unknown animal type."
//       }
//     }
//   }
//   // Creating an instance of the Animal class with specific values
//   const myDog = new Animal("Dog", "Labrador", "Golden", "24 inches", "36 inches")
//   const myCat = new Animal("Cat", "Persian", "White", "12 inches", "18 inches")
//   // Calling the speak method for both instances
//   console.log(myDog.speak()) // Output: The Golden dog is barking!
//   console.log(myCat.speak()) // Output: The White cat is meowing!




// // STEP 8
// class Animal {
//     #type
//     #breed
//     #color
//     #height
//     #length
//     constructor(type, breed, color, height, length) {
//       this.#type = type
//       this.#breed = breed
//       this.#color = color
//       this.#height = height
//       this.#length = length
//     }
  
//     #checkType() {
//       if (this.#type.toLowerCase() === "dog") {
//         return "dog"
//       } else if (this.#type.toLowerCase() === "cat") {
//         return "cat"
//       } else {
//         return "unknown"
//       }
//     }
//     speak() {
//       const animalType = this.#checkType()
//       return `The ${animalType} has made a noise!`
//     }
//   }
//   const myDog = new Animal("Dog", "Labrador", "Golden", "24 inches", "36 inches")
//   const myCat = new Animal("Cat", "Persian", "White", "12 inches", "18 inches")
//   console.log(myDog.speak())
//   console.log(myCat.speak())




// // STEP 9
// // Define the findWords method for the String prototype
// String.prototype.findWords = function(word) {
//     // Use a regular expression to find all instances of the word
//     const regex = new RegExp('\\b' + word + '\\b', 'gi')
//     const matches = this.match(regex)
  
//     // Display the number of times the word was found
//     if (matches) {
//       alert(`The word "${word}" was found ${matches.length} times.`)
//     } else {
//       alert(`The word "${word}" was not found.`)
//     }
//   }
//   const paragraph = "This is an example paragraph. This paragraph contains the word example multiple times."
//   paragraph.findWords("example")