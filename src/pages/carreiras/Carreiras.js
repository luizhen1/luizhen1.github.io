import React, { useState } from 'react';
import JobListing from './JobListing';
import './Carreiras.css'; // Importação do arquivo de estilos CSS



const Carreiras = () => {

    const jobs = [
        { id: 1, title: 'Desenvolvedor Frontend', location: 'Remoto' },
        { id: 2, title: 'Designer UX/UI', location: 'Londrina-PR' },
        // Adicione mais vagas conforme necessário
      ];

      const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        resume: null,
        photo: null
      });

      const handleChange = event => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleFileChange = event => {
        const { name, files } = event.target;
        setFormData({ ...formData, [name]: files[0] });
      };
    
      const handleSubmit = event => {
        event.preventDefault();
        console.log(formData); // Aqui você pode implementar a lógica de envio do formulário
      };

  return (
    <div className="career-page-container">
        <a href="/">
    <img src="/opa.png"  />
    </a>
    <h1>Vagas de Emprego</h1>
    {jobs.map(job => (
      <JobListing key={job.id} job={job} />
    ))}
    <div className="application-form">
      <h2>Enviar Currículo</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nome"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="E-mail"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="tel"
          name="phoneNumber"
          placeholder="Telefone"
          value={formData.phoneNumber}
          onChange={handleChange}
        />
        <input
          type="file"
          accept=".pdf,.doc,.docx"
          name="resume"
          onChange={handleFileChange}
        />
      
        <button type="submit">Enviar</button>
      </form>
    </div>
  </div>
  )
}

export default Carreiras