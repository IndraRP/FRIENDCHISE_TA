import { Container, Row, Col } from "react-bootstrap";
import { pageFranchise } from "../data";


const franchise = () => {

  return (

    
    <div className="franchise_page">
      <Container>
        <Row>
          <Col>
            <h1 className="fw-bold text-center">List Franchise</h1>
            <p className="text-center pb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, quaerat. Eos, non. Numquam, corrupti repudiandae?</p>
          </Col>
        </Row>

        <Row>
          {pageFranchise.map((franchise)=>{
            return(
              <Col key={franchise.id} className='rounded-5 shadow'>
                <img src={franchise.image} alt='unsplash.com' className='w-100 mb-3 rounded-4'/>
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
            )
          })}
        </Row>

      </Container>
    </div>

    
    
  )
}

export default franchise