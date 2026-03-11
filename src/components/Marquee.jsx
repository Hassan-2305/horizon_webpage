// src/components/Marquee.jsx
const ITEMS = [
  'European Rover Challenge','University Rover Challenge',
  '19th Global 2023','1st India 2024','TIRANGA Rover',
  'CUSAT Kochi','Space Robotics','Autonomous Navigation','Student Driven',
]

export default function Marquee() {
  // Duplicate items for seamless loop
  const all = [...ITEMS, ...ITEMS]
  return (
    <div className="marquee-wrap">
      <div className="marquee-track">
        {all.map((item, i) => <span key={i}>{item}</span>)}
      </div>
    </div>
  )
}
