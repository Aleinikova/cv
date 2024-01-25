function LogoSvg(props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='32'
      height='48'
      fill='none'
      {...props}
    >
      <path fill='#FF4D62' fillOpacity='.3' d='M16 0h16v16H16V0Z' />
      <path fill='#FF4D62' fillOpacity='.5' d='M16 16h16v16H16V16Z' />
      <path fill='#FF4D62' fillOpacity='.75' d='M0 16h16v16H0V16Z' />
      <path fill='#FF4D62' d='M0 32h16v16H0V32Z' />
    </svg>
  );
}
export default LogoSvg;
