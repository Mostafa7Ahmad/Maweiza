"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';

const spinnerVariants = {
    initial: { opacity: 1 },
    exit: { opacity: 0, transition: { duration: 0.5 } }
};

export default function SplashScreen(props) {
    const theme = localStorage.getItem('theme') ?? 0;
    const [isLoading, setIsLoading] = useState(true);

    if (props.show ?? true) {
        useEffect(() => {
            // Simulating some delay to show loading screen
            const timer = setTimeout(() => {
                setIsLoading(false);
            }, 1000);

            return () => clearTimeout(timer);
        }, []);
    }

    return (
        <>
            {(props.show ?? true) ?
                <AnimatePresence>
                    {isLoading && (
                        <motion.div
                            key="loadingScreen"
                            className={"splash-screen " + theme}
                            initial="initial"
                            exit="exit"
                            variants={spinnerVariants}
                        >
                            <div className="loader"></div>
                        </motion.div>
                    )}
                </AnimatePresence>
                :
                <div
                    key="loadingScreen"
                    className={"splash-screen " + theme}
                    initial="initial"
                    exit="exit"
                    variants={spinnerVariants}
                >
                    <div className="loader"></div>
                </div>
            }
        </>
    );
}
