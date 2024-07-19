
import localStorage from 'local-storage';

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';

const spinnerVariants = {
    initial: { opacity: 1 },
    exit: { opacity: 0, transition: { duration: 0.5 } }
};

export default function SplashScreen() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulating some delay to show loading screen
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    key="loadingScreen"
                    className={"splash-screen" + (localStorage.get('theme') === "dark" ? " dark" : "" )}
                    initial="initial"
                    exit="exit"
                    variants={spinnerVariants}
                >
                    <div className="loader"></div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
