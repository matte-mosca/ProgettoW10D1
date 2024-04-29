import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import MyNav from './Components/MyNavbarComponent'
import MyFooter from './Components/MyFooter'
import Welcome from './Components/Welcome'
// import AllTheBooks from './components/AllTheBooks'
import { Container } from 'react-bootstrap'
import BookList from './Components/BookList'

import fantasy from './Components/data/fantasy.json'

function App() {
  return (
    <>
      <MyNav />
      <Container>
        <Welcome />
        {/* <AllTheBooks /> */}
        <BookList books={fantasy} />
      </Container>
      <MyFooter />
    </>
  )
}

export default App