import { isEmpty } from 'lodash'

export const CardBody = ({ card }) => {
  return (
    <>
      <div className="d-flex w-100 h-100">
        {!isEmpty(card.LeftIcon) && (
          <div
            className="p-3 d-flex h-100 justify-content-center align-items-center"
            style={card.LeftIconStyle}
          >
            <div
              className="d-flex justify-content-center align-items-center"
              style={{ width: '50px' }}
            >
              {card.LeftIcon}
            </div>
          </div>
        )}
        <div className="p-3 d-flex w-100 justify-content-between" >
          <div style={{width: '15px', height:'50px'}}>
            {card.TopImage}
          </div>
          <div className={`w-100 ${card.styleBodyCenter ? 'd-flex align-items-center' : ''}`} >
            {!isEmpty(card.Header) && <div>{card.Header}</div>}
            <div className='w-100'>
              <div>
                <div className="d-flex justify-content-between align-items-between">
                  <div className="card-title mb-0 d-flex align-items-center">
                    <span
                      className='fw-semibold text-16'
                    >
                      {card.Title}
                    </span>
                  </div>
                  <div className='d-flex align-items-center'>
                    <span
                        className='fw-normal text-12'
                      style={{
                        color: '#606060'
                      }}
                    >
                      {card.Type}
                    </span>
                  </div>
                </div>
              </div>
              <div className="text-muted">
                {card.SubTitle}
              </div>
              <div>
                <span
                    className='fw-normal text-13'
                >
                  {card.Body}
                </span>
              </div>
              {!isEmpty(card.Footer) && (
                <div>
                  <div className="d-flex justify-content-between">
                    <div>
                      <span
                      className='fw-normal text-12'
                        style={{
                          color: '#606060'
                        }}
                      >
                        {card.Footer}
                      </span>
                    </div>
                    <div>
                      <span
                        className='fw-normal text-12'
                        style={{
                          color: '#606060'
                        }}
                      >
                        {card.FooterType}
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        {!isEmpty(card.RightIcon) && (
            <div className="p-3" style={card.RightIconStyle}>
              {card.RightIcon}
            </div>
        )}
      </div>
    </>
  )
}
