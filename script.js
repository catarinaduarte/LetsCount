function count() {
    let ini = document.getElementById('txti')
    var fin = document.getElementById('txtf')
    var step = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fin.value.length == 0 || step.value.length == 0) {
        window.alert('[ERROR]')
    } else {
        res.innerHTML = 'Counting:  '
        let i = Number (ini.value)
        let f = Number (fin.value)
        let p = Number (step.value)
        if (p <= 0) {
            window.alert('[ERROR]')
            p = 1
        }
        if (i < f) {
            //  crescent 
        for(let c = i; c <= f; c += p){
                res.innerHTML += `${c }  \u{1F449} `
            }
        } else {
        //regressive
            for(let c = i; c >= f; c -= p){
                res.innerHTML += `${c }  \u{1F449} `
            }
       }
       res.innerHTML += `\u{1F3C1} `
    
    }

}
