import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Card({ post }) {
    return (
        <motion.li
            className="w-60 mr-10 mb-14 space-y-2 opacity-80"
            key={post.filePath}
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
                as={`${post.filePath.replace(/\.mdx?$/, "")}`}
                href={`[slug]`}
            >
                <a>
                    {post.data.image && (
                        <Image
                            className="rounded-md"
                            src={post.data.image}
                            width={250}
                            height={200}
                            alt={post.data.title}
                        />
                    )}
                    <h3 className="text-coolGray-600 leading-tight mt-2">
                        {post.data.title}
                    </h3>
                </a>
            </Link>
            <motion.div>
                {post.data.tools &&
                    post.data.tools.map((tool) => <p>{tool}</p>)}
            </motion.div>
            <svg className="h-4 w-4 text-coolGray-600" viewBox="0 0 20 20">
                <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
            </svg>
        </motion.li>
    );
}
