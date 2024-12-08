<script lang="ts">
    // Note for those looking at the component, this component was specifically
    // chosen to be a single, giant component for teaching purposes, a better
    // separation would be done by those in each `section` tag

    // Imports
    import {
        ButtonGroup,
        Helper,
        Input,
        InputAddon,
        Label,
        Progressbar,
        Range,
        Span,
    } from "flowbite-svelte";

    // Constants
    const MAX_TEAMS = 12;
    const MAX_MEMBERS = 12;
    const PARAM_NEEDED = "needed";
    const PARAM_EARNED = "earned";
    const PARAM_MEMBERS = "members";
    const ARRAY_SEPARATOR = "-";
    const ALMOST_THRESHOLD = 90;
    const DEFAULT_REQUIRED_H = 360;
    const DEFAULT_EARNED_H = 0;
    const DEFAULT_TEAM_COUNT = 1;
    const DEFAULT_MEMBER_COUNT = 6;

    // States
    let helpfulnessRequired: number = $state(DEFAULT_REQUIRED_H);
    let helpfulnessAlreadyEarned: number = $state(DEFAULT_EARNED_H);
    let teamsInLegion: number = $state(DEFAULT_TEAM_COUNT);
    let memberInTeam: number[] = $state(
        Array(MAX_TEAMS).fill(DEFAULT_MEMBER_COUNT),
    );

    // Derived value
    const trueHelpfulnessNeeded = $derived(helpfulnessRequired * 1000);
    const trueHelpfulnessEarned = $derived(helpfulnessAlreadyEarned * 1000);
    const helpfulnessProgressPercentage = $derived(
        (helpfulnessAlreadyEarned / helpfulnessRequired) * 100,
    );
    const helpfulnessStillToEarn = $derived(
        helpfulnessRequired - helpfulnessAlreadyEarned,
    );

    // Effects
    $effect(() => {
        // On Mount
        const urlParams = new URLSearchParams(window.location.search);
        // + converts to number, ?? for nullish coalescing (give default if nullish)
        helpfulnessRequired = +(
            urlParams.get(PARAM_NEEDED) ?? DEFAULT_REQUIRED_H
        );
        helpfulnessAlreadyEarned = +(
            urlParams.get(PARAM_EARNED) ?? DEFAULT_EARNED_H
        );
        const teams = urlParams.get(PARAM_MEMBERS)?.split(ARRAY_SEPARATOR);
        if (teams) {
            teams
                // Remove non-integer counts and indices over MAX_TEAMS
                .filter((c, i) => Number.isInteger(+c) && i < MAX_TEAMS)
                // Set memberInTeam at index to clamped count (between 0 and MAX_MEMBERS)
                .forEach(
                    (count, idx) =>
                        (memberInTeam[idx] = Math.min(
                            Math.max(+count, 0),
                            MAX_MEMBERS,
                        )),
                );
            teamsInLegion = teams.length;
        }
    });

    // Helper Functions
    /** Set the URL parameters based on current items */
    function updateURLParams() {
        // Set URL parameter values
        const urlParams = new URLSearchParams(window.location.search);
        urlParams.set(PARAM_NEEDED, helpfulnessRequired.toString());
        urlParams.set(PARAM_EARNED, helpfulnessAlreadyEarned.toString());
        urlParams.set(
            PARAM_MEMBERS,
            memberInTeam
                .filter((_, i) => i < teamsInLegion)
                .join(ARRAY_SEPARATOR),
        );
        // Update URL without page reload (for quick linking)
        window.history.replaceState(
            Object.fromEntries(urlParams),
            "",
            `?${urlParams.toString()}`,
        );
    }

    /** Get `,000` suffix based on current local */
    function getThousandSuffix() {
        return (1000).toLocaleString().substring(1);
    }
</script>

