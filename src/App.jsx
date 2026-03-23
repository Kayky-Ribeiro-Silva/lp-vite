//import dos hooks do react
import { useState } from 'react'

//import do css
import styles from './App.module.css'

//import dos componentes interno
import { Card } from './components/card'

//import das imagens
import cardImg1 from '/img1.jpg'
import cardImg2 from '/img2.webp'
import cardImg3 from '/img3.jpg'

function App() {

const [nome,setNome] = useState("")
const [assunto,setAssunto] = useState("")

const enviar = () =>{
  const mensagem = ` Gostaria de entrar em contato! \n\nNome: ${nome} \nAssunto:${assunto}`

  const msg = encodeURIComponent(mensagem)
  window.open(`http://wa.me/5541912345678?text=${msg}`)
}

  return (
    <>
     <nav>
        <a href="#s1">primeira</a>
        <a href="#s2">segunda</a>
        <a href="#s3">terçeira</a>
        <a href="#s4">quarta</a>
    </nav>
    <main>
        <section id="s1" className={styles.s1}>
            <div className={styles.imgSide}>
                <img src="/pic.webp" alt="Perfil"/>
            </div>
            <div className={styles.textSide}>
                <h1>Kayky</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi voluptatum, cum enim commodi ex consectetur laborum molestias. In dignissimos officiis, ipsam, amet corrupti similique dolorem omnis quam at quo dolorum.</p>
            </div>
        </section>
        <section id="s2" className={styles.s2}>
          <Card imgSrc={cardImg1} alt="Card1" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, dolores. Hic fuga rerum impedit aut labore! Esse error magnam nostrum doloribus similique dolores accusantium velit assumenda, neque, commodi rem at?" title="Card 1"/>
          <Card imgSrc={cardImg2} alt="Card2" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, dolores. Hic fuga rerum impedit aut labore! Esse error magnam nostrum doloribus similique dolores accusantium velit assumenda, neque, commodi rem at?" title="Card 2"/>
          <Card imgSrc={cardImg3} alt="Card3" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, dolores. Hic fuga rerum impedit aut labore! Esse error magnam nostrum doloribus similique dolores accusantium velit assumenda, neque, commodi rem at?" title="Card 3"/>
        </section>
        <section id="s3" className={styles.s3}>
            <div className={styles.imagesContainer}>
              <div className={styles.imageCard}><img src="/car1.jpg" alt=""/></div>
              <div className={styles.imageCard}><img src="/car2.jpeg" alt=""/></div>
              <div className={styles.imageCard}><img src="/car3.jpeg" alt=""/></div>
              <div className={styles.imageCard}><img src="/car4.jpg" alt=""/></div>
            </div>
        </section>
        <section id="s4" className={styles.s4}>
            <h2>Contato</h2>
            <div className={styles.formulario}>
                <label htmlFor="nome">Nome</label>
                <input value={nome} onChange={(event) => setNome(event.target.value)} type="text" id="nome" placeholder="Insira seu nome"/>
                <label htmlFor="assunto">Mensagem</label>
                <textarea value={assunto} onChange={(event) => setAssunto(event.target.value)} id="mensagem" placeholder="Insira sua mensagem"></textarea>
                <button className={styles.btn} onClick={enviar}>Enviar</button>
            </div>
        </section>
    </main>
    <footer>
        <a href="https://www.facebook.com" target="_blank">
            <i className="fa-brands fa-facebook"></i>
        </a>
        <a href="https://www.instagram.com" target="_blank">
            <i className="fa-brands fa-instagram"></i>
        </a>
        <a href="https://www.linkedin.com" target="_blank">
            <i className="fa-brands fa-linkedin-in"></i>
        </a>
        <a href="https://github.com/Kayky-Ribeiro-Silva" target="_blank">
            <i className="fa-brands fa-github"></i>
        </a>
    </footer>
    </>
  )
}

export default App
