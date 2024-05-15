class Book {
  constructor() {
  	this.users = [];
  }
  
  addUser(name,age,phone) {
    const newUser = { name, age, phone };
    this.users.push(newUser);
  }
  
  showUsers() {
    console.log("Wszyscy użytkownicy w książce: ");
    /*for(const user of this.users) {
      console.log(user);
    }*/
    this.users.forEach(user => {
      console.log(`Name: ${user.name}, Age: ${user.age}, Phone: ${user.phone}`);
    });
  }
  
  findByName(name) {
    /*for(const user of this.users) {
      if(user.name === name) {
        console.log(user);
        return;
      }
    }
    console.log(false);*/
    const user = this.users.find(user => user.name === name);
    if(user) {
      console.log(user);
    }
    else {
      console.log(false);
    }
  }
  
  findByPhone(phone) {
    /*for(const user of this.users) {
      if(user.phone === phone) {
        console.log(user);
        return;
      }
    }
    console.log(false);*/
    const user = this.users.find(user => user.phone === phone);
    if(user) {
      console.log(user);
    }
    else {
      console.log(false);
    }
  }
  
  getCount() {
    console.log(this.users.length);
  }
}

let book = new Book();
book.getCount();
book.showUsers();
book.addUser("user1",19,123456789);
book.addUser("user2",20,987654321);
book.getCount();
book.showUsers();
book.findByName("user1");
book.findByPhone(987654321);
