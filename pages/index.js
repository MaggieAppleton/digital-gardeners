import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import path from "path";
import Container from "../components/Container";
import Layout from "../components/Layout";
import Sidemenu from "../components/Sidemenu";
import Card from "../components/Card";
import { gardenFilePath, GARDENS_PATH } from "../utils/mdxUtils";
import { motion } from "framer-motion";

const tools = [
    {
        title: "Roam Research",
        description: "A personal notes system for interconnected thought",
        url: "https://roamresearch.com/",
    },
    {
        title: "Roam Garden",
        description:
            "Allows you to turn a Roam Research graph into a public website",
        url: "https://roam.garden/",
    },
    {
        title: "Gatsby Theme Garden",
        description: "Gatsby theme that supports using Roam as a source",
        url: "https://github.com/mathieudutour/gatsby-digital-garden/",
    },
];

export default function Index({ gardens }) {
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
                    <h1 className="sm:text-4xl  mb-6 font-semibold">
                        Garden of Digital Gardens
                    </h1>
                    <h2 className="text-xl text-deepGreen font-serif font-light max-w-5xl leading-tight">
                        A collection of digital gardens, tools, and resources
                        for gardeners
                    </h2>
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
                    {gardens.slice(0, 7).map((garden) => (
                        <Card garden={garden} />
                    ))}
                    <li>
                        <Link href="/directory">
                            <a className="text-deepGreen text-lg">
                                View all gardens
                            </a>
                        </Link>
                    </li>
                </motion.ul>
                <motion.ul>
                    {tools.slice(0, 7).map((tool) => (
                        <div>
                            <h2 className="text-xl text-deepGreen font-serif font-light max-w-5xl leading-tight">
                                {tool.title}
                            </h2>
                            <p className="text-lg">{tool.description}</p>
                        </div>
                    ))}
                </motion.ul>
            </Layout>
        </Container>
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
