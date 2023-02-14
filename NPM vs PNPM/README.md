npm maintains a flattened dependency tree as of version 3. This leads to less disk space bloat, with a messy node_modules directory as a side effect.

On the other hand, pnpm manages node_modules by using hard linking and symbolic linking to a global on-disk content-addressable store. This nets you the benefits of far less disk space usage, while also keeping your node_modules clean. There is documentation on the store layout if you wish to learn more.

The good thing about pnpm's proper node_modules structure is that it "helps to avoid silly bugs" by making it impossible to use modules that are not specified in the project's package.json.