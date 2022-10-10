import { Link } from 'react-router-dom'
import './notfound.css'

const Notfound = () => {
  return (
    <section className="container notfound__container">
      <h2>Page Not Found</h2>
      <Link to="/home" className='btn'>Go Back Home</Link>
    </section>
  )
}

export default Notfound