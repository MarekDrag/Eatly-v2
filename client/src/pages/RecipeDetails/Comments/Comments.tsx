import { Avatar, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';

import { RecipeDetailsBox } from '../RecipeDetails.styles';

type Props = {
  comments: {
    author: string;
    createdAt: string;
    imgHref: string;
    likes: number;
    content: string;
  }[];
};

export const Comments = ({ comments }: Props) => {
  return (
    <RecipeDetailsBox>
      <Typography variant="h5" fontWeight="500" color="text.primary">
        {comments.length} Komentarze
      </Typography>
      {comments.map((comment) => (
        <>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src={comment.imgHref} />
            </ListItemAvatar>
            <ListItemText
              primary={
                <>
                  <Typography component="span" variant="body1" color="text.primary" marginRight={1}>
                    {comment.author}
                  </Typography>
                  <Typography component="span" variant="caption" color="text.primary">
                    {comment.createdAt}
                  </Typography>
                </>
              }
              secondary={
                <>
                  <Typography component="span" variant="body2" color="text.primary">
                    {comment.content}
                  </Typography>
                </>
              }
            />
          </ListItem>
        </>
      ))}
    </RecipeDetailsBox>
  );
};
