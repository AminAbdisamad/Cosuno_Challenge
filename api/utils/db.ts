import fs from "fs";
import { Company } from "./types";

const data = fs.readFileSync("data.json", { encoding: "utf-8" });
export const companies: [Company] = JSON.parse(data);
