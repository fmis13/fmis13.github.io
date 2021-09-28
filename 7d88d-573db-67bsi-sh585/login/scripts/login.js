function check(form) {
    username = new Array("frano", "other");
    password = new Array("5e5fde", "other");

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
