const SunIcon = () => {
    return (
        <svg
            viewBox="0 0 256 256"
            xmlns="http://www.w3.org/2000/svg"
            className={`absolute left-1 w-4 h-4 pointer-events-none mt-1`}
        >
            <rect fill="none" height="256" width="256" />
            <circle
                cx="128"
                cy="128"
                fill="none"
                r="60"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
            />
            {/* Sonnenstrahlen */}
            {[
                [128, 36, 128, 16],    // Oben
                [62.9, 62.9, 48.8, 48.8], // Oben-links
                [36, 128, 16, 128],    // Links
                [62.9, 193.1, 48.8, 207.2], // Unten-links
                [128, 220, 128, 240],  // Unten
                [193.1, 193.1, 207.2, 207.2], // Unten-rechts
                [220, 128, 240, 128],  // Rechts
                [193.1, 62.9, 207.2, 48.8], // Oben-rechts
            ].map(([x1, y1, x2, y2], index) => (
                <line
                    key={index}
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    fill="none"
                    stroke="white" // Konsistente Farbsteuerung
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="16"
                />
            ))}
        </svg>
    );
}; export default SunIcon;