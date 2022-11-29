const Hero2 = () => {
  return (
    <div className='hero2'>
      <div className='hero2__collection1'>
        <img
          className='hero2__bg'
          src='https://images.pexels.com/photos/1342609/pexels-photo-1342609.jpeg?auto=compress&cs=tinysrgb&w=1600'
        />
        <div className='hero2__content-container'>
          <div className='hero2__info'>
            <a className='hero2__button' href='#'>
              Men
            </a>
          </div>
        </div>
      </div>

      <div className='hero2__collection2'>
        <img
          className='hero2__bg'
          src='https://images.pexels.com/photos/8483753/pexels-photo-8483753.jpeg?auto=compress&cs=tinysrgb&w=1600'
        />
        <div className='hero2__content-container'>
          <div className='hero2__info'>
            <a className='hero2__button' href='#'>
              Women
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero2;
