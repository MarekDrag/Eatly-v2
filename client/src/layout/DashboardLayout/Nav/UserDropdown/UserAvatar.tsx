import { Avatar } from '@mui/material';

type Props = {
  image?: string;
  firstName: string;
  lastName: string;
};

export const UserAvatar = ({ image, firstName, lastName }: Props) => {
  const letters = `${firstName.split('')[0]}${lastName.split('')[0]}`;

  return (
    <>
      {image ? (
        <Avatar sx={{ marginRight: '10px' }} alt="pizza" src={image} />
      ) : (
        <Avatar sx={{ marginRight: '10px', fontSize: '15px' }} alt="pizza" src={image}>
          {letters}
        </Avatar>
      )}
    </>
  );
};
