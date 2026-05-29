'use client';
import { InfiniteSlider } from '@/components/ui/infinite-slider';
import { ProgressiveBlur } from '@/components/ui/progressive-blur';

type Client = {
  name: string;
  tag?: string;  // optional sub-label e.g. "Mercedes Benz"
};

type ClientsStripProps = {
  clients: Client[];
  label?: string;  // section label above strip
  speed?: number;
};

export function ClientsStrip({ 
  clients, 
  label = "Trusted By", 
  speed = 35 
}: ClientsStripProps) {
  return (
    <div className="w-full py-12 bg-transparent">
      {/* Section label */}
      <p className="text-center text-[10px] font-bold tracking-[0.3em] 
        text-gray-400 uppercase mb-8">
        {label}
      </p>

      {/* Slider */}
      <div className="relative h-[72px] w-full overflow-hidden">
        <InfiniteSlider
          className="flex h-full w-full items-center"
          duration={speed}
          gap={40}
        >
          {clients.map((client, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center 
                min-w-[180px] px-6 py-3 rounded-xl 
                bg-white border border-gray-200
                hover:border-indigo-500/30 hover:bg-indigo-50/60
                transition-all duration-500 group cursor-default"
            >
              <span className="text-[13px] font-semibold text-gray-600 
                group-hover:text-gray-900 transition-colors duration-300 
                whitespace-nowrap tracking-wide text-center leading-tight">
                {client.name}
              </span>
              {client.tag && (
                <span className="text-[9px] font-bold tracking-[0.2em] 
                  text-amber-600/70 group-hover:text-amber-600 
                  uppercase mt-1 transition-colors duration-300">
                  {client.tag}
                </span>
              )}
            </div>
          ))}
        </InfiniteSlider>

        {/* Progressive blur fade edges */}
        <ProgressiveBlur
          className="pointer-events-none absolute top-0 left-0 
            h-full w-[160px]"
          direction="left"
          blurIntensity={0.8}
        />
        <ProgressiveBlur
          className="pointer-events-none absolute top-0 right-0 
            h-full w-[160px]"
          direction="right"
          blurIntensity={0.8}
        />
      </div>
    </div>
  );
}
