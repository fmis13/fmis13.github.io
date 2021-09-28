function check(form) {
    username = new Array("admin");
    password = new Array("admin");

	if(form.userid.value == username[0] && form.pswrd.value == password[0]) {
		location.replace('cookie.html')/* The Administrator homepage */
	}
	else if(form.userid.value == username[0]) {
		alert("Incorrect Password")
	}
	else {
		alert("Incorrect Username or Password")
	}
}