'use client'

import React, { useContext, useState } from 'react'
import { createContext } from 'react'

export const AppContext = createContext<any>(null)

export const AppWarpper = ({ children }: { children: React.ReactNode }) => {

    const [theme, setTheme] = useState('dark')

    let [twoAlert, setTwoAlert] = useState({
        title: '',
        dialog: false,
        open: false
    })

    const two = {
        fire:(title:string, dialog: boolean, open: boolean)=>{
            setTwoAlert({title: title, dialog: dialog, open: open})
        }
    }

    return (
        <AppContext.Provider value={{ theme, setTheme, twoAlert, two }}>{children}</AppContext.Provider>
    )
}


export const useAppContext = () => {
    return useContext(AppContext)
}