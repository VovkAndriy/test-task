import { IHero } from '@everyhero/lib-types';
import { Header } from '../components/Header';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Image from "next/image";
import { getAllHeroes } from '../utils/api';
import Link from 'next/link';

type Data = {
  hero: IHero;
};

export async function getStaticPaths() {
  return {
    paths: new Array(731)
      .fill(0)
      .map((_o, i) => i + 1)
      .map((i) => `/${i}`),
    fallback: false, // can also be true or 'blocking'
  };
}

export const getStaticProps: GetStaticProps<Data> = async (context) => {
  const heroes = await getAllHeroes();

  return {
    props: {
      hero: heroes.find((hero) => hero.id === context.params.hero) as IHero,
    } as Data,
  };
};

export function HeroDetailsPage({ hero }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className="">
      <Header />
      <div className="max-w-6xl mx-auto pt-8">
        <Link href={'/'} className="hover:ml-2 text-2xl">&larr; Go back</Link>
        <h1 className="text-6xl font-bold my-4">{hero.name}</h1>

        <div className="flex">
          <div className="w-2/4 inline-block mr-10">
            <h3 className="text-black-900 text-4xl mb-6 mt-4 ml-24">Description</h3>

            <p className="block mb-3 font-semibold text-2xl first-line:uppercase">
              Price: {hero.price}
            </p>

            <p className="block mb-3 font-semibold text-2xl first-line:uppercase">
              biography
            </p>

            <ul className="list-none">
              {hero.biography['full-name'] && <li className="block mb-3 font-semibold text-black-500 first-line:uppercase ml-4">
                Full name: {hero.biography['full-name']}
              </li>}

              <li className="block mb-3 font-semibold text-black-500 first-line:uppercase ml-4">
                Place of birth: {hero.biography['place-of-birth']}
              </li>

              <li className="block mb-3 font-semibold text-black-500 first-line:uppercase ml-4">
                First appearance: {hero.biography['first-appearance']}
              </li>

              <li className="block mb-3 font-semibold text-black-500 first-line:uppercase ml-4">
                Publisher : {hero.biography.publisher}
              </li>

              <li className="block mb-3 font-semibold text-black-500 first-line:uppercase ml-4">
                Alignment : {hero.biography.alignment}
              </li>
            </ul>

            <p className="block mb-3 font-semibold text-2xl first-line:uppercase">
              appearance
            </p>

            <ul className="list-none">
              <li className="block mb-3 font-semibold text-black-500 first-line:uppercase ml-4">
                Gender : {hero.appearance.gender}
              </li>

              <li className="block mb-3 font-semibold text-black-500 first-line:uppercase ml-4">
                Height : {hero.appearance.height}
              </li>

              <li className="block mb-3 font-semibold text-black-500 first-line:uppercase ml-4">
                Weight : {hero.appearance.weight}
              </li>
            </ul>

            <p className="block mb-3 font-semibold text-2xl first-line:uppercase">
              Connection
            </p>

            <ul className="list-none">
              <li className="block mb-3 font-semibold text-black-500 first-line:uppercase ml-4">
                group affiliation: {hero.connections['group-affiliation']}
              </li>

              <li className="block mb-3 font-semibold text-black-500 first-line:uppercase ml-4">
                relatives: {hero.connections.relatives}
              </li>
            </ul>

            <p className="block mb-3 font-semibold text-2xl first-line:uppercase">
              powerstats
            </p>

            <ul className="list-none">
              <li className="block mb-3 font-semibold text-black-500 first-line:uppercase ml-4">
                intelligence: {hero.powerstats['intelligence']}
              </li>

              <li className="block mb-3 font-semibold text-black-500 first-line:uppercase ml-4">
                speed: {hero.powerstats.speed}
              </li>

              <li className="block mb-3 font-semibold text-black-500 first-line:uppercase ml-4">
                power: {hero.powerstats.power}
              </li>

              <li className="block mb-3 font-semibold text-black-500 first-line:uppercase ml-4">
                combat: {hero.powerstats.combat}
              </li>
            </ul>

            <p className="block mb-3 font-semibold text-2xl first-line:uppercase">
              work
            </p>

            <ul className="list-none">
              <li className="block mb-3 font-semibold text-black-500 first-line:uppercase ml-4">
                occupation: {hero.work['occupation']}
              </li>

              <li className="block mb-3 font-semibold text-black-500 first-line:uppercase ml-4">
                base: {hero.work.base}
              </li>
            </ul>
          </div>

          <Image
            src={hero.image.url}
            alt={hero.name}
            width="600"
            height="200"
            className="object-cover object-center ml-auto hover:scale-105 transition-all rounded-lg inline-block h-full"
          />
        </div>
      </div>
    </div>
  );
}

export default HeroDetailsPage;
