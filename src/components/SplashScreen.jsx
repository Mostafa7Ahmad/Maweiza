"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';
// import localStorage from "local-storage";
import Cookie from 'cookie-universal'

const spinnerVariants = {
    initial: { opacity: 1 },
    exit: { opacity: 0, transition: { duration: 0.5 } }
};

export default function SplashScreen(props) {
    const [isLoading, setIsLoading] = useState(true);

    const cookies = Cookie()

    const theme = cookies.get("theme") ?? "light";

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
