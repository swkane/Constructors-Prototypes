//###################################################################
//        __
//   ____/ /___  ____ ______
//  / __  / __ \/ __ `/ ___/
// / /_/ / /_/ / /_/ (__  )
// \__,_/\____/\__, /____/
//            /____/

// Dog Constructor & Prototype
function Dog (options) {
  this.status = options.status;
  this.color = options.color;
  this.hungry = options.hungry;
}

let sadie = new Dog({
  status: 'normal',
  color: 'black',
  hungry: false,
  owner: 'mason'
});

let moonshine = new Dog({hungry: true});

let atticus = new Dog({});


// console.log(sadie.color);

// Instances of Dog
// Needed: sadie, moonshine, atticus

//     __
//    / /_  __  ______ ___  ____ _____  _____
//   / __ \/ / / / __ `__ \/ __ `/ __ \/ ___/
//  / / / / /_/ / / / / / / /_/ / / / (__  )
// /_/ /_/\__,_/_/ /_/ /_/\__,_/_/ /_/____/

// Human Constructor & Prototype
function Human (options) {
  this.cool = options.cool;
}

let mason = new Human({cool: false});

let julia = new Human({cool: true});

Human.prototype.pet = function(dog) {
  dog.status = 'happy';
}

Human.prototype.feed = function(dog) {
  dog.hungry = false;
}

// Instances of Human
// Needed: mason, julia
