import { motion } from "framer-motion";

export default function Layout({ children }) {
    return (
        <div className="container mt-24 mb-6 px-6 md:mx-auto h-full">
            {children}
        </div>
    );
}
