<script lang="ts">
    import { Button, Radio, Helper, Dropdown } from "flowbite-svelte";
    import { teamPhase } from "./CommonData.svelte.ts";
</script>

<Button class=" bg-primary-500"
    >Current Team Phase: {teamPhase.currentPhase.name}
</Button>
<Dropdown class=" w-96 p-3 space-y-1">
    {#each { length: teamPhase.numberOfPhases } as _, index}
        <li
            class="rounded hover:bg-gray-100 dark:hover:bg-gray-600 grid grid-cols-2"
        >
            <Radio
                name="teamPhaseGroup"
                bind:group="{teamPhase.phaseIndex}"
                value="{index}"
                class="dark:text-slate-50"
            >
                <span class="ps-2">{teamPhase.getPhaseInfo(index).name}</span>
            </Radio>
            <Helper class="ps-6 text-sm dark:text-slate-50">
                {teamPhase.getPhaseInfo(index).help}
            </Helper>
        </li>
    {/each}
</Dropdown>
