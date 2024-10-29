const TEAM_PHASE_ARRAY = [
  {
    name: "Exploring",
    help:
      "Looking into various fields within game or software development to find my fit.",
  },
  {
    name: "Committing",
    help: "Focused on a specific role, aiming to expand my expertise in it.",
  },
  {
    name: "Showcasing",
    help:
      "Established and ready to compile a portfolio that'll open new doors.",
  },
  {
    name: "Contributing",
    help:
      "Already hired in the industry and seeking to come to give back by creating positive-impact products.",
  },
  { name: "Mentoring", help: "Seeking to mentor others who create." },
];

// AI Assited tools separation begin
const gameEngines = [
  "Unity",
  "Godot",
  "Unreal Engine",
  "Construct",
  "Clickteam Fusion",
  "CryENGINE",
  "Open3DEngine",
  "AppGameKit"
];

const programmingLanguages = [
  "Construct 3",
  "Adventure Game Studio",
  "RPG Maker",
  "PICO-8",
  "GDevelop",
  "Python",
  "Lua",
  "C#",
  "Java",
  "C++"
];

const audioDesignTools = [
  "Ableton Live",
  "Pro Tools",
  "FL Studio",
  "Logic Pro X",
  "GarageBand",
  "Audacity",
  "Reaper",
  "Cubase",
  "Nuendo",
  "Sibelius",
  "Adobe Audition",
  "Sound Forge",
  "Reason",
  "Cakewalk by BandLab",
  "Wwise",
  "FMOD Studio",
  "Renoise",
  "EastWest Quantum Leap",
  "Native Instruments Komplete"
];

const threeDArtTools = [
  "Blender",
  "Maya",
  "Houdini",
  "Photoshop",
  "Substance Painter",
  "Substance Designer",
  "ZBrush",
  "Mudbox",
  "3D Coat",
  "Quixel Suite",
  "Marvelous Designer",
  "Cinema 4D",
  "Autodesk 3ds Max",
  "DAZ Studio",
  "Poser",
  "LightWave 3D"
];

const twoDArtTools = [
  "Photoshop",
  "Substance Painter",
  "Substance Designer",
  "ZBrush",
  "Adobe Illustrator",
  "CorelDRAW",
  "GIMP",
  "Inkscape",
  "Affinity Designer",
  "SketchBook",
  "Clip Studio Paint",
  "Toon Boom Harmony",
  "Moho (Anime Studio)",
  "Dragonframe",
  "Pencil2D",
  "Spine",
  "TVPaint Animation",
  "Adobe Animate"
];

const animationSpecificTools = [
  "Blender (Animation)",
  "Maya (Animation)",
  "Houdini",
  "Autodesk MotionBuilder",
  "Adobe Character Animator",
  "Synfig Studio"
];


const projectManagementTools = [
  "Trello",
  "Jira",
  "ClickUp",
  "Asana",
  "Monday.com",
  "Basecamp",
  "Smartsheet",
  "Wrike",
  "Notion",
  "Miro",
  "Microsoft Project",
  "Confluence",
  "Redmine",
  "GitHub Projects",
  "Zoho Projects",
  "TeamGantt",
  "ProofHub",
  "MeisterTask",
  "Airtable",
  "GitHub",
  "GitLab",
  "Bitbucket",
  "Perforce Helix Core",
  "SVN (Apache Subversion)",
  "Assembla",
  "Plastic SCM",
  "Unity Collaborate"
];

const miscellaneousTools = [
  "Google Drive",
  "TeamViewer",
  "Parsec"
];

// AI Assited tools separation end

const ROLE_TYPES = [
  {name: "Producer (Scrum, Agile, Leadership)", tools: projectManagementTools.concat(miscellaneousTools)},
  {name: "Artist (3D, 2D, UI, Technical, Procedural)", tools: twoDArtTools.concat( threeDArtTools)},
  {name: "Marketer (SEO, Social Media, Content, Strategic)", tools: projectManagementTools.concat(miscellaneousTools)},
  {name: "Sound Artist (Composition, Sound Effects, Foley, Mixing)", tools: audioDesignTools},
  {name: "Programmer (Gameplay, Engine, Tools, AI, Graphics)", tools: gameEngines.concat(programmingLanguages)},
  {name: "Animator (3D, 2D, Motion Capture, Rigging)", tools: animationSpecificTools},
  {name: "Designer (Gameplay, Level, UX, Narrative, Systems)", tools: projectManagementTools},
];

// const TIMEZONES = [
//   "Asia Pacific Morning",
//   "Asia Pacific Evening",
//   "EU Morning",
//   "EU Evening",
//   "US East Coast Morning",
//   "US East Coast Evening",
//   "US West Coast Morning",
//   "US West Coast Evening",
// ]

const NO_TEAM_PHASE = {name: "None Selected", help: "No current phase select"};

class TeamPhase {
  #phaseIndex: number = $state(0);
  #teamPhaseLenght = TEAM_PHASE_ARRAY.length;
  currentPhase = $derived(this.getPhaseInfo(this.#phaseIndex));
  constructor() {}

  get phaseIndex(): number {
    return this.#phaseIndex;
  }

  set phaseIndex(newValue: number){
    // Update phase index IF within range
    if (0 <= this.#phaseIndex && this.#phaseIndex < this.#teamPhaseLenght){
      this.#phaseIndex = newValue
    }
  }

  getPhaseInfo(index:number): { name: string; help: string; } {
    return 0 <= index && index < this.#teamPhaseLenght ? TEAM_PHASE_ARRAY[index]! : NO_TEAM_PHASE;
  }

  get numberOfPhases(): number {
    return this.#teamPhaseLenght;
  }
}

class RolesNeed {
  listOfRoles = ROLE_TYPES.map(role => role.name);
  listOfToolsByRole = ROLE_TYPES.map(role => role.tools) ?? [];
  selectedRoles: boolean[] = $state([]);
  selectedTools: string[] = $state([]);

  rolesText: string = $derived(this.selectedRoles.map((roleSelected, i) => roleSelected ? ROLE_TYPES[i]!.name : "").filter(role => role).join("\n") || "None");
  toolsText: string = $derived(this.selectedTools.join(", "));

  toggleTools(tool: string){
    $inspect(this.selectedTools)
    const toolIndex = this.selectedTools.indexOf(tool);
    // Not found - Add to array
    if(toolIndex < 0) {
      this.selectedTools.push(tool);
    }
    // Else - Remove from array
    else {
      this.selectedTools.splice(toolIndex, 1);
    }
  }
}



export const teamPhase = new TeamPhase();
export const rolesNeeded = new RolesNeed();
