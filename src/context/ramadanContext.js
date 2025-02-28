"use client";

import { createContext, useContext, useEffect, useState } from 'react';
import useSWR from 'swr';
const ramadanContext = createContext(null);

export const RamadanProvider = ({ children }) => {
    const [ramadan, setRamadan] = useState(false);
    const { data, error, isLoading } = useSWR(`https://api.aladhan.com/v1/currentIslamicMonth`);
    useEffect(() => {
        setRamadan(data?.data == 9)
    }, [data])
    return (
        <ramadanContext.Provider value={{ ramadan, isLoading }}>
            {children}
        </ramadanContext.Provider>
    );
};

export const useRamadan = () => useContext(ramadanContext);