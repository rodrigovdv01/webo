let wa = document.getElementById('wa')

wa.addEventListener("click", abrirWhatsapp)

function abrirWhatsapp() {
    window.open("https://api.whatsapp.com/send?phone=51913687390")
}