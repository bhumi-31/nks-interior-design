import { useEffect, useState, useCallback } from 'react';

/**
 * CustomCursor - A premium animated cursor that follows the mouse
 * Changes style based on hovering interactive elements
 */
const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [isClicking, setIsClicking] = useState(false);
    const [cursorText, setCursorText] = useState('');
    const [isVisible, setIsVisible] = useState(false);

    const handleMouseMove = useCallback((e) => {
        setPosition({ x: e.clientX, y: e.clientY });
        setIsVisible(true);
    }, []);

    const handleMouseLeave = useCallback(() => {
        setIsVisible(false);
    }, []);

    const handleMouseDown = useCallback(() => {
        setIsClicking(true);
    }, []);

    const handleMouseUp = useCallback(() => {
        setIsClicking(false);
    }, []);

    useEffect(() => {
        // Add mouse event listeners
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseleave', handleMouseLeave);
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);

        // Check for interactive elements
        const checkHover = () => {
            const elements = document.querySelectorAll('a, button, [data-cursor="pointer"], .cursor-pointer, .group');

            elements.forEach((el) => {
                el.addEventListener('mouseenter', () => {
                    setIsHovering(true);
                    const text = el.getAttribute('data-cursor-text') || '';
                    setCursorText(text);
                });
                el.addEventListener('mouseleave', () => {
                    setIsHovering(false);
                    setCursorText('');
                });
            });
        };

        // Initial check and mutation observer for dynamic content
        checkHover();
        const observer = new MutationObserver(checkHover);
        observer.observe(document.body, { childList: true, subtree: true });

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseleave', handleMouseLeave);
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
            observer.disconnect();
        };
    }, [handleMouseMove, handleMouseLeave, handleMouseDown, handleMouseUp]);

    // Don't render on touch devices
    if (typeof window !== 'undefined' && 'ontouchstart' in window) {
        return null;
    }

    return (
        <>
            {/* Main cursor dot */}
            <div
                className="fixed pointer-events-none z-[9999] mix-blend-difference"
                style={{
                    left: position.x,
                    top: position.y,
                    transform: 'translate(-50%, -50%)',
                    opacity: isVisible ? 1 : 0,
                    transition: 'opacity 0.3s ease',
                }}
            >
                {/* Inner dot */}
                <div
                    className="rounded-full bg-white"
                    style={{
                        width: isHovering ? '8px' : '6px',
                        height: isHovering ? '8px' : '6px',
                        transform: isClicking ? 'scale(0.8)' : 'scale(1)',
                        transition: 'all 0.15s ease-out',
                    }}
                />
            </div>

            {/* Outer ring */}
            <div
                className="fixed pointer-events-none z-[9998] rounded-full border border-white/50 mix-blend-difference"
                style={{
                    left: position.x,
                    top: position.y,
                    width: isHovering ? '60px' : '40px',
                    height: isHovering ? '60px' : '40px',
                    transform: `translate(-50%, -50%) scale(${isClicking ? 0.9 : 1})`,
                    opacity: isVisible ? 1 : 0,
                    transition: 'width 0.4s cubic-bezier(0.16, 1, 0.3, 1), height 0.4s cubic-bezier(0.16, 1, 0.3, 1), transform 0.15s ease-out, opacity 0.3s ease',
                }}
            >
                {/* Cursor text */}
                {cursorText && (
                    <span
                        className="absolute inset-0 flex items-center justify-center text-[10px] text-white font-medium tracking-wider uppercase"
                        style={{
                            opacity: isHovering ? 1 : 0,
                            transition: 'opacity 0.2s ease',
                        }}
                    >
                        {cursorText}
                    </span>
                )}
            </div>

            {/* Hide default cursor globally */}
            <style>{`
        * {
          cursor: none !important;
        }
        @media (hover: none) and (pointer: coarse) {
          * {
            cursor: auto !important;
          }
        }
      `}</style>
        </>
    );
};

export default CustomCursor;
