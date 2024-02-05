function generateMailtoLink() {
  // Retrieve form input values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
 
  // Construct the mailto link with encoded values
  const mailtoLink = `mailto:sami.saadeek@gmail.com?subject=${encodeURIComponent(
     `Message from ${name}`
  )}&body=${encodeURIComponent(message)}%0D%0A${encodeURIComponent(
     `From: ${email}`
  )}`;
 
  // Navigate to the mailto link
  window.location.href = mailtoLink;
 }
 
 function validateFormL() {
  // Retrieve form input values
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
 
  // Validate the form input values
  if (username === "" || password === "") {
     alert("Please enter both username and password.");
     return false;
  }
 
  // Here you can add additional validation if needed
 
  // Redirect to another page
  window.location.href = "loginplus.html";
 
  return false; // Prevent the form from submitting 
 }
 
 function validateFormS() {
  // Retrieve form input values
  var firstName = document.getElementById("first-name").value;
  var secondName = document.getElementById("second-name").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
 
  // Validate the form input values
   if (firstName === "" || secondName === "" || email === "" || password === "") {
     alert("Please fill out all fields.");
     return false;
  }
 
  // If the validation passes, redirect to another page
  window.location.href = "signupplus.html";
 
  return false; // Prevent the form from submitting 
 }