function check(form)
{
    if(form.userid.value=="71005031","ryan","luzo")
    {
        if(form.userpassword.value=="491740","ryan","luzo")
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