import { ChooseFile } from 'components/ChooseFile';
import React from 'react';

const Home: React.FC = () => {
  return (
    <div>
      <header>Homepage</header>
      <h4>Upload Docs</h4>
      <ChooseFile />
    </div>
  );
};

export default Home;
