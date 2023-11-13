import Hero from "./sections/Hero";
import Claim from "./sections/Claim";
import Activity from "./sections/Activity";
import Donate from "./sections/Donate";
import Policy from "./sections/Policy";

export default function Home() {
  return (
    <main>
      <Hero />
      <Claim />
      <Activity />
      <Policy />
      <Donate />
    </main>
  );
}
