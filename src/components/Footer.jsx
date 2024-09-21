import footer from '../assets/footer.png';

const Footer = () => {
  return (
    <footer className="absolute bottom-0 left-0 right-0">
      <img
        src={footer}
        alt="Footer Image"
        className="w-full h-auto"
      />
    </footer>
  );
};

export default Footer;