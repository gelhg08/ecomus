// app/components/footer.tsx
import Link from 'next/link';

const Footer = () => {
    return (
      <footer className="bg-white text-black py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/3 mb-4 md:mb-0">
              <h4 className="text-xl font-semibold mb-2">Ecomus</h4>
              <p className="text-sm">
                © {new Date().getFullYear()} Ecomus. All rights reserved.
              </p>
            </div>
            <div className="w-full md:w-1/3 mb-4 md:mb-0">
              <h4 className="text-xl font-semibold mb-2">Quick Links</h4>
              <ul className="list-none p-0">
                <li>
                  <Link href="/" className="text-black hover:underline">Home</Link>
                </li>
                <li>
                  <Link href="/pages" className="text-black hover:underline">Pages</Link>
                </li>
                <li>
                  <Link href="/blog" className="text-black hover:underline">Blog</Link>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/3">
              <h4 className="text-xl font-semibold mb-2">Contact</h4>
              <p className="text-sm mb-2">
                1234 Market St, San Francisco, CA 94103
              </p>
              <p className="text-sm mb-2">
                Email: <a href="mailto:info@ecomus.com" className="text-black hover:underline">info@ecomus.com</a>
              </p>
              <p className="text-sm">
                Phone: <a href="tel:+1234567890" className="text-black hover:underline">(123) 456-7890</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  

  