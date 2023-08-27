import React, { useState } from "react";
import UserCard from "./UserCard";

export default function Users() {
  const [activeCardIndex, setActiveCardIndex] = useState(-1);

  const handleCardClick = (index) => {
    setActiveCardIndex(index === activeCardIndex ? -1 : index);
  };

  return (
    <section className="text-gray-600 body-font py-3 px-2 md:px-0">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {[1, 2, 3, 4, 5, 6].map((item, index) => (
          <div className="" key={item}>
            <UserCard index={index} isActive={index === activeCardIndex} onClick={() => handleCardClick(index)} />
          </div>
        ))}
      </div>
    </section>
  );
}
