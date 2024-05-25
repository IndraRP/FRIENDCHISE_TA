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
                <Form.Label>Nama Franchise</Form.Label>
                <Form.Control type="text" placeholder="Masukkan nama franchise" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formPerusahaan">
                <Form.Label>Perusahaan</Form.Label>
                <Form.Control type="text" placeholder="Masukkan nama perusahaan" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formAlamat">
                <Form.Label>Alamat</Form.Label>
                <Form.Control type="text" placeholder="Masukkan alamat" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formNoWA">
                <Form.Label>No WhatsApp</Form.Label>
                <Form.Control type="tel" placeholder="Masukkan nomor WhatsApp" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Masukkan email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formAlamatWeb">
                <Form.Label>Alamat Web</Form.Label>
                <Form.Control type="url" placeholder="Masukkan alamat web" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formDeskripsi">
                <Form.Label>Deskripsi</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Masukkan deskripsi" />
              </Form.Group>

              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Unggah Banner</Form.Label>
                <Form.Control type="file" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formHarga">
                <Form.Label>Harga</Form.Label>
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
