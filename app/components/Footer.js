import Link from "next/link";

const Footer = () => {
  const date = new Date();

  return (
    <div className="flex justify-center text-center items-center py-2 bg-[#0E1527] text-white">
      <p className="text-sm">
        Design And Developed by
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
        All Rights Reserved ©{date.getFullYear()}
      </p>
    </div>
  );
};

export default Footer;
