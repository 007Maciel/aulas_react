import { Link } from "react-router-dom"
 
function Comeco() {
  return (
    <div>
        <h1>comeco</h1>
        <Link to={"/termino"} >Ir para termino</Link>
    </div>
  )
}

export default Comeco