import { useState, useEffect } from 'react';
import { database } from '../firebaseconfig.js';
import { ref, onValue } from 'firebase/database';
import TeamBox from './TeamBox';

type Team = {
  name: string;
  score: number;
};

const TeamsContainer = () => {
  const [teams, setTeams] = useState<Array<Team>>([]);

  useEffect(() => {
    const db = database;
    const teamsRef = ref(db, 'teams');
    onValue(teamsRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data);

      const teams = [];
      for (let key in data) {
        teams.push({ ...data[key], id: key });
      }
      setTeams(teams);
    });
  }, []);

  console.log(teams);

  const teamsJSX = teams
    .sort((a, b) => b.score - a.score)
    .map((team, i) => <TeamBox key={i} index={i} score={team.score} name={team.name} />);

  return (
    <div className="relative mt-4 w-full max-w-6xl px-4 sm:px-8 md:px-12">
      <div className="absolute h-full border-l-[1px] border-white md:border-l-2" />
      <div className="absolute right-4 h-full border-r-[2px] border-dotted border-red-300 sm:right-8 md:right-12 md:border-l-2" />
      {teamsJSX}
    </div>
  );
};

export default TeamsContainer;
