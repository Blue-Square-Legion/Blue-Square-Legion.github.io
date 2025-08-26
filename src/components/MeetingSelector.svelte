<script lang="ts">
    import {
        ButtonGroup,
        Checkbox,
        Helper,
        Input,
        InputAddon,
        Label,
        Range,
        Span,
    } from "flowbite-svelte";
    import { MAX_MEETING_AMOUNT, meetingsList } from "./CommonData.svelte";

    let meetingCount = $state(1);
</script>

<section>
    <Span>Meeting Auto Formatter</Span>
    <Label class="text-primary-500">Number of Meetings: {meetingCount}</Label>
    <Range
        id="meeting-count"
        bind:value={meetingCount}
        min="1"
        max={MAX_MEETING_AMOUNT}
        onchange={(e) => (meetingsList.size = +e.currentTarget.value)}
    />
    <hr />
    {#each { length: meetingCount } as _, meetingId}
        <Label class="mt-2 text-primary-500" for="input-addon-sm"
            >Meeting #{meetingId + 1} Start Time</Label
        >
        {#if meetingsList}
            <ButtonGroup
                class="w-full flex"
                divClass="mt-0"
                size="sm"
                style="margin-top: 0.1rem;"
            >
                <div class="flex-auto mt-4">
                    <Helper class="text-md text-primary-600"
                        >Meeting day(s):</Helper
                    >
                    <ul
                        class="items-center w-full rounded-lg border border-gray-200 sm:flex dark:bg-gray-800 dark:border-gray-600 divide-x rtl:divide-x-reverse divide-gray-200 dark:divide-gray-600"
                    >
                        <li class="w-full">
                            <Checkbox
                                class="mt-5 text-slate-900 dark:text-slate-100 p-2"
                                bind:checked={
                                    meetingsList.meetings[meetingId]!.onMon
                                }
                            >
                                <Span class="ps-1">Mon.</Span></Checkbox
                            >
                        </li>
                        <li class="w-full">
                            <Checkbox
                                inline
                                class="mt-4 text-slate-900 dark:text-slate-100 p-2"
                                bind:checked={
                                    meetingsList.meetings[meetingId]!.onTue
                                }
                            >
                                <Span class="ps-1">Tue.</Span></Checkbox
                            >
                        </li>
                        <li class="w-full">
                            <Checkbox
                                class="mt-4 text-slate-900 dark:text-slate-100 p-2"
                                bind:checked={
                                    meetingsList.meetings[meetingId]!.onWed
                                }
                            >
                                <Span class="ps-1">Wed.</Span></Checkbox
                            >
                        </li>
                        <li class="w-full">
                            <Checkbox
                                class="mt-4 text-slate-900 dark:text-slate-100 p-2"
                                bind:checked={
                                    meetingsList.meetings[meetingId]!.onThu
                                }
                            >
                                <Span class="ps-1">Thu.</Span></Checkbox
                            >
                        </li>
                        <li class="w-full">
                            <Checkbox
                                class="mt-4 text-slate-900 dark:text-slate-100 p-2"
                                bind:checked={
                                    meetingsList.meetings[meetingId]!.onFri
                                }
                            >
                                <Span class="ps-1">Fri.</Span></Checkbox
                            >
                        </li>
                    </ul>
                </div>
                <div class="flex-auto px-2">
                    <Helper class="text-md text-primary-600"
                        >Time Selector:</Helper
                    >
                    <ButtonGroup>
                        <InputAddon class="inline-flex rounded-s-xl py-2"
                            ><Span class="p-2">Start time</Span></InputAddon
                        >
                        <Input
                            class="inline text-justify rounded-e-xl"
                            id="time-selector-{meetingId}"
                            size="sm"
                            type="time"
                            bind:value={
                                meetingsList.meetings[meetingId]!.startTime
                            }
                        />
                    </ButtonGroup>
                </div>
            </ButtonGroup>
        {:else}
            <Span>No Meetings to define</Span>
        {/if}
        <hr />
    {/each}
</section>
