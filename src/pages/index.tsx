import Header from "@/components/partials/Header";
import Footer from "@/components/partials/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="mx-4">
        <article>
          <div className="mt-14">
            <h1 className="text-c_white text-center text-5xl font-semibold">
              Turboot
            </h1>
            <div className="my-3">
              <p className="text-c_gray text-center">
                Junior Software developer
              </p>
              <p className="text-c_gray text-center">
                Custom PC and server builds
              </p>
              <p className="text-c_gray text-center">
                Server hosting solutions
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
