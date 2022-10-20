import React from "react";
import cronstrue from "cronstrue/i18n";
import parser from "cron-parser";

const Output = ({ language, setLanguage, cronExpression }) => {
  return (
    <div>
      <div className='border border-black p-5'>
        <select
          value={language}
          onChange={setLanguage}
          name='language'
          id='language'
          className='border border-black'>
          <option value='id'>Indonesia</option>
          <option value='en'>Engllish</option>
        </select>
      </div>
      <div className='border border-black p-5'>
        <p className='font-bold text-xl'>output</p>
        <p>{cronExpression}</p>
        <p>{cronstrue.toString(cronExpression, { locale: language })}</p>
        <p>next : {parser.parseExpression(cronExpression).next().toString()}</p>
      </div>
    </div>
  );
};

export default Output;
