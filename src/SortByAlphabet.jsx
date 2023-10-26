import { useParams } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"
import test from "./test.json"
import { CardBuilder } from "./common/Cards"
import { get, isEmpty } from "lodash"
import  comp  from "./svg/PS-007299.png"

export const SortByAlphabet = () => {
    const { id } = useParams()
    
    const data  = test
    console.log(data);
    const displaycards = data.map((card) => ({
        TopImage: <div><img style={{ height: '250px', width: '250px'}} src={comp} alt="logo"/></div>,
        Title: (
          <div style={{ background:"#FFA800"}} className="p-2">
            <span className="text-light">CAT No. : {get(card, ["CAT No"])}</span>
          </div>
        ),
        cardStyle: isEmpty(card.cardStyle)
          ? { height: '360px', width: '350px' }
          : card.cardStyle,
        navigateTo: `/product-page/${get(card, ["product_name"], " ")}`,
        openInNewTab: true,
        styleBodyCenter: true
      }))
    
    return (
        <>
        <Header/>
            {id}
            <CardBuilder
                cards={displaycards}
                rowCardCount={6}
                title="All Services"
                cardCompleteComponentStyle={{ overflow: 'auto' }}
              />
        <Footer/>
        </>
    )
}