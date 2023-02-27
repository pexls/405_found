import React, { useState } from 'react';
import axios from 'axios';

function FileUploadForm() {
  const [file, setFile] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('http://localhost/devtest/reactjs/upload.php', formData);

      if (response.data.error) {
        setErrorMessage(response.data.message);
      } else {
        setSuccessMessage(response.data.message);
      }
    } catch (error) {
      console.error(error);
      setErrorMessage('Error uploading the file.');
    }
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="file">Choose file:</label>
        <input type="file" id="file" name="file" onChange={handleFileChange} />
        <img src='http://localhost/devtest/reactjs/get_img.php?filename=myimage.jpg'/>
      </div>

      {errorMessage && (
        <div style={{ color: 'red' }}>
          {errorMessage}
        </div>
      )}

      {successMessage && (
        <div style={{ color: 'green' }}>
          {successMessage}
        </div>
      )}
      
      <button type="submit">Submit</button>
    </form>
  );
}

export default FileUploadForm;
