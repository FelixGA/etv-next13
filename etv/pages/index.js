import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Homepage</title>
        <meta name="description" content="Generated by create next app" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
          rel="stylesheet"
        />

        <link rel="manifest" href="./manifest.json" />
        <link rel="icon" href="/favicon.ico" />
        <script defer src="/your-path-to-fontawesome/js/brands.js"></script>
        <script defer src="/your-path-to-fontawesome/js/solid.js"></script>
        <script
          defer
          src="/your-path-to-fontawesome/js/fontawesome.js"
        ></script>
      </Head>
    </>
  );
}
