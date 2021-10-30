import  React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Alert,
  AlertContainer
} from '@momentum-ui/react';
const AlertDefault = (props) => {
  let [show, setShow] = useState(false);
  return (
    <section>
      <AlertContainer>
        <Alert
          closable
          title='Error'
          message={"test"}
          dismissBtnProps={{ 
            onClick: () => setShow(false),
            ariaLabel: 'Close Alert'
          }}
          show={show}
          type='error'
          position='bottom-right'
        />
      </AlertContainer>
    </section>
  );
};

AlertDefault.propTypes = {
  showAlert: PropTypes.func.isRequired,
};

export default AlertDefault;
