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
    <div className="w-full px-4">
      <div className="absolute h-max border-l-[1px] border-white" />
      {teamsJSX}
    </div>
  );
};

export default TeamsContainer;
