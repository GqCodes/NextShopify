const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-9'>
            <div className='row'>
              <div className='col-md-2'>
                <div className='footer__links'>
                  <span className='footer__column-title'>Get Help</span>
                  <a href='#' className='footer__link'>
                    Link
                  </a>
                  <a href='#' className='footer__link'>
                    Link
                  </a>
                  <a href='#' className='footer__link'>
                    Link
                  </a>
                </div>
              </div>

              <div className='col-md-2'>
                <div className='footer__links'>
                  <span className='footer__column-title'>Get Help</span>
                  <a href='#' className='footer__link'>
                    Link
                  </a>
                  <a href='#' className='footer__link'>
                    Link
                  </a>
                  <a href='#' className='footer__link'>
                    Link
                  </a>
                </div>
              </div>

              <div className='col-md-2'>
                <div className='footer__links'>
                  <span className='footer__column-title'>Get Help</span>
                  <a href='#' className='footer__link'>
                    Link
                  </a>
                  <a href='#' className='footer__link'>
                    Link
                  </a>
                  <a href='#' className='footer__link'>
                    Link
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className='col-md-3'>
            <div className='footer__extra'>
              <span className='footer__column-title'>Sign Up For Newsletter</span>
              <input type='text' name='email_newsletter' placeholder='youremail@company.com' className='footer__input' />
              <p>
                Fashion axe Brooklyn cornhole vexillologist kale chips poutine. Sus vaporware af next level XOXO food truck. Put a bird on
                it meggings bicycle rights, occupy typewriter palo santo actually listicle man braid viral mumblecore. Fashion axe gentrify
                disrupt man braid, banh mi kogi jianbing paleo everyday carry. Fingerstache portland celiac, cronut woke gastropub biodiesel
                photo booth man braid cliche tousled selfies cloud bread synth.
              </p>
              <div className='footer__social-icons'>
                <a href='#' className='footer__social-link'>
                  <i className='fab fa-facebook'></i>
                </a>
                <a href='#' className='footer__social-link'>
                  <i className='fab fa-twitter'></i>
                </a>
                <a href='#' className='footer__social-link'>
                  <i className='fab fa-instagram'></i>
                </a>
                <a href='#' className='footer__social-link'>
                  <i className='fab fa-youtube'></i>
                </a>
                <a href='#' className='footer__social-link'>
                  <i className='fab fa-tiktok'></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className='row'>
          <div className='col-md-12'>
            <div className='footer__bottom'>
              <div className='footer__copyright'>
                <p>&copy; 2022 Massive Devz, LLC All Rights Reserved.</p>
              </div>

              <div className='footer__extra-links'>
                <a href='#'>Link</a>
                <a href='#'>Link</a>
                <a href='#'>Link</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
