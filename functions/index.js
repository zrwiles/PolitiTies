const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

// Add a user to Firestore database:
exports.setupUsers = functions.auth.user().onCreate(async (user) => {
  var fullName = user.displayName || 'Anonymous';
  await admin.firestore().collection('user').doc(user.uid).set({
    Name: fullName,
    username:user.uid,
    
  });
});
    
function grabName(){
	      //get the HTML element where you want to print the name
    var name = document.getElementById("Name"); 
    name = firebase.auth().currentUser.displayName; 
        
      }
    
    