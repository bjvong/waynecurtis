import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
//   MDBInput,
  MDBCol,
  MDBRow
//   MDBBtn
} from 'mdb-react-ui-kit';

function FooterNav() {
  return (
    <MDBFooter bgColor='white' className='text-center text-lg-start text-muted'>
      <MDBContainer className='text-center text-md-start mt-5'>
        <MDBRow className='mt-3'>
          <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
            <h6 className='text-uppercase fw-bold mb-4'>
              <MDBIcon color='secondary' icon='gem' className='me-3' />
              Wayne Curtis
            </h6>
            <p>
              Information / intro blurb inserted here. Lorem ipsum dolor sit amet, consecutor adipisicing elit gihnt wersto devloeip
            </p>
          </MDBCol>

          <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
            <h6 className='text-uppercase fw-bold mb-4'>Services</h6>
            <p>
              <a href='#!' className='text-reset'>
                Repairs
              </a>
            </p>
            <p>
              <a href='#!' className='text-reset'>
                Landscape
              </a>
            </p>
            <p>
              <a href='#!' className='text-reset'>
                Interior
              </a>
            </p>
            <p>
              <a href='#!' className='text-reset'>
                Exterior
              </a>
            </p>
          </MDBCol>

          <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
            <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
            <p>
              <a href='#!' className='text-reset'>
                Pricing
              </a>
            </p>
            <p>
              <a href='#!' className='text-reset'>
                Pay Invoice
              </a>
            </p>
            <p>
              <a href='#!' className='text-reset'>
                Lookup Invoice
              </a>
            </p>
            <p>
              <a href='#!' className='text-reset'>
                Help
              </a>
            </p>
          </MDBCol>

          <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
            <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
            <p>
              <MDBIcon color='secondary' icon='home' className='me-0' />
              Akron, OH 44314, US
            </p>
            <p>
              <MDBIcon color='secondary' icon='envelope' className='me-0' />
              info@waynecurtisllc.com
            </p>
            <p>
              <MDBIcon color='secondary' icon='phone' className='me-0' /> + 01 234 567 88
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>


    <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
      ©&nbsp;
      <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
        Wayne Curtis, LLC
      </a>
    </div>
  </MDBFooter>
  );
}

export default FooterNav;