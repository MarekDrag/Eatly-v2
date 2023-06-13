import { useTranslation } from '@hooks/index';
import { CheckboxSelect } from '@ui/index';

const typeOptions = ['Meat', 'Vege'] as const;

export const TypeSelect = () => {
  const { t } = useTranslation();

  const translatedOptions = typeOptions.map((type) => t(type));

  return <CheckboxSelect options={translatedOptions} label={t('Type')} id="type-select" />;
};
