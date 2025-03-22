import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from 'next/link'

export default function NotFound() {
  return (
	<>
	  <Header />
	  <main className="container flex-grow pt-50 md:pt-70 pb-8 md:pb-15 items-center text-center">
		<h1 className="text-4xl md:text-5xl">Deze pagina bestaat niet :(</h1>
		<Link href="/" className="mt-7 hover:font-bold">Return Home</Link>
	  </main>
	  <Footer />
	</>
  );
}