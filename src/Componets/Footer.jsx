
import "./Footer.css"
import { useEffect, useState } from "react"

const Footer =()=>{
    const [cureenYear, setCurrentYear]=useState(new Date().getFullYear())
useEffect(()=>{
    const intervalid = setInterval(() => {
        setCurrentYear(new Date().getFullYear())
        
    }, 1000 * 60)
    return()=>clearInterval(intervalid)},[])

return(

<footer className="footer-content">
   <div className="footerlogo"><img src="images\favicon.ico" alt="" /></div>
        <p>&copy;{cureenYear}www.react.Componets</p>
        <ul className="footer-links">
            <li>Home</li>
            <li>about us:best webdeve App</li>
            <li>products: React</li>
        </ul>
</footer>


)

}
export default Footer;