const currentUser = {
  name: "Jan",
  surname: "Kowalski",
  email: "jan.kowalski@gmail.com",
  www: "www.jankowalskidev.pl",
  userType: "trial",
  isActive: true,
  show() {
    /*for(let val of Object.values(this)) {
      console.log(val);
    }*/
    console.log("Name: " + this.name);
    console.log("Surname: " + this.surname);
    console.log("Email: " + this.email);
    console.log("WWW: " + this.www);
    console.log("User Type: " + this.userType);
    console.log("Is Active: " + this.isActive);
  },
  setActive(active) {
    this.isAcive = active;
  }
}

currentUser.show();
currentUser.setActive(false);
currentUser.show();
