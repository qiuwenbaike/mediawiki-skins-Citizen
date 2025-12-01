import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";
import { fixupConfigRules } from "@eslint/compat";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
	baseDirectory: __dirname,
	recommendedConfig: js.configs.recommended,
	allConfig: js.configs.all,
});

export default [
	{
		ignores: [
			"dist/",
			"docs/",
			"i18n/",
			"node_modules/",
			"vendor/",
			// ES6 files
			"resources/skins.citizen.scripts.search/typeahead-init.js",
			"resources/skins.citizen.scripts.search/underscore.partial.js",
			"resources/skins.citizen.scripts.search/wm-typeahead.js",
		],
	},
	...fixupConfigRules(...compat.extends("wikimedia/server")),
	{
		languageOptions: {
			ecmaVersion: 11,
			sourceType: "module",
		},
	},
];
