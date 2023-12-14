import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero section pb-20 pt-24">
      <div className="container flex justify-between mx-auto max-w-7xl outline p-6">
        <div className="w-7/12">
          <h1 className="text-8xl font-thin uppercase leading-tight">
            <span className="font-medium">Uncover </span>Carpathian’s Secrets
          </h1>
          <p className="mt-36 font-extralight">
            Hoverla / Yaremche / Zakarpattia / Vorokhta / Synevyr Lake / Bukovel
          </p>
        </div>
        <div className="w-[18.375rem]">
          <p className="text-8xl font-thin leading-[0.75]">
            <span className="font-medium mr-2">7</span>DAYS
          </p>
          <p className="font-light tracking-[2.3em]">JOURNEY</p>
          <p className="mt-44">
            We offer you unforgettable trips to the most beautiful parts of the
            Carpathians. Enjoy stunning views, exciting expeditions, and the
            best service!
          </p>
          <Link href="#contacts">JOIN NOW</Link>
        </div>
      </div>
    </section>
  );
}
