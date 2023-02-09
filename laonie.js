function check(form)
{
    if(form.userid.value=="ryan","라오니")
    {
        if(form.userpassword.value=="ryan")
        {
            alert("Login페이지를 닫아주세요!")
            window.open("ryan/index.html")
        }
        else
        {
            alert("Error Password");
        }
    }
    else
    {
        alert("Error UserID");
    }
}