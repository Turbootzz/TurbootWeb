import Header from '@/components/partials/Header';
import Footer from '@/components/partials/Footer';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Header />
      <main className='mx-6'>
        <article className='mt-24'>
          <h1 className='text-5xl text-c_black dark:text-c_white'>
            Thijs Herman
          </h1>
          <p className='my-3 text-c_black dark:text-c_gray'>
            My name is Thijs Herman. I am a Junior Software developer and in my
            free time I like to build custom PC&apos;s and servers. I also
            provide server hosting solutions.
          </p>
        </article>
        <hr className='border-1 mt-8 border-spacing-24 border-c_teal dark:border-c_purple' />
        <article>
          <h3 className='my-4 text-xl'>MY PROJECTS</h3>
          <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
            <div className='flex flex-col items-center text-center text-c_black dark:text-c_white'>
              <Image
                src='/images/broly.jpg'
                alt='Placeholder'
                width={256}
                height={256}
              />
              <p>Lorem ipsum</p>
            </div>
            <div className='flex flex-col items-center text-center'>
              <Image
                src='/images/broly.jpg'
                alt='Placeholder'
                width={256}
                height={256}
              />
              <p>Lorem ipsum</p>
            </div>
          </div>
        </article>
        <hr className='border-1 mt-8 border-spacing-24 border-c_teal dark:border-c_purple' />
        <article className='mt-14'>
          <h1 className='text-4xl text-c_black dark:text-c_white'>
            PC Building
          </h1>
          <p className='my-3 text-c_black dark:text-c_white'>
            Contact me if you want any advice for PC parts or if you want me to
            build a PC for you!
            <br />
            For more information please visit the PC build page.
          </p>
          <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
            <div className='flex flex-col items-center text-center text-c_black dark:text-c_white'>
              <Image
                src='/images/pc-builds/pc-12.jpeg'
                alt='Placeholder'
                width={356}
                height={256}
              />
              <b>Specifications:</b>
              <ul>
                <li>
                  <b>CPU</b>: AMD Ryzen 9 5900X
                </li>
                <li>
                  <b>Motherboard:</b>: Asus TUF Gaming B550-PLUS WIFI II
                </li>
                <li>
                  <b>RAM:</b>: G.Skill Trident Z 4x8GB 3600MHZ
                </li>
                <li>
                  <b>GPU</b>: Nvidia Geforce RTX 3080 TI
                </li>
              </ul>
            </div>
            <div className='flex flex-col items-center text-center text-c_black dark:text-c_white'>
              <Image
                src='/images/pc-builds/pc-1.jpg'
                alt='Placeholder'
                width={356}
                height={256}
              />
              <p>Lorem ipsum</p>
            </div>
            <div className='flex flex-col items-center text-center text-c_black dark:text-c_white'>
              <Image
                src='/images/pc-builds/pc-9.jpg'
                alt='Placeholder'
                width={356}
                height={256}
              />
              <p>Lorem ipsum</p>
            </div>
            <div className='flex flex-col items-center text-center text-c_black dark:text-c_white'>
              <Image
                src='/images/pc-builds/pc-10.jpg'
                alt='Placeholder'
                width={356}
                height={256}
              />
              <p>Lorem ipsum</p>
            </div>
          </div>
        </article>
        <hr className='border-1 mt-8 border-spacing-24 border-c_teal dark:border-c_purple' />
      </main>
      <Footer />
    </>
  );
}
