import { get, map } from "lodash";
import { useSelector } from "react-redux"
import { CardBuilder } from "./common/Cards";
import { Button } from "react-bootstrap";




export const SearchQueryResults = () => {

    const searchQueryResults = useSelector(state => state.searchQuery.searchQueryResults)
    const recommendedProducts = get(searchQueryResults, ['_embedded', 'products']);
    const recommendedProductsCount = get(searchQueryResults, ['count'], 0);
    console.log(recommendedProductsCount, recommendedProducts);

    const searchResultsTab = map(recommendedProducts, (product) => ({
        Title: (
            <div>
                <span className="text-color">{get(product, ["name"], '')}</span>
            </div>
        ),
        navigateTo: `${window.location.origin}/product/${product?.id}`,
        openInNewTab: true
    }))
    console.log('searchResultsTab', searchResultsTab);
    return (
        <div className="w-80">
            <div className="search-results" style={{ width: '500px'}}>
                <CardBuilder
                    cards={searchResultsTab}
                    rowCardCount={1}
                    cardCompleteComponentStyle={{ overflow: 'auto' }}
                />
                <div className="d-flex justify-content-center align-items-center">
                 <Button type='primary' className='btn-background-search-results m-3' > Prev</Button>
                 <Button type='primary' className='btn-background-search-results m-3' > Next</Button>
                </div>
            </div>
        </div>
    )
}