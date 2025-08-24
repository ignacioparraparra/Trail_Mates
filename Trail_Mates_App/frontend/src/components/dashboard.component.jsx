import { useAuth0 } from "@auth0/auth0-react";

    function Dashboard () {
        const {user, isAuthenticated} = useAuth0();

        return (
            
           <div>Hello</div>
        );
    };

export default Dashboard;