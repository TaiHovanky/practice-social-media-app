import React, { useState } from 'react';
import { Card, CardContent, Container, Grid, IconButton, makeStyles, Typography } from '@material-ui/core';
import { CommentOutlined } from '@material-ui/icons';
import CommentListContainer from '../../containers/comment-list-container';
import LikeButton from '../like-button';
import CommentInputContainer from '../../containers/comment-input-container';
import { currentGetUserPostsCursorVar, currentUserProfileVar, loggedInUserProfileVar } from '../../cache';
import User from '../../types/user.interface';
import { OFFSET_LIMIT } from '../../hooks/use-scroll.hook';
import { GetUserPostsQuery } from '../../generated/graphql';

interface Props {
  posts: GetUserPostsQuery['getUserPosts'],
  likePost: any,
  getUserPosts: any,
  clearPosts: any
}

const useStyles = makeStyles({
  root: {
    minWidth: 400,
    marginTop: 30
  },
  postCreator: {
    cursor: 'pointer'
  },
  post: {
    marginBottom: 12,
  },
  inline: {
    display: 'inline',
  },
  likes: {
    marginBottom: 4
  }
});

const PostList: React.FC<Props> = ({
  posts,
  likePost,
  getUserPosts,
  clearPosts
}: Props) => {
  const classes = useStyles();

  const [showCommentInput, setShowCommentInput] = useState(false);

  const handleShowCommentInput = (): void => {
    if (!showCommentInput) {
      setShowCommentInput(true);
    }
  };

  const handlePostCreatorClick = (user: User) => {
    clearPosts();
    currentUserProfileVar({...user});
    currentGetUserPostsCursorVar(0);
    // Handles switching between user profiles while still on Home
    getUserPosts({
      variables: {
        userId: user.id,
        cursor: 0,
        offsetLimit: OFFSET_LIMIT,
        isGettingNewsfeed: currentUserProfileVar().id === loggedInUserProfileVar().id
      }
    });
  }

  return (
    <Container maxWidth="sm">
      {!!posts ? posts.map((post: any) => (
        <Card className={classes.root} variant="outlined" key={post.id}>
          <CardContent>
            <div className={classes.post}>
              <span onClick={() => handlePostCreatorClick(post.user)} className={classes.postCreator}>
                <Typography
                  component="span"
                  variant="subtitle2"
                  className={classes.inline}
                  color="textPrimary"
                >
                  {post && post.user ? `${post.user.firstName} ${post.user.lastName} ` : ''}
                </Typography>
              </span>
              <Typography variant="caption" className={classes.inline}>
                {new Date(post.createdAt).toLocaleString()}
              </Typography>
            </div>
            <div className={classes.post}>
              <Typography variant="subtitle1">
                {post.content}
              </Typography>
            </div>
            <Grid container spacing={3} className={classes.likes}>
              <Grid item xs={1}>
                <LikeButton item={post} likeMutation={likePost} />
              </Grid>
              <Grid item xs={2}>
                <Typography variant="subtitle1" color="textSecondary">{post.likes.length}</Typography>
              </Grid>
              <Grid item xs={1}>
                <IconButton size="small" onClick={handleShowCommentInput}>
                  <CommentOutlined />
                </IconButton>
              </Grid>
              <Grid item xs={2}>
                <Typography variant="subtitle1" color="textSecondary">{post.comments.length}</Typography>
              </Grid>
            </Grid>
            {showCommentInput && <CommentInputContainer postId={post.id} />}
            <CommentListContainer comments={post.comments} />
          </CardContent>
        </Card>
      )) : []}
    </Container>
  );
};

export default PostList;