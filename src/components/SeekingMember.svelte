<script lang="ts">
    import { Checkbox } from "flowbite-svelte";
    import {
        teamPhase,
        teamTool,
        roleSelectionCount,
    } from "./CommonData.svelte.ts";
    import CopyTextArea from "./CopyTextArea.svelte";
    import NeededRoleSelection from "./NeededRoleSelection.svelte";
    import ImportSeekingMemberPost from "./ImportSeekingMemberPost.svelte";
    import TeamInfo from "./TeamInfo.svelte";
    import TeamToolLister from "./TeamToolLister.svelte";

    // States
    let teamName = $state("");
    let teamGoal = $state("");
    let projectName = $state("");
    let generalMeetingTime = $state("");
    let specificMeetingTime = $state("");
    let teamPost = $state("");
    let timestamp = $state(Math.floor(Date.now() / 1000));
    let isFancyText = $state(false);

    // Derived Values
    let teamURL = $derived(
        validateDiscordURL(teamPost)
            ? teamPost
            : "**LINK TO VALID TEAM POST NEEDED**",
    );
    let meetingTime = $derived(
        `${isFancyText ? "> " : ""}${generalMeetingTime}\n${specificMeetingTime}`,
    );
    let toolsNeeded = $derived([...teamTool.toolsNeeded].join("\n"));
    let teamNameHeader = $derived(isFancyText ? `# ${teamName}` : "#");
    let goalStatement = $derived(
        `${isFancyText ? "> " : ""}${teamGoal || "-"}`,
    );
    let memberExperienceHeader = $derived(
        isFancyText
            ? "### Average member's experience?"
            : "**Average member's experience?**",
    );
    let toolsUsedHeader = $derived(isFancyText ? "### We use:" : "**We use:**");
    let toolsNeededHeader = $derived(
        isFancyText
            ? "### We are looking for people who use:"
            : "**We are looking for people who use:**",
    );
    let linkToPostHeader = $derived(
        isFancyText
            ? "### Link to team forum page:"
            : "**Link to team forum page:**",
    );
    let formattedTimeStamp = $derived(
        isFancyText
            ? `-# Last Updated: <t:${timestamp}:d>`
            : `_Last Updated: <t:${timestamp}:d>_`,
    );

    let formattedString = $derived(`${teamNameHeader}
## Needed roles
${roleSelectionCount.formatRolesNeeded()}
## Goal statement:
${goalStatement}
## Meeting times
${meetingTime || "**NEED MEETING TIME**"}

## Project name
${projectName || "-"}
${memberExperienceHeader}
${teamPhase.currentPhase.name}: ${teamPhase.currentPhase.help}
${toolsUsedHeader}
${teamTool.toolsUsedFormatted || "-"}
${toolsNeededHeader}
${toolsNeeded || "_Same as above_"}
${linkToPostHeader}
${teamURL}

${formattedTimeStamp}
`);

    $effect(() => {
        const timestampUpdateInterval = setInterval(() => {
            timestamp = Math.floor(Date.now() / 1000);
        }, 1000);

        // Return a function to clear the interval
        return () => clearInterval(timestampUpdateInterval);
    });

    function validateDiscordURL(toCheck: string): boolean {
        return (
            toCheck.startsWith("https://discord.com/channels") ||
            /<#\d+>/.test(toCheck)
        );
    }

    // TODO: need actual validation and text constraits to guide people to answer
</script>

<ImportSeekingMemberPost
    bind:teamName
    bind:projectName
    bind:specificMeetingTime
    bind:teamGoal
    bind:teamPost
/>
<TeamInfo
    bind:teamName
    bind:projectName
    bind:teamGoal
    bind:generalMeetingTime
    bind:specificMeetingTime
    bind:teamPost
/>
<TeamToolLister />
<NeededRoleSelection />
<hr />
<Checkbox bind:checked={isFancyText}>
    <span class="dark:text-slate-100 pl-2">Use alternative formatting</span>
</Checkbox>
<CopyTextArea text={formattedString} />
