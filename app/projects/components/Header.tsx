import Link from 'next/link';

function Header() {
  return (
    <header className='absolute z-20 flex w-full items-center px-8 py-6'>
      <Link href='/'>
        <div className='ml-3 border-2 border-primary px-3 py-2 font-secondary font-semibold transition-all'>
          back to homepage
        </div>
      </Link>
    </header>
  );
}

export default Header;
