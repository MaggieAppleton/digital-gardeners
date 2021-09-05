import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import path from "path";
import Container from "../components/Container";
import Layout from "../components/Layout";
import Sidemenu from "../components/Sidemenu";
import Card from "../components/Card";
import { gardensFilePath, GARDENS_PATH } from "../utils/mdUtils";
import { motion } from "framer-motion";

export default function Index({ posts }) {
    return (
        <Container>
            <Sidemenu />
            <Layout>
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0, y: -50 },
                        visible: {
                            opacity: 1,
                            y: 0,
                            transition: {
                                delay: 0.1,
                                ease: "easeInOut",
                                duration: 0.7,
                            },
                        },
                    }}
                >
                    <h1 className="sm:text-4xl text-coolGray-700 mb-6 font-semibold">
                        Garden of Digital Gardens
                    </h1>
                    <p className="text-xl text-coolGray-600 font-serif font-light max-w-5xl leading-tight">
                        A collection of digital gardens, tools, and resources
                        for gardeners
                    </p>
                </motion.div>
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
                    {posts.map((post) => (
                        <Card post={post} />
                    ))}
                </motion.ul>
            </Layout>
        </Container>
    );
}

export function getStaticProps() {
    const posts = gardensFilePath.map((filePath) => {
        const source = fs.readFileSync(path.join(GARDENS_PATH, filePath));
        const { content, data } = matter(source);

        return {
            content,
            data,
            filePath,
        };
    });

    return { props: { posts } };
}
