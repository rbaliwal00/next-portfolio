"use client";
import React, { useEffect, useState } from "react";

const InfiniteScroll = () => {
  const [todos, setTodos] = useState([]);
  const [count, setCount] = useState([]);
  const divHeight = "50px";

  const handleScroll = () => {
    console.log(window.innerHeight);
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    ) {
      return;
    }
    fetchData();
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  async function fetchData() {
    fetch("https://dummyjson.com/todos?limit=15&skip=10")
      .then((res) => res.json())
      .then((data) => setTodos(data.todos));
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div style={{ color: "white", height: "90vh", overflow: "auto" }}>
      {todos?.map((todo) => (
        <div key={todo.id} style={{ height: divHeight }}>
          {todo.todo}
        </div>
      ))}
    </div>
  );
};

export default InfiniteScroll;
