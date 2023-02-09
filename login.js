function check(form)
{
    if(form.userid.value=="Luzo","luzo")
    {
        if(form.userpassword.value=="fantboss")
        {
            alert("Login페이지를 닫아주세요!")
            window.open("https://laonie.netlify.app/")
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