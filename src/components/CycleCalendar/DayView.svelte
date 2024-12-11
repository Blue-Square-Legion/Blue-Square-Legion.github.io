<script lang="ts">
    import { Button, Li, List, Popover, Span } from "flowbite-svelte";
    import type { EventValue } from "../types";

    let {
        id,
        date,
        events,
        isCurrent = true,
        highlightToday = true,
    }: {
        id: string;
        date: Date;
        events: EventValue[];
        isCurrent: boolean;
        highlightToday?: boolean;
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
    <Span class="text-md px-1"
        >{date.toLocaleDateString(userLocale, {
            day: "2-digit",
            month: "2-digit",
            year: "2-digit",
        })}</Span
    >
    {#if !isCurrent}
        <div class="p-1">
            <span class="text-sm px-1">Outside Current Cycle</span>
        </div>
    {:else}
        {#each events as dayEvent, i}
            <Button id="event-{id}-{i}" size="xs"
                ><Span class="text-xs px-1">{dayEvent.name}</Span></Button
            >
            <Popover
                class="w-64 text-sm font-light p-1"
                title={dayEvent.name}
                arrow={false}
                triggeredBy="#event-{id}-{i}"
            >
                <List>
                    {#each dayEvent.events as event}
                        <Li><Span>{event}</Span></Li>
                    {/each}
                </List>
            </Popover>
        {/each}
    {/if}
</div>
