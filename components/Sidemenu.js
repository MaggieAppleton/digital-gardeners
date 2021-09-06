import { motion } from "framer-motion";
import Link from "next/link";

export default function Sidemenu() {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={{
                hidden: { opacity: 0, x: -50 },
                visible: {
                    opacity: 1,
                    x: 0,
                    transition: {
                        delay: 0.6,
                        ease: "easeInOut",
                        duration: 1,
                    },
                },
            }}
            className="flex flex-col space-y-3 mt-28 ml-6 w-60 mr-12 text-deepGreen"
        >
            <Link href="/what">
                <a className="text-base opacity-80 hover:opacity-100 transition-all duration-350 leading-tight font-bold">
                    What's a Digital Garden?
                </a>
            </Link>
            <Link href="/directory">
                <a className="text-base opacity-80 hover:opacity-100 transition-all duration-350 leading-tight">
                    Garden Directory
                </a>
            </Link>
            <Link href="/tools">
                <a className="text-base opacity-80 hover:opacity-100 transition-all duration-350 leading-tight">
                    Tools for Gardening
                </a>
            </Link>
            <Link href="/tutorials">
                <a className="text-base opacity-80 hover:opacity-100 transition-all duration-350 leading-tight">
                    Gardening Tutorials and Guides
                </a>
            </Link>
            <Link href="/theory">
                <a className="text-base opacity-80 hover:opacity-100 transition-all duration-350 leading-tight">
                    Gardening Theory and Navel-Gazing
                </a>
            </Link>
        </motion.div>
    );
}
