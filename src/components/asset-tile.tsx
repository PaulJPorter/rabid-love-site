"use client";

import { useState } from "react";

type Props = {
  src?: string;
  asset?: string;
  title: string;
  caption: string;
  dropName: string;
};

export function AssetTile({ src, asset, title, caption, dropName }: Props) {
  const fallback = src ?? asset ?? "/assets/placeholder.svg";
  const preferred = `/assets/${dropName}`;
  const [current, setCurrent] = useState(preferred);

  return (
    <figure className="vhs-frame overflow-hidden border border-border bg-card">
      <div className="relative aspect-[4/3] bg-[repeating-linear-gradient(135deg,#1b1016_0_12px,#12080d_12px_24px)]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={current}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          onError={() => {
            if (current !== fallback) setCurrent(fallback);
          }}
        />
        <div className="absolute inset-x-0 bottom-0 bg-black/70 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.16em] text-cyan">
          Drop file: public/assets/{dropName}
        </div>
      </div>
      <figcaption className="space-y-2 p-4">
        <h3 className="text-lg text-foreground">{title}</h3>
        <p className="text-sm leading-relaxed text-muted-foreground">{caption}</p>
      </figcaption>
    </figure>
  );
}
