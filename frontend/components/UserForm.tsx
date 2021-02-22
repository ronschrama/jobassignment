import React, { useState } from 'react'
import styles from "../styles/Home.module.css";

// interface Props {
//   handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
//   handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
// }

// export const UserForm: React.FC<Props> = () => {
export default function UserForm({ setUserInput }: { setUserInput: any }) {
  const [input, setInput] = useState<{ name: string, email: string }>({
    name: "",
    email: ""
  });


  const handleChange = (e: any) => {
    const inputValue = e.target.value;
    setInput({
      ...input,
      [e.target.name]: inputValue
    });
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    let user = input
    try {
      const result = await fetch('http://localhost:4000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: user.name,
          email: user.email,
        })
      })
      setUserInput(input);
      setInput({
        name: "",
        email: ""
      });
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className={styles.formContainer}>
      <h3 className={styles.heading}>
        Add new user
        </h3>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          className={styles.input}
          value={input.name}
          onChange={handleChange}
        />
        <input
          className={styles.input}
          type="email"
          name="email"
          placeholder="email"
          value={input.email}
          onChange={handleChange}
        />
        <input
          className={styles.inputSubmit}
          type="submit"
          value="Add user"
        />
      </form>
    </div>
  )
}
