import Header from "@/components/partials/Header";
import Footer from "@/components/partials/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="mx-6">
        <article>
          <div className="mt-14">
            <h1 className="dark:text-c_white text-5xl">
              Thijs Herman
            </h1>
            <div className="my-3">
              <p className="dark:text-c_gray">
                My name is Thijs Herman. I am a Junior Software developer
                 and in my free time I like to build custom PC's and servers.
                 I also provide server hosting solutions.
              </p>
            </div>
          </div>
        </article>
        <article></article>
      </main>
      <Footer />
    </>
  );
}
