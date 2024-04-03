import Headline from '@components/Headline';
import ScreenshotHolder from '../components/ScreenshotHolder';
import ProjectDescription from '../components/ProjectDescription';

function NewNewPage() {
  return (
    <>
      <ProjectDescription
        title='Losuct'
        subtitle='Skydivers panel'
        description='The platform is designed for skydivers. Clients can easily order flights, access their jump history, store multimedia, and manage payments with a built-in system. For workers, the panel streamlines flight orders, multimedia uploads, and equipment management, ensuring a smooth and efficient operation. The project aims to enhance the skydiving experience for clients while optimizing workflow for dedicated workers.'
        technologies='React, Redux toolkit, React hook forms, Material UI, React-PDF, i18next. Work with camera in browser for reading QR and bar codes'
        myRole='Frontend developer'
        teamSize='3'
        imgUrl='/images/olimpic-banner.png'
        projectLink='https://cp.locust-system.com/'
      />

      <section>
        <Headline component='h2'>Screenshots</Headline>
        <ul>
          <ScreenshotHolder src='/images/olimpic-1.png' alt='Newnew homepage' />
          <ScreenshotHolder src='/images/olimpic-2.png' alt='Newnew homepage' />
          <ScreenshotHolder src='/images/olimpic-5.png' alt='Newnew homepage' />
          <ScreenshotHolder src='/images/olimpic-3.png' alt='Newnew homepage' />
          <ScreenshotHolder src='/images/olimpic-4.png' alt='Newnew homepage' />
        </ul>
      </section>
    </>
  );
}

export default NewNewPage;
