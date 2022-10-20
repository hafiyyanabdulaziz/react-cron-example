import "antd/dist/antd.css";
import "react-js-cron/dist/styles.css";

import cronstrue from "cronstrue/i18n";
import React, { useState } from "react";
import { Cron as Halo } from "react-js-cron";
import Cron, { HEADER } from "react-cron-generator";
import "react-cron-generator/dist/cron-builder.css";
import { ReQuartzCron } from "@sbzen/re-cron";

import ButtonProcess from "./components/ButtonProcess";
import Input from "./components/Input";
import Output from "./components/Output";
import Navigation from "./components/Navigation";

const App = () => {
  const [language, setLanguage] = useState("en");
  const [textInput, setTextInput] = useState("*/5 * * * *");
  const [cronExpression, setCronExpression] = useState("*/5 * * * *");
  const [error, setError] = useState(null);
  const [tab, setTab] = useState(0);

  const onChangeLanguage = (e) => {
    const { value } = e.target;
    setLanguage(value);
  };

  const onClickProcess = () => {
    try {
      setError(null);
      cronstrue.toString(textInput);

      setCronExpression(textInput);
    } catch (error) {
      setError(error);
    }
  };

  const onChageCronExpression = (e) => {
    const { value } = e.target;
    setTextInput(value);
  };
  const ReactJsCron = () => {
    return (
      <>
        <a
          href='https://github.com/xrutayisire/react-js-cron'
          target='_blank'
          rel='noopener noreferrer'>
          https://github.com/xrutayisire/react-js-cron
        </a>
        <Halo value={textInput} setValue={setTextInput} />
      </>
    );
  };

  const ReCron = () => {
    return (
      <>
        <a
          href='https://recron.emptyui.com/'
          target='_blank'
          rel='noopener noreferrer'>
          https://recron.emptyui.com/
        </a>
        <ReQuartzCron value={textInput} onChange={setTextInput} />
      </>
    );
  };

  const ReactCronGenerator = () => {
    return (
      <>
        <a
          href='https://github.com/sojinantony01/react-cron-generator'
          target='_blank'
          rel='noopener noreferrer'>
          https://github.com/sojinantony01/react-cron-generator
        </a>
        <Cron
          value={textInput}
          onChange={(e) => setTextInput(e)}
          options={{
            headers: [HEADER.MONTHLY, HEADER.WEEKLY, HEADER.DAILY],
          }}
        />
      </>
    );
  };

  const ReactCronGeneratorMUI = () => {
    return (
      <>
        <a
          href='https://www.npmjs.com/package/@dealmeddevs/react-cron-generator'
          target='_blank'
          rel='noopener noreferrer'>
          https://www.npmjs.com/package/@dealmeddevs/react-cron-generator
        </a>
      </>
    );
  };

  const Lainnya = () => {
    return (
      <>
        <p>
          <a
            href='https://www.skypack.dev/view/material-ui-cron'
            target='_blank'
            rel='noopener noreferrer'>
            https://www.skypack.dev/view/material-ui-cron
          </a>
        </p>
        <p>
          <a
            href='https://www.skypack.dev/view/cron-editor-react'
            target='_blank'
            rel='noopener noreferrer'>
            https://www.skypack.dev/view/cron-editor-react
          </a>
        </p>
        <p>
          <a
            href='https://codesandbox.io/s/floral-water-xj7bfx'
            target='_blank'
            rel='noopener noreferrer'>
            https://codesandbox.io/s/floral-water-xj7bfx
          </a>
        </p>
        <p>
          <a
            href='https://one-more.github.io/react-cron-builder/'
            target='_blank'
            rel='noopener noreferrer'>
            https://one-more.github.io/react-cron-builder/
          </a>
        </p>
      </>
    );
  };

  const cronBuilderLibrary = [
    {
      tab: 0,
      title: "ReactJsCron",
    },
    {
      tab: 1,
      title: "ReactCronGenerator",
    },
    {
      tab: 2,
      title: "ReCron",
    },
    {
      tab: 3,
      title: "ReactCronGeneratorMUI",
    },
    {
      tab: 4,
      title: "Lainnya",
    },
  ];

  return (
    <div className='m-10'>
      <h1 className='text-2xl text-center'>React Cron Example</h1>
      <div className='border border-black p-5'>
        <Navigation data={cronBuilderLibrary} setTab={setTab} />
        {tab === 0 && ReactJsCron()}
        {tab === 1 && ReactCronGenerator()}
        {tab === 2 && ReCron()}
        {tab === 3 && ReactCronGeneratorMUI()}
        {tab === 4 && Lainnya()}
      </div>
      <Input value={textInput} onChange={onChageCronExpression} />
      <ButtonProcess error={error} onClick={onClickProcess} />
      <Output
        language={language}
        setLanguage={onChangeLanguage}
        cronExpression={cronExpression}
      />
      <div className='border border-black px-5 py-2'>
        <h2 className='text-lg'>contribute</h2>
        <p>
          <a
            href='https://github.com/hafiyyanabdulaziz/react-cron-example'
            target='_blank'
            rel='noopener noreferrer'>
            https://github.com/hafiyyanabdulaziz/react-cron-example
          </a>
        </p>
      </div>
      <footer>Created by Hafiyyan Abdul Aziz for Indonesia</footer>
    </div>
  );
};

export default App;
