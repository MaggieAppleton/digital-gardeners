import { motion } from "framer-motion";
import Link from "next/link";

export default function Sidemenu() {
    return (
        <motion.div className="flex flex-col space-y-3 mt-28 ml-6 w-52 mr-12">
            {[
                { name: leafSVG, path: "/" },

                {
                    name: "What's a Digital Garden?",
                    path: "/what",
                    style: "font-bold",
                },
                { name: "Directory", path: "/directory" },
                { name: "Tools", path: "/tools" },
                { name: "Tutorials and Guides", path: "/tutorials" },
                { name: "Theory, Philosophy, & Navel-Gazing", path: "/theory" },
            ].map((item, index) => (
                <Link href={item.path} key={index}>
                    <motion.a
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: {
                                opacity: 0,
                                x: -100,
                            },
                            visible: {
                                opacity: 1,
                                x: 0,
                                transition: {
                                    delay: 0.2 * index,
                                    ease: "easeInOut",
                                    duration: 0.6,
                                },
                            },
                        }}
                        className={`flex flex-col space-y-1 text-deepGreen hover:text-brightGreen duration-200 ease-in cursor-pointer ${
                            item.style && item.style
                        }`}
                    >
                        {item.name}
                    </motion.a>
                </Link>
            ))}
        </motion.div>
    );
}

const leafSVG = (
    <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
    </svg>
);
