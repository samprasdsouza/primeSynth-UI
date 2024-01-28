import { get, map} from "lodash";
import { useSelector } from "react-redux"
import { CardBuilder } from "./common/Cards";




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
    return(
        <div className="search-results">
            <CardBuilder
                cards={searchResultsTab}
                rowCardCount={1}
                cardCompleteComponentStyle={{ overflow: 'auto' }}
            />
        </div>
    )
}