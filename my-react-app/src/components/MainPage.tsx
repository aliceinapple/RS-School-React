import React from 'react';
import Card from './Card';

class MainPage extends React.Component {
  render() {
    return (
      <div className="main_page">
        <Card
          image="https://embassy.by/assets/images/products/56/medium/rul.jpg"
          name="Meringue roll"
          weight={1170}
          portion="8-12 portions"
          price={55}
        />

        <Card
          image="https://embassy.by/assets/images/products/37/medium/pirogi-5189-2.jpg"
          name="Nut tart"
          weight={500}
          portion="4-5 portions"
          price={40}
        />

        <Card
          image="https://embassy.by/assets/images/products/57/medium/brauni.jpg"
          name="Raspberry brownie"
          weight={880}
          portion="9-10 portions"
          price={45}
        />

        <Card
          image="https://embassy.by/assets/images/products/77/medium/dizayn-bez-nazvaniya.jpg"
          name="Crispy Lime"
          weight={2900}
          portion="12-14 portions"
          price={115}
        />

        <Card
          image="https://embassy.by/assets/images/products/47/medium/tiramisu-1.jpg"
          name="Tiramisu"
          weight={150}
          portion="1 portion"
          price={10}
        />

        <Card
          image="https://embassy.by/assets/images/products/45/medium/moh-1.jpg"
          name="Ruby moss"
          weight={250}
          portion="10 portions"
          price={60}
        />
      </div>
    );
  }
}

export default MainPage;
