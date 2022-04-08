import { useState } from "react"


const useForm = ( initialValues = {} ) => {

    const [values, setValues] = useState( initialValues )

    const onChangeInput = ({ target }) =>{
        const name = target.name
        const value = target.value

        setValues({
            ...values,
            [name]: value
        })
    }

    return [ values, onChangeInput ]
}

export default useForm