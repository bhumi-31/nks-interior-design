import { useRef, useState, useCallback } from 'react';

/**
 * MagneticButton - Creates a magnetic cursor effect
 * The element subtly follows the cursor when nearby
 * Used by premium design studios for CTAs
 */
const MagneticButton = ({
    children,
    className = '',
    strength = 0.3,
    radius = 100,
    ...props
}) => {
    const ref = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = useCallback((e) => {
        const element = ref.current;
        if (!element) return;

        const rect = element.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const distanceX = e.clientX - centerX;
        const distanceY = e.clientY - centerY;

        const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

        if (distance < radius) {
            const factor = (radius - distance) / radius;
            setPosition({
                x: distanceX * strength * factor,
                y: distanceY * strength * factor,
            });
        }
    }, [strength, radius]);

    const handleMouseLeave = useCallback(() => {
        setPosition({ x: 0, y: 0 });
    }, []);

    return (
        <div
            ref={ref}
            className={`magnetic-wrapper ${className}`}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                display: 'inline-block',
                transform: `translate(${position.x}px, ${position.y}px)`,
                transition: position.x === 0 && position.y === 0
                    ? 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
                    : 'transform 0.15s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
            {...props}
        >
            {children}
        </div>
    );
};

export default MagneticButton;
