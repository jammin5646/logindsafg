function check(form)
{
    if(form.userid.value=="Luzo","luzo")
    {
        if(form.userpassword.value=="luzo")
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