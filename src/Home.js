import React from 'react';
import Product from "./Product";
import "./Home.css";

function Home() {
    return (
        <div className="home">
            <img className="home__image"
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
            alt=""/>
            <div className="home__row">
            <Product
            id="123345"
            title="Asus ZenBook Pro Duo UX581 15.6” 4K UHD NanoEdge Bezel Touch, Intel Core i9-9980HK, 32GB RAM, 1TB PCIe SSD, GeForce RTX 2060, Innovative Screenpad Plus, Windows 10 Pro - UX581GV-XB94T, Celestial Blue"
            price={2871.16}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/91RGYokL4RL._AC_SL1500_.jpg"
            />
            <Product
            id="123365"
            title="OnePlus 8 Pro Ultramarine Blue, 5G Unlocked Android Smartphone U.S Version, 12GB RAM+256GB Storage, 120Hz Fluid Display,Quad Camera, Wireless Charge, with Alexa Built-in"
            price={998}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/410mmBW-AYL._AC_.jpg"
            />
            </div>
            <div className="home__row">
            <Product
            id="1233487"
            title="PowerLocus Bluetooth Over-Ear Headphones, Wireless Stereo Foldable Headphones Wireless and Wired Headsets with Built-in Mic, Micro SD/TF, FM for iPhone/Samsung/iPad/PC"
            price={23.45}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/61AoRws1JBL._AC_SL1000_.jpg"
            />
            <Product
            id="1233005"
            title="Xiaomi QTEJ02JY Original MI Circle Iron Hybrid Earphone Headphone Headset Earbud in-Ear Remote & Mic-Silver Pro HD Version"
            price={38.70}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/51CooZDQPaL._AC_SL1024_.jpg"
            />
            <Product
            id="1233325"
            title="Nikon D3500 24.2MP DSLR Camera w/AF-P 18-55mm VR Lens & 70-300mm Dual Zoom Lens (1588B) – (Renewed)"
            price={499}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/519J22ndKCL._AC_.jpg"
            />
            </div>
            <div className="home__row">
            <Product
            id="123985"
            title="HP VH240a 23.8-inch Full HD 1080p IPS LED Monitor with Built-in Speakers and VESA Mounting, Rotating Portrait & Landscape, Tilt, and HDMI & VGA Ports (1KL30AA) - Black"
            price={169.98}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71trhuzbhML._AC_SL1500_.jpg"
            />
            </div>

        </div>

    );
}

export default Home;
