const firebaseConfig = {
    apiKey: "AIzaSyAYJ7Jmf_KaR1c7R-nmHU__ok1MTb-Is7g",
    authDomain: "mblcustoms.firebaseapp.com",
    databaseURL: "https://mblcustoms-default-rtdb.firebaseio.com", // Add the database URL
    projectId: "mblcustoms",
    storageBucket: "mblcustoms.appspot.com",
    messagingSenderId: "390258769085",
    appId: "1:390258769085:web:c20356d1b3892bca890bd4"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();
