import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter className='text-center text-lg-start' style={{ backgroundColor: '#2d1950', color: '#fff', fontSize: '1rem' }}>
      <MDBContainer className='p-4'>
        <section className='mb-4 d-flex justify-content-center'>
          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='twitter' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='google' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='instagram' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='github' />
          </MDBBtn>
        </section>

        <section className=''>
          <form action=''>
            <MDBRow className='d-flex justify-content-center'>
              <MDBCol size="auto">
                <p className='pt-2' style={{ color: '#fff', fontSize: '1rem' }}>
                  <strong>Sign up for our newsletter</strong>
                </p>
              </MDBCol>

              <MDBCol md='5' start>
                <MDBInput contrast type='email' label='Email address' className='mb-4' />
              </MDBCol>

              <MDBCol size="auto">
                <MDBBtn outline color='light' type='submit' className='mb-4'>
                  Subscribe
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </form>
        </section>

        <section className=''>
          <MDBRow>
            <MDBCol lg='3' md='6' className='mb-4 mb-md-0' style={{ textAlign: 'left' }}>
              <h5 style={{ color: '#fff' }}>Home</h5>
              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='footer-link'>
                    Platform
                  </a>
                </li>
                <li>
                  <a href='#!' className='footer-link'>
                    Company
                  </a>
                </li>
                <li>
                  <a href='#!' className='footer-link'>
                    Careers
                  </a>
                </li>
                <li>
                  <a href='#!' className='footer-link'>
                    Contact
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0' style={{ textAlign: 'left' }}>
              <h5 style={{ color: '#fff' }}>Solutions</h5>
              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='footer-link'>
                    Usage-based Insurance
                  </a>
                </li>
                <li>
                  <a href='#!' className='footer-link'>
                    Claims Automation
                  </a>
                </li>
                <li>
                  <a href='#!' className='footer-link'>
                    Insurance Qualified Leads
                  </a>
                </li>
                <li>
                  <a href='#!' className='footer-link'>
                    Advance Risk Modeling
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0' style={{ textAlign: 'left' }}>
              <h5 style={{ color: '#fff' }}>Industries</h5>
              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='footer-link'>
                    Auto Insurance
                  </a>
                </li>
                <li>
                  <a href='#!' className='footer-link'>
                    Automotive OEMs
                  </a>
                </li>
                <li>
                  <a href='#!' className='footer-link'>
                    Mobile Network Operators
                  </a>
                </li>
                <li>
                  <a href='#!' className='footer-link'>
                    Fleet Risk Management
                  </a>
                </li>
                <li>
                  <a href='#!' className='footer-link'>
                    Consumer Apps
                  </a>
                </li>
                <li>
                  <a href='#!' className='footer-link'>
                    Commercial Insurance
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0' style={{ textAlign: 'left' }}>
              <h5 style={{ color: '#fff' }}>Resources</h5>
              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='footer-link'>
                    Blog
                  </a>
                </li>
                <li>
                  <a href='#!' className='footer-link'>
                    Tech Blog
                  </a>
                </li>
                <li>
                  <a href='#!' className='footer-link'>
                    Data Studies
                  </a>
                </li>
                <li>
                  <a href='#!' className='footer-link'>
                    Case Studies
                  </a>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </section>

        {/* Horizontal Line */}
        <hr style={{ borderTop: '1px solid #fff' }} />

        {/* Right-aligned footer links */}
        <div className='d-flex justify-content-end' style={{ color: '#fff', fontSize: '0.9rem' }}>
          <span style={{ margin: '0 10px' }}>|</span>
          <a href='#!' className='text-white footer-policy-link' style={{ textDecoration: 'underline', marginRight: '10px' }}>Privacy Policy</a>
          <span style={{ margin: '0 10px' }}>|</span>
          <a href='#!' className='text-white footer-policy-link' style={{ textDecoration: 'underline', marginRight: '10px' }}>Terms of Service</a>
          <span style={{ margin: '0 10px' }}>|</span>
          <a href='#!' className='text-white footer-policy-link' style={{ textDecoration: 'underline', marginRight: '10px' }}>Cookie Policy</a>
          <span style={{ margin: '0 10px' }}>|</span>
          <a href='#!' className='text-white footer-policy-link' style={{ textDecoration: 'underline', marginRight: '10px' }}>Cookie Settings</a>
          <span style={{ margin: '0 10px' }}>|</span>
          <a href='#!' className='text-white footer-policy-link' style={{ textDecoration: 'underline', marginRight: '10px' }}>Purchase Policy</a>
          <span style={{ margin: '0 10px' }}>|</span>
          <a href='#!' className='text-white footer-policy-link' style={{ textDecoration: 'underline' }}>Return Policy</a>
          <span style={{ margin: '0 10px' }}>|</span>
        </div>


      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: '#2d1950', color: '#fff', fontSize: '1.2rem' }}>
        © 2024 @
        <a className='text-white' href='https://mdbootstrap.com/'>
          All Rights Resevered
        </a>
      </div>
    </MDBFooter>
  );
}
