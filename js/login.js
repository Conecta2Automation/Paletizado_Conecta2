let inputUsername = document.getElementById('username');
let inputPassword = document.getElementById('password');
document.getElementById('console-message').readOnly = true;


let usernameValidation, passwordValidation;

var collection = "credentials";
var company;

function Update(val,type){
    if(type == 'username'){
        usernameValidation = val;
    }
    else if(type == 'password'){
        passwordValidation = val;
    }
}

var firebaseConfig = {
    apiKey: "AIzaSyDj48rbYX2fQ5MaAb8MUFhiGrthtiDK67k",
    authDomain: "fir-paletizado.firebaseapp.com",
    projectId: "fir-paletizado",
    storageBucket: "fir-paletizado.appspot.com",
    messagingSenderId: "473340790630",
    appId: "1:473340790630:web:0529a3c120da350f3b6aa7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
let cloudDB = firebase.firestore();


//#region Inicio de sesión.
function loginCheck(){
    cloudDB.collection(collection).doc(inputUsername.value).get() 
    .then(function(doc){
        if(doc.exists){
            if(doc.data().username == inputUsername.value && doc.data().password == inputPassword.value){
                window.localStorage.setItem("username", document.getElementById('username').value);
                window.location.href = "project.html";           
            }
            else{
                document.getElementById('console-message').value = "User or password are incorrect.";
            }
        }
       
    })
    .catch(function(error){
        console.log("Error", error);
    })
}
//#endregion 

document.getElementById('login').onclick=function(){
    loginCheck();
};
