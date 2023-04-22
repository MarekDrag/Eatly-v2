import { useState } from 'react';

import { icons } from '@config/icons';
import { useTranslation } from '@hooks/index';

import { UserAvatar } from './UserAvatar';
import { ArrowIcon, Dropdown, DropdownButton, UserProfile, Wrapper, UserName } from './UserDropdown.styles';

export const UserDropdown = () => {
  const { t } = useTranslation();
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  return (
    <Wrapper>
      <UserProfile onClick={() => setIsDropdownVisible((prev) => !prev)} onBlur={() => setIsDropdownVisible(false)}>
        <UserAvatar />
        <UserName variant="subtitle2">Marek</UserName>
        <ArrowIcon transform={`rotate(${isDropdownVisible ? 180 : 0})`} />
      </UserProfile>
      {isDropdownVisible && (
        <Dropdown>
          <DropdownButton startIcon={icons.person} label={t('My account')} />
          <DropdownButton startIcon={icons.logout} label={t('Log out')} />
        </Dropdown>
      )}
    </Wrapper>
  );
};
