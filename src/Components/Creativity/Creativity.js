<<<<<<< HEAD
import React, { Component } from 'react';
import './Creativity.css';

const App2 = () => {
  return (
    <div>
      <div className="AlignCenter">
        <h2 className="heading">Creativity Page</h2>
        <h4 className="subheading">Show your creative Dishes to the world</h4>
      </div>
      <main className="page-content">
        <div className="card">
          <div className="content">
            <h2 className="title">Cheese Pizza</h2>
            <p className="copy">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
            <button className="btn">View Recipe</button>
          </div>
        </div>
        <div className="card">
          <div className="content">
            <h2 className="title">French Fries</h2>
            <p className="copy">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
            <button className="btn">View Recipe</button>
          </div>
        </div>
        <div className="card">
          <div className="content">
            <h2 className="title">Burger</h2>
            <p className="copy">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
            <button className="btn">Book Recipe</button>
          </div>
        </div>
        <div className="card">
          <div className="content">
            <h2 className="title">Pasta</h2>
            <p className="copy">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
            <button className="btn">Book Recipe</button>
          </div>
        </div>
      </main>
    </div>
  );
};
=======
import React, { Component } from 'react'
import './Creativity.css'
import ReactCardCarousel from 'react-card-carousel';

export class Creativity extends Component {
    render() {
        return (
            
            <div>
                <div className="background">
                </div>
                <main className="page-content">
              <ReactCardCarousel className="mainDiv">
                    <div className="card card1">
                        <div className="content">
                            <h2 className="title">Cheese Pizza</h2>
                            <p className="copy">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                            <button className="bbtn">View Recipe</button>
                        </div>
                    </div>
                    <div className="card card2">
                        <div className="content">
                            <h2 className="title">French Fries</h2>
                            <p className="copy">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                            <button className="bbtn">View Recipe</button>
                        </div>
                    </div>
                    <div className="card card3">
                        <div className="content">
                            <h2 className="title">Burger</h2>
                            <p className="copy">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                            <button className="bbtn">Book Recipe</button>
                        </div>
                    </div>
                    <div className="card card4">
                        <div className="content">
                            <h2 className="title">Pasta</h2>
                            <p className="copy">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                            <button className="bbtn">Book Recipe</button>
                        </div>
                    </div>
                   </ReactCardCarousel>

                   <div className="AlignCenter">
        
                    <h4 className="subheading">Show your creative Dishes to the world!!!</h4>
                </div>
                </main>

            </div>
        
            
        )
    }
}
>>>>>>> 204837caca1ae6a8d774ebc3937fcbd88952ce50

export default App2;
