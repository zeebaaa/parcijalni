import { ListGroup, ListGroupItem, Image, Button } from "react-bootstrap";

function Result(props) {

    const {user, repos, onReset} = props;
    if (!user) {
        return null;
    }

    const { avatar_url, bio, name, location } = user;
    
    return (
        <div className="container">
            <h1>User infomation: </h1>
            <Image src={avatar_url} alt={name} className="avatar"></Image>
            <h2 className="name">Name: {name || 'Not provided'}</h2>
            <p className="bio">Bio: {bio || 'Not provided'} </p>
            <p className="location">Location: {location || 'Not provided'}</p>
            
            {repos.length > 0 && (
                <div>
                    <h1 className="repositories">Repositories:</h1>
                    <ListGroup>
                         {repos.map((repo) => {
                           return (
                                <ListGroupItem key={repo.id} className="repoItem">
                                    <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                                       {repo.name}
                                    </a>
                               </ListGroupItem>

                            )
                        })}
                    </ListGroup>
                </div>
            )}
            <Button variant='danger' onClick={onReset}>
						RESET
					</Button>
        </div>
    )
}

export default Result;