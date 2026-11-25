import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="site-shell home-page">
      <Nav active="home" />

      <section className="home-image-full" aria-label="VAUREL">
        <Image
          src="/homelight.png"
          alt="VAUREL — Creative commentary, posted weekly at 4:00 PM Pacific Time"
          width={1672}
          height={941}
          sizes="100vw"
          className="home-image-full-img home-image-light"
        />
        <Image
          src="/homedark.png"
          alt="VAUREL — Creative commentary, posted weekly at 4:00 PM Pacific Time"
          width={1672}
          height={941}
          sizes="100vw"
          className="home-image-full-img home-image-dark"
        />
      </section>

      <Footer />
    </main>
  );
}
