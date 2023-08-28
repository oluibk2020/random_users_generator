//spinner
const spinner = document.body.querySelector('#spinner')

function generateUser(user) {
    //showspinner
    spinner.style.display = 'block'
    //get api data
    fetch("https://randomuser.me/api/")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    //turn-off spinner
    spinner.style.display = 'none'

    //data info saved as variable
    const picture = data.results[0].picture.large; //picture;
    const name = `${data.results[0].name.first} ${data.results[0].name.last}`; //fullname;
    const mail = data.results[0].email; //email;
    const phone = data.results[0].phone; //phone;
    const location = data.results[0].location.state; //location;
    const age = data.results[0].dob.age; //age;
    const gender = data.results[0].gender; //'male'

    //fixing background color
    if (gender === "male") {
      document.body.style.backgroundColor = "#4682b4";
    } else {
      document.body.style.backgroundColor = "#663399";
    }

    //putting it on the dom
    document.body.querySelector(
      "#name"
    ).innerHTML = `<span class="font-bold">Name: </span>${name}`;
    document.body.querySelector(
      "#location"
    ).innerHTML = `<span class="font-bold">Location: </span>${location}`;
    document.body.querySelector(
      "#email"
    ).innerHTML = `<span class="font-bold">Email: </span>${mail}`;
    document.body.querySelector(
      "#phone"
    ).innerHTML = `<span class="font-bold">Phone: </span>${phone}`;
    document.body.querySelector(
      "#age"
    ).innerHTML = `<span class="font-bold">Age: </span>${age}`;
    document.body.querySelector("#image").src = picture;

    

    
  })
}


  //adding event listner
  const button = document.body.querySelector("#generate");

  button.addEventListener("click", generateUser);

  document.addEventListener("DOMContentLoaded", generateUser());
//   generateUser()
