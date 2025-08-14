import './homePage.css'

function Imagecard() {
    return(
        <div className="card">
            <img className="cardImage" src="/src/assets/goat.JPG"></img>
            <h2 clasName="cardTitle">Go Farther Together</h2>
            <p className="cardText">Plan unforgettable adventures effortlessly with the people who matter most.
                <ul>
                    <li>Chat in Real Time – Coordinate instantly without switching apps.</li>
                    <li>Vote & Survey – Let the group decide on the details, fast.</li>
                    <li>Visual Packing Lists – See at a glance who’s bringing what.</li>
                </ul>
            </p>
        </div>
    );
}

export default Imagecard