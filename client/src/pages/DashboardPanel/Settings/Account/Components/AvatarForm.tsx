import { ChangeEvent } from 'react';

import { useUserMutations } from '@api/user';
import { Avatar } from '@mui/material';

type Props = {
  imgUrl: string;
};

export const AvatarForm = ({ imgUrl }: Props) => {
  const { updateUserImageMutation } = useUserMutations();

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const image = event.target.files[0];

      updateUserImageMutation.mutate({ image });
    }
  };

  return (
    <>
      <label htmlFor="image">
        <Avatar sx={{ width: 70, height: 70, marginTop: '20px', marginBottom: '30px' }} src={imgUrl} />
      </label>
      <input id="image" type="file" accept="image/*" onChange={handleFileChange} style={{ display: 'none' }} />
    </>
  );
};
