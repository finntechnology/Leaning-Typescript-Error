import Name from "@/components/Name";
import UserDetails from "@/components/UserDetails";

export default function Home() {
  return (
    <div>
      <UserDetails
        email={"finn@gmail.com"}
        password={67978}
        lastName={["Daniel", "Finn"]}
        auth={true}
        place={{
          city: "Abuja",
          country: "Nigeria",
        }}
      />

      <Name firstName={"Daniel"} lastName={"Finn"} />
    </div>
  );
}
