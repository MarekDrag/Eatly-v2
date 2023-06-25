import { Avatar } from '@mui/material';

export const UserAvatar = ({ image }: { image: string }) => {
  return <Avatar sx={{ marginRight: '10px' }} alt="pizza" src={image} />;
};
