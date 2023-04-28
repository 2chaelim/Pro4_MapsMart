function Footer() {
  return (
    <div className="ft-wrap">
      <footer className="ft mw">
        <img src={`${process.env.PUBLIC_URL}/img/logo_S.png`} alt="logo" />
        <div className="ft-info">
          <p>
            <span>E-mail</span>charry8540@gmail.com
          </p>
          <p>
            <span>Tel</span>042-123-4567
          </p>
          <p>
            <span>Address</span>대전광역시 서구 대덕대로 182
          </p>
        </div>
        <div className="ft-icon">
          <a href="#">
            <i class="fa-solid fa-blog"></i>
          </a>
          <a href="#">
            <i class="fa-brands fa-facebook"></i>
          </a>
          <a href="#">
            <i class="fa-brands fa-instagram"></i>
          </a>
          <a href="#">
            <i class="fa-brands fa-twitter"></i>
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
