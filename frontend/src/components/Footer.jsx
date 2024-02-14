const Footer = () => {
  return (
    <footer className="bg-black mt-8 text-white">
      <div className="container mx-auto py-8 px-6 md:px-[300px] flex flex-col md:flex-row md:justify-between text-sm md:text-md space-y-6 md:space-y-0 items-start">
        {/* Section 1 */}
        <div className="flex flex-col">
          <p className="font-bold">Featured Blogs</p>
          <p>Most Viewed</p>
          <p>Readers Choice</p>
        </div>

        {/* Section 2 */}
        <div className="flex flex-col">
          <p className="font-bold">Forum</p>
          <p>Support</p>
          <p>Recent Posts</p>
        </div>

        {/* Section 3 */}
        <div className="flex flex-col">
          <p className="font-bold">Privacy Policy</p>
          <p>About Us</p>
          <p>Terms & Conditions</p>
          <p>Terms of Service</p>
        </div>
      </div>

      {/* Image */}

      {/* Copyright */}
      <p className="text-center py-2 pb-6 text-sm">
        All rights reserved &copy; Blog Market {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
