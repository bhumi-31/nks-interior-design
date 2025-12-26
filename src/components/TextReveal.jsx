import { useRef, useEffect, useState } from 'react';

/**
 * TextReveal - Dramatic text reveal animation
 * Letters animate in individually with stagger
 */
const TextReveal = ({
    children,
    className = '',
    as: Component = 'span',
    delay = 0,
    stagger = 30,
    duration = 600,
    animation = 'slide-up', // 'slide-up', 'slide-down', 'slide-left', 'slide-right', 'blur', 'scale'
    trigger = 'visible', // 'visible', 'immediate'
}) => {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(trigger === 'immediate');
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        if (trigger !== 'visible' || hasAnimated) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    setHasAnimated(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.2 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, [trigger, hasAnimated]);

    // Split text into characters
    const text = typeof children === 'string' ? children : '';
    const chars = text.split('');

    const getAnimationStyles = (index) => {
        const charDelay = delay + (index * stagger);

        const animations = {
            'slide-up': {
                hidden: { transform: 'translateY(100%)', opacity: 0 },
                visible: { transform: 'translateY(0)', opacity: 1 },
            },
            'slide-down': {
                hidden: { transform: 'translateY(-100%)', opacity: 0 },
                visible: { transform: 'translateY(0)', opacity: 1 },
            },
            'slide-left': {
                hidden: { transform: 'translateX(50px)', opacity: 0 },
                visible: { transform: 'translateX(0)', opacity: 1 },
            },
            'slide-right': {
                hidden: { transform: 'translateX(-50px)', opacity: 0 },
                visible: { transform: 'translateX(0)', opacity: 1 },
            },
            'blur': {
                hidden: { filter: 'blur(10px)', opacity: 0 },
                visible: { filter: 'blur(0)', opacity: 1 },
            },
            'scale': {
                hidden: { transform: 'scale(0)', opacity: 0 },
                visible: { transform: 'scale(1)', opacity: 1 },
            },
        };

        const anim = animations[animation] || animations['slide-up'];
        const style = isVisible ? anim.visible : anim.hidden;

        return {
            ...style,
            display: 'inline-block',
            transition: `all ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${charDelay}ms`,
            willChange: 'transform, opacity, filter',
        };
    };

    return (
        <Component ref={ref} className={`${className} overflow-hidden`}>
            {chars.map((char, index) => (
                <span
                    key={`${char}-${index}`}
                    style={getAnimationStyles(index)}
                >
                    {char === ' ' ? '\u00A0' : char}
                </span>
            ))}
        </Component>
    );
};

/**
 * WordReveal - Reveal words one by one
 */
export const WordReveal = ({
    children,
    className = '',
    as: Component = 'span',
    delay = 0,
    stagger = 100,
    duration = 800,
}) => {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.2 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, []);

    const text = typeof children === 'string' ? children : '';
    const words = text.split(' ');

    return (
        <Component ref={ref} className={className}>
            {words.map((word, index) => (
                <span
                    key={`${word}-${index}`}
                    className="inline-block overflow-hidden"
                    style={{ marginRight: '0.25em' }}
                >
                    <span
                        className="inline-block"
                        style={{
                            transform: isVisible ? 'translateY(0)' : 'translateY(100%)',
                            opacity: isVisible ? 1 : 0,
                            transition: `all ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay + (index * stagger)}ms`,
                        }}
                    >
                        {word}
                    </span>
                </span>
            ))}
        </Component>
    );
};

/**
 * LineReveal - Reveal lines with a mask effect
 */
export const LineReveal = ({
    children,
    className = '',
    delay = 0,
    duration = 1000,
}) => {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.2 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div ref={ref} className={`relative overflow-hidden ${className}`}>
            <div
                style={{
                    transform: isVisible ? 'translateY(0)' : 'translateY(100%)',
                    opacity: isVisible ? 1 : 0,
                    transition: `all ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
                }}
            >
                {children}
            </div>
        </div>
    );
};

export default TextReveal;
