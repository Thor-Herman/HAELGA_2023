import { useEffect, useRef } from 'react';

const WINNING_SCORE = 10000;

const colorsMapper = [
  'bg-red-500',
  'bg-blue-600',
  'bg-green-500',
  'bg-yellow-500',
  'bg-pink-500',
  'bg-gray-500',
  'bg-orange-500',
];

const formatter = new Intl.NumberFormat('no-NO');

interface Props {
  index: number;
  score: number;
  name: string;
}

const TeamBox = ({ index, score, name }: Props) => {
  const colorBar = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const colorBarRef = colorBar.current;
    if (colorBarRef && colorBarRef.style) colorBarRef.style.width = `${(score / WINNING_SCORE) * 100}%`;
  }, [score]);

  if (score === undefined || !name) return null;

  return (
    <div className="mt-2">
      <div className="flex items-center">
        <div className="color-container relative pl-[1px]" ref={colorBar}>
          <p className="whitespace-nowrap pl-1">{name}</p>
          <div className={'h-6 sm:h-8 md:h-10 ' + colorsMapper[index % colorsMapper.length]}>
            {score >= 1000 && (
              <p className="absolute right-1 top-7 text-end text-xs sm:text-sm md:top-8 md:text-base">
                {formatter.format(score)}
              </p>
            )}
            {score < 1000 && (
              <p className="absolute right-[-1.5rem] md:right-[-2rem] top-7 text-end text-xs sm:text-sm md:top-8 md:text-base">
                {formatter.format(score)}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamBox;
