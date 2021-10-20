document.querySelector(".personalinfo").addEventListener('submit', onFormSubmit);
function onFormSubmit(e) {
    e.preventDefault();
    var val = validateForm();
    if(val == true) {
        alert("thank You");
        resetData();
    }
    
}

var fncheck = /^[A-Za-z]{1,}$/;
var email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var msgcheck = /[A-Za-z ,.&]{1,}/gm;
var errfname = document.querySelector(".firstname-err");
var erremail= document.querySelector(".email-err");
var errmsg = document.querySelector(".message-err");

function validateForm() {
    var isvalid = true;
    var name = document.querySelector(".firstname").value;
    var mail = document.querySelector(".email").value;
    var msg = document.querySelector(".message").value;
    var msgcheck = /[A-Za-z ,.&]{1,}/gm;

    if (fncheck.test(name)) {
        errfname.classList.replace("err","msgerr");
    } else {
        errfname.classList.replace("msgerr","err");
        isvalid = false;
    }

    if (email.test(mail)) {
        erremail.classList.replace("err","msgerr");
    } else {
        erremail.classList.replace("msgerr","err");
        isvalid = false;
    }

    if (msgcheck.test(msg)) {
        errmsg.classList.replace("err","msgerr");
    } else {
        errmsg.classList.replace("msgerr","err");
        isvalid =false;
    }
    
    return isvalid;
}

function onFirstnFocusout() {
    var name = document.querySelector(".firstname").value;
    if (fncheck.test(name)) {
        errfname.classList.replace("err","msgerr");
    } else {
        errfname.classList.replace("msgerr","err");
    }
}

function onEmailFocusout() {
    var mail = document.querySelector(".email").value;
    if (email.test(mail)) {
        erremail.classList.replace("err","msgerr");
    } else {
        erremail.classList.replace("msgerr","err");
    }
}

function onMsgFocusout() {
    var msg = document.querySelector(".message").value;
    if (msgcheck.test(msg)) {
        errmsg.classList.replace("err","msgerr");
    } else {
        errmsg.classList.replace("msgerr","err");
    }
}

document.querySelector(".firstname").addEventListener('focusout', onFirstnFocusout);
document.querySelector(".email").addEventListener('focusout', onEmailFocusout);
document.querySelector(".message").addEventListener('focusout', onMsgFocusout);

function resetData() {
    document.querySelector(".personalinfo").reset();
}







































