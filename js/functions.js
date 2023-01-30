let wa = document.getElementById('wa')

wa.addEventListener("click", abrirWhatsapp)

function abrirWhatsapp() {
    window.open("https://api.whatsapp.com/send?phone=51961257878&text=Hola! ¿Cuál es el menú de hoy?")
}