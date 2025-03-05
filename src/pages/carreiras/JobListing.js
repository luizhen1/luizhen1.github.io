import React from 'react';

const JobListing = ({ job }) => {
  return (
    <div>
      <h2>{job.title}</h2>
      <p>Localização: {job.location}</p>
      {/* Adicione mais detalhes da vaga aqui, como descrição, requisitos, etc. */}
    </div>
  );
};

export default JobListing;
