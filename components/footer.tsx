import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'



const Footer = () => {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <Container>
      <div className="container">
          <footer className="py-3 my-4">
            <ul className="nav justify-content-center border-bottom pb-3 mb-3">
              <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Home</a></li>
              <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Features</a></li>
              <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Pricing</a></li>
              <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">FAQs</a></li>
              <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">About</a></li>
            </ul>
            <p className="text-center text-muted">&copy; 2022 Company, Inc</p>
          </footer>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
