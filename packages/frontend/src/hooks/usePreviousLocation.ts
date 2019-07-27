import { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';

function usePreviousLocation(props: RouteComponentProps) {
  const [previousLocation, setPreviousLocation] = useState(props.location);

  useEffect(() => {
    const { history, location } = props;

    if (
      history.action !== 'POP' &&
      (!location.state || !location.state.modal)
    ) {
      setPreviousLocation(props.location);
    }
  }, []);

  // Return previous location and setter
  return [previousLocation, setPreviousLocation];
}

export default usePreviousLocation;
