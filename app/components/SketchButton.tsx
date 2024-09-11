import Link from 'next/link';

export function SketchButton({ children, href }: { children: React.ReactNode; href: string }) {
  return (
    <Link href={href} className="sketch-button relative inline-block px-6 py-3 text-lg font-bold text-white bg-accent rounded-md transition-all hover:bg-opacity-90">
      {children}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 60" preserveAspectRatio="none">
        <path d="M190,3c-80,0-170,0-180,0c-6,0-10,7-10,20c0,15,4,37,10,37c10,0,100,0,180,0c6,0,10-22,10-37C200,10,196,3,190,3z" fill="none" stroke="currentColor" strokeWidth="2" />
      </svg>
    </Link>
  );
}
