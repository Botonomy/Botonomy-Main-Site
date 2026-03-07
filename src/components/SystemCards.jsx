import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export const AgentOrchestrator = ({ labels }) => {
    const container = useRef(null);
    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.to(".flow-line", { strokeDashoffset: 0, duration: 2, ease: "power2.inOut", stagger: 0.5, repeat: -1, yoyo: true });
            gsap.to(".node", { scale: 1.05, duration: 1.5, ease: "sine.inOut", repeat: -1, yoyo: true, stagger: { each: 0.2, from: "random" } });
        }, container);
        return () => ctx.revert();
    }, []);
    return (
        <div ref={container} className="ui-system-card-container flex items-center justify-center">
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path className="flow-line stroke-accent-start/40" d="M20,50 Q40,20 60,50 T100,50" fill="none" strokeWidth="0.5" strokeDasharray="100" strokeDashoffset="100" />
                <path className="flow-line stroke-accent-end/40" d="M0,50 Q20,80 40,50 T80,50" fill="none" strokeWidth="0.5" strokeDasharray="100" strokeDashoffset="100" />
            </svg>
            <div className="absolute flex gap-8 z-10 w-full px-6 justify-between">
                <div className="node ui-system-node">
                    <div className="w-2 h-2 rounded-full bg-accent-start"></div><span className="text-[10px] font-mono text-white/70">{labels[0]}</span>
                </div>
                <div className="node ui-system-node mt-8">
                    <div className="w-2 h-2 rounded-full bg-accent-end"></div><span className="text-[10px] font-mono text-white/70">{labels[1]}</span>
                </div>
                <div className="node ui-system-node">
                    <div className="w-2 h-2 rounded-full bg-[#7B61FF]"></div><span className="text-[10px] font-mono text-white/70">{labels[2]}</span>
                </div>
            </div>
        </div>
    );
};

export const InferenceStream = ({ textFeed, label }) => {
    const [text, setText] = useState("");
    useEffect(() => {
        let i = 0;
        const typingInterval = setInterval(() => {
            setText(textFeed.slice(0, i)); i++;
            if (i > textFeed.length) { clearInterval(typingInterval); setTimeout(() => { i = 0; setText(""); }, 3000); }
        }, 40);
        return () => clearInterval(typingInterval);
    }, [textFeed]);
    return (
        <div className="ui-system-card-container !bg-[#0A0A0A] p-6 shadow-inner">
            <div className="ui-system-status-pill">
                <span className="ui-system-status-label">{label}</span>
                <div className="w-1.5 h-1.5 rounded-full bg-accent-start animate-ping"></div>
            </div>
            <pre className="font-mono text-xs text-white/80 whitespace-pre-wrap leading-loose mt-4">
                {text}<span className="inline-block w-2.5 h-3 bg-accent-end ml-1 animate-pulse"></span>
            </pre>
        </div>
    );
};

export const WorkflowScheduler = ({ cronLabel }) => {
    const container = useRef(null);
    useEffect(() => {
        let ctx = gsap.context(() => {
            const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
            tl.to(container.current.querySelector(".cursor-svg"), { x: 80, y: 40, duration: 0.8, ease: "power2.inOut" })
                .to(container.current.querySelector(".cell-1"), { backgroundColor: "rgba(255, 77, 77, 0.2)", scale: 0.95, duration: 0.1, yoyo: true, repeat: 1 })
                .to(container.current.querySelector(".cursor-svg"), { x: 180, y: 120, duration: 1, ease: "power2.inOut" })
                .to(container.current.querySelector(".cell-2"), { backgroundColor: "rgba(255, 138, 0, 0.2)", scale: 0.95, duration: 0.1, yoyo: true, repeat: 1 })
                .to(container.current.querySelector(".cursor-svg"), { x: 130, y: 180, duration: 0.6, ease: "power2.inOut" })
                .to(container.current.querySelector(".execute-btn"), { scale: 0.95, backgroundColor: "#FF8A00", duration: 0.2, yoyo: true, repeat: 1 })
                .to(container.current.querySelector(".cursor-svg"), { x: 300, y: 200, opacity: 0, duration: 0.5 });
        }, container);
        return () => ctx.revert();
    }, []);
    return (
        <div ref={container} className="ui-system-card-container p-6">
            <svg className="cursor-svg absolute z-20 w-5 h-5 drop-shadow-md" style={{ left: 0, top: 0 }} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 3L20 11.5L12 13.5L8.5 21L4 3Z" fill="white" stroke="#1A1A1A" strokeWidth="1.5" strokeLinejoin="round" />
            </svg>
            <div className="grid grid-cols-4 gap-2 h-full pb-8">
                {[...Array(8)].map((_, i) => (<div key={i} className={`cell-${i} ui-system-grid-cell`}></div>))}
            </div>
            <div className="absolute bottom-4 left-6 right-6 flex justify-between items-center">
                <span className="text-[10px] font-mono text-white/40">{cronLabel}</span>
                <div className="execute-btn ui-system-execute-btn">Execute</div>
            </div>
        </div>
    );
};
