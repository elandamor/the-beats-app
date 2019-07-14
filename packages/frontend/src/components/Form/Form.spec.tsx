// Form.spec.tsx
import * as React from 'react';
import { fireEvent, render } from '@app/utils/test-utils';

import Button from '../Button';
import Input from '../Input';

import Form from './index';

describe('Form', () => {
  it('should render without crashing', () => {
    render(
      <Form>
        <Input
          id="name"
          label="Name"
          name="name"
          onChange={() => null}
          type="text"
          value="Elandamor"
        />
        <Button text="Submit" />
      </Form>,
    );
  });

  it('should handle onSubmit event', () => {
    const handleSubmit = jest.fn();
    const payload = { name: 'Elandamor' };

    function BookingForm({ onSubmit: handleSubmit }: any) {
      const [name, setName] = React.useState('');

      return (
        <Form data-testid="form" onSubmit={() => handleSubmit({ name })}>
          <Input
            id="name"
            label="Name"
            name="name"
            onChange={(event) => setName(event.currentTarget.value)}
            type="text"
            value={name}
          />
          <Button data-testid="submitButton" type="submit" text="Submit" />
        </Form>
      );
    }

    const { getByLabelText, getByTestId } = render(
      <BookingForm onSubmit={handleSubmit} />,
    );

    const nameTextfieldNode: any = getByLabelText('Name');

    fireEvent.change(nameTextfieldNode, { target: { value: payload.name } });
    fireEvent.submit(getByTestId('form'));

    expect(nameTextfieldNode.value).toEqual(payload.name);
    expect(handleSubmit).toHaveBeenCalledTimes(1);
    expect(handleSubmit).toHaveBeenCalledWith(payload);
  });
});
