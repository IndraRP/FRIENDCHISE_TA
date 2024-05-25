import { Container, Row, Col } from "react-bootstrap";
import { rekomendasi } from "../data";

import MyNavbar from "../Components/Navbar"

const Testimoni = () => {


  return (
    <div>
      <MyNavbar/>
    <div className="rekomendasi_page">
      <Container>
        <Row>
          <Col>
            <h1>Rekomendasi Franchise Terpopuler</h1>
          </Col>
        </Row>

        <Row>
          {rekomendasi.map((rekom)=>{
            return(
              <Col key={rekom.id}>
                <div className="pb-5 ">
                  
                <div className="oyy">
                <img src={rekom.image} className='rounded-4 '/>

                <div className="d-block">
                <h4 className='pb-1 px-3 pt-4'> {rekom.title} </h4>
                <h5 className='pb-3 px-3 pt-1'> {rekom.descript} </h5>

                <div className='star px-3 pb-3'>
                  <button className="bintang rounded-4 border-0 pb-1 pt-1 px-3"><i className={rekom.star1}></i> {rekom.star}</button>
                  <button className="centang ms-3 rounded-4 text-primary border-0 pb-1 pt-1 px-3" > <i className="bi bi-patch-check-fill" style={{ color: 'blue' }}></i> Favorite</button>
                </div>
                 </div>



                </div>
                </div>
              </Col>
            )
          })}
        </Row>

      </Container>
    </div>
    </div>
  )
}

export default Testimoni