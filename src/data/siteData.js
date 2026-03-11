// src/data/siteData.js
// Single source of truth for all Team Horizon content

export const META = {
  clubName: 'Team Horizon',
  university: 'CUSAT',
  location: 'Kochi, Kerala, India',
  founded: '2019',
  website: 'https://horizoncusat.in',
  instagram: 'https://instagram.com/teamhorizoncusat',
  linkedin: 'https://linkedin.com/company/horizon-mars-rover-team',
  github: 'https://github.com/Team-Horizon-CUSAT',
  instagramHandle: '@teamhorizoncusat',
}

export const STATS = [
  { num: '#19', label: 'ERC 2023 Global' },
  { num: '#11', label: 'ERC 2024 Worldwide' },
  { num: '#1',  label: 'India · ERC 2024' },
  { num: '55+', label: 'Members' },
  { num: '5',   label: 'Years' },
]

export const PILLARS = [
  {
    num: '01',
    title: 'Research & Innovation',
    body: 'Solving real engineering challenges across mechanical design, autonomous navigation, embedded systems, and science instrumentation.',
  },
  {
    num: '02',
    title: 'Fully Student-Driven',
    body: 'No mentors. No shortcuts. Every design decision, every build, every breakthrough is owned entirely by our student members.',
  },
  {
    num: '03',
    title: 'Global Competition',
    body: 'Representing India at ERC (Poland) and URC (USA) — the Olympics of university-level space robotics.',
  },
  {
    num: '04',
    title: 'Knowledge & Community',
    body: "Workshops, talks, and open learning that have seeded rover teams across the nation and built CUSAT's technical culture.",
  },
]

export const SUPPORTERS = [
  'Kerala Startup Mission',
  'MakerGram',
  'SEAA CUSAT',
  'Cochin International Airport',
  'Cochin Shipyard',
]

export const TIMELINE = [
  {
    year: '2019',
    title: 'Club Founded at CUSAT',
    desc: 'A handful of undergraduate students at Cochin University of Science and Technology form Team Horizon — united by one goal: build a Mars rover.',
    badge: null,
    badgeVariant: null,
  },
  {
    year: '2021',
    title: 'University Rover Challenge — Top 100 Globally',
    desc: 'Our debut at the prestigious URC in the USA. We finished in the top 100 worldwide — a powerful first statement on the global stage.',
    badge: 'Top 100 · URC USA',
    badgeVariant: 'teal',
  },
  {
    year: '2022',
    title: 'ERC 2022 — 32nd in the World',
    desc: 'Secured 32nd place globally at the European Rover Challenge in Poland, competing against 60+ university teams from across the world.',
    badge: '#32 Worldwide · ERC Poland',
    badgeVariant: 'default',
  },
  {
    year: '2023',
    title: 'ERC Debut — 19th Globally. India Stunned.',
    desc: "Our first-ever ERC appearance resulted in a 19th place finish worldwide — a landmark result that put Team Horizon on the national map and inspired a wave of new student rover clubs across India.",
    badge: '#19 Global · ERC 2023 · Poland',
    badgeVariant: 'default',
  },
  {
    year: '2024',
    title: 'TIRANGA — 11th Worldwide. 1st in India.',
    desc: "With our rover TIRANGA, Team Horizon achieved 11th place globally and topped India's leaderboard in the ERC 2024 qualification rounds. Our best result ever, and a new benchmark for Indian university robotics.",
    badge: '#11 Global · #1 India · ERC Quals 2024',
    badgeVariant: 'default',
  },
]

export const PROJECTS = [
  {
    id: 'tiranga',
    tag: 'Mars Rover · ERC 2024 · Featured',
    tagVariant: 'accent',
    title: 'TIRANGA',
    emoji: '🛸',
    glowColor: 'rgba(255,77,28,0.2)',
    bgClass: '',
    desc: "Our 2024 flagship rover. 11th place worldwide in ERC qualifications — the highest-ranked Indian entry. Designed for Mars-analog terrain traversal, science collection, maintenance tasks, and autonomous operations.",
    tech: ['ROS2', 'Raspberry Pi', 'STM32', '6-DOF Arm', 'Science Module', 'Autonomous Nav', 'LiDAR'],
  },
  {
    id: 'arm',
    tag: 'Subsystem',
    tagVariant: 'teal',
    title: 'ROBOTIC ARM',
    emoji: '🦾',
    glowColor: 'rgba(28,255,212,0.2)',
    bgGradient: 'linear-gradient(135deg,#0c0d14,#0a0e1a)',
    desc: 'A 6-degree-of-freedom manipulator capable of precise sample collection, equipment servicing, and object manipulation across uneven Martian terrain.',
    tech: ['Servo Control', 'Inverse Kinematics', 'End Effector'],
  },
  {
    id: 'science',
    tag: 'Subsystem',
    tagVariant: 'accent',
    title: 'SCIENCE MODULE',
    emoji: '🔬',
    glowColor: 'rgba(200,100,255,0.18)',
    bgGradient: 'linear-gradient(135deg,#0d0c14,#0e0a1a)',
    desc: 'Custom-built science payload for soil analysis, life detection markers, and sub-surface sampling engineered to meet ERC competition task specifications.',
    tech: ['Sensors', 'Data Logging', 'Sample Analysis'],
  },
  {
    id: 'autonomy',
    tag: 'Subsystem',
    tagVariant: 'teal',
    title: 'AUTONOMY STACK',
    emoji: '🧭',
    glowColor: 'rgba(28,255,100,0.15)',
    bgGradient: 'linear-gradient(135deg,#0a140c,#0e1a0a)',
    desc: 'Full autonomous navigation suite — GPS waypoint following, obstacle avoidance, and ArUco marker detection for competition tasks.',
    tech: ['ROS2 Nav2', 'SLAM', 'Computer Vision'],
  },
]

export const TEAM_MEMBERS = [
  { num: '01', icon: '⚙️', name: 'Mechanical Team',  role: 'Chassis · Drive · Arm Design', dept: 'Mech Engineering' },
  { num: '02', icon: '⚡', name: 'Electronics Team', role: 'PCB · Wiring · Power',          dept: 'ECE · EEE' },
  { num: '03', icon: '💻', name: 'Software Team',    role: 'ROS2 · Autonomy · Vision',     dept: 'CS · IT' },
  { num: '04', icon: '🔬', name: 'Science Team',     role: 'Payload · Sensors · Analysis', dept: 'Applied Sciences' },
  { num: '05', icon: '🎨', name: 'Design Team',      role: 'CAD · Simulation · UI/UX',     dept: 'Multi-Department' },
  { num: '06', icon: '📣', name: 'Outreach Team',    role: 'Events · Media · Workshops',   dept: 'Multi-Department' },
  { num: '07', icon: '🏛️', name: 'Management',       role: 'Finance · Sponsorship · Ops',  dept: 'Multi-Department' },
]

export const CONTACT_LINKS = [
  { icon: '🌐', name: 'Official Website', url: META.website,    display: 'horizoncusat.in' },
  { icon: '📸', name: 'Instagram',        url: META.instagram,  display: META.instagramHandle },
  { icon: '💼', name: 'LinkedIn',         url: META.linkedin,   display: 'horizon-mars-rover-team' },
  { icon: '💻', name: 'GitHub',           url: META.github,     display: 'Team-Horizon-CUSAT' },
]

export const INTEREST_OPTIONS = [
  'Joining the Team',
  'Sponsorship / Partnership',
  'Collaboration',
  'Workshop / Event',
  'Media / Press',
  'Other',
]

export const NAV_LINKS = [
  { label: 'Home',         path: '/' },
  { label: 'About',        path: '/about' },
  { label: 'Achievements', path: '/achievements' },
  { label: 'Projects',     path: '/projects' },
  { label: 'Team',         path: '/team' },
  { label: 'Contact',      path: '/contact' },
]
