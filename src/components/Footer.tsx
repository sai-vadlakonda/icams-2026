import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Youtube } from 'lucide-react';
import { SITE } from '@/constants/site';
import { NAV_ITEMS } from '@/constants/nav';

const SOCIALS = [
  { icon: Linkedin, href: SITE.social.linkedin, label: 'LinkedIn' },
  { icon: Twitter, href: SITE.social.twitter, label: 'Twitter' },
  { icon: Facebook, href: SITE.social.facebook, label: 'Facebook' },
  { icon: Youtube, href: SITE.social.youtube, label: 'YouTube' },
];

export function Footer() {
  return (
    <footer className="relative bg-ink-950 text-ink-200">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent" />

      <div className="container-section py-14 sm:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5">
              <img
                src="/assets/images/icams-logo.jpg"
                alt="ICAMS 2026 Logo"
                className="h-12 w-12 rounded-lg bg-white p-1 object-contain"
              />
              <div>
                <p className="text-base font-extrabold text-white">ICAMS 2026</p>
                <p className="text-xs text-ink-400">VCE, Hyderabad</p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-ink-400">{SITE.shortDescription}</p>
            <div className="mt-5 flex gap-3">
              {SOCIALS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-ink-300 transition-colors hover:bg-primary-600 hover:text-white"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">Quick Links</h4>
            <ul className="mt-4 space-y-2.5">
              {NAV_ITEMS.slice(0, 8).map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="text-sm text-ink-400 transition-colors hover:text-teal-300">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">Resources</h4>
            <ul className="mt-4 space-y-2.5">
              {NAV_ITEMS.slice(8).map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="text-sm text-ink-400 transition-colors hover:text-teal-300">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">Contact Us</h4>
            <ul className="mt-4 space-y-3 text-sm text-ink-400">
              <li className="flex gap-2.5">
                <MapPin size={16} className="mt-0.5 shrink-0 text-teal-400" />
                <span>
                  {SITE.address.line1}, {SITE.address.line2}, {SITE.address.line3}, {SITE.address.line4}
                </span>
              </li>
              <li className="flex gap-2.5">
                <Mail size={16} className="mt-0.5 shrink-0 text-teal-400" />
                <a href={`mailto:${SITE.email}`} className="hover:text-teal-300">
                  {SITE.email}
                </a>
              </li>
              <li className="flex gap-2.5">
                <Phone size={16} className="mt-0.5 shrink-0 text-teal-400" />
                <a href={`tel:${SITE.phone}`} className="hover:text-teal-300">
                  {SITE.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-xs text-ink-500">
            © {new Date().getFullYear()} ICAMS 2026 · Department of Mechanical Engineering, Vardhaman College of
            Engineering. All rights reserved.
          </p>
          <p className="text-xs text-ink-500">
            Webmaster:{' '}
            <a
              href="https://www.linkedin.com/in/sai-vadlakonda/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-teal-400 transition-colors hover:text-teal-300"
            >
              Sai Vadlakonda
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
