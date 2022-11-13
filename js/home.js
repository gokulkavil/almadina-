window.addEventListener('load',()=>{
    const code = sessionStorage.getItem('code')

    document.getElementById('home_code').innerHTML = code;
})
function checkUser(){
    // alert(sessionStorage.getItem("code"))
  if(sessionStorage.getItem("code") === null ) {
    window.location.assign("index.html")
    // window.location ="signup.html";
  } 
};

function submitForm(e){
        e.preventDefault()
        $.ajax({
            url:"https://script.google.com/macros/s/AKfycbxAnUjN7lJXRA_CFT38lBUTXx1Ae7BzsKVpxDPwIf-1R8XrzRpJPxzu4cFYCIQW4CHK/exec",
            data:$("#submit-form").serialize(),
            method:"post",
            success:function (response){
                alert("Form submitted successfully")
                window.location.reload()
                //window.location.href="https://google.com"
            },
            error:function (err){
                alert("Something Error")

            }
        })

}