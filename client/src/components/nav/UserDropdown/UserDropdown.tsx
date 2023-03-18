import { useState } from 'react';

import { icons } from '@config/icons';
import { useTranslation } from '@hooks/index';

import { UserAvatar } from './UserAvatar';
import { ArrowIcon, Dropdown, DropdownButton, UserProfile, Wrapper, UserName } from './UserDropdown.styled';

export const UserDropdown = () => {
  const { t } = useTranslation();
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  return (
    <Wrapper>
      <UserProfile onClick={() => setIsDropdownVisible((prev) => !prev)} onBlur={() => setIsDropdownVisible(false)}>
        <UserAvatar />
        <UserName variant="subtitle2">Marek</UserName>
        <ArrowIcon />
      </UserProfile>
      {isDropdownVisible && (
        <Dropdown>
          <DropdownButton startIcon={icons.person}>{t('My account')}</DropdownButton>
          <DropdownButton startIcon={icons.logout}>{t('Log out')}</DropdownButton>
        </Dropdown>
      )}
    </Wrapper>
  );
};
