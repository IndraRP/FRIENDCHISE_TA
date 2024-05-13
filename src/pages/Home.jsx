import {Container, Row, Col} from 'react-bootstrap';
import HeroImage from'../assets/img/hero.png'

import {listfranchise} from '../data/index';
import {useNavigate} from "react-router-dom";


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const Home = () => {

  let navigate = useNavigate();
  return (
    <div className="homepage">
        <header className="w-100 min-vh-100 d-flex align-items-center pt-lg-5">
 <Container>
    <Row className='header-box d-flex align-items-center'>
        <Col lg='6'>
        <h1>  
            Hallo Indra<br/>
            <span>Start  Your Bussines <br/></span>
            Here Now!!!</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quae excepturi ex amet incidunt laudantium!</p>

<button className='btn btn-warning rounded-2 me-2' onClick={()=> navigate("/franchise")}>Lihat Franchise</button>
<button className='btn btn-outline-warning rounded-2'>Daftar Franchise</button>


        </Col>
        <Col lg="6" className='pt-lg-4 pt-8'>
        <img src={HeroImage} alt="hero-img"/>
        </Col>
    </Row>
 </Container>











 

        </header>
        <div className='kelas w-100 min-vh-100'>
        <Container>
          <Row>
            <Col>
              <h1 className='text-center fw-bold'>Franchise</h1>
              <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae soluta sed qui cumque, accusantium voluptatem?</p>
            
            </Col>    
          </Row>

<Row>
          {listfranchise.map((franchise)=>{
            return(
              <Col key={franchise.id} className='rounded-5 shadow'>
                <img src={franchise.image} className='w-100 mb-3 rounded-4'/>
                <div className='star mb-4 px-3'>
                  <i className={franchise.star1}></i>
                  <i className={franchise.star2}></i>
                  <i className={franchise.star3}></i>
                  <i className={franchise.star4}></i>
                  <i className={franchise.star5}></i>
                </div>
    <h5 className='mb-5 px-3'> {franchise.title} </h5>



    <div className='ket d-flex justify-content-between align-items-center px-3 pb-3 pt-2'>
      <button className='btn btn-danger rounded-3 mb-2'>{franchise.buy}</button>
    </div>


              </Col>
            )})}
          </Row>



          <Row>
            <Col className='text-center'>
             <button className='btn btn-success rounded-5  btn-lg' onClick={()=> navigate("/franchise")}>Lihat Semua Franchise
             <i className='fa-solid fa-chevron-right ms-3'></i>
             </button>
            </Col>
          </Row>
        </Container>
        </div>







        <div className='bawah pt-2'>
          <Container>
            <Row>
              <Col >
              <h1 className='pt-5'>  
              <span className='satu fw-bold'>WHY </span>
            <span className='dua'>Choose Us?</span></h1>
          <h3 className="fw-bold pt-5">Trusted</h3>
          <p className="desc">It contains franchise partner companies that are trusted and have a guaranteed market.</p>

          <Col>
          <h3 className="fw-bold pt-5">Interesting</h3>
          <p className="desc">Contains various types of franchises that are very interesting and easy to find customers.</p>
          </Col>
          </Col>

<Col className='pt-5 pb-5'>
<Col className='pt-5'>
          <h3 className="fw-bold pt-5">Easy</h3>
          <p className="desc">The process is easy and you can immediately start a small business with affordable capital.</p>
          </Col>

          <Col className='pb-5'>
          <h3 className="fw-bold pt-5">Fast</h3>
          <p className="desc pb-5">fast process and very attentive to customer service, our partners are committed to providing the best service.</p>
          </Col>
</Col>          

            </Row>
          </Container>
        </div>

        </div>

        
  )
}


export default Home;