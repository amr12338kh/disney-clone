import { footerLinks } from "@/data";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="px-5 sm:px-0 sm:mx-container py-10">
      <div className="flex flex-col gap-y-8 md:gap-y-0 md:flex-row justify-between py-10">
        {footerLinks.map(({ title, isRow, links }, i) => (
          <div key={i} className="space-y-4">
            <h2 className="text-lg text-primary">{title}</h2>
            <ul
              className={`${
                isRow ? "flex gap-4 md:justify-between" : "space-y-2 "
              } text-muted`}
            >
              {links.map(({ link }, i) => (
                <li key={i}>
                  <Link href="/" className="hover:text-primary/80 duration-100">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className=" text-muted">
        <p>©Disney. All rights reserved</p>
        <p className=" space-x-3">
          <span>Privacy Policy</span>
          <span>Cookie Policy</span>
          <span>Subscriber Agreement</span>
          <span>EMEA Privacy Rights</span>
          <span>Manage Preferences</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
