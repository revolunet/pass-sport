import { StateManagerProps } from 'node_modules/react-select/dist/declarations/src/useStateManager';
import Select, {
  AriaGuidanceProps,
  AriaOnChangeProps,
  AriaOnFilterProps,
  GroupBase,
} from 'react-select';

export const selectStyles = {
  control: (baseStyles: Record<string, unknown>) => ({
    ...baseStyles,
    flexGrow: 1,
    borderColor: '#ffffff',
    backgroundColor: '#eeeeee',
    padding: '0px 12px',
    borderBottom: '2px solid #3A3A3A',
  }),
  indicatorSeparator: (baseStyles: Record<string, unknown>) => ({
    ...baseStyles,
    backgroundColor: '#ffffff',
  }),
  valueContainer: (baseStyles: Record<string, unknown>) => ({
    ...baseStyles,
    paddingLeft: '0px',
  }),
  menu: (baseStyles: Record<string, unknown>) => ({
    ...baseStyles,
    zIndex: 999,
  }),
  placeholder: (baseStyles: Record<string, unknown>) => ({
    ...baseStyles,
    color: 'var(--text-default-grey)',
  }),
};

export const guidance = (props: AriaGuidanceProps) => {
  const { isSearchable, isMulti, tabSelectsValue, context, isInitialFocus } = props;
  switch (context) {
    case 'menu':
      return `Utiliser les flèches Haut et Bas pour choisir une option. La liste des clubs sera mise à jour quand l'option sera sélectionnée; Presser la touche entrer pour sélectionner l'option qui a le focus; Presser la touche Echap pour quitter la liste déroulante ${
        tabSelectsValue
          ? "; Pressez la touche Tab pour sélectionner l'option et quitter la liste déroulante"
          : ''
      }.`;
    case 'input':
      return isInitialFocus
        ? `la liste a le focus; Ecrivez pour affiner la liste; Appuyer sur la flèche bas pour ouvrir la liste déroulante`
        : '';
    case 'value':
      return 'Use left and right to toggle between focused values, press Backspace to remove the currently focused value';
    default:
      return '';
  }
};

export const onChange = <Option, IsMulti extends boolean>(
  props: AriaOnChangeProps<Option, IsMulti>,
) => {
  const { action, label = '', labels, isDisabled } = props;
  switch (action) {
    case 'deselect-option':
    case 'pop-value':
    case 'remove-value':
      return `L'option ${label} est déselectionnée`;
    case 'clear':
      return 'Toutes les options séléctionnées ont été effacées';
    case 'initial-input-focus':
      return `L'option ${labels.join(',')} est sélectionnée; `;
    case 'select-option':
      return isDisabled
        ? `L'option ${label} est désactivée. Selectionner une autre option.`
        : `L'option ${label} est sélectionnée`;
    default:
      return '';
  }
};

export const onFilter = (props: AriaOnFilterProps) => {
  const { inputValue, resultsMessage } = props;
  return `${resultsMessage}${inputValue ? ' pour le terme recherché ' + inputValue : ''}.`;
};

export const customScreenReaderStatus = ({ count }: { count: number }) =>
  `${count} résultat${count !== 1 ? 's' : ''} disponible${count !== 1 ? 's' : ''}`;

function CustomSelect<
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
>(props: StateManagerProps<Option, IsMulti, Group>) {
  const { styles, screenReaderStatus, ...otherProps } = props;

  return (
    <Select
      ariaLiveMessages={{ guidance, onChange, onFilter }}
      styles={selectStyles}
      screenReaderStatus={customScreenReaderStatus}
      {...otherProps}
    />
  );
}

export default CustomSelect;
