import fs from "fs";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import imageSize from "rehype-img-size";
import dynamic from "next/dynamic";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import path from "path";
import Layout from "../components/Layout";
import { gardenFilePath, GARDENS_PATH } from "../utils/mdxUtils";

// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.
const components = {
    img: (props) => <Image {...props} layout="responsive" loading="lazy" />,
    // It also works with dynamically-imported components, which is especially
    // useful for conditionally loading components for certain routes.
    // See the notes in README.md for more details.
    // TestComponent: dynamic(() => import("../../components/TestComponent")),
    Head,
};

export default function GardenPage({ source, frontMatter }) {
    return (
        <Layout>
            <header>
                <nav>
                    <Link href="/">
                        <a>Go back home</a>
                    </Link>
                </nav>
            </header>
            <div>
                <h1>{frontMatter.title}</h1>
                {frontMatter.description && <p>{frontMatter.description}</p>}
            </div>
            <main>
                <MDXRemote {...source} components={components} />
            </main>
        </Layout>
    );
}

export const getStaticProps = async ({ params }) => {
    const gardenFilePath = path.join(GARDENS_PATH, `${params.slug}.mdx`);
    const source = fs.readFileSync(gardenFilePath);

    const { content, data } = matter(source);

    const mdxSource = await serialize(content, {
        // Optionally pass remark/rehype plugins
        mdxOptions: {
            remarkPlugins: [],
            rehypePlugins: [[imageSize, { dir: "public" }]],
        },
        scope: data,
    });

    return {
        props: {
            source: mdxSource,
            frontMatter: data,
        },
    };
};

export const getStaticPaths = async () => {
    const paths = gardenFilePath
        // Remove file extensions for page paths
        .map((path) => path.replace(/\.mdx?$/, ""))
        // Map the path into the static paths object required by Next.js
        .map((slug) => ({ params: { slug } }));

    return {
        paths,
        fallback: false,
    };
};
