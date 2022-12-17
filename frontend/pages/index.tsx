import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { database } from '../firebaseconfig.js';
import { ref, onValue } from 'firebase/database';

const Home: NextPage = () => {
  const [teams, setTeams] = useState([]);

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

  const teamsJSX = teams.map((team, i) => (
    <div key={i} className="w-xl flex">
      <div>{team.name}</div>
      <div>{team.score}</div>
    </div>
  ));

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>HÆLGA 2023</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">{teamsJSX}</main>
    </div>
  );
};

export default Home;
