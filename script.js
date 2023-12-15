function redirectToLanguage() {
    var languageSelector = document.getElementById("languageSelector");
    var selectedLanguage = languageSelector.options[languageSelector.selectedIndex].value;
    // console.log("Updated website lang: " + selectedLanguage)
    var localRoute = window.location.pathname;

    console.log("Ruta actual: ", localRoute);

    if (localRoute.startsWith("/lang/")) {
        console.log("La ruta actual comienza con '/lang/'. Haz algo específico para esta ruta.");
        window.location.href = selectedLanguage + ".html";
    } else {
        window.location.href = "lang/" + selectedLanguage + ".html";
    }
}
