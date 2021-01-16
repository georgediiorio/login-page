// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyA3fRTBNDV39mkelf9zb-4AgwXKp5HJOzg",
    authDomain: "contact-form-8ae19.firebaseapp.com",
    databaseURL:"https://contact-form-8ae19-default-rtdb.firebaseio.com/",
    projectId: "contact-form-8ae19",
    storageBucket: "contact-form-8ae19.appspot.com",
    messagingSenderId: "497820250688",
    appId: "1:497820250688:web:a35f4fb4eea2c2823265a5"
  };
  firebase.initializeApp(firebaseConfig);

// REFERENCE MESSAGES IN DATABASE
//let messagesRef = firebase.database().ref('messages');

// LISTEN FOR FORM SUBMIT
document.getElementById('contactForm').addEventListener('submit', submitForm);

// SUBMIT FORM
function submitForm(e){
    e.preventDefault();

    //GET VALUES 
    let name = getInputVal("name");
    let company = getInputVal("company");
    let email = getInputVal("email");
    let phone = getInputVal("phone");
    let message = getInputVal("message");

    //SAVE MESSAGE
    saveMessage(name, company, email, phone, message);


}

//FUNCTION TO GET FROM VALUES
function  getInputVal(id){
    return document.getElementById(id).value;
}

//SAVE MESSAGES TO FIREBASE
function saveMessage(name, company, email, phone, message){
    let newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        company: company,
        email: email,
        phone: phone,
        message: message
    });
}
