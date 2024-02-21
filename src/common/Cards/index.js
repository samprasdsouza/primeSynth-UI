import { isEmpty } from 'lodash'
import { Row, Col } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import { CardStructure } from './CardStructure'

export const CardBuilder = (props) => {
  const { cards, rowCardCount = 1, title, cardCompleteComponentStyle, cardBodyClassStyle = 'p-2', cardClassStyle = 'p-2' } = props
  return (
    <div className='w-100 '>
      {!isEmpty(title) && (
        <div className='ps-3'>
          <span className='text-20 fw-semibold'>{title}</span>
        </div>
      )}
      <div className='w-100 ' style={cardCompleteComponentStyle}>
        <Row xs={1} md={rowCardCount} className={`mx-0 mt-0  ${cardBodyClassStyle}`}>
          {cards.map((card, id) => (
            <Col key={id} className= {` ${cardClassStyle}`} >
              <div>
                <a
                  target={card.openInNewTab ? '_blank' : ''}
                  rel={card.openInNewTab ? 'noreferrer' : ''}
                  className='text-body text-decoration-none'
                  href={`${!isEmpty(card.navigateTo) ? card.navigateTo : ''}`}
                >
                  <div className='d-flex justify-contents-center align-items-center'>
                    <Card
                      className='custom-card w-100'
                      style={card.cardStyle}
                    >
                      <CardStructure 
                      card={card}
                      header={card.cardHeader}
                      />
                    </Card>
                  </div>
                </a>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  )
}

