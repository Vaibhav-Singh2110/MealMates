// // const firebaseConfig = {
// //     apiKey: "AIzaSyAvuy2_05ovi-eP4b8Fl-2qR3hlJIhw7Uc",
// //     authDomain: "mealmate-4e822.firebaseapp.com",
// //     projectId: "mealmate-4e822",
// //     storageBucket: "mealmate-4e822.appspot.com",
// //     messagingSenderId: "402456376164",
// //     appId: "1:402456376164:web:d8da61fbdb589b6c9f4071",
// //     measurementId: "G-7WS24ZSHCV"
// //   };

// //   firebase.initializeApp(firebaseConfig);

// // Refernece contactInfo collections
// // let contactInfo = firebase.database().ref("infos");

// // Listen for a submit
// document.querySelector(".contact-form").addEventListener("submit", submitForm);

// function submitForm(e) {
//   e.preventDefault();

//   //   Get input Values
//   let name = document.querySelector(".name").value;
//   let mobile = document.querySelector(".mobile").value;
//   let time = document.querySelector(".time").value;
//   let email = document.querySelector(".email").value;
//   let address = document.querySelector(".address").value;
//   let request = document.querySelector(".request").value;
//   console.log(name, mobile,time,email,address,request);


//   sendEmail(name, mobile,time,email,address,request);
//   document.querySelector(".contact-form").reset();

  
// }

// // Save infos to Firebase
// // function saveContactInfo(name, mobile,time,email,address,request) {
// //   let newContactInfo = contactInfo.push();

// //   newContactInfo.set({
// //     name: name,
// //     mobile:mobile,
// //     time:time,
// //     email: email,
// //     address: address,
// //     request:request
// //   });

// // //   retrieveInfos();
// // }


// function sendEmail(name, mobile,time,email,address,request){
//     Email.send({
//         Host:"smtp.gmail.com",
//         Username: 'vaibhavmsd39@gmail.com',
//         Password: "Vaibhav@2110",
//         To: 'vaibhavmsd39@gmail.com',
//         From:document.getElementById("email").value,
//         Subject: `${name} want food`,
//         Body:`Name: ${name} <br/> Mobile: ${mobile} <br/>Time: ${time} <br/>Email: ${email} <br/>Address: ${address} <br/>Request: ${request} <br/>`,

//     }).then(function (request) {
//         alert("mail sent")
//       });
// }


function sendMail() {
    var params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
      mobile: document.getElementById("mobile").value,
      time: document.getElementById("time").value,
      address: document.getElementById("address").value,
    };
  
    const serviceID = "service_l7mr458";
    const templateID = "template_3kypzzn";
  
      emailjs.send(serviceID, templateID, params)
      .then(res=>{
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("message").value = "";
         document.getElementById("mobile").value = "";
          document.getElementById("time").value = "";
       document.getElementById("address").value = "";
          console.log(res);

          console.log("Email sent successfully!");
    console.log("Name:", params.name);
    console.log("Email:", params.email);
    console.log("Message:", params.message);
    console.log("Mobile:", params.mobile);
    console.log("Time:", params.time);
    console.log("Address:", params.address);
          alert("Your message sent successfully!!")
  
      })
      .catch(err=>console.log(err));
  
  }