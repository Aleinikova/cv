import Scroller from '@components/Scroller';
import Header from './components/Header';

interface ProjectLayoutProps {
  children: React.ReactNode;
}

function ProjectLayout({ children }: ProjectLayoutProps) {
  return (
    <Scroller>
      <div className='flex h-full flex-col items-center'>
        <Header />
        <main className='w-full max-w-7xl p-4 lg:px-20 xl:px-20  2xl:px-0 '>
          {children}
        </main>
      </div>
    </Scroller>
  );
}

export default ProjectLayout;
