
import { FaGithub, FaInstagram } from "react-icons/fa";
import style from "./../styles/Home.module.scss";


import type { NextPage } from 'next';


const Home: NextPage = () => {
  return (
    <>


      <div className={style.container}>
        <div >
          <a href="" target="_blank">
            <img src="/newLogo.svg" className={style.logo} width={250} alt="aalissonaq logo" />
          </a>
        </div>
        <div className={style.title}>
          <span>Novidades em Breve Aguarde...</span>
        </div>
        <div className={style.icons} >
          <a href="https://www.instagram.com/3aqtecnologia" target="_blank" rel="noreferrer" >
            <FaInstagram size="40" />
          </a>
          <a href="https://github.com/3aqtecnologia" target="_blank" rel="noreferrer" >
            <FaGithub size="40" />
          </a>
          {/* <a href="https://www.linkedin.com/mwlite/in/alissonalmeidaq" target="_blank" rel="noreferrer">
            <AiOutlineLinkedin size="40" />
          </a> */}
        </div>

      </div>
    </>
  )
}

export default Home
