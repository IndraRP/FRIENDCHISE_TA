import { Container, Row, Col } from "react-bootstrap";
import { Check1 } from "../data";


const Testimoni = () => {


  return (
    <div>
    <div className="Check_page">
      <Container>

        <Row>
          {Check1.map((Check)=>{
            return(
              <Col key={Check.id}>
                <div className="pb-2 ">
                  
                <div className="gambarcheck">
                <img src={Check.image} className='rounded-4 '/>

                <div className="d-block px-3">
                  
                <h3 className='pb-1 px-3 fw-bold pb-3 pt-2'> {Check.title} </h3>


                <div className="deskripcheck pt-4 rounded-4">
                <h6 className='pb-1 px-3 pt-1'> Nama Perusahaan : {Check.perusahaan} </h6>
                <h6 className='pb-1 px-3 pt-1'> Alamat : {Check.alamat} </h6>
                <h6 className='pb-1 px-3 pt-1'> No WhatsApp : {Check.noWA} </h6>
                <h6 className='pb-1 px-3 pt-1'> Email : {Check.email} </h6>
                <h6 className='pb-1 px-3 pt-1'> Web : {Check.alamatweb} </h6>
                <h6 className='pb-1 px-3 pt-1 fw-bold'> Harga : {Check.harga} </h6>
                <h6 className='pb-3 px-3 pt-1'> {Check.descript} </h6>
                 </div>

                 <div className='star px-3 pt-4'>
                  <button className="bintang rounded-4 border-0 pb-1 pt-1 px-3"><i className={Check.star1}></i> {Check.star}</button>
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