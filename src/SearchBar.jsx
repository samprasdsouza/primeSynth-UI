import { IconSearch } from "./svg/Icons/IconSearch"
import { useEffect, useState } from "react"
import { isEmpty } from "lodash"
import { InputText } from "./common/InputText"
import { useDispatch } from "react-redux"
import { createAction } from "@reduxjs/toolkit"
import { SearchQueryResults } from "./SearchQueryResults"

const getSearchQueryStart = createAction('users/getSearchQueryStart')

export const SearchBar = () => {
    const [value, setValue] = useState('')

    const dispatch = useDispatch()

    const handleChange = (event) => {
        setValue(event.target.value)
        console.log('event', event);
    }
    console.log('value', value);

    useEffect(() => {
        if (!isEmpty(value)) dispatch(getSearchQueryStart({ searchQuery: value, pageNumber: 10, limit: 1}))
    }, [dispatch, getSearchQueryStart, value])
    return (
        <div>
            <div className="">
            <InputText
                    name="phone"
                    placeholder="Search Products"
                    rightIcon={<IconSearch/>}
                    required
                    value={value}
                    onChange={handleChange}
            />
            </div>
            {!isEmpty(value) && <div style={{ background: '1px solid black' }}>
                <SearchQueryResults/>
            </div>
            }
        </div>
    )
}


