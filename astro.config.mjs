import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import svelte from "@astrojs/svelte";

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
    title: 'Blue Square Legion',
    social: {
      github: 'https://github.com/Blue-Square-Legion'
    },
    sidebar: [{
      label: 'About Us',
      autogenerate: {
        directory: 'about'
      }
    }, {
      label: 'Projects',
      autogenerate: {
        directory: 'project'
      }
      // items: [
      // 	// Each item here is one entry in the navigation menu.
      // 	{ label: 'Keito', link: '/project/keito/' },
      // 	{ label: 'Eco Defender', link: '/project/eco-defender/' },
      // ],
    },
    {
      label: 'Guides',
      autogenerate: {
        directory: 'guides'
      },
    },
    {
      label: 'Tools',
      autogenerate: {
        directory: 'tools'
      }
    }]
  }), svelte(), tailwind()]
});