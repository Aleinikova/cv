import { MutableRefObject } from 'react';
import Nav from './Nav';
import { INavItem } from './type';

interface IHeader {
  navigation: INavItem[];
  onClick: (value: MutableRefObject<HTMLElement>) => void;
}

function Header({ navigation, onClick }: IHeader) {
  return (
    <header className='absolute z-20 flex w-full px-8 py-6'>
      <Nav className='ml-auto' items={navigation} onClick={onClick} />
    </header>
  );
}

export default Header;
