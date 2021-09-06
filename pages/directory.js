import Layout from "../components/Layout";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Card from "../components/Card";
import { motion } from "framer-motion";
import { gardenFilePath, GARDENS_PATH } from "../utils/mdxUtils";

export default function Directory({ gardens }) {
    return (
        <Layout>
            <motion.ul
                initial="hidden"
                animate="show"
                variants={{
                    hidden: { opacity: 0, y: 50 },
                    show: {
                        opacity: 1,
                        y: 0,
                        transition: {
                            delay: 0.6,
                            ease: "easeInOut",
                            duration: 0.7,
                        },
                    },
                }}
                className="flex flex-wrap mt-24"
            >
                {gardens.map((garden) => (
                    <Card garden={garden} />
                ))}
            </motion.ul>
        </Layout>
    );
}

export function getStaticProps() {
    const gardens = gardenFilePath.map((filePath) => {
        const source = fs.readFileSync(path.join(GARDENS_PATH, filePath));
        const { content, data } = matter(source);

        return {
            content,
            data,
            filePath,
        };
    });

    return { props: { gardens } };
}
