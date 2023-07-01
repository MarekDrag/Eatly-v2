import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { useMeQuery } from '@api/me';
import { icons } from '@config/icons';
import { useTranslation } from '@hooks/index';
import { useAuth } from '@hooks/useAuth';

import { UserAvatar } from './UserAvatar';
import { ArrowIcon, Dropdown, DropdownButton, UserProfile, Wrapper, UserName } from './UserDropdown.styles';

export const UserDropdown = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const { logout } = useAuth();
  const { data } = useMeQuery();

  const handleOnBlur = () => {
    setTimeout(() => setIsDropdownVisible(false), 200);
  };

  return (
    <Wrapper>
      <UserProfile onClick={() => setIsDropdownVisible((prev) => !prev)} onBlur={handleOnBlur}>
        <UserAvatar image={data?.imgUrl || ''} firstName={data?.firstName || ''} lastName={data?.lastName || ''} />
        <UserName variant="subtitle2">{data?.firstName}</UserName>
        <ArrowIcon transform={`rotate(${isDropdownVisible ? 180 : 0})`} />
      </UserProfile>
      {isDropdownVisible && (
        <Dropdown>
          <DropdownButton startIcon={icons.person} onClick={() => navigate('/dashboard/settings')}>
            {t('My account')}
          </DropdownButton>
          <DropdownButton startIcon={icons.logout} onClick={() => logout()}>
            {t('Log out')}
          </DropdownButton>
        </Dropdown>
      )}
    </Wrapper>
  );
};
