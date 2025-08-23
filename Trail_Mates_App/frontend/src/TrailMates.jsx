// react router, makes it easier
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import SignUp from './components/sign-up.component.jsx'
import Login from './components/login.component.jsx'
import Dashboard from './components/dashboard.component.jsx';

// Creates react root inside HTML to render react components 
function TrailMates() {
    return(

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SignUp />}></Route>
                <Route path='/register' element={<SignUp/>}></Route>
                <Route path='/login' element={<Login/>}></Route>
                <Route path='/dashboard' element={<Dashboard/>}></Route>
            </Routes>
        </BrowserRouter>

    );
}
export default TrailMates