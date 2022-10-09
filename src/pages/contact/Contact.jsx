import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_2.jpg'
import {MdEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {IoLogoWhatsapp} from 'react-icons/io'
import './contact.css'

const Contact = () => {
  return (
    <>
      <Header title="Get In Touch" image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore error explicabo nobis!
      </Header>
      <section className="contact">
        <div className="container contact__container">
          <div className="contact__wrapper">
            <a href="mailto:mashrurrahman16@gmail.com" target="_black" rel='noreferrer noopener'><MdEmail/></a>
            <a href="http://m.me/mashru020" target="_black" rel='noreferrer noopener'><BsMessenger/></a>
            <a href="https://wa.me/8801534949969" target="_black" rel='noreferrer noopener'><IoLogoWhatsapp /></a>

          </div>
        </div>
      </section>
    </>
  )
}

export default Contact