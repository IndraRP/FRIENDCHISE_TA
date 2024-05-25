import {Container, Row, Col} from 'react-bootstrap';
import HeroImage from'../assets/img/hero.png'

import MyNavbar from "../Components/Navbar"
import {useNavigate} from "react-router-dom";


const Home = () => {
  let navigate = useNavigate();



  return (
    <div>
<MyNavbar/>
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
<button className='btn btn-outline-warning rounded-2' onClick={()=> navigate("/DaftarFranchise")} >Daftar Franchise</button>


        </Col>
        <Col lg="6" className='pt-lg-4 pt-8'>
        <img src={HeroImage} alt="hero-img"/>
        </Col>
    </Row>
 </Container>
        </header>



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
        </div>
        
  )
}


export default Home;