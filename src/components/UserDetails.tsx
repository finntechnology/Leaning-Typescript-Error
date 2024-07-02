interface NameProps {
  email: string;
  password: number;
  place: {
    city: string;
    country: string;
  };
  lastName: string[];
  auth: true;
}

const UserDetails = ({ email, password, place, lastName, auth }: NameProps) => {
  return (
    <div>
      {email} {password} {place.city} {place.country} {lastName} {auth}
    </div>
  );
};

export default UserDetails;
