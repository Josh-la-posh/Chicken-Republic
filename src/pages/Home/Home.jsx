import './Home.css';

export default function Home() {
    return(
        <main>
            <section className="main-image">
                <img src="./images/main-image.jpeg" alt="" />
            </section>

            <section className="order-now">
                <h3>
                    ORDER NOW
                </h3>
                <div className="order-now-list">
                    <ul>
                        <li>
                            <img src="./images/like.png" />
                            <p>Everyday Affordable Value Meal</p>
                        </li>
                        <li>
                            <img src="./images/fried chicken.png" />
                            <p>Soulfully Spiced Fried Chicken</p>
                        </li>
                        <li>
                            <img src="./images/rotiserrie.png" />
                            <p>Delicious Rotesserie Chicken</p>
                        </li>
                        <li>
                            <img src="./images/grilled-chicken.png" />
                            <p>Flame Grilled Chicken</p>
                        </li>
                        <li>
                            <img src="./images/Burger.png" />
                        <p>Burger, Wraps & Chickwizz</p>
                        </li>
                        <li>
                            <img src="./images/tasty-sides.png" />
                            <p>Tasty Sides</p>
                        </li>
                        <li>
                            <img src="./images/ice-cream.png" />
                            <p>Sweet Treats & Beverages</p>
                        </li>
                    </ul>
                </div>
            </section>
        </main>
    )
}