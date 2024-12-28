import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='flex h-16 items-center justify-between'>
          <div className='flex items-center space-x-2'>
            <Image
              src='/images/star-big.png'
              alt='Logo'
              width={64}
              height={64}
              priority
              className='image-rendering-pixelated h-8 w-8'
            />
            <Link
              href='/'
              className='text-lg font-semibold text-c_black dark:text-c_white'
            >
              Turboot
            </Link>
          </div>
          <div className='hidden space-x-4 md:flex'>
            <Link
              href='/'
              className='rounded-md px-3 py-2 text-c_black hover:text-c_lightpurple dark:text-c_white'
            >
              Home
            </Link>
            <Link
              href='/about'
              className='rounded-md px-3 py-2 text-c_black hover:text-c_lightpurple dark:text-c_white'
            >
              About
            </Link>
            <Link
              href='/projects'
              className='rounded-md px-3 py-2 text-c_black hover:text-c_lightpurple dark:text-c_white'
            >
              Projects
            </Link>
            <Link
              href='/contact'
              className='rounded-md px-3 py-2 text-c_black hover:text-c_lightpurple dark:text-c_white'
            >
              Contact
            </Link>
            <Link
              href='/signin'
              className='rounded-md border-2 border-solid border-c_lightpurple px-3 py-2 text-c_black text-c_white hover:bg-c_lightpurple'
            >
              Sign in
            </Link>
          </div>
          <div className='md:hidden'>
            <button
              onClick={() => setIsOpen(!isOpen)}
              type='button'
              className='text-c_black hover:text-gray-300 focus:outline-none dark:text-c_white'
            >
              <svg
                className='h-6 w-6'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                {isOpen ? (
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M6 18L18 6M6 6l12 12'
                  />
                ) : (
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M4 6h16M4 12h16m-7 6h7'
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div
        className={`overflow-hidden text-center transition-all duration-300 ease-in-out md:hidden ${
          isOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <Link
          href='/'
          className='block rounded-md px-3 py-2 text-c_black hover:text-c_lightpurple dark:text-c_white'
        >
          Home
        </Link>
        <Link
          href='/about'
          className='block rounded-md px-3 py-2 text-c_black hover:text-c_lightpurple dark:text-c_white'
        >
          About
        </Link>
        <Link
          href='/services'
          className='block rounded-md px-3 py-2 text-c_black hover:text-c_lightpurple dark:text-c_white'
        >
          Projects
        </Link>
        <Link
          href='/contact'
          className='block rounded-md px-3 py-2 text-c_black hover:text-c_lightpurple dark:text-c_white'
        >
          Contact
        </Link>
        <Link
          href='/contact'
          className='block rounded-md border-2 border-solid border-c_lightpurple px-3 py-2 text-c_black hover:bg-c_lightpurple dark:text-c_white'
        >
          Sign in
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
