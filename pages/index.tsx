import type { NextPage } from 'next';

import { Carousel, Col, Drawer, Dropdown, Menu, Row } from 'antd';
import { Header } from '@components/Header';
import { Seo } from '@components/Seo';

// TODO: ADD AN APP PROVIDER WITH THE SEO DEFAULT DATA AND NAME
//TODO : DEFINE THE SEO DATA
//TODO : DEFINE THE BUTTONS STYLES

const Home: NextPage = () => {
  return (
    <>
      <Seo title="Page name" />

      <Header></Header>

      <Carousel autoplay>
        <div className="w-[200px] h-[400px] bg-red-400">1</div>
        <div className="w-[200px] h-[400px] bg-blue-400">1</div>
      </Carousel>

      <main>
        <Row
          className="w-1/3 mx-auto my-24 items-center"
          justify="space-between"
        >
          <Col span={8}>
            <div className="w-[120px] h-[120px] bg-blue-500 rounded-full"></div>
          </Col>
          <Col span={14}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              delectus excepturi aliquam necessitatibus ad quaerat ab nam in,
              maxime aperiam iusto eveniet obcaecati et illo iste explicabo rem
              fugit ratione.
            </p>
          </Col>
        </Row>
      </main>
    </>
  );
};

export default Home;
