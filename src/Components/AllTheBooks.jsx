import { Card, Col, Row, Container} from 'react-bootstrap'
import fantasy from '../Components/data/fantasy.json'

const AllTheBooks = () => {
  return (
    <Container>
    <Row className="g-2">
      {fantasy.map((book) => {
        return (
          
          <Col xs={12} md={4} key={book.asin}>
            <Card className="book-cover d-flex flex-column h-100">
              <Card.Img variant="top" src={book.img} />
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
       
        )
      })}
    </Row>
    </Container>
  )
}

export default AllTheBooks