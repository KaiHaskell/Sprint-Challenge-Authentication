import React, { useEffect, useState } from "react";
import JokeCard from "./JokeCard";

import { AxiosWithAuth } from "../utils/AxiosWithAuth";

import "./styles.css";

const Jokes = () => {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    AxiosWithAuth()
      .get("/jokes")
      .then(res => {
        console.log(res.data);
        setJokes(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <ul className="joke-group">
        {jokes.map(joke => (
          <JokeCard key={joke.id} joke={joke} />
        ))}
      </ul>
    </div>
  );
};

export default Jokes;
