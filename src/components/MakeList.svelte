<script lang="ts">
    import Self from "./MakeList.svelte";
    import { Li, List } from "flowbite-svelte";
    import type { ListProps } from "flowbite-svelte/List.svelte";

    let {
        tag = "ul",
        list = "disc",
        position = "inside",
        level = 0,
        data,
    }: ListProps & { data: any[]; level: number } = $props();
</script>

<!-- Use style instead of regular Tailwind classes because can't gaurentee that Tailwind will pick this up -->
<List
    {tag}
    {list}
    {position}
    style="padding-inline-start: {level}rem; margin-top: {level * 0.5}rem;"
>
    {#each data as item}
        {#if typeof item === "object" && !Array.isArray(item) && item !== null}
            {#if item.name}
                <Li
                    >{item.name}
                    {#if item.children}
                        <Self
                            {tag}
                            {list}
                            data={item.children}
                            level={level + 1}
                        />
                    {/if}
                </Li>
            {/if}
        {:else}
            <Li>{item}</Li>
        {/if}
    {/each}
</List>
