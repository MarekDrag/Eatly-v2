import { ChangeEvent } from 'react';

import { useUserMutations } from '@api/user';
import { useAuth } from '@hooks/useAuth';
import { Avatar } from '@mui/material';

export const AvatarForm = () => {
  const { updateUserImageMutation } = useUserMutations();
  const { user } = useAuth();

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const image = event.target.files[0];

      updateUserImageMutation.mutate({ image });
    }
  };

  return (
    <>
      <label htmlFor="image">
        <Avatar sx={{ width: 70, height: 70, marginTop: '20px', marginBottom: '30px' }} src={user.imgUrl} />
      </label>
      <input id="image" type="file" accept="image/*" onChange={handleFileChange} style={{ display: 'none' }} />
    </>
  );
};
