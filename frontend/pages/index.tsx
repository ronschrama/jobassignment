import React, { useEffect, useState } from 'react'
import Head from "next/head";
import styles from "../styles/Home.module.css";

import Header from '../components/Header';
import UserForm from '../components/UserForm';
import UserList from '../components/UserList';

interface userTypes {
  id: number,
  name: string,
  email: string,
}

export default function Home() {
  const [users, setUsers] = useState<Partial<userTypes[]>>([]);
  const [userInput, setUserInput] = useState<Partial<userTypes[]>>([]);

  const fetchData = async () => {
    try {
      const res = await fetch(
        'http://localhost:4000/users',
      );
      const getUsers = await res.json();
      console.log('this is the result: ', getUsers);
      setUsers(getUsers);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, [userInput]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>
          User profiles
        </h1>
        <div className={styles.contentContainer}>
          <UserForm
            setUserInput={setUserInput}
          />
          <UserList
            users={users}
          />
        </div>
      </main>

      <footer className={styles.footer}>
        <p>Copyright by Foodsy all rights reserved</p>
      </footer>
    </div>
  );
}
