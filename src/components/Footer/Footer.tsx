import { HiMail } from "react-icons/hi";
import { FaHeadset, FaReact } from "react-icons/fa";
import './Footer.scss';

function Footer() {
  return (
    <div className='footer'>
      <div className='footer__location'>
      <h3>Siguenos en nuestras redes sociales: </h3>
      <hr/>
      <ul className='footer__location--text'>
        <li className='footer__location--text-item'>Ranita Fulares - todos los derechos reservados 2024</li>

      </ul>
      </div>
    </div>
  )
}

export default Footer