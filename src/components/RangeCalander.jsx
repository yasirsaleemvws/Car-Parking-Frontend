import React, { useState } from 'react';
import { DatePicker, Button } from 'antd';
import moment from 'moment';

const { RangePicker } = DatePicker;


const RangeCalander = ({ selectedDates, setSelectedDates, onCancel }) => {


    return (
        <div className='mt-4 lg:mt-0'>
            <RangePicker
                onChange={(dates) => setSelectedDates(dates ? dates.map(date => date.toDate()) : [])}
                style={{ marginBottom: '16px' }}
            />
        </div>
    );
};

export default RangeCalander;