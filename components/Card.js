import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Card({ garden }) {
    return (
        <motion.li
            className="w-80 mr-8 mb-8 space-y-2 opacity-80"
            key={garden.filePath}
            whileHover={{
                scale: 1.02,
                opacity: 1,
                transition: {
                    duration: 0.3,
                    ease: "easeInOut",
                },
            }}
        >
            <Link
                as={`${garden.filePath.replace(/\.mdx?$/, "")}`}
                href={`[slug]`}
            >
                <a>
                    {garden.data.image && (
                        <Image
                            className="rounded-md"
                            src={garden.data.image}
                            width={320}
                            height={180}
                            layout="responsive"
                            alt={garden.data.title}
                        />
                    )}
                    <h3 className=" leading-tight mt-4 text-lg">
                        {garden.data.title}
                    </h3>
                </a>
            </Link>
            <motion.div>
                {garden.data.tools &&
                    garden.data.tools.map((tool) => <p>{tool}</p>)}
            </motion.div>
            <svg className="h-4 w-4 " viewBox="0 0 20 20">
                <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
            </svg>
        </motion.li>
    );
}
