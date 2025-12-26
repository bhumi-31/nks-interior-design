import { useState, Suspense, useRef } from 'react';
import { FadeIn } from '../animations/AnimationWrappers';
import RoomScene from '../3d/RoomScene';
import { Loader2, RotateCcw, ZoomIn, ZoomOut } from 'lucide-react';

const ExperienceSection = () => {
    const [autoRotate, setAutoRotate] = useState(true);
    const sceneRef = useRef();

    const handleZoomIn = () => {
        sceneRef.current?.zoomIn();
    };

    const handleZoomOut = () => {
        sceneRef.current?.zoomOut();
    };

    const toggleAutoRotate = () => {
        setAutoRotate(prev => !prev);
    };

    return (
        <section id="experience" className="py-32">
            <div className="container mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <FadeIn>
                        <p className="font-body text-xs uppercase tracking-widest text-gold mb-4">
                            Interactive Experience
                        </p>
                    </FadeIn>
                    <FadeIn delay={0.1}>
                        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light mb-6">
                            Explore in 3D
                        </h2>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                        <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
                            Immerse yourself in our design philosophy with this interactive 3D room visualization.
                            Drag to rotate, scroll to zoom, and experience our attention to detail.
                        </p>
                    </FadeIn>
                </div>

                {/* 3D Viewer */}
                <FadeIn delay={0.3}>
                    <div className="relative bg-secondary/30 border border-border rounded-lg overflow-hidden">
                        {/* 3D Canvas */}
                        <div className="aspect-video relative">
                            <Suspense
                                fallback={
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <Loader2 className="w-8 h-8 animate-spin text-gold" />
                                    </div>
                                }
                            >
                                <RoomScene ref={sceneRef} className="absolute inset-0" autoRotate={autoRotate} />
                            </Suspense>
                        </div>

                        {/* Controls Overlay */}
                        <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center">
                            {/* Instructions */}
                            <div className="bg-background/80 backdrop-blur-sm px-4 py-2 rounded">
                                <p className="font-body text-xs text-muted-foreground">
                                    <span className="hidden md:inline">Click and drag to rotate • Scroll to zoom</span>
                                    <span className="md:hidden">Touch and drag to explore</span>
                                </p>
                            </div>

                            {/* Interactive Controls */}
                            <div className="hidden md:flex gap-2 bg-background/80 backdrop-blur-sm px-3 py-2 rounded">
                                <button
                                    onClick={toggleAutoRotate}
                                    className={`flex items-center gap-2 px-3 py-1.5 rounded transition-colors ${autoRotate
                                        ? 'bg-gold/20 text-gold'
                                        : 'hover:bg-secondary text-muted-foreground hover:text-foreground'
                                        }`}
                                    title={autoRotate ? 'Stop auto-rotate' : 'Start auto-rotate'}
                                >
                                    <RotateCcw className="w-4 h-4" />
                                    <span className="font-body text-xs">Auto</span>
                                </button>
                                <button
                                    onClick={handleZoomIn}
                                    className="flex items-center gap-1 px-3 py-1.5 rounded hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors"
                                    title="Zoom in"
                                >
                                    <ZoomIn className="w-4 h-4" />
                                </button>
                                <button
                                    onClick={handleZoomOut}
                                    className="flex items-center gap-1 px-3 py-1.5 rounded hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors"
                                    title="Zoom out"
                                >
                                    <ZoomOut className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                </FadeIn>

                {/* Features */}
                <div className="grid md:grid-cols-3 gap-8 mt-16">
                    <FadeIn delay={0.4}>
                        <div className="text-center">
                            <h3 className="font-display text-2xl mb-3">Real-Time Visualization</h3>
                            <p className="font-body text-sm text-muted-foreground">
                                Experience designs before they're built with our interactive 3D technology.
                            </p>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.5}>
                        <div className="text-center">
                            <h3 className="font-display text-2xl mb-3">Material Selection</h3>
                            <p className="font-body text-sm text-muted-foreground">
                                Explore different materials and finishes in real-time to find your perfect match.
                            </p>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.6}>
                        <div className="text-center">
                            <h3 className="font-display text-2xl mb-3">Lighting Simulation</h3>
                            <p className="font-body text-sm text-muted-foreground">
                                See how natural and artificial lighting transforms your space throughout the day.
                            </p>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;
