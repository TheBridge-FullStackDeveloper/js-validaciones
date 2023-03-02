const myForm = document.getElementById("my-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const msg = document.querySelector(".msg");

function onSubmit(e) {
  e.preventDefault();
  const reEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; //patron del correo
  
  if (nameInput.value === "" || emailInput.value === "") {
    msg.innerHTML = "Please enter all fields";
    msg.style.background = "red";
  } else if (reEmail.test(emailInput.value) !== true) {
    msg.innerHTML = "Please enter a correct email";
    msg.style.background = "red";
  } else {
    msg.innerHTML = "success";
    msg.style.background = "green";
  }
  setTimeout(function () {
    msg.innerHTML = "";
  }, 3000);
}

myForm.addEventListener("submit", onSubmit);

//* explicación expresiones regulares
// let re;

// re = /hello/i;
// re = /^h/i;

// re = /World$/i

// re = /^hello$/i

// re = /^h.llo$/i

// const result = re.test('hallo')
// console.log(result)
