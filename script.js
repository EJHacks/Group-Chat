const database = firebase.database().ref()
const messagesDiv = document.getElementById("all-messages");
const username = document.getElementById("username");
const message = document.getElementById("message");
const submitButton = document.getElementById("send-btn");
const email = document.getElementById("email");


submitButton.onclick = updateDB;

function updateDB(event) {
  event.preventDefault();

  if (username.value == "") {
    alert("Please insert a username!");
    return; 
  }

  let data = {
    "username": username.value,
    "message": message.value,
    "email":  email.value
  };

  console.log(data);
  database.push(data);

  message.value = "";
  username.value = "";
  email.value = "";
}

database.on('child_added', addMessageToBoard);


function addMessageToBoard(rowData) {
  let data = rowData.val();
  console.log(data)

  let singleMessage = makeSingleMessageHTML(data.username, data.message, data.email);
  messagesDiv.appendChild(singleMessage);


}
function makeSingleMessageHTML(usernameTxt, messageTxt, emailTxt) {
  let parentDiv = document.createElement("div");
  parentDiv.className = 'single-message';

  let usernameP = document.createElement("p");
  usernameP.textContent = usernameTxt;
  usernameP.className = 'single-message-username';

  let emailP = document.createElement("p");
  emailP.textContent = emailTxt;
  emailP.className = 'single-message-email';

  let messageP = document.createElement("p");
  messageP.textContent = messageTxt;

  parentDiv.append(usernameP, messageP, emailP);
  return parentDiv;
}

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const d = new Date();
let month = months[d.getMonth()];



/**
 * @BONUS add an onkeyup event handler to the form HTML
 * element so the user can also submit the form with the
 * Enter key
 *
 * @BONUS use an arrow function
 */
