import { onValue, ref } from 'firebase/database';
import { useEffect, useState } from 'react';
import { database } from '../firebaseconfig.js';
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
      const teams = [];
      for (let key in data) {
        teams.push({ ...data[key], id: key });
      }
      setTeams(teams);
    });
  }, []);

  const teamsJSX = teams
    .sort((a, b) => b.score - a.score)
    .map((team, i) => <TeamBox key={team.name} index={i} score={team.score} name={team.name} />);

  return (
    <div className="relative mt-4 w-full max-w-6xl px-4 sm:px-8 md:px-12">
      {teams.length > 0 && (
        <>
          <div className="absolute h-full border-l-[1px] border-white md:border-l-2" />
          <div className="absolute right-4 h-full border-r-[2px] border-dotted border-red-300 sm:right-8 md:right-12 md:border-l-2" />
          {teamsJSX}
        </>
      )}
      {teams.length === 0 && <p className="text-center text-white pt-6">Ingen lag har blitt opprettet ennå. Kom tilbake senere!</p>}
    </div>
  );
};

export default TeamsContainer;
