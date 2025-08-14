import './homePage.css'
import Imagecard from'./Imagecard.jsx'
import Loginprompt from './Loginprompt.jsx';

function Body() {
    return(
        <body className="background">
        <div className="layout">
        <Imagecard/>
        <Loginprompt/>
        </div>
        </body>
    );
}

export default Body

