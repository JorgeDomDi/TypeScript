import './style.css'
import "./topics/09-generics"

// import './topics/01-basic-types'
//?con el import estamos requiriendo un modulo que es una agrupacion encapsulada de un procedimiento
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
  Hola mundo
`



console.log("Hola mundo")