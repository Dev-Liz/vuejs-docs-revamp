// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeRapide from 'starlight-theme-rapide';
import tailwindcss from '@tailwindcss/vite';


// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			plugins: [starlightThemeRapide()],
			customCss: [
        		'./src/styles/global.css',
     		],
			title: 'Vue.js',
			 logo: {
        		src: './src/assets/logo.svg',
      		},
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/vuejs/' },
				     { icon: 'x.com', label: 'X', href: 'https://x.com/vuejs' },				
                     { icon: 'discord', label: 'Discord', href: 'https://discord.com/invite/vue' },				
			],
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Introduction', slug: 'getting_started/introduction' },
						{ label: 'Quick start', slug: 'getting_started/quickstart' },
						{ label: 'Installation', slug: 'getting_started/installation' },
					],
				},
				{
					label: 'Vue-js Essentials',
					// autogenerate: { directory: 'essentials' },
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Vue Directives', slug: 'essentials/vue_directives' },
						{ label: 'Vue Templates', slug: 'essentials/vue_templates' },
					],
				},
			],
		}),
	],
	vite: { plugins: [tailwindcss()] },
});
