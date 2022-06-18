import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="p-4 shadow md:p-6">
      <div className="md:flex md:items-center md:justify-between">
        <span className="text-sm sm:text-center">
          © {new Date().getFullYear() + " "}
          <a href="https://coinbase.com" className="hover:underline">
            LifeFriend
          </a>
        </span>
        <span className="ml-2">Made with ❤️ for WaffleHacks 2022.</span>
      </div>
    </footer>
  );
};

export default Footer;