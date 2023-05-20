import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { icons } from '@config/icons';
import { useTranslation } from '@hooks/index';

import { UserAvatar } from './UserAvatar';
import { ArrowIcon, Dropdown, DropdownButton, UserProfile, Wrapper, UserName } from './UserDropdown.styles';

export const UserDropdown = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const handleOnBlur = () => {
    setTimeout(() => setIsDropdownVisible(false), 200);
  };

  return (
    <Wrapper>
      <UserProfile onClick={() => setIsDropdownVisible((prev) => !prev)} onBlur={handleOnBlur}>
        <UserAvatar />
        <UserName variant="subtitle2">Marek</UserName>
        <ArrowIcon transform={`rotate(${isDropdownVisible ? 180 : 0})`} />
      </UserProfile>
      {isDropdownVisible && (
        <Dropdown>
          <DropdownButton startIcon={icons.person} onClick={() => navigate('/settings')}>
            {t('My account')}
          </DropdownButton>
          <DropdownButton startIcon={icons.logout} onClick={() => navigate('/')}>
            {t('Log out')}
          </DropdownButton>
        </Dropdown>
      )}
    </Wrapper>
  );
};
