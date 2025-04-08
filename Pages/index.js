import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Another Sizes</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <main>
        <section
          className="relative flex justify-center items-center text-center text-white"
          style={{
            height: '600px',
            backgroundImage: "url('/img/hero-background.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="relative z-10">
            <h1 className="text-3xl sm:text-5xl font-bold mb-4">Descubre Tu Estilo</h1>
            <p className="text-lg sm:text-xl mb-6">Moda única para cada ocasión</p>
            <a
              href="#coleccion"
              className="bg-white text-black px-6 py-3 rounded hover:bg-gray-200 transition-transform transform hover:scale-105 text-sm sm:text-base"
            >
              Explorar Colección
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
