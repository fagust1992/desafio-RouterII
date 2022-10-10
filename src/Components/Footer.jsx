const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="Happy-cake">
          <h2 style={{ marginLeft: "7px" }}>
            Master Pokemon
            <img
              src="https://cdn-icons-png.flaticon.com/512/2094/2094510.png"
              alt=""
              style={{
                width: "20px",
                height: "20px",
                marginLeft: "5px",
              }}
            />
          </h2>
        </div>
        <div className="autor ">
          <h2 style={{ marginRight: "7px" }}>Francisco August</h2>
          <div className="d-flex justify-content-center gap-2">
            <a href="">
              <i class="fa-brands fa-instagram"></i>
            </a>
            <a href="">
              <i class="fa-brands fa-github"></i>
            </a>
            <a href="">
              <i class="fa-solid fa-phone"></i>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
