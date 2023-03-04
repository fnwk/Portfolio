import Hero from "@/components/Hero/Index";
import Header from "@/components/Header/Index";
import Slogan from "@/components/Slogan/Index";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Slogan />
      </main>
    </>
  );
}
