import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const App = () => {
  return (
    <Container className="mt-5 mb-5">
      <h2 className="mb-4 text-center fw-bold">Input Data Anda</h2>
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <div className="p-4 shadow">

            <Form>
              <Form.Group className="mb-3" controlId="formTitle">
                <Form.Label style={{ fontWeight: 'bold' }}>Nama Franchise</Form.Label>
                <Form.Control type="text" placeholder="Masukkan nama franchise" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formPerusahaan">
                <Form.Label style={{ fontWeight: 'bold' }}>Perusahaan</Form.Label>
                <Form.Control type="text" placeholder="Masukkan nama perusahaan" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formAlamat">
                <Form.Label style={{ fontWeight: 'bold' }}>Alamat</Form.Label>
                <Form.Control type="text" placeholder="Masukkan alamat" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formNoWA">
                <Form.Label style={{ fontWeight: 'bold' }}>No WhatsApp</Form.Label>
                <Form.Control type="tel" placeholder="Masukkan nomor WhatsApp" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label style={{ fontWeight: 'bold' }}>Email</Form.Label>
                <Form.Control type="email" placeholder="Masukkan email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formAlamatWeb">
                <Form.Label style={{ fontWeight: 'bold' }}>Alamat Web</Form.Label>
                <Form.Control type="url" placeholder="Masukkan alamat web" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formDeskripsi">
                <Form.Label style={{ fontWeight: 'bold' }}>Deskripsi</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Masukkan deskripsi" />
              </Form.Group>

              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label style={{ fontWeight: 'bold' }}>Unggah Banner</Form.Label>
                <Form.Control type="file" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formHarga">
                <Form.Label style={{ fontWeight: 'bold' }}>Harga</Form.Label>
                <Form.Control type="number" placeholder="Masukkan harga" />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
