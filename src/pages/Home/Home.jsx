import './Home.css';

export default function Home() {
    return(
        <main>

            <img className="main-image" src="./images/homeImage.jpg" alt="" />

            <section className="order-now">
                <h1> ORDER NOW </h1>
                <div className="order-now-list">
                    <ul>
                        <li>
                            <img src="./images/like.png" alt=''/>
                            <p>Everyday Affordable Value Meal</p>
                        </li>
                        <li>
                            <img src="./images/fried-chicken.png" alt=''/>
                            <p>Soulfully Spiced Fried Chicken</p>
                        </li>
                        <li>
                            <img src="./images/rotiserrie.png" alt=''/>
                            <p>Delicious Rotesserie Chicken</p>
                        </li>
                        <li>
                            <img src="./images/grilled-chicken.png" alt=''/>
                            <p>Flame Grilled Chicken</p>
                        </li>
                        <li>
                            <img src="./images/Burger.png" alt=''/>
                        <p>Burger, Wraps & Chickwizz</p>
                        </li>
                        <li>
                            <img src="./images/tasty-sides.png" alt=''/>
                            <p>Tasty Sides</p>
                        </li>
                        <li>
                            <img src="./images/ice-cream.png" alt=''/>
                            <p>Sweet Treats & Beverages</p>
                        </li>
                    </ul>
                </div>
            </section>
        </main>
    )
}