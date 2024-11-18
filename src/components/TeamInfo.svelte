<script lang="ts">
    import { Helper, Input, Label, Textarea } from "flowbite-svelte";
    import { TIMEZONES } from "./CommonData.svelte";
    import PhaseFinder from "./PhaseFinder.svelte";
    type TeamInfoProp = {
        teamName: string;
        projectName: string;
        teamGoal: string;
        generalMeetingTime: string;
        specificMeetingTime: string;
        teamPost: string;
    };

    let {
        teamName = $bindable(""),
        projectName = $bindable(""),
        teamGoal = $bindable(""),
        generalMeetingTime = $bindable(""),
        specificMeetingTime = $bindable(""),
        teamPost = $bindable(""),
    }: TeamInfoProp = $props();

    function validateDiscordURL(toCheck: string): boolean {
        return (
            /^http(?:s?):\/\/discord.com\/channels\/\d+\/\d+/.test(toCheck) ||
            /<#\d+>/.test(toCheck)
        );
    }
</script>

<Label class="space-y-2 text-primary-500">
    <span>Team Name</span>
    <Input
        type="text"
        placeholder="Your team's name"
        size="lg"
        bind:value={teamName}
    />
</Label>
<Label class="space-y-2 text-primary-500">
    <span>Project Name</span>
    <Input
        type="text"
        placeholder="Your team's project"
        size="md"
        bind:value={projectName}
    />
</Label>
<Label class="space-y-2 text-primary-500">
    <span>Team's Goal Statement</span>
    <Input
        type="text"
        placeholder="Your team's goal"
        size="md"
        bind:value={teamGoal}
    />
</Label>
<PhaseFinder />
<Label class="space-y-2 text-primary-500">
    <span>Meeting Time</span>
    <Input
        list="meeting-time"
        type="text"
        placeholder="Your team's general meeting time"
        size="md"
        bind:value={generalMeetingTime}
    />
    <datalist id="meeting-time">
        {#each TIMEZONES as timezone}
            <option value={timezone}></option>
        {/each}
    </datalist>
    <Textarea
        bind:value={specificMeetingTime}
        rows={2}
        placeholder="Team meeting time by day (for example, Monday: 2:00pm)"
    ></Textarea>
    <Helper class="text-sm text-primary-900 dark:text-primary-100">
        Use <a href="https://hammertime.cyou">HammerTime</a> to get automatic time
        conversion on Discord
    </Helper>
</Label>
<Label
    class="space-y-2 text-primary-500 {validateDiscordURL(teamPost)
        ? 'text-green-300'
        : 'text-red-500'}"
>
    <span>
        {validateDiscordURL(teamPost) ? "✅" : "❌"}
        Team Link (on Discord)
    </span>
    <Input
        type="url"
        placeholder="Link to your team post from Discord"
        size="md"
        bind:value={teamPost}
    />
</Label>
