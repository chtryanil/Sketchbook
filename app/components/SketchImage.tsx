import Image from 'next/image';

export function SketchImage({ src, alt, width, height }: { src: string; alt: string; width: number; height: number }) {
  return (
    <div className="sketch-image relative">
      <Image src={src} alt={alt} width={width} height={height} className="transition-opacity duration-500 ease-in-out" />
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5" />
      </svg>
    </div>
  );
}
