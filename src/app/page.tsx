import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Header />
      <main className='mx-6'>
        <section className='mt-24'>
          <h3 className='text-gray-700'>WEBSITE IN DEVELOPMENT</h3>
          <h1 className='text-5xl text-black dark:text-c_white'>
            Thijs Herman
          </h1>
          <p className='my-3 text-black dark:text-c_gray'>
            My name is Thijs Herman. I am a Junior Software developer and in my
            free time I like to build custom PC&apos;s, websites and servers. I also
            provide server hosting solutions.
          </p>
        </section>
        <hr className='border-1 mt-8 border-spacing-24 border-white dark:border-black' />
        <section>
          <h3 className='my-4 text-xl'>MY PROJECTS</h3>
          <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
            <div className='flex flex-col items-center text-center text-c_black dark:text-c_white'>
              <Image
                src='/images/broly.jpg'
                alt='Placeholder'
                width={356}
                height={256}
              />
              <b>CV Generator</b>
              <ul>
                <li>
                  Github:{' '}
                  <a
                    className='text-c_teal underline'
                    href='https://github.com/Turbootzz/CV-Generator'
                  >
                    visit page
                  </a>
                </li>
              </ul>
            </div>
            <div className='flex flex-col items-center text-center'>
              <Image
                src='/images/projects/momd.png'
                alt='Placeholder'
                width={356}
                height={256}
              />
              <b>Social media platform</b>
              <ul>
                <li>
                  Github:{' '}
                  <a
                    className='text-c_teal underline'
                    href='https://github.com/Turbootzz/Rampup'
                  >
                    visit page
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <hr className='border-1 mt-8 border-spacing-24 border-c_teal dark:border-c_purple' />
        <section className='mt-14'>
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
                  <b>RAM:</b>: G.Skill Trident Z DDR4 4x8GB 3600MHZ
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
              <b>Specifications:</b>
              <ul>
                <li>
                  <b>CPU</b>: AMD Ryzen 5 7600X
                </li>
                <li>
                  <b>Motherboard:</b>: ------
                </li>
                <li>
                  <b>RAM:</b>: Corsair Vangeance RGB DDR5 2x16GB 6000MHZ
                </li>
                <li>
                  <b>GPU</b>: AMD Radeon 6800 XT
                </li>
              </ul>
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
        </section>
        <hr className='border-1 mt-8 border-spacing-24 border-c_teal dark:border-c_purple' />
      </main>
      <Footer />
    </>
  );
}