<section id="helpfulness-calculator">
    <div class="mb-6">
        <Label
            for="helpfulness-need-input"
            class="block mb-2 text-primary-500 text-xl"
            >Helpfulness Needed: {trueHelpfulnessNeeded.toLocaleString()}</Label
        >
        <Range
            id="helpfulness-need-range"
            bind:value={helpfulnessRequired}
            size="lg"
            min="20"
            max="400"
            onchange={updateURLParams}
            list="helpfulness-need-options"
        />

        <ButtonGroup class="w-full">
            <Input
                id="helpfulness-need-input"
                type="number"
                size="lg"
                placeholder="Helpfulness Needed"
                bind:value={helpfulnessRequired}
                onchange={updateURLParams}
                class="rounded-s-xl"
            />
            <InputAddon class="inline-flex rounded-e-xl"
                ><Span class="px-2">{getThousandSuffix()}</Span></InputAddon
            >
        </ButtonGroup>
        <Helper class="text-sm mt-2"
            ><Span>Helpfulness is in (1000 increments)</Span></Helper
        >
        <datalist id="helpfulness-need-options">
            <option value="120">120</option>
            <option value="190">190</option>
            <option value="300"> 300</option>
            <option value="360">360</option></datalist
        >
    </div>
    <div class="mb-6">
        <Label
            for="helpfulness-earn-input"
            class="block mb-2 text-primary-500 text-xl"
            >Helpfulness Already Earned: {trueHelpfulnessEarned.toLocaleString()}</Label
        >
        <Range
            id="helpfulness-earn-range"
            bind:value={helpfulnessAlreadyEarned}
            size="lg"
            min="0"
            max="400"
            onchange={updateURLParams}
        />

        <ButtonGroup class="w-full">
            <Input
                id="helpfulness-earn-input"
                type="number"
                size="lg"
                placeholder="Helpfulness Earned"
                bind:value={helpfulnessAlreadyEarned}
                onchange={updateURLParams}
                class="rounded-s-xl"
            />
            <InputAddon class="inline-flex rounded-e-xl"
                ><Span class="px-2">{getThousandSuffix()}</Span></InputAddon
            >
        </ButtonGroup>
        <Helper class="text-sm mt-2"
            ><Span>Helpfulness is in (1000 increments)</Span></Helper
        >
    </div>
    <Progressbar
        animate
        progress={helpfulnessProgressPercentage}
        labelOutside="Helpfulness Progress"
        size="lg"
        class="bg-primary-700 w-full h-fit"
        progressClass="bg-emerald-400"
    />
    <meter
        id="helpfulness-progress"
        min="0"
        max="100"
        low={ALMOST_THRESHOLD}
        high="99.999"
        optimum="100"
        value={helpfulnessProgressPercentage}
        class=" w-full"
    ></meter>
</section>

<section id="teams-size-calculator">
    <details>
        <summary
            >Advanced Team Counter (number of teams: {teamsInLegion})</summary
        >
        <Label for="team-count" class="text-primary-500 underline text-lg"
            >Teams in Legion: {teamsInLegion}</Label
        >
        <Range
            id="team-count"
            bind:value={teamsInLegion}
            size="lg"
            min="1"
            max={MAX_TEAMS}
            onchange={updateURLParams}
        />

        {#each { length: teamsInLegion } as _, teamID}
            <div>
                <Label
                    for="member-count-{teamID}"
                    class="text-primary-500 italic text-lg"
                    ><strong>Team {teamID + 1}</strong> Members: {memberInTeam[
                        teamID
                    ] ?? 0}</Label
                >
                {/* @ts-ignore SAFETY: memberInTeam has as many indices as MAX_TEAM size */ null}
                <Range
                    id="member-count-{teamID}"
                    bind:value={memberInTeam[teamID]}
                    size="md"
                    min="1"
                    max={MAX_MEMBERS}
                    onchange={updateURLParams}
                />
            </div>
        {/each}
    </details>
</section>

<section id="helpfulness-goal-text">
    <Span class=" text-4xl">
        Remaining Helpfulness to Earn: <output
            >{(helpfulnessStillToEarn * 1000).toLocaleString()}</output
        >
    </Span>
    <br />
    <Span class="text-2xl">
        (average per team: <output
            >{Math.round(
                (helpfulnessStillToEarn / teamsInLegion) * 1000,
            ).toLocaleString()}</output
        >)
    </Span>
    <br />
    <Span class="text-xl">
        (average per member: <output
            >{Math.round(
                (helpfulnessStillToEarn /
                    memberInTeam
                        .slice(0, teamsInLegion)
                        .reduce((total, i) => total + i, 0)) *
                    1000,
            ).toLocaleString()}</output
        >)
    </Span>
</section>
