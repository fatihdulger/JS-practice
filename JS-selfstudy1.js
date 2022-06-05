
// object literals

/*let user = {
  name: 'crystal',// key -value pair
  age: 30,
  email: 'dulgerfatih@gmail.com',
  location: 'london',
  blogs: ['Why are putting on weight?', '10 things to make with computer'],
  login: function(){
    console.log('the user logged in');
  },
  logout: function(){
    console.log('the user logged out');
  },
  logBlogs: function(){
    
  }
}; */
 
/* user.login();
user.logout();  

console.log(user);
console.log(user.name);
//user.age = 35;
console.log(user.age);
console.log(user['email']);
user['name'] = 'chun-li';
console.log(user['name']);
console.log(user.location);
console.log(typeof user);

const name = 'mario';
name.toUpperCase(); */



//This = this can refer to many things such as element it is targeted, window object, an object inside the object literals( person object), or it can refer to a function as global scope inside another function as shown below examples.
// precedence for 'this'  bind()> call/return() > object object > global scope***
const person = {
    firstName: "Fatih",
    lastName: "Dulger",
    id: 5510,
    fullName : function(){
      return this.firstName + " " + this.lastName;
    }
    
  };
  document.getElementById("demo").innerHTML = person.fullName();
  
  const person1 = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  
  const person2 = {
    firstName:"John",
    lastName: "Doe",
  }
  
  // Return "John Doe":
  person1.fullName.call(person2);
  let x = person1.fullName.call(person2);
  document.getElementById('demo').innerHTML = x
  
  //another example shows function borrowing with bind()
  
  const personA = { // we just changed becuase person as a variable used before!
    firstName:"John",
    lastName: "Doe",
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  
  const member = {
    firstName:"Hege",
    lastName: "Nilsen",
  }
  
  let fullName = personA.fullName.bind(member);
  
  document.getElementById("demo").innerHTML = fullName(); // this will put Hege Nilsen inside p tag because id was demo we call id.
  
  // in arrow function this  acts as global window object. it has to be in normal function. it not anymore refer to an object literal item.
  
  /* let user = {
    name: 'crystal',// key -value pair
    age: 30,
    email: 'dulgerfatih@gmail.com',
    location: 'london',
    blogs: ['Why are putting on weight?', '10 things to make with computer'],
    login: function(){
      console.log('the user logged in');
    },
    logout: function(){
      console.log('the user logged out');
    },
    logBlogs: function(){
      //console.log(this.blogs);
      this.blogs.forEach(samsun => {
        console.log(samsun);
      })
      
    }
  }; 
  user.logBlogs();
  user.logout();
  user.login(); */
  
const blogs =[
    { title: 'why mac & cheese rules', likes:30 },
    { title: '10 things to make with marmite', likes: 50 }
];
console.log(blogs); 

let user = {
    name: 'crystal',// key -value pair
    age: 30,
    email: 'dulgerfatih@gmail.com',
    location: 'london',
    blogs: [{ title: 'why mac & cheese rules', likes:30 },
    { title: '10 things to make with marmite', likes: 50 }],  //['Why are putting on weight?', '10 things to make with computer'],
    login/*: function*/(){ 
      console.log('the user logged in');
    },
    logout(){
      console.log('the user logged out');
    },
    logBlogs(){  /*still acts like a regular function
      //console.log(this.blogs);
      //this.blogs.forEach(samsun => {
        //console.log(samsun);*/
        this.blogs.forEach(blog => {
            console.log(blog.title, blog.likes);
        });
      
    }
  };
  user.login();
  
  console.log(blogs);
  user.logBlogs();

  
