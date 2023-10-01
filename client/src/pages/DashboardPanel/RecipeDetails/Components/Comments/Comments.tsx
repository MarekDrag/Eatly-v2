import { useTranslation } from '@hooks/index';
import { Avatar, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import { Typography } from '@ui/index';

type Props = {
  comments: {
    author: string;
    createdAt: string;
    imgHref: string;
    likes: number;
    content: string;
  }[];
};

export const Comments = () => {
  const { t } = useTranslation();
  return null;
  return (
    <>
      <Typography variant="h5" fontWeight="500" color="text.primary">
        {comments.length} {t('Comments')}
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
                  <Typography variant="body1" color="text.primary" marginRight={1}>
                    {comment.author}
                  </Typography>
                  <Typography variant="caption" color="text.primary">
                    {comment.createdAt}
                  </Typography>
                </>
              }
              secondary={
                <>
                  <Typography variant="body2" color="text.primary">
                    {comment.content}
                  </Typography>
                </>
              }
            />
          </ListItem>
        </>
      ))}
    </>
  );
};
