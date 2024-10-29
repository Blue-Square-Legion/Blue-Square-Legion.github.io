<script lang="ts">
    import { Input, Label, Textarea } from "flowbite-svelte";
    import { rolesNeeded, teamPhase } from "./CommonData.svelte.ts";
    import PhaseFinder from "./PhaseFinder.svelte";
    import CopyTextArea from "./CopyTextArea.svelte";
    import NeededRoleSelection from "./NeededRoleSelection.svelte";

    let teamGoal = $state("");
    let projectName = $state("");
    let teamPost = $state("");
    let teamURL = $derived(
        validateDiscordURL(teamPost)
            ? teamPost
            : "**LINK TO VALID TEAM POST NEEDED**",
    );
    let meetingTime = $state("");
    let moreTools = $state("");

    let formattedString = $derived(`#
## Needed roles
${rolesNeeded.rolesText}
## Goal statement:
${teamGoal || "-"}
## Meeting times
${meetingTime || "**NEED MEETING TIME**"}
## Project name
${projectName || "-"}
**Average member's experience?**
${teamPhase.currentPhase.name}: ${teamPhase.currentPhase.help}
**We use:**
${(moreTools + "\n" + rolesNeeded.toolsText).trim() || "-"}
**We are looking for people who use:**
${rolesNeeded.toolsText || "-"}
**Link to team forum page:**
${teamURL}
`);

    function validateDiscordURL(toCheck: string): boolean {
        return toCheck.startsWith("https://discord.com/channels");
    }

    // TODO: need actual validation and text constraits to guide people to answer
</script>

<PhaseFinder />
<Label class="space-y-2 text-primary-500">
    <span>Team's Goal Statement</span>
    <Input
        type="text"
        placeholder="Your team's goal"
        size="md"
        bind:value="{teamGoal}"
    />
</Label>
<Label class="space-y-2 text-primary-500">
    <span>Project Name</span>
    <Input
        type="text"
        placeholder="Your team's project"
        size="md"
        bind:value="{projectName}"
    />
</Label>
<Label class="space-y-2 text-primary-500">
    <span>Meeting Time</span>
    <Input
        type="text"
        placeholder="Your team's meeting time"
        size="md"
        bind:value="{meetingTime}"
    />
</Label>
<Label class="space-y-2 text-primary-500">
    <span>Team Link (on Discord)</span>
    <Input
        type="url"
        placeholder="Link to your team post from Discord"
        size="md"
        bind:value="{teamPost}"
    />
</Label>
<NeededRoleSelection />
<Label class="space-y-2 text-primary-500">
    <span>Additional Tools</span>
    <Textarea placeholder="List of additional tools" bind:value="{moreTools}" />
</Label>
<hr />
<CopyTextArea text="{formattedString}" />
