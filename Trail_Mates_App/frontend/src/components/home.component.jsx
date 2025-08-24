import LoginButton from "./login.component";
import LogoutButton from "./logout-component";
import { useAuth0 } from '@auth0/auth0-react';
import './styles/home.css'

function Home() {
    const { isAuthenticated, isLoading, error, user} = useAuth0();


    return(
                <div className="whole"> 
                    <div>
                        <header className="headerparent">
                                <div className="headerchild">
                                    <div>
                                    <img src="src/assets/logoV2.png" className='logo'></img>
                                    </div>
                                    <div className="compname">TrailMates</div>
                                </div>
                                <div className="headerchild">
                                    {isAuthenticated && (
                                        <>
                                        <h1 className="user">Welcome {user.name} 
                                            <br></br><LogoutButton/></h1>
                                        </>
                                    )}
                                </div>
                          
                        </header>
                    </div>
                    <div className="parent">
                        <div className="flex-item-left">
                            <h1 className="herotext">
                                Go Further</h1>
                                <h1 className="herotext">With 
                                 TrailMates</h1>
                            <div className="herosubtext">
                                <p>Stop letting trips die in the group chat. TrailMates makes planning with friends easy—one place to organize, share, and make adventures happen.</p>
                            </div>
                            <LoginButton/>
                        </div>
                        <div className="flex-item-right">
                               <img src="src/assets/goat.JPG" className="heroImage"></img>
                        </div>
                    </div>
                        <footer className="footy">
                            <div className="footer-container">
                                    <div className="footer-flex-item">                                       
                                        <a href="https://github.com/ignacioparraparra/Trail_Mates" target="_blank"><img src="src/assets/icons8-github.svg"></img></a>                          
                                        <a href="https://www.linkedin.com/in/ignacio-parra-parra" target="_blank"><img src="src/assets/icons8-linkedin-circled.svg"></img></a>                              
                                    </div>
                            </div>
                        </footer>
                </div>
    );
}

export default Home