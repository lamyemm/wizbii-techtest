import React from 'react'
import './post.css'
import profilePic from './profile.png'
import bubble from './bubble.png'

const Post = ({ profile, tags, postContent, thanx, comments }) => {
  return (
    <div className="wrapper">
      <div className="one">
        <img className="bubble" src={bubble} alt="conv" />
      </div>
      <div className="two">
        <img className="bubble" src={profilePic} alt="profile" />
      </div>
      <div className="three">
        <span className="specialtext">{profile.username}</span> - 20/11/2015
      </div>
      <div className="four hashtags">
        {tags.map((tag) => (
          <span>{tag} </span>
        ))}
      </div>
      <div className="five">{postContent}</div>
      <div className="six"> Envoyer un Thanx !</div>
      <div className="seven">Partager à un ami !</div>
      <div className="eight">
        <span className="specialtext">
          {comments}{' '}
          {comments !== 0 ? (
            <span>commentaires</span>
          ) : (
            <span>commentaire</span>
          )}{' '}
        </span>
        - {thanx} Thanx
      </div>
      <div className="nine">
        <hr />
      </div>
      <div className="ten">Ajouter un commentaire...</div>
      <div className="eleven">
        Tu vois ceci car tu es abonné au tag #Marketing
      </div>
    </div>
  )
}

export default Post
