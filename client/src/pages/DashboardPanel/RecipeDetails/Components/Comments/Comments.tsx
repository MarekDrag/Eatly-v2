import * as dayjs from 'dayjs';

import { Comment } from '@api/types';
import { useTranslation } from '@hooks/index';
import { Avatar, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import { Typography } from '@ui/index';

type Props = {
  comments: Comment[];
};

export const Comments = ({ comments }: Props) => {
  const { t } = useTranslation();

  return (
    <>
      <Typography variant="h5" fontWeight="500" color="text.primary">
        {t('Comments')} ({comments.length})
      </Typography>
      {comments.map((comment) => (
        <>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src={comment.authorAvatar} />
            </ListItemAvatar>
            <ListItemText
              primary={
                <>
                  <Typography variant="body1" color="text.primary" marginRight={1}>
                    {comment.author}
                  </Typography>
                  <Typography variant="caption" color="text.primary">
                    {dayjs(comment.createdAt).format('DD MMMM YYYY')}
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
