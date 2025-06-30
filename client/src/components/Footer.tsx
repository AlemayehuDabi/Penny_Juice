import { Facebook, Twitter, Instagram, Mail, Phone } from "lucide-react";

interface FooterLink {
  label: string;
  href: string;
}

const companyLinks: FooterLink[] = [
  { label: "About Us", href: "/about" },
  { label: "Our Story", href: "/story" },
  { label: "Blog", href: "/blog" },
];

const shopLinks: FooterLink[] = [
  { label: "Fresh Juices", href: "/products/juices" },
  { label: "Smoothies", href: "/products/smoothies" },
  { label: "Order Online", href: "/order" },
];

const contactInfo: FooterLink[] = [
  { label: "Email: info@juicehaven.com", href: "mailto:info@juicehaven.com" },
  { label: "Phone: +1 (555) 123-4567", href: "tel:+15551234567" },
];

export default function Footer() {
  return (
    <footer className=" py-12 px-4 sm:px-6 lg:px-8 mt-20 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-semibold">Penny Juice</h3>
          <p className="text-gray-700 text-sm">
            Fresh, natural, and delicious juices made with love. Discover the
            taste of health and happiness with every sip.
          </p>
          <div className="flex gap-4">
            <a
              href="https://facebook.com"
              aria-label="Facebook"
              className="hover:text-gray-700 transition duration-300"
            >
              <Facebook size={24} />
            </a>
            <a
              href="https://twitter.com"
              aria-label="Twitter"
              className="hover:text-gray-700 transition duration-300"
            >
              <Twitter size={24} />
            </a>
            <a
              href="https://instagram.com"
              aria-label="Instagram"
              className="hover:text-gray-700 transition duration-300"
            >
              <Instagram size={24} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-semibold">Quick Links</h3>
          <ul className="flex flex-col gap-2 text-sm">
            {companyLinks.map((link: FooterLink, index: number) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-gray-700 hover:text-gray-200 transition duration-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
            {shopLinks.map((link: FooterLink, index: number) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-gray-700 hover:text-gray-200 transition duration-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-semibold">Contact Us</h3>
          <ul className="flex flex-col gap-2 text-sm">
            {contactInfo.map((info: FooterLink, index: number) => (
              <li key={index} className="flex items-center gap-2">
                {info.label.includes("Email") && <Mail size={16} />}
                {info.label.includes("Phone") && <Phone size={16} />}
                <a
                  href={info.href}
                  className="text-gray-700 hover:text-gray-200 transition duration-300"
                >
                  {info.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-8 border-t border-gray-700 pt-6 text-center text-sm text-gray-700">
        <p>
          &copy; {new Date().getFullYear()} Penny Juice. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
