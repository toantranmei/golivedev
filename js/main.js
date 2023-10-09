const firebaseConfig = {
  apiKey: "AIzaSyAbK22uWmk9ae77sR8s9FTeU46vUR1zbDQ",
  authDomain: "hocvienphanmem001.firebaseapp.com",
  databaseURL: "https://hocvienphanmem001-default-rtdb.firebaseio.com",
  projectId: "hocvienphanmem001",
  storageBucket: "hocvienphanmem001.appspot.com",
  messagingSenderId: "674730384174",
  appId: "1:674730384174:web:5fd6dc03936ed18826b8bf",
  measurementId: "G-MPL6H4S3HX"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const messagesRef = firebase.database().ref('messages');

document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e) {
  e.preventDefault();
  const name = getInputVal('name');
  const email = getInputVal('email');
  const phone = getInputVal('phone');
  const address = getInputVal('address');
  const comments = getInputVal('comments');
  messagesRef.push({ name, phone, email, address, comments});
  // Show alert
  document.querySelector('.alert-msg').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert-msg').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
};

function getInputVal(id) {
  return document.getElementById(id)?.value;
};
