import useScrollReveal from '../hooks/useScrollReveal';

/**
 * ScrollReveal - Wrapper component for scroll-triggered animations
 * Wraps children and reveals them with animation when scrolled into view
 */
const ScrollReveal = ({
    children,
    className = '',
    animation = 'fade-up',
    delay = 0,
    duration = 800,
    threshold = 0.1,
    ...props
}) => {
    const [ref, isVisible] = useScrollReveal({ threshold });

    const animations = {
        'fade-up': {
            hidden: { opacity: 0, transform: 'translateY(40px)' },
            visible: { opacity: 1, transform: 'translateY(0)' },
        },
        'fade-down': {
            hidden: { opacity: 0, transform: 'translateY(-40px)' },
            visible: { opacity: 1, transform: 'translateY(0)' },
        },
        'fade-left': {
            hidden: { opacity: 0, transform: 'translateX(-40px)' },
            visible: { opacity: 1, transform: 'translateX(0)' },
        },
        'fade-right': {
            hidden: { opacity: 0, transform: 'translateX(40px)' },
            visible: { opacity: 1, transform: 'translateX(0)' },
        },
        'scale': {
            hidden: { opacity: 0, transform: 'scale(0.95)' },
            visible: { opacity: 1, transform: 'scale(1)' },
        },
        'blur': {
            hidden: { opacity: 0, filter: 'blur(10px)' },
            visible: { opacity: 1, filter: 'blur(0)' },
        },
    };

    const anim = animations[animation] || animations['fade-up'];
    const style = isVisible ? anim.visible : anim.hidden;

    return (
        <div
            ref={ref}
            className={className}
            style={{
                ...style,
                transition: `all ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
                willChange: 'opacity, transform, filter',
            }}
            {...props}
        >
            {children}
        </div>
    );
};

export default ScrollReveal;
