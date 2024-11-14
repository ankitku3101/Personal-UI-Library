'use client'

import { useEffect, useRef, useState } from "react";

enum Feeling {
  Sad = 1,
  Neutral = 2,
  Happy = 3,
}

const feelingColorMap = {
    [Feeling.Sad]: ["#ff0d0d", "#fc7a6a", "#faa79d"], 
    [Feeling.Neutral]: ["#36d902", "#83ff5a", "#beffce"],
    [Feeling.Happy]: ["#ff8f05", "#ffe83b", "#fcfb86"], 
  };
    

const feelingLabelMap = {
  [Feeling.Sad]: "Need Virtual Hugs",
  [Feeling.Neutral]: "Me Good",
  [Feeling.Happy]: "Happy Happy Happy",
};
export default function BlobGradient() {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const [feeling, setFeeling] = useState<Feeling>(Feeling.Neutral);

  useEffect(() => {
    if (!wrapperRef.current) return;

    const [a, b, c] = feelingColorMap[feeling];

    wrapperRef.current.style.setProperty("--color-a", a);
    wrapperRef.current.style.setProperty("--color-b", b);
    wrapperRef.current.style.setProperty("--color-c", c);
  }, [feeling]);

  return (
    <main className="flex w-full items-center justify-center">
      <div
        ref={wrapperRef}
        className="relative shadow-2xl mx-auto aspect-[9/16] w-[360px] max-w-full overflow-hidden rounded-2xl bg-gradient-to-br from-[--color-a] via-[--color-b] to-[--color-c] p-8 text-white duration-500 ease-in [transition-property:_--color-a,_--color-b,_--color-c] before:absolute before:left-[20%] before:top-[10%] before:h-[50%] before:w-[70%] before:origin-[60%] before:animate-blob before:rounded-3xl before:bg-gradient-to-br before:from-[--color-a] before:to-[--color-b] before:blur-[50px] before:brightness-125 after:absolute after:left-[40%] after:top-[30%] after:h-[80%] after:w-[70%] after:origin-[60%] after:animate-blob-reverse after:rounded-3xl after:bg-gradient-to-br after:from-[--color-a] after:to-[--color-b] after:blur-[50px] after:brightness-125"
      >
        <div className="relative z-10">
          <h1 className="mb-12 text-5xl font-medium leading-tight">
            How are you feeling today?
          </h1>

          <h2 className="mb-4 text-center text-2xl font-medium">
            {feelingLabelMap[feeling]}
          </h2>

          <input
            className="range"
            onChange={(ev) => setFeeling(ev.target.value as unknown as Feeling)}
            type="range"
            min={1}
            value={feeling}
            max={3}
            step={1}
          />
          <h2 className="text-center mt-16 tracking-tight text-lg">
            This is an example of animated blob gradients made using TailwindCSS.
          </h2>
        </div>
      </div>
    </main>
  );
}
