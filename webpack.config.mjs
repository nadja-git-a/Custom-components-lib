import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    library: { type: "module" },
    clean: true
  },
  experiments: { outputModule: true },
  resolve: { extensions: [".ts", ".tsx", ".js", ".jsx"] },
  module: {
    rules: [
      { test: /\.(ts|tsx|js|jsx)$/, exclude: /node_modules/, use: "babel-loader" },
      {
        test: /\.module\.css$/i,
        use: [
          "style-loader",
          { loader: "css-loader", options: { modules: { localIdentName: "[name]__[local]__[hash:base64:5]" } } }
        ]
      },
      { test: /\.css$/i, exclude: /\.module\.css$/i, use: ["style-loader", "css-loader"] },
      { test: /\.(png|jpe?g|gif|svg)$/i, type: "asset/resource" }
    ]
  },
  devtool: "source-map"
};