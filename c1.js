
function sendMail() {
var params = {
name: document.getElementById("name").value,
email: document.getElementById("email").value,
subject: document.getElementById("subject").value,
message: document.getElementById("message").value,
};

const serviceID = "service_l7mr458";
const templateID = "template_7i2q3ja";

emailjs.send(serviceID, templateID, params)
.then(res=>{
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("message").value = "";
  document.getElementById("subject").value = "";
  console.log(res);

  console.log("Email sent successfully!");
console.log("Name:", params.name);
console.log("Email:", params.email);
console.log("Message:", params.message);

  alert("Your message sent successfully!!")

})
.catch(err=>console.log(err));

}
