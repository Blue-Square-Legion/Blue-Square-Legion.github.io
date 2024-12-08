<script lang="ts">
    import type { Snippet } from "svelte";
    type WhyNoteProp = {
        open: boolean;
        summary: string;
        children: Snippet;
        className: string;
        summaryClass: string;
    };

    let {
        open,
        summary = "",
        className,
        children,
        summaryClass,
    }: WhyNoteProp = $props();
</script>

<details {open} class=" {className}">
    <summary class={summaryClass}>
        {summary ? `Why: ${summary}` : "Why?"}</summary
    >
    {#if children}
        {@render children()}
    {/if}
</details>
