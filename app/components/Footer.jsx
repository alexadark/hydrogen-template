import {Link} from '@remix-run/react';
import sbLogo from '~/assets/sb-logo.svg';
import logo from '~/assets/ride_logo.avif';
const Footer = () => {
  return (
    <footer>
      <div className="p-20 center-container">
        <div className="flex gap-3 items-center max-w-[400px]">
          <h1>
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </h1>
          <p>
            We find freedom in the waves, and our journey to find those waves is
            half the fun.
          </p>
        </div>
      </div>
      <div className="border-t border-zinc-700">
        <div className="center-container flex items-center space-x-1 justify-center uppercase font-semi-bold tracking-wide text-[12px] py-10">
          {`© ${new Date().getFullYear()}`} Powered by{' '}
          <a
            href="https://storyblok.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={sbLogo} alt="storyblok-logo" className="mx-2" />
          </a>
          and
          <a
            href="https://hydrogen.shopify.dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Shopify Hydrogen
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
