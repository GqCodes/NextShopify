const Header1 = () => {
  return (
    <header className='header header1'>
      <div className='header1__collections-nav'>
        <a href='/link' className='header1__collection-link'>
          Link Top
          <i className='fas fa-chevron-down'></i>
          <ul className='collection-link__sub-link'>
            <li>
              <a href='#'>Link</a>
            </li>
            <li>
              <a href='#'>Link</a>
            </li>
            <li>
              <a href='#'>Link</a>
            </li>
            <li>
              <a href='#'>Link</a>
            </li>
          </ul>
        </a>

        <a href='/link'>Link</a>
        <a href='/link'>Link</a>
      </div>
      <div className='header1__logo'>
        <a href='/link'>Company</a>
      </div>
      <div className='header1__collections-nav'>
        <a href='/link'>Link</a>
        <a href='/link'>Link</a>
        <a href='/link'>Link</a>
        <a href='/cart'>
          <i className='fas fa-cart-shopping'></i>
        </a>
        <a href='/user'>
          <i className='fas fa-user'></i>
        </a>
      </div>
    </header>
  );
};

export default Header1;
