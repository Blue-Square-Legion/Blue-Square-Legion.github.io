import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import svelte from "@astrojs/svelte";
import tailwind from '@astrojs/tailwind';
import { resolve } from "node:path";

// https://astro.build/config
export default defineConfig({
  site: "https://Blue-Square-Legion.github.io",
  // Commented out base due to note at: https://docs.astro.build/en/guides/deploy/github/#base
  // base: "Blue-Square-Legion.github.io",
  integrations: [starlight({
    title: 'Blue Square Legion',
    social: {
      github: 'https://github.com/Blue-Square-Legion'
    },
    sidebar: [{
      //   label: 'About Us',
      //   autogenerate: {
      //     directory: 'about'
      //   }
      // },
      // {
      //   label: 'Projects',
      //   autogenerate: {
      //     directory: 'project'
      //   }
      //   // items: [
      //   // 	// Each item here is one entry in the navigation menu.
      //   // 	{ label: 'Keito', link: '/project/keito/' },
      //   // 	{ label: 'Eco Defender', link: '/project/eco-defender/' },
      //   // ],
      // },
      // {
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
    },
    {
      label: 'External Projects Pages',
      collapsed: true,
      items: [
        { label: 'Deep Dive', link: 'https://teamnarwhal.itch.io/deep-dive', badge: { text: 'Web', variant: 'success' }, },
        { label: 'Eco Defender', link: 'https://light-with-blocks.itch.io/eco-defender', badge: { text: 'Windows/MacOS', variant: 'tip' }, },
        { label: 'Food Jam: Attack of the Munchies', link: 'https://jyama.itch.io/food-jam-attack-of-the-munchies', badge: { text: 'Web', variant: 'success' }, },
        { label: 'Frostblade Saga', link: 'https://ivinzzzz.itch.io/frostblade-sagaz', badge: { text: 'Web/Windows', variant: 'success' }, },
        { label: 'Keito', link: 'https://sam325.itch.io/keito-game', badge: { text: 'Windows/MacOS', variant: 'tip' }, },
        { label: 'Inside the Mind of Billy', link: 'https://wilsonbl.itch.io/inside-the-mind-of-billy', badge: { text: 'Windows', variant: 'note' }, },
        { label: 'License Master', link: 'https://mugwanezamanzi.itch.io/license-master', badge: { text: 'Windows', variant: 'note' }, },
        // { label: 'Orca Overboard', link: 'https://hellf1re.itch.io/sub-mariners', badge: { text: 'link moved', variant: 'danger' }, },
        { label: 'Pet Parkour', link: 'https://teammesa.itch.io/pet-parkour', badge: { text: 'Web: teammesa', variant: 'caution' }, },
        // { label: 'Roller Girl', link: 'https://polysplitter.itch.io/rollergirl', badge: { text: 'link moved', variant: 'danger' }, },
        { label: 'Runes vs Robots', link: 'https://chiferito.itch.io/project-tower', badge: { text: 'Web', variant: 'success' }, },
        { label: 'Sub-Surfers', link: 'https://robertchaney.itch.io/sub-surfers', badge: { text: 'Web', variant: 'success' }, },
      ]
    },
    {
      label: 'Tech Stack',
      slug: 'tech-stack',
    }
    ]
  }), svelte(), tailwind()],
  vite: {
    resolve: {
      alias: {
        '@components': resolve('./src/components'),
        '@data': resolve('./src/data'),
      },
    },
  },
});