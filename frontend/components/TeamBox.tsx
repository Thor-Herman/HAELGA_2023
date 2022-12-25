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
      <p className="pl-1 md:pl-2">{name}</p>
      <div className="flex items-center">
        <div
          ref={colorBar}
          className={'mr-1 h-6 min-h-max w-6 sm:h-8 md:h-10 ' + colorsMapper[index % colorsMapper.length]}
        />
        <p className="text-xs sm:text-sm md:text-base ">{score}</p>
      </div>
    </div>
  );
};

export default TeamBox;
