import './product.css';

export default function Product() {
    return(
        <div className="wrapper">
            <img className='top-img' src="./images/topImage.jpg" alt="" />
            {/* <div className="order-now"></div> */}
            <div className="sec-1">
                <div className="bar">
                    <img className='img-icon' src="./images/like.png" alt="" />
                    <h2>Everyday Affordable Value Meal</h2>
                </div>
                <div className="everyday-imgs images">
                    <img className="imgs everyday" src="./images/everyday1.jpg" alt="" />
                    <img className="imgs everyday" src="./images/everyday2.jpg" alt="" />
                    <img className="imgs everyday" src="./images/everyday3.jpg" alt="" />
                </div>
            </div>
            <div className="sec-2">
                <div className="bar">
                    <img className='img-icon' src="./images/fried-chicken.png" alt="" />
                    <h2>Soulfully Spiced Fried Chicken</h2>
                </div>
                <div className="fried-imgs images">
                    <img className="imgs fried" src="./images/fried1.jpg" alt="" />
                    <img className="imgs fried" src="./images/fried2.jpg" alt="" />
                    <img className="imgs fried" src="./images/fried3.jpg" alt="" />
                </div>
            </div>
            <div className="sec-3">
                <div className="bar">
                    <img className='img-icon' src="./images/rotiserrie.png" alt="" />
                    <h2>Delicious Rotisserie Chicken</h2>
                </div>
                <div className="rotisserie-imgs images">
                    <img className="imgs rotisserie" src="./images/rotisserie1.jpg" alt="" />
                    <img className="imgs rotisserie" src="./images/rotisserie2.jpg" alt="" />
                    <img className="imgs rotisserie" src="./images/rotisserie3.jpg" alt="" />
                </div>
            </div>
            <div className="sec-4">
                <div className="bar">
                    <img className='img-icon' src="./images/grilled-chicken.png" alt="" />
                    <h2>Flame Grilled Chicken</h2>
                </div>
                <div className="grilled-imgs images">
                    <img className="imgs grilled" src="./images/grilled1.jpg" alt="" />
                    <img className="imgs grilled" src="./images/grilled2.jpg" alt="" />
                    <img className="imgs grilled" src="./images/grilled3.jpg" alt="" />
                </div>
            </div>
            <div className="sec-4">
                <div className="bar">
                    <img className='img-icon' src="./images/Burger.png" alt="" />
                    <h2>Burger, Wraps & Chickwizz</h2>
                </div>
                <div className="burger-imgs images">
                    <img className="imgs burger" src="./images/burger1.jpg" alt="" />
                    <img className="imgs burger" src="./images/burger2.jpg" alt="" />
                    <img className="imgs burger" src="./images/burger3.jpg" alt="" />
                </div>
            </div>
            <div className="sec-5">
                <div className="bar">
                    <img className='img-icon' src="./images/tasty-sides.png" alt="" />
                    <h2>Tasty Sides</h2>
                </div>
                <div className="tasty-imgs images">
                    <img className="imgs tasty" src="./images/tastysides1.jpg" alt="" />
                    <img className="imgs tasty" src="./images/tastysides2.jpg" alt="" />
                    <img className="imgs tasty" src="./images/tastysides3.jpg" alt="" />
                </div>
            </div>
            <div className="sec-6">
                <div className="bar">
                    <img className='img-icon' src="./images/ice-cream.png" alt="" />
                    <h2>Sweet Treats & Beverages</h2>
                </div>
                <div className="sweet-imgs images">
                    <img className="imgs sweet" src="./images/sweet1.jpg" alt="" />
                    <img className="imgs sweet" src="./images/sweet2.jpg" alt="" />
                </div>
            </div>
        </div>
    )
}