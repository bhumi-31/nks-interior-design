import { useRef, useState, useCallback } from 'react';

/**
 * Custom hook for 3D tilt effect on elements
 * Creates a premium interactive feel on hover
 */
export const useTilt = (options = {}) => {
    const ref = useRef(null);
    const [style, setStyle] = useState({});

    const {
        maxTilt = 6,
        scale = 1.02,
        perspective = 1000,
        speed = 400,
        glare = false,
        glareMaxOpacity = 0.15,
    } = options;

    const handleMouseMove = useCallback((e) => {
        const element = ref.current;
        if (!element) return;

        const rect = element.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -maxTilt;
        const rotateY = ((x - centerX) / centerX) * maxTilt;

        const glareX = (x / rect.width) * 100;
        const glareY = (y / rect.height) * 100;

        setStyle({
            transform: `perspective(${perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`,
            transition: `transform ${speed}ms cubic-bezier(0.03, 0.98, 0.52, 0.99)`,
            ...(glare && {
                '--glare-x': `${glareX}%`,
                '--glare-y': `${glareY}%`,
                '--glare-opacity': glareMaxOpacity,
            }),
        });
    }, [maxTilt, scale, perspective, speed, glare, glareMaxOpacity]);

    const handleMouseLeave = useCallback(() => {
        setStyle({
            transform: `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale(1)`,
            transition: `transform ${speed}ms cubic-bezier(0.03, 0.98, 0.52, 0.99)`,
            ...(glare && {
                '--glare-opacity': 0,
            }),
        });
    }, [perspective, speed, glare]);

    return {
        ref,
        style,
        onMouseMove: handleMouseMove,
        onMouseLeave: handleMouseLeave,
    };
};

export default useTilt;
