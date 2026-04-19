"use client";

import React, { useState } from "react";
import { CarouselComposition, Theme } from "@/types/carousel";
import { MessageSquare, Copy, Check } from "lucide-react";

interface SocialPanelProps {
  composition: CarouselComposition;
  uiTheme: Theme;
}

export default function SocialPanel({
  composition,
  uiTheme,
}: SocialPanelProps) {
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopySocial = async () => {
    if (!composition.socialCopy) return;
    const { text, hashtags } = composition.socialCopy;
    const content = `${text}\n\n${hashtags.join(" ")}`;
    try {
      await navigator.clipboard.writeText(content);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div
      className="flex flex-col h-full"
      style={{ fontFamily: uiTheme.font }}
    >
      {/* Header */}
      <div
        className="px-5 py-4 flex items-center gap-3"
        style={{ borderBottom: `1px solid ${uiTheme.colors.surface}` }}
      >
        <MessageSquare size={16} style={{ color: uiTheme.colors.primary }} />
        <span
          className="text-xs font-bold tracking-widest uppercase"
          style={{ color: uiTheme.colors.textMuted }}
        >
          Social Caption
        </span>
      </div>

      <div className="flex-1 px-5 py-4 overflow-y-auto">
        {!composition.socialCopy ? (
          <div className="text-center py-10">
            <MessageSquare
              size={32}
              className="mx-auto mb-3"
              style={{ color: uiTheme.colors.textMuted, opacity: 0.5 }}
            />
            <p className="text-sm" style={{ color: uiTheme.colors.textMuted }}>
              No social caption available.
            </p>
          </div>
        ) : (
          <div className="flex flex-col h-full">
            <div className="flex justify-end mb-3 mr-1">
              <button
                onClick={handleCopySocial}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer hover:scale-105 active:scale-95"
                style={{
                  background: copied ? "#10b981" : `${uiTheme.colors.primary}22`,
                  color: copied ? "#fff" : uiTheme.colors.primary,
                }}
              >
                {copied ? (
                  <>
                    <Check size={14} /> Copied!
                  </>
                ) : (
                  <>
                    <Copy size={14} /> Copy All
                  </>
                )}
              </button>
            </div>

            <div
              className="p-5 text-sm rounded-2xl whitespace-pre-wrap leading-relaxed shadow-inner"
              style={{
                background: `linear-gradient(wrap, transparent, ${uiTheme.colors.surface}44)`,
                backgroundColor: `${uiTheme.colors.surface}44`,
                color: uiTheme.colors.text,
                border: `1px solid ${uiTheme.colors.surface}`,
              }}
            >
              {composition.socialCopy.text}
              <br /><br />
              <span className="font-semibold" style={{ color: uiTheme.colors.primary }}>
                {composition.socialCopy.hashtags.join(" ")}
              </span>
            </div>
            
            <div 
              className="mt-auto pt-6"
            >
              <div 
                className="p-4 rounded-2xl flex gap-3 items-start" 
                style={{ 
                  background: `${uiTheme.colors.primary}11`,
                  border: `1px solid ${uiTheme.colors.primary}22`
                }}
              >
                <div className="shrink-0 mt-0.5" style={{ color: uiTheme.colors.primary }}>
                  <MessageSquare size={16} />
                </div>
                <p className="text-[11px] leading-relaxed" style={{ color: uiTheme.colors.textMuted }}>
                  <strong style={{ color: uiTheme.colors.text }}>Pro Tip:</strong> Paste this highly engaging copy directly into Instagram, LinkedIn, or Twitter along with your exported carousel to maximize algorithm reach.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
