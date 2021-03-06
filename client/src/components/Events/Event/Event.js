import React from 'react';
import useStyles from './styles'
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { deleteEvent, likeEvent } from '../../../actions/events'
import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined';

const Event = ({ event, setCurrentId }) => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const user = JSON.parse(localStorage.getItem('profile'));

    const Likes = () => {
        if (event.likes.length > 0) {
            return event.likes.find((like) => like === (user?.result?.googleId || user?.result?._id))
                ? (
                    <><ThumbUpAltIcon fontSize="small" />&nbsp;{event.likes.length > 2 ? `You and ${event.likes.length - 1} others` : `${event.likes.length} like${event.likes.length > 1 ? 's' : ''}`}</>
                ) : (
                    <><ThumbUpAltOutlined fontSize="small" />&nbsp;{event.likes.length} {event.likes.length === 1 ? 'Like' : 'Likes'}</>
                );
        }

        return <><ThumbUpAltOutlined fontSize="small" />&nbsp;Like</>;
    };


    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={event.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={event.title} />
            <div className={classes.overlay}>
                <Typography variant="h6">{event.name}</Typography>
                <Typography variant="body2">{moment(event.createdAt).fromNow()}</Typography>
            </div>
            {(user?.result?.googleId === event?.creator || user?.result?._id === event?.creator) && (
                <div className={classes.overlay2}>
                    <Button style={{ color: 'white' }} size="small" onClick={() => setCurrentId(event._id)}>
                        <MoreHorizIcon fontSize="default" />
                    </Button>
                </div>
            )}
            <div className={classes.details}>
                <Typography variant="body2" color="textSecondary">{event.tags.map((tag) => `#${tag} `)}</Typography>
            </div>
            <Typography className={classes.title} gutterBottom variant="h5" component="h2">{event.title}</Typography>
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">{event.message}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button disabled={!user?.result} size="small" color="primary" onClick={() => dispatch(likeEvent(event._id))}>
                    <Likes />
                </Button>
                {(user?.result?.googleId === event?.creator || user?.result?._id === event?.creator) && (
                    <Button size="small" color="secondary" onClick={() => dispatch(deleteEvent(event._id))}>
                        <DeleteIcon fontSize="small" /> Delete
                    </Button>
                )}
            </CardActions>
        </Card>
    );
}

export default Event;