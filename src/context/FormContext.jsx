import React, { createContext, useState } from 'react';

export const FormContext = createContext();

const FormProvider = ({ children }) => {
    const [formData, setFormData] = useState({
        profession: '',
        skill: [],
        experience: '',
        location: '',
        uploadImg: null,
        offered: null,
    });

    

    return (
        <FormContext.Provider value={{ formData, setFormData }}>
            {children}
        </FormContext.Provider>
    );
};

export default FormProvider;
