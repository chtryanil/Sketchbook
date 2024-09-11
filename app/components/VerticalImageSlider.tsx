import Image from 'next/image';

interface SliderProps {
  images: string[];
  title: string;
  side: 'left' | 'right';
  direction: 'up' | 'down';
}

export function VerticalImageSlider({ images, title, side, direction }: SliderProps) {
  return (
    <div className={`flex ${side === 'left' ? 'flex-row' : 'flex-row-reverse'} h-full items-center`}>
      <div className="w-24 h-full overflow-hidden">
        <div className="slider-container h-full">
          <div className={`slider-content ${direction === 'up' ? 'animate-slide-up' : 'animate-slide-down'}`}>
            {images.concat(images).map((src, index) => (
              <div key={index} className="w-24 h-24 mb-2">
                <Image src={src} alt={`Slider image ${index}`} width={96} height={96} className="object-cover rounded-md" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <h3 className={`text-2xl font-bold writing-mode-vertical ${side === 'left' ? 'ml-2' : 'mr-2'} sketch-title text-center flex-1`}>
        {title}
      </h3>
    </div>
  );
}
