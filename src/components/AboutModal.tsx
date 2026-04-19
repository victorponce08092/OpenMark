"use client";

import React from "react";
import { Theme } from "@/types/carousel";
import { X, ExternalLink, Code2 } from "lucide-react";

interface AboutModalProps {
  onClose: () => void;
  uiTheme: Theme;
}

export default function AboutModal({ onClose, uiTheme }: AboutModalProps) {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-6 sm:p-12 animate-in fade-in duration-200"
      style={{
        background: `${uiTheme.colors.surface}E6`, // transparent solid
        backdropFilter: "blur(8px)",
        fontFamily: uiTheme.font,
      }}
    >
      <div
        className="relative w-full max-w-2xl rounded-2xl shadow-2xl flex flex-col overflow-hidden"
        style={{
          background: uiTheme.colors.background,
          border: `1px solid ${uiTheme.colors.surface}`,
        }}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between px-6 py-4"
          style={{ borderBottom: `1px solid ${uiTheme.colors.surface}` }}
        >
          <span className="font-bold tracking-widest uppercase text-xs" style={{ color: uiTheme.colors.textMuted }}>
            About OpenMark
          </span>
          <button
            onClick={onClose}
            className="p-1.5 rounded-md transition-colors cursor-pointer"
            style={{ color: uiTheme.colors.textMuted }}
            onMouseOver={(e) => (e.currentTarget.style.color = uiTheme.colors.text)}
            onMouseOut={(e) => (e.currentTarget.style.color = uiTheme.colors.textMuted)}
          >
            <X size={18} />
          </button>
        </div>

        {/* Content */}
        <div className="p-8 sm:p-12 overflow-y-auto">
          <Code2
            size={48}
            className="mb-6"
            style={{ color: uiTheme.colors.primary }}
          />
          <h2
            className="text-3xl font-black mb-4"
            style={{ color: uiTheme.colors.text }}
          >
            Stop designing.<br />
            Start compiling.
          </h2>
          <p
            className="text-base mb-8 leading-relaxed"
            style={{ color: uiTheme.colors.textMuted }}
          >
            OpenMark was built out of a frustration with traditional canvas editors. Dragging layers, aligning text boxes pixel by pixel, and fighting with generic AI templates is a colossal waste of time for high-end developers and marketing teams. <br /><br />
            I engineered OpenMark to treat marketing assets like pure software. By using React code as the canvas, we guarantee absolute design precision, instantaneous thematic consistency, and programmatic scalability.
          </p>

          <div
            className="p-6 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
            style={{
              background: uiTheme.colors.surface,
              border: `1px solid ${uiTheme.colors.primary}22`,
            }}
          >
            <div>
              <p
                className="text-xs uppercase font-bold tracking-wider mb-1"
                style={{ color: uiTheme.colors.textMuted }}
              >
                Created By
              </p>
              <p
                className="text-lg font-semibold"
                style={{ color: uiTheme.colors.text }}
              >
                Victor Ponce
              </p>
            </div>

            <a
              href="https://www.chattree.chat"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-bold transition-all hover:scale-105"
              style={{
                background: uiTheme.colors.primary,
                color: uiTheme.colors.surface,
              }}
            >
              Visit my SaaS: Chattree
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
