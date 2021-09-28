function check(form) {
    username = new Array("admin", "other");
    password = new Array("admin", "other");

	if(form.userid.value == username[0] && form.pswrd.value == password[0]||form.userid.value == username[1] && form.pswrd.value == password[1]) {
		location.replace('cookie.html')/* The Administrator homepage */
	}
	else if(form.userid.value == username[0]||form.userid.value == username[1]) {
		alert("Incorrect Password")
	}
	else {
		alert("Incorrect Username or Password")
	}
}