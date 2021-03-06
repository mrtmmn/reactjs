var React = require('react');
var PropTypes = React.PropTypes;

function UserDetails (user) {
    return(
        <div>
            {!!user.score && <li className="list-group-item"><h3>Score: {user.score} </h3></li>}
            <li className="list-group-item"> <img src={user.info.avatar_url} className="img-rounded img-responsive"/></li>
            {user.score && <li className="list-group-item">Name: {user.info.name}</li>}
            <li className="list-group-item">Username: {user.info.login}</li>
            {user.score && <li className="list-group-item">Location: {user.info.location}</li>}
            {!!user.score && <li className="list-group-item">Company: {user.info.company}</li>}
            <li className="list-group-item">Followers: {user.info.follower}</li>
            <li className="list-group-item">Folowing: {user.info.following}</li>
            <li className="list-group-item">Public Repos: {user.info.public_repos}</li>
            {user.score && <li className="list-group-item">Blog: <a href={user.info.blog}> {user.info.blog}</a> </li>}
        </div>
    )
}

UserDetails.propTypes = {
    score: PropTypes.number,
    info: PropTypes.shape({
        avatar_url: PropTypes.string.isRequired,
        blog: PropTypes.string,
        company: PropTypes.string,
        followers: PropTypes.number.isRequired,
        following: PropTypes.number.isRequired,
        public_repos: PropTypes.number.isRequired,
        Blog: PropTypes.string
    })
}

module.exports = UserDetails;