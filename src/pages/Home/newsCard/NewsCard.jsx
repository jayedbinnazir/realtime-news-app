import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Box, Button, Divider, Paper } from '@mui/material';
import { NavLink } from 'react-router-dom';
import TurnedInNotOutlinedIcon from '@mui/icons-material/TurnedInNotOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import Rating from '@mui/material/Rating';
import moment from 'moment';
import VisibilityIcon from '@mui/icons-material/Visibility';


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export const NewsCard =({news})=> {
  const { title ,author ,image_url , details , _id , rating , total_view } = news;
  const [value, setValue] = React.useState(rating.number);

 
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card  sx={{ marginBottom:'1rem' , padding:'1rem' }} >
      <CardHeader
        sx={{ bgcolor:'#F3F3F3',
        display: 'flex'   }}
        avatar={
          <Avatar   aria-label="recipe"
          sx={{
            width: 60, // Set the desired width
            height: 60, // Set the desired height
          }} >
            <img src={author.img} />
          </Avatar>
        }
        action={
          
           <Box mt={1.5} >
               <IconButton aria-label="share">
               <ShareOutlinedIcon fontSize='large' />
            </IconButton>
            <IconButton aria-label='bookmark' >
             <TurnedInNotOutlinedIcon fontSize='large' />
            </IconButton>
           </Box>
          
        }
       
        title={ 
            <Typography textAlign={'left'} >
                {author.name}
            </Typography>
        }
        subheader={
            <Box textAlign={'left'} >
               { moment(author.published_date).format('yyy-MM-D')}
            </Box>
        }
      />
      <CardHeader
        title={
          <Typography variant='h6' sx={{ paddingBottom:'10px' , paddingTop:'10px' }} textAlign={'justify'} fontWeight={'bold'} color={'text.secondary'} >{title}</Typography>
        }
      />
      <CardMedia
        component="img"
        height="194"
        image={image_url}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary" gutterBottom >
         {
          details.length < 300 ? details : <> {details.slice(0,300)}... <NavLink style={{ color:'#FF8C47' }} to={`/news/${_id}`} >Read More</NavLink> </> 
         }
        </Typography>
      </CardContent>
      <Divider/>
      <CardActions disableSpacing sx={{ padding:'1rem' , display:'flex' }} >
       
     <Box sx={{ flexGrow:'1', display:'flex' }} >
     <Rating
        sx={{ alignSelf:'center' }}
        name="simple-controlled"
        defaultValue={value}
        precision={0.1}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        />
      {
        value ? <Typography variant='body2'  p={1}  color={'text.secondary'} >{value}</Typography>:null
      }
     </Box>
      
    <Box >

      <IconButton aria-label='views'  >

      <VisibilityIcon  />
      </IconButton>
      <Typography variant='subtitle2' display={'inline-block'} color={'text.secondary'} >{total_view}</Typography>
    </Box>

        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>{author.name}</Typography>
          <Typography paragraph>
              {title}
          </Typography>
          <Typography paragraph gutterBottom >
           {details}
          </Typography>
         
        </CardContent>
      </Collapse>
    </Card>
  );
}
