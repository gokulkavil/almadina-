function handleSubmit(){
    const password = document.getElementById('password').value;

    sessionStorage.setItem('code',password);
    return;
}