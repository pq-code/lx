export const patch = (e) => {
    let dom = document.getElementById('app')
    let child = document.createElement('div')
    dom.appendChild(child.innerHTML = JSON.stringify(e))
    console.log(JSON.stringify(e))
}
