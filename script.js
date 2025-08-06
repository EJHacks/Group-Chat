const database = firebase.database().ref()
const messagesDiv = document.getElementById("all-messages");
const username = document.getElementById("username");
const message = document.getElementById("message");
const submitButton = document.getElementById("send-btn");


submitButton.onclick = updateDB;

function updateDB(event) {
  event.preventDefault();

  if(username.value == ""){
    alert("Please insert a username!")
  } else{

  
  let data = {
    "username": username.value,
    "message": message.value
  }
}
  console.log(data)

  database.push(data)

  message.value = ""
  username.value = ""
}

database.on('child_added', addMessageToBoard);


function addMessageToBoard(rowData) {
  let data = rowData.val();
  console.log(data)

  let singleMessage = makeSingleMessageHTML(data.username, data.message);
  messagesDiv.appendChild(singleMessage);


}
function makeSingleMessageHTML(usernameTxt, messageTxt) {
  let parentDiv = document.createElement("div");
  parentDiv.className = 'single-message';
  let usernameP = document.createElement("p");
  usernameP.innerHTML = usernameTxt;
  usernameP.className = 'single-message-username'

  parentDiv.append(usernameP);
  let messageP = document.createElement("p");
  messageP.innerHTML = messageTxt;
  parentDiv.append(messageP);
  return parentDiv;
}

/**
 * @BONUS add an onkeyup event handler to the form HTML
 * element so the user can also submit the form with the
 * Enter key
 *
 * @BONUS use an arrow function
 */
