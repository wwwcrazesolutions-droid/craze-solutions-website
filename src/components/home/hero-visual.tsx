import { ArrowRight, Bot, Database, Layers3, Sparkles } from "lucide-react";

export function HeroVisual() {
  return (
    <aside className="hero-art" aria-label="Architecture illustration">
      <div className="hero-art__glow" />
      <div className="system-window">
        <div className="system-window__top">
          <WindowDots />
          <span>CRAZE SOLUTIONS · SYSTEM BLUEPRINT</span>
          <Sparkles size={14} />
        </div>
        <div className="system-window__body">
          <div className="system-window__title">
            <span className="live-dot" />
            LIVE ARCHITECTURE VIEW
            <span className="system-window__status">DESIGN MODE</span>
          </div>
          <div className="node-flow">
            <div className="flow-node">
              <Layers3 size={18} />
              <strong>Experience</strong>
              <small>Web · Mobile-ready</small>
            </div>
            <ArrowRight size={16} color="#5d8fc8" />
            <div className="flow-node flow-node--blue">
              <Bot size={18} />
              <strong>Intelligence</strong>
              <small>AI · Agents</small>
            </div>
            <ArrowRight size={16} color="#5d8fc8" />
            <div className="flow-node">
              <Database size={18} />
              <strong>Platform</strong>
              <small>APIs · Data</small>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

function WindowDots() {
  return (
    <div className="system-window__dots">
      <i />
      <i />
      <i />
    </div>
  );
}