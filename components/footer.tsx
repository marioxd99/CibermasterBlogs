import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'



const Footer = () => {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <Container>
      <div className="container">
          <footer className="py-4 ">
            <p className="text-center text-muted">&copy; 2023 CiberMaster, Inc</p>
          </footer>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
