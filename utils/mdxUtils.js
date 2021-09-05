import fs from "fs";
import path from "path";

// POSTS_PATH is useful when you want to get the path to a specific file
export const GARDENS_PATH = path.join(process.cwd(), "posts", "gardens");
export const TOOLS_PATH = path.join(process.cwd(), "posts", "tools");

// patternFilePath is the list of all mdx files inside the POSTS_PATH directory
export const gardenFilePath = fs
    .readdirSync(GARDENS_PATH)
    // Only include md(x) files
    .filter((path) => /\.mdx?$/.test(path));
