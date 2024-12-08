<script lang="ts">
    import { Span } from "flowbite-svelte";

    let {
        id,
        date,
        events,
        isCurrent = true,
        highlightToday = true,
    }: {
        id: string;
        date: Date;
        events: string;
        isCurrent: boolean;
        highlightToday: boolean;
    } = $props();

    const userLocale =
        navigator.languages && navigator.languages.length
            ? navigator.languages[0]
            : navigator.language;
    const today = new Date();
</script>

<div
    {id}
    class=" border-primary-600 border-2 min-h-32 hover:text-lg rounded-xl p-1 {highlightToday &&
    today.toDateString() === date.toDateString()
        ? 'bg-emerald-400'
        : ''}"
>
    {#if !isCurrent}
        <div class="p-1">Outside Current Cycle</div>
    {:else}
        <Span class="text-md px-1"
            >{date.toLocaleDateString(userLocale, {
                day: "2-digit",
                month: "2-digit",
                year: "2-digit",
            })}</Span
        >
        <br />
        <Span class="text-sm">{events}</Span>
    {/if}
</div>
