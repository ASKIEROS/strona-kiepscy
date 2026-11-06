setTimeout(() => {
    console.log('Test JS');
}, 4000);

function showhide(id) {
    let element = document.getElementById(id);
    if (element.style.display === "none") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
}

function walidacjaFormularza(event) {
    let email = document.getElementById("email").value;
    let wiadomosc = document.getElementById("wiadomosc").value;

    if (!email.includes("@")) {
        alert("Błąd: Wpisany adres e-mail jest niepoprawny (brakuje znaku @).");
        event.preventDefault();   
        return false;
    }

    if (wiadomosc.length < 10) {
        alert("Błąd: Twoja wiadomość jest za krótka. Wpisz minimum 10 znaków.");
        event.preventDefault(); 
        return false;
    }

    alert("Wiadomość wysłana pomyślnie!");
    event.preventDefault(); 
    return false;
}