const btn = document.querySelector("button");
const post = document.querySelector(".post");
const widget = document.querySelector(".star-widget");
btn.onclick = ()=>{
  widget.style.display = "none";
  post.style.display = "block";
  return false;
}
function submit()
{
    var userName = document.getElementById('name').value
    var userEmail = document.getElementById('email').value
    var userAddress = document.getElementById('address').value
    var userPhone = document.getElementById('phone').value
    var userMessage = document.getElementById('message').value
    if(userName == "" || userEmail == "" || userAddress == "" || userPhone == "" || userMessage == "")
    {
        alert('Feilds cannot be Empty ❌')
    }

    else{
        alert('Your Feed back has been submitted 😊')
    }

}
