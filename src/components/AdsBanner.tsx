'use client';

interface AdsBannerProps {
  type: 'banner' | 'interstitial';
  className?: string;
}

const AdsBanner = ({ type, className = '' }: AdsBannerProps) => {
  return (
    <div 
      className={`
        flex items-center justify-center bg-gray-100 border border-dashed border-gray-300 text-gray-500 text-sm
        ${type === 'banner' ? 'h-16 w-full' : 'h-64 w-full max-w-md'}
        ${className}
      `}
    >
      {type === 'banner' ? 'Banner Ad Placeholder' : 'Interstitial Ad Placeholder'}
    </div>
  );
};

export default AdsBanner;