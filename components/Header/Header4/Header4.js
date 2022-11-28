import AnnounceBar from '../../AnounceBar/AnnounceBar';

const Header4 = () => {
  return (
    <>
      <AnnounceBar />
      <header className='header header4'>
        <div className='header4__logo'>
          <a href='/link'>Company</a>
        </div>

        <div className='header4__collections-nav'>
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
    </>
  );
};

export default Header4;
