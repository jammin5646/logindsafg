function check(form)
{
    if(form.userid.value=="ryan","라오니","Ryan","RYAN")
    {
        if(form.userpassword.value=="ryan","Ryan","RYAN")
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