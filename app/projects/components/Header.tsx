import Link from 'next/link';

function Header() {
  return (
    <header className='flex w-full items-center p-4 lg:px-8 lg:py-6'>
      <Link href='/'>
        <div className='border-2 border-primary px-3 py-2 font-secondary font-semibold transition-all'>
          back to homepage
        </div>
      </Link>
    </header>
  );
}

export default Header;
