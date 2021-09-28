if (document.cookie.indexOf("AdminPortal=Valid") == -1) {
        location.href = "../index.html"; //Where they will be taken if they do not have the proper authentication
}