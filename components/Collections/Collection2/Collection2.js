const Collection1 = () => {
  return (
    <div className='collection collection1'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>
            <div className='collection1__collection-item'>
              <div className='collection1__product-img'>
                <div className='collection1__heart'>
                  <i className='far fa-heart'></i>
                </div>
                <img src='https://www.pngall.com/wp-content/uploads/2/Black-Sneakers.png' alt='' />
              </div>
              <div className='collection1__product-info'>
                <div className='collection1__product-details'>
                  <span className='collection1__product-title'>Sneakers</span>
                  <span className='collection1__product-price'>$250</span>
                </div>
                <div className='collection1__colors'>
                  <div className='collection1__color collection1__color--blue'></div>
                  <div className='collection1__color collection1__color--black'></div>
                </div>
              </div>
            </div>
          </div>

          <div className='col-md-6'>
            <div className='collection1__collection-item'>
              <div className='collection1__product-img'>
                <div className='collection1__heart'>
                  <i className='far fa-heart'></i>
                </div>
                <img src='https://i.pinimg.com/originals/51/2b/4b/512b4b870390fac58da5206e88d228d6.png' alt='' />
              </div>
              <div className='collection1__product-info'>
                <div className='collection1__product-details'>
                  <span className='collection1__product-title'>Sneakers</span>
                  <span className='collection1__product-price'>$250</span>
                </div>
                <div className='collection1__colors'>
                  <div className='collection1__color collection1__color--blue'></div>
                  <div className='collection1__color collection1__color--black'></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection1;
