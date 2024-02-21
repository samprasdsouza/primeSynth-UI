import { CardBody } from './CardBody'

export const CardStructure = ({ card, header }) => {
  return (
    <>
      {header && <div className='p-2'>{header}</div>}
      <CardBody card={card} />
    </>
  )
}
