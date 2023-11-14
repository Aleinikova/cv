import Nav from './Nav';

function Header() {
  return (
    <header className='absolute z-20 flex w-full px-8 py-6'>
      <Nav className='ml-auto' />
    </header>
  );
}

export default Header;
