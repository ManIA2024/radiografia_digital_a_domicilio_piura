export default function Logo({ className = "w-10 h-10" }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 40 40" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="40" height="40" rx="12" fill="var(--color-primary)" />
      {/* Arc that represents radiation / scanning */}
      <path 
        d="M12 21C12 16.5817 15.5817 13 20 13C24.4183 13 28 16.5817 28 21" 
        stroke="white" 
        strokeWidth="2.5" 
        strokeLinecap="round" 
      />
      {/* Central focal point representing the target/patient */}
      <circle cx="20" cy="21" r="3" fill="white" />
      {/* Mobile/Portable device lines */}
      <path d="M14 28L16 25" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeOpacity="0.8" />
      <path d="M26 28L24 25" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeOpacity="0.8" />
      {/* Subtle background pulse effect */}
      <circle cx="20" cy="21" r="8" fill="white" fillOpacity="0.2" />
    </svg>
  );
}
