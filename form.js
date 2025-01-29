function validate() {
    const firstname = document.getElementById("First name").value;
    const firsterror = document.getElementById("first-error");
    let firstnameregex = /^[A-Z][a-zA-Z]*$/;
    firsterror.textContent = "";
    if (firstname == "" || (!firstnameregex.test(firstname))) {
        firsterror.textContent = "First letter must be in caps";
        return false;
    }
    const lastname = document.getElementById("Last name").value;
    const lasterror = document.getElementById("Last-error");
    let lastregex = /^[A-Z]+$/;
    lasterror.textContent = "";
    if (lastname == "" || (!lastregex.test(lastname))) {
        lasterror.textContent = "Enter correct lastname";
        return false;
    }
const Email = document.getElementById("inputEmail4").value;
    const Emailerror = document.getElementById("Email-error");
    let Emailregex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    Emailerror.textContent = "";
    if (Email == "" || (!Emailregex.test(Email))) {
        Emailerror.textContent = "Please enter a valid email address";
        return false;
    }

    const Password = document.getElementById("inputPassword4").value;
    const passerror = document.getElementById("pass-error");
    let passregex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    passerror.textContent = "";
    if (Password == " " || (!passregex.test(Password))) {
        passerror.textContent = "Password must 6 to 12 upper case and lower case";
        return false;
    }
    const Phone = document.getElementById("Phone").value;
    const error = document.getElementById("phone-error");
    let Phoneregex = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
    error.textContent = "";
    if (Phone == " " || (!Phoneregex.test(Phone))) {
        error.textContent = "Please enter a valid Phone NO";
        return false;
    }
    const Addres = document.getElementById("inputAddress").value;
    const box = document.getElementById("Addres-error");
    // let Addresregex = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
    box.textContent = "";
    if (Addres == "" ) {
        box.textContent = "Please enter a Proper Address";
        return false;
    }
    const city = document.getElementById("inputCity").value;
    const cityerror = document.getElementById("City-error");
    let cityregex = /^[A-Z][a-zA-Z]*$/;
    cityerror.textContent = "";
    if (city == ""|| (!cityregex.test(city))) {
        cityerror.textContent = "Enter correct City-Name";
        return false;
    }

    const arun = document.getElementById("inputState").value;
    const lol = document.getElementById("mani");
    lol.textContent = "";
    if (arun == "" ) {
        lol.textContent = "Please Select Your State";
        return false;
    }

    const pincode = document.getElementById("inputZip").value;
    const pinerror = document.getElementById("pin-error");
    let pinregex = /^[1-9][0-9]{5}$/;
    pinerror.textContent = "";
    if (pincode == ""|| (!pinregex.test(pincode))) {
        pinerror.textContent = "Incorrect code";
        return false;
    }

return true;
}
