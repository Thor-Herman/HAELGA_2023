import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { database } from '../firebaseconfig.js';
import { ref, onValue } from 'firebase/database';
import App from '../components/App';

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
    <>
      <Head>
        <title>HÆLGA 2023</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <App />
    </>
  );
};

export default Home;
