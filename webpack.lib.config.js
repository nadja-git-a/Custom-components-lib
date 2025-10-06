import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const externalsReact = [
  ({ request }, cb) =>
    /^(react|react-dom)(\/.*)?$/.test(request || '') ? cb(null, `commonjs ${request}`) : cb(),
];

const common = {
  entry: './src/entry.ts',
  resolve: { extensions: ['.ts', '.tsx', '.js', '.jsx'] },
  externals: externalsReact,
  optimization: { minimize: true },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: { loader: 'ts-loader', options: { transpileOnly: true } },
      },
      {
        test: /\.module\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              esModule: true,
              modules: { localIdentName: '[hash:base64:8]', namedExport: false },
            },
          },
        ],
      },
      {
        test: /\.css$/i,
        exclude: /\.module\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin({ filename: 'styles.css' })],
};

/** @type {import('webpack').Configuration[]} */
export default [
  {
    ...common,
    mode: 'production',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'index.cjs',
      library: { type: 'commonjs2' },
      clean: false,
    },
  },
  {
    ...common,
    mode: 'production',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'index.esm.js',
      library: { type: 'module' },
      module: true,
      environment: { module: true },
      clean: false,
    },
    experiments: { outputModule: true },
  },
];
