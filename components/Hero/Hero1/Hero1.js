const Hero1 = () => {
  return (
    <div className='hero1 hero1--aligned-center'>
      <img
        className='hero1__bg'
        src='https://images.pexels.com/photos/6311320/pexels-photo-6311320.jpeg?auto=compress&cs=tinysrgb&w=1600'
      />
      <div className='hero1__content-container'>
        <div className='hero1__info'>
          <h1 className='hero1__title'>Dummy Title</h1>
          <p className='hero1__paragraph'>
            Fingerstache art party kickstarter street art, distillery yuccie hashtag poke jianbing beard skateboard twee gatekeep.
          </p>
          <a className='hero1__button' href='#'>
            View More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero1;
