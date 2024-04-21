import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex justify-center items-center py-2 bg-[#0E1527] text-white">
      <p>
        Design And Development by
        <Link
          className="underline px-1 text-blue-400"
          href="https://github.com/smanas1"
        >
          Anas
        </Link>
        &
        <Link
          className="underline px-1 text-blue-400"
          href="https://www.facebook.com/sadi.syam"
        >
          Sadi
        </Link>
      </p>
    </div>
  );
};

export default Footer;
