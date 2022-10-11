import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_5.jpg'
import {trainers} from '../../data'
import {BsInstagram} from 'react-icons/bs'
import {FaFacebook} from 'react-icons/fa'
import {AiOutlineTwitter} from 'react-icons/ai'
import {FaLinkedin} from 'react-icons/fa'
import Trainer from '../../components/Trainer'
import './trainers.css'

const Trainers = () => {
  return (
    <>
      <Header title="Our Trainer" image={HeaderImage}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque dignissimos incidunt atque consequatur saepe culpa facere cum!
      </Header>
      <section className="trainers">
        <div className="container trainers__container">
          {
            trainers.map(({id, image, name, job, socials}) => {
              return <Trainer key={id} image={image} name={name} job={job} socials={
                [
                  {icon: <BsInstagram/>, link:socials[0]},
                  {icon: <AiOutlineTwitter/>, link:socials[1]},
                  {icon: <FaFacebook/>, link:socials[2]},
                  {icon: <FaLinkedin/>, link:socials[3]}
                ]
              }/>
            })
          }
            
        </div>
      </section>
    </>
  )
}

export default Trainers