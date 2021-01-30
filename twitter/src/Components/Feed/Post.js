import React from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import PublishIcon from '@material-ui/icons/Publish'
import{ Link} from 'react-router-dom'

class Post extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }

  }
 

  render() {
    return (
      <div className="post" >
        <div className="post__avatar">
          <Avatar src={this.props.avatar} />
        </div>
        <div className="post__body">
          <div className="post__header">
            <div className="post__headerText">
              <Link to={`/profile/${this.props.email}`}  >
              <h3>
                {this.props.username}
              </h3>
              </Link>
            </div>
            <div className="post__headerDescription">
              <p>{this.props.text}</p>
            </div>
          </div>
          <img id='image' src={this.props.img} alt=""  height='300px' />
          <div className="post__footer">
            <ChatBubbleOutlineIcon fontSize="small" />
            <RepeatIcon fontSize="small" />
            <FavoriteBorderIcon fontSize="small" />
            <PublishIcon fontSize="small" />
          </div>
        </div>
      </div>
    );
  }
}

export default Post;