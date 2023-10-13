function Footer() {

    const today = new Date();

    return(<footer className="bg-dark text-light p-r text-center">
    <div>
        <p><small> {`Copyright © ZeljkaBaric ${today.getMonth()}/${today.getFullYear()}`}</small></p>
    </div>
    </footer>
   )}

export default Footer;