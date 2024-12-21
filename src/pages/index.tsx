import Header from "@/components/partials/Header";
import Footer from "@/components/partials/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="mx-4">
        <article>
          <div className="mt-14">
            <h1 className="text-white text-5xl font-bold">Turboot</h1>
          </div>
        </article>
        <article></article>
      </main>
      <Footer />
    </>
  );
}
