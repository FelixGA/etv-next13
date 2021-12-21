import React from "react";
import Image from "next/image";
const BlogArticles = () => {
  return (
    <>
      <div className="blog-article-one p-5 ">
        <div>jetzt neu</div>
        <h2 className="text-grey-darkest text-3xl font-bold py-5">
          Elektrotransporter Kaufberater
        </h2>
        <p className="tracking-wide font-bold text-grey-dark pb-6">
          Hier steht ein Text der Lust macht den Kauf­ber­ater (= euer nor­maler
          Fun­nel) zu be­nutzen. Hier kön­nten so Dinge ste­hen wie: In weni­gen
          schrit­ten zum per­fek­ten E-Trans­porter für Ihre Ansprüche.
        </p>
        <button className="bg-blue-dark hover:bg-blue-light text-white font-bold py-4 px-3 mb-5 my-3 text-sm rounded-lg">
          Zum Kaufberater
        </button>
      </div>

      <div className="blog-article-two p-5 bg-grey-lightest ">
        <Image
          src="/images/schwein.png"
          width={300}
          height={300}
          layout="responsive"
          className="blog-article-two-image"
        />
        <h2 className="text-grey-darkest text-3xl font-bold py-5">
          Förderungen für Elektrotransporter
        </h2>
        <p className="tracking-wide font-bold text-grey-dark pb-6 ">
          Im Rah­men der angestrebten En­ergiewende ist seit 2016 eine
          bun­desweite Förderung der Elek­tro­mo­bil­ität durch die
          so­ge­nan­nte “Umwelt­prämie” möglich, welche den Kauf rein
          elek­trischer Fahrzeuge fi­nanziell un­ter­stützt.
        </p>
        <button className="bg-blue-dark hover:bg-blue-light text-white font-bold py-4 px-3 mb-5 my-3 text-sm rounded-lg">
          Zum Kaufberater
        </button>
      </div>
    </>
  );
};
export default BlogArticles;
