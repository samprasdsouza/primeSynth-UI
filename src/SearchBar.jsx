import { Form } from "react-bootstrap"
import { IconSearch } from "./svg/Icons/IconSearch"
import { useState } from "react"
import { isEmpty } from "lodash"
import { InputText } from "./common/InputText"




export const SearchBar = () => {
    const [value, setValue] = useState('')
    const handleChange = (event) => {
        setValue(event.target.value)
        console.log('event', event);
    }
    console.log('value', value);
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
                Recommendations.....
            </div>
            }
        </div>
    )
}


