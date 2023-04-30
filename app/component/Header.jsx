import Link from 'next/link';
const Header = () => {
  return (
    <header>
      <nav
        className="h-14 bg-zinc-600 text-white flex items-center
         px-4 justify-between font-bold text-2xl shadow-md"
      >
        <Link href="/">فروشگاه من</Link>
        <div className="flex gap-4">
          <Link href={'/'}>سبدخرید</Link>
          <Link href={'/'}>ورود</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
