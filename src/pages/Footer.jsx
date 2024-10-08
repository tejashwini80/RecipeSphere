function Footer(){
  return(
    <footer className="mx-auto w-full max-w-container px-4 sm:px-6 lg:px-8">
    <div className="border-t border-slate-900/5 py-10">
    
    <footer className="flex flex-col space-y-10 justify-center m-10">

<nav className="flex justify-center flex-wrap gap-6 text-gray-500 font-medium">
    <a className="hover:text-gray-900" href="#">Home</a>
    <a className="hover:text-gray-900" href="#">About</a>
    <a className="hover:text-gray-900" href="#">Services</a>
    <a className="hover:text-gray-900" href="#">Media</a>
    <a className="hover:text-gray-900" href="#">Gallery</a>
    <a className="hover:text-gray-900" href="#">Contact</a>
</nav>

<div className="flex justify-center space-x-5">
    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <img src="https://img.icons8.com/fluent/30/000000/facebook-new.png" />
    </a>
    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <img src="https://img.icons8.com/fluent/30/000000/linkedin-2.png" />
    </a>
    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <img src="https://img.icons8.com/fluent/30/000000/instagram-new.png" />
    </a>
    <a href="https://messenger.com" target="_blank" rel="noopener noreferrer">
        <img src="https://img.icons8.com/fluent/30/000000/facebook-messenger--v2.png" />
    </a>
    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <img src="https://img.icons8.com/fluent/30/000000/twitter.png" />
    </a>
</div>
<p className="text-center text-gray-700 font-medium">&copy; 2022 Company Ltd. All rights reservered.</p>
</footer>


       
        <div className="mt-8 flex items-center justify-center space-x-4 text-sm font-semibold leading-6 text-slate-700"><a
                href="/">Privacy policy</a>
            <div className="h-4 w-px bg-slate-500/20"></div><a href="/">Changelog</a>
        </div>
    </div>
</footer>
  );
}

export default Footer;