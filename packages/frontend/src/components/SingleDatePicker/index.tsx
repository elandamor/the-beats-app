import React, { FC, useState } from 'react';
import classNames from 'classnames';
import { SingleDatePicker as DatePicker } from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import Moment, { Moment as IMoment } from 'moment';
import { extendMoment } from 'moment-range';

// Styles
import Wrapper from './styles';

import Flex from '@app/components/Flex';
import Select from '@app/components/Select';

// import { makeDebugger } from '../../utils';
// const debug = makeDebugger('SingleDatePicker');

interface ISingleDatePickerProps {
  className?: string;
  id: string;
  date: IMoment | null;
  [propName: string]: any;
}

// @ts-ignore - Need to figure what extendMoment needs done here
const moment = extendMoment(Moment);

/**
 * @render react
 * @name SingleDatePicker component
 * @description SingleDatePicker component.
 * @example
 * <SingleDatePicker id="dateOfBirth" date={null} />
 */

const SingleDatePicker: FC<ISingleDatePickerProps> = ({
  id,
  className,
  date,
  dateLabel,
  field,
  form: { setFieldValue },
  ...rest
}: any) => {
  const [focused, setFocused] = useState(false);
  const range = moment.range(moment().subtract(100, 'years'), moment());

  const mappedMonths = () =>
    moment.months().map((label, value) => ({ label, value }));

  const mappedYears = () =>
    Array.from(range.by('year')).map((m) => {
      const year = parseInt(m.format('YYYY'), 10);
      return { label: year, value: year };
    });

  const renderMonthElement = ({ month, onMonthSelect, onYearSelect }: any) => {
    const months = mappedMonths();
    const years = mappedYears();
    const activeMonth = {
      label: months[month.month()].label,
      value: month.month(),
    };
    const activeYear = { label: month.year(), value: month.year() };

    return (
      <Flex alignItems="center" justifyContent="center" px={6}>
        <Flex size={1.25}>
          <Select
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              onMonthSelect(month, e.target.value)
            }
            options={months}
            value={activeMonth}
            mr={1}
          />
        </Flex>
        <Flex size={1}>
          <Select
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              onYearSelect(month, e.target.value)
            }
            options={years}
            value={activeYear}
          />
        </Flex>
      </Flex>
    );
  };

  return (
    <Wrapper className={classNames('', className)}>
      <DatePicker
        date={date}
        id={id}
        onDateChange={(date: any) => setFieldValue(field.name, date)}
        focused={focused}
        onFocusChange={({ focused }) => setFocused(focused!)}
        numberOfMonths={1}
        showDefaultInputIcon={true}
        inputIconPosition="after"
        isOutsideRange={() => false}
        displayFormat="DD/MM/YYYY"
        renderMonthElement={renderMonthElement}
      />
    </Wrapper>
  );
};

export default SingleDatePicker;
