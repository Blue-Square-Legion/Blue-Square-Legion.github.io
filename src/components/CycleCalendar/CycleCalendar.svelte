<script lang="ts">
    import { Checkbox, Datepicker, Helper, Range, Span } from "flowbite-svelte";
    import DayView from "./DayView.svelte";
    // @ts-ignore Not picking up Astro alias, so cannot find module, but it exists
    import igniteEventsData from "@data/igniteEvents.json";
    // @ts-ignore Not picking up Astro alias, so cannot find module, but it exists
    import legionEventsData from "@data/legionEvents.json";
    import type { DayEvent, EventValue } from "../types";
    const DAYS_IN_WEEK = 7;
    const DAYS_OF_WEEK = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
    ];
    const IGNITE_START_DAY = 3; // Wednesday
    const LAST_IGNITE_DAY = 2; // Tuesday
    const NUMBER_OF_NON_DEV_WEEKS = 3;
    const START_DAY_PARAM = "s";
    const DEV_WEEKS_PARAM = "d";
    const LEGION_EVENTS_PARAM = "e";
    let selectedDate: Date = $state(new Date());
    let numberOfDevWeeks: number = $state(3);
    let showLegionEvent: boolean = $state(false);
    const totalWeeks = $derived(numberOfDevWeeks + NUMBER_OF_NON_DEV_WEEKS);
    let startDay = $derived((selectedDate.getDay() - 1) % 7);
    function addDays(date: Date, days: number) {
        var dateCopy = new Date(date.valueOf());
        dateCopy.setDate(date.getDate() + days);
        return dateCopy;
    }

    /**
     * Ignite event mapping of "week,day" to event(s) as string
     */
    const igniteEvents = igniteEventsData as unknown as DayEvent;

    /**
     * Blue Square Legion event mapping of "week,day" to event(s) as string
     */
    const bslEvents = legionEventsData as unknown as DayEvent;

    $effect(() => {
        // On Mount
        const urlParams = new URLSearchParams(window.location.search);
        let dateStr = urlParams.get(START_DAY_PARAM);
        if (dateStr && dateStr.length === 8 && /^\d+$/.test(dateStr)) {
            selectedDate = new Date(
                `${dateStr.slice(0, 4)}-${dateStr.slice(4, 6)}-${dateStr.slice(6)}`,
            );
        }
        numberOfDevWeeks = Math.min(
            Math.max(
                Math.floor(
                    +(urlParams.get(DEV_WEEKS_PARAM) ?? numberOfDevWeeks),
                ),
                2,
            ),
            5,
        );

        showLegionEvent = (urlParams.get(LEGION_EVENTS_PARAM) ?? "") !== "";
    });

    function getWeekDayOffset(
        week: number,
        day: number,
    ): {
        weekFromStart: number;
        dayFromStart: number;
        weekFromEnd: number;
        dayFromEnd: number;
    } {
        return {
            weekFromStart: week,
            dayFromStart: day,
            weekFromEnd: -(totalWeeks - week),
            dayFromEnd: -(DAYS_IN_WEEK - day),
        };
    }

    function getEvents(
        week: number,
        day: number,
        isDev: boolean = true,
    ): EventValue[] {
        const legionEvent = showLegionEvent ? bslEvents : {};
        // Fix off by one error due to JS starting on Sunday,
        // but our calendar starting on Monday
        day = (day + 1) % 7;
        const { weekFromStart, dayFromStart, weekFromEnd, dayFromEnd } =
            getWeekDayOffset(week, day);
        return [
            [weekFromStart, dayFromStart],
            [weekFromStart, dayFromEnd],
            [weekFromEnd, dayFromStart],
            [weekFromEnd, dayFromEnd],
        ]
            .flatMap(([w, d]) =>
                [igniteEvents[`${w},${d}`], legionEvent[`${w},${d}`]].filter(
                    (e) => e && (!isDev ? !e.devOnly : true),
                ),
            )
            .filter((e) => e !== undefined);
    }

    function isCurrentCycle(week: number, day: number) {
        return (
            // Is any middle week
            (week > 0 && week < totalWeeks - 1) ||
            // Is on or after start day of first week
            (week === 0 && day >= IGNITE_START_DAY - 1) ||
            // Is on or before retrospective day
            (week >= totalWeeks - 1 && day < LAST_IGNITE_DAY)
        );
    }

    /** Set the URL parameters based on current items */
    function updateURLParams() {
        // Set URL parameter values
        const urlParams = new URLSearchParams(window.location.search);
        const startDayStr = selectedDate
            .toISOString()
            .split("T")[0]
            ?.replaceAll("-", "");
        if (startDayStr) {
            urlParams.set(START_DAY_PARAM, startDayStr);
        }
        urlParams.set(DEV_WEEKS_PARAM, numberOfDevWeeks.toString());
        // Update URL without page reload (for quick linking)
        window.history.replaceState(
            Object.fromEntries(urlParams),
            "",
            `?${urlParams.toString()}`,
        );
    }
</script>

<Helper class="text-primary-500"
    >Start Date: {selectedDate
        ? selectedDate.toLocaleDateString()
        : "None"}</Helper
>
<Datepicker
    bind:value={selectedDate}
    title="Select start of the cycle"
    on:select={updateURLParams}
/>
<Helper class="text-primary-500"
    >Number of Development Weeks: {numberOfDevWeeks} weeks</Helper
>
<Range
    min="2"
    max="5"
    bind:value={numberOfDevWeeks}
    onchange={updateURLParams}
/>

<h2>Calendar</h2>
<!-- Plus one for header -->
<section class="flex">
    <Checkbox bind:checked={showLegionEvent}
        ><Span class="px-2">Show Blue Square Legion Events</Span></Checkbox
    >
</section>
<div class=" grid grid-rows-{totalWeeks + 1} overflow-x-auto">
    <div class="grid grid-cols-8 justify-center">
        <div class="text-primary-400"><em>Week #</em></div>
        {#each DAYS_OF_WEEK as day}
            <div class="text-primary-400 text-center">
                <strong>{day}</strong>
            </div>
        {/each}
    </div>
    {#if selectedDate}
        {#each { length: totalWeeks } as _, week}
            <div class="grid grid-cols-8 hover:my-2">
                <div class="mt-4"><em>Week {week}</em></div>
                {#each { length: DAYS_IN_WEEK } as _, day}
                    <DayView
                        id="view-{week}-{day}"
                        date={addDays(
                            selectedDate,
                            week * DAYS_IN_WEEK + (day - startDay),
                        )}
                        isCurrent={isCurrentCycle(week, day)}
                        events={getEvents(week, day, week <= numberOfDevWeeks)}
                    />
                {/each}
            </div>
        {/each}
    {/if}
</div>
