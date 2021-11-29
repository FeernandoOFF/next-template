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

      <div className="hero pt-10 lg:pt-16 relative">
        <Carousel autoplay className="relative">
          <div className="max-h-[500px]">
            <img
              src="https://images.unsplash.com/photo-1603201667230-bd139210db18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2088&q=80"
              className="w-full  object-top"
            />
          </div>
          <div className="w-[200px] h-[500px] bg-blue-400">2</div>
        </Carousel>
        {/* { // TODO MAKE COMPONENT} */}
        <div
          className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
          style={{ transform: 'translateZ(0)' }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-background fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
      </div>

      <main>
        <Row
          className="w-1/3 mx-auto my-24 items-center"
          justify="space-between"
        >
          <Col span={8}>
            <div className="w-[120px] h-[120px] bg-red-500 md:bg-blue-500 rounded-full"></div>
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
