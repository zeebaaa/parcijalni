const styles = {
    container: {
        textAlign: 'justify',
        display: 'inline',
        marginLeft: 36
    }, 
};

function Result(props) {

    const {user, repos} = props;
    if (!user) {
        return null;
    }

    const {avatar_url, bio, name, location} = user;

    return (
        <div>
            <h1>Svi korisnici: </h1>
            <img></img>
            <p>Bio</p>
            <p>Location</p>
            
            {/* <ul>
                {githubUsers.map((user) => {
                    return <li key={user.id}>
              
              </li>
            })}
            </ul> */}
            </div>
    )
    
}


export default Result;