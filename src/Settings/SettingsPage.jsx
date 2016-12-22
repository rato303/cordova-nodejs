import React, { Component } from 'react';

import { Link } from 'react-router';

import { FlatButton, RadioButton, RadioButtonGroup, FontIcon} from 'material-ui';

import { PATH } from '../pages';

const checkedIcon = <FontIcon className="fa fa-check" />;
const unCheckedIcon = <FontIcon />;

const radioButtonModels = [
  {
    value: 1,
    label: 'First'
  },
  {
    value: 2,
    label: 'Second'
  },
  {
    value: 3,
    label: 'Third'
  },
];

class SettingsPage extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    const radioButtons = radioButtonModels.map((model) => {

      const {
        value,
        label
      } = model;

      return (
        <RadioButton key={value}
                     value={value}
                     label={label}
                     checkedIcon={checkedIcon}
                     uncheckedIcon={unCheckedIcon} />
      );
    }); 

    return (
      <div>

        <RadioButtonGroup name="rbg1">
          {radioButtons}
        </RadioButtonGroup>

        <Link to={PATH.MENU}>
          <FlatButton label="Menu" />
        </Link>
      </div>
    );
  }

}

export default SettingsPage;
