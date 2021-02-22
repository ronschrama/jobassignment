import React from 'react'
import styles from "../styles/Home.module.css";

interface userTypes {
  id: number,
  name: string,
  email: string,
}

export default function UserList({ users }: { users: any }) {
  return (
    <div className={styles.tableContainer}>
      <div className={styles.tableHeader}>
        <h3 className={styles.heading}>
          User profile list
        </h3>
        <ul className={styles.list}>
          <li className={styles.tableTitles}><p>Name</p><p>Email</p></li>
        </ul>
      </div>
      <ul className={styles.list}>
        {users.map((user: userTypes) =>
          <li className={styles.listItem}
            key={user.id}>
            <p>{user.name}</p>
            <p>{user.email}</p>
          </li>)}
      </ul>
    </div>
  )
}
