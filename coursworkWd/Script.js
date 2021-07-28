function validation() {

    const openModal = document.getElementById('openModal');
    const modal_container = document.getElementById('modal-container');
    const closeModal = document.getElementById('closeModal');
    const sentModal = document.getElementById('sentModal');


    closeModal.addEventListener('click', () => {
        modal_container.classList.remove('show');
    });

    sentModal.addEventListener('click', () => {
        modal_container.classList.remove('show');
    });

    // quary form validation 

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    // var errorMessage = document.getElementById("error_message");

    var checkbox = document.getElementById('checkbox');
    var text;



    // errorMessage.style.padding =  "10px";
    // errorMessage.style.border = "10px"

    // pop up page 





    if (name === "") {
        alert("Please enter Name")
        return false;
    }
    else if (email === "") {
        alert("Please enter Email")
        // text="Yo"
        // errorMessage.innerHTML=text;
        return false;
    }
    else if (email.indexOf("@") == -1) {
        alert("Please enter Email")
        return false;
    }
    else if (message === "") {
        alert("Please enter Message")
        return false;
    }
    // else if(document.getElementById('checkbox').checked){
    //     return false;
    // }

    // else if (rb1.checked==fales) {
    //     alert('Please select a subject');
    //     return false;
    // }


    else {
// alert('not checked')

openModal.addEventListener('click', () => {
    modal_container.classList.add('show');
});

return false;

if(rb1.checked===false){
    alert('Select a subject');
//     errorMessage.innerHTML=text;
    return false;
}
    }

    // if()


    // if (checkbox.checked==false) {


    // }

}


function clearText(){
    var form = document.getElementById("myform");
form.reset()
}


function showSummary(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var rb1 = document.getElementById('html').value;
    var rb2 = document.getElementById('css').value;
    var rb3 = document.getElementById('javascript').value;

    var showname = document.getElementById('showName');
    var showEmail = document.getElementById('showEmail');
    var showMessage = document.getElementById('showMessage');
    var showSection = document.getElementById('showSection');


    showMessage.innerHTML = "Message - "+message;
    showname.innerHTML = "Name - "+name;
    showEmail.innerHTML = "Email - "+email;

    // if (rb1.checked==true) {
        
        showSection.innerHTML = "Subject - "+rb3;
        // return true;
    // }

    // else if (rb2.checked==true) {
        showSection.innerHTML = "Subject - "+rb2;
    // }

    // else if (rb3.checked==true) {
    //     showSection.innerHTML = "Subject - "+rb3;
    // }
}
