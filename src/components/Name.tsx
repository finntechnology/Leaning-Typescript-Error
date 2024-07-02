import React from "react";

interface NameProps {
  firstName: string;
  lastName: string;
}

const Name = ({ firstName, lastName }: NameProps) => {
  return (
    <div>
      {firstName}

      {lastName}
    </div>
  );
};
export default Name;
