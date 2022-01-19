import React from "react";
import Accordion from "./components/Accordion";
import Header from "./components/Header";

const items = [
  {
    id: 1,
    title: "What is React?",
    content: "React is a front end javascript framework",
  },
  {
    id: 2,
    title: "Why use React?",
    content: "Rreact is a favorite JS library among engineers",
  },
  {
    id: 3,
    title: "How do you use React?",
    content: "You use React by creating components",
  },
];

const App = () => {
  return (
    <div className="bg-gray-100 w-full h-screen">
      <Header />
      <div className="flex flex-col items-center pt-10">
        <Accordion key={items.id} items={items} />
      </div>
    </div>
  );
};

export default App;
