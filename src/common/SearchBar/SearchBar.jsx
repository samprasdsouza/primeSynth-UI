import { IconSearch } from "../../svg/Icons/IconSearch"
import { useEffect, useState } from "react"
import { isEmpty } from "lodash"
import { InputText } from "../InputText"
import { useDispatch } from "react-redux"
import { createAction } from "@reduxjs/toolkit"
import { SearchQueryResults } from "../../SearchQueryResults"
import './Searchbar.css'

const getSearchQueryStart = createAction('users/getSearchQueryStart')

export const SearchBar = ({ }) => {
    const [value, setValue] = useState('')

    const dispatch = useDispatch()

    const handleChange = (event) => {
        setValue(event.target.value)
        console.log('event', event);
    }
    console.log('value', value);

    useEffect(() => {
        if (!isEmpty(value)) dispatch(getSearchQueryStart({ searchQuery: value, pageNumber: 10, limit: 2 }))
    }, [dispatch, getSearchQueryStart, value])
    return (
        <div className="w-100" >
            <div className="container" >
                <div class="">
                    <div class="searchInput" >
                        <InputText
                            className="w-100"
                            type="text"
                            placeholder="Search Product"
                            value={value}
                            onChange={handleChange}
                            rightIcon={IconSearch}
                        />
                        <div class="icon"><i class="fas fa-search"></i></div>
                    </div>
                    <div className="" >
                        {!isEmpty(value) && <div style={{ background: '1px solid black' }}>
                            <div class="">
                                <SearchQueryResults />
                            </div>

                        </div>
                        }
                    </div>
                </div>
            </div>

        </div>
    )
}


