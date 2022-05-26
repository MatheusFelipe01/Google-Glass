function calcular() {
    var qtd = Number(document.getElementById('quantidade').value)
    total = qtd * 1600 // como buscar o preço atualizado do produto ?
    /* var qtd , var PreçoGlassDolar , var CotacaoDolarHoje*/
    document.getElementById('total').value = `R$${total}`
}
function enviar() {
    var nome = document.getElementById('nome')
    window.alert(`What's up, ${nome.value}! Unfortunely we can't save your data because our Database isn't done yet. However we're happy you're here enjoying our website !`)
}