import Link from "next/link";

export default () => (
  <div id="footer" className="footer-page">
    <div className="d-flex justify-content-center m-1 p-5">
      <Link href="/" prefetch>
        <a>Home</a>
      </Link>

      <Link href="#aboutUs" prefetch>
        <a>About</a>
      </Link>

      <Link href="#service" prefetch>
        <a>Services</a>
      </Link>

      <Link href="#customerSay" prefetch>
        <a>Projects</a>
      </Link>

      <Link href="/" prefetch>
        <a>Team</a>
      </Link>

      <Link href="/" prefetch>
        <a>Contact</a>
      </Link>
    </div>
    <div className="d-flex justify-content-center social-link">
      <a href="https://www.facebook.com/lolcmm/" target="_blank">
        <i className="fab fa-facebook-f facebook-bg" />
      </a>
      <a
        href="https://www.youtube.com/channel/UCogvzWsh4W2GaUPZEI89BLw"
        target="_blank"
      >
        <i className="fab fa-youtube youtube-bg" />
      </a>
    </div>
  </div>
);
