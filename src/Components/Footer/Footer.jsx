const Footer = () => {
    return (
        <section className="my-20 flex flex-col text-center">
            <h2 className="text-3xl font-bold">ArtiCret Gadgets</h2>
            <p className="my-4">Leading the way in cutting-edge technology and innovation.</p>
            <footer className="footer text-black p-10 max-w-5xl mx-auto flex flex-col md:flex-row justify-between">
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
        </section>
    );
};

export default Footer;