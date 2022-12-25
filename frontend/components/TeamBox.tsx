const colorsMapper = [
  'bg-red-500',
  'bg-yellow-500',
  'bg-green-500',
  'bg-blue-500',
  'bg-indigo-500',
  'bg-purple-500',
  'bg-pink-500',
];

const TeamBox = ({ index }) => {
  return (
    <div className="mt-2">
      <p className="pl-1">Teamname</p>
      <div className="flex items-center">
        <div className={'mr-1 h-6 min-h-max w-6 sm:h-8 md:h-10 ' + colorsMapper[(index - 1) % colorsMapper.length]} />
        <p className="text-xs sm:text-sm md:text-base ">Score</p>
      </div>
    </div>
  );
};

export default TeamBox;
