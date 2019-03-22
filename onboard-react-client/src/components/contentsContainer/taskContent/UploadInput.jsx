import React, {useEffect, useState} from 'react';
import {useDropzone} from 'react-dropzone';
import './uploadinput.css';

const thumbsContainer = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginTop: 16
};

const thumb = {
  display: 'inline-flex',
  borderRadius: 2,
  border: '1px solid #eaeaea',
  marginBottom: 8,
  marginRight: 8,
  width: 300,
  height: 300,
  padding: 4,
  boxSizing: 'border-box'
};

const thumbInner = {
  display: 'flex',
  minWidth: 0,
  overflow: 'hidden'
};

const img = {
  display: 'block',
};


function Previews(props) {
  const [files, setFiles] = useState([]);
  const {getRootProps, getInputProps} = useDropzone({
    accept: 'image/*',
    onDrop: acceptedFiles => {

      props.userDidSetFile()

      setFiles(acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      })));
    }
  });
  
  const thumbs = files.map(file => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img className='image-preview'
          src={file.preview}
          style={img}
        />
      </div>
    </div>
  ));

  useEffect(() => () => {
    // Make sure to revoke the data uris to avoid memory leaks
    files.forEach(file => URL.revokeObjectURL(file.preview));
  }, [files]);

  return (
    <section>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <div className='upload-input-box'>
            <p className='upload-title'>Drag 'n' drop some files here, or click to select files</p>
        </div>
      </div>
      <aside style={thumbsContainer}>
        {thumbs}
      </aside>
    </section>
  );
}

export default Previews

// Upload to S3 via react
// https://medium.com/@fabianopb/upload-files-with-node-and-react-to-aws-s3-in-3-steps-fdaa8581f2bd


// const uploadFile = () => {
//     const selectedFile = this.fileInput.current.files[0];
//     const formData = new FormData();
//     formData.append("file", selectedFile, selectedFile.name);

//     axios
//     .post("/api/reports/upload", formData, {})
//     .then(res => console.log(res.status))
//     .catch(err => console.error(err));
// }

// export default function MyDropzone() {
//   const onDrop = useCallback(acceptedFiles => {
//     const reader = new FileReader()

//     reader.onabort = () => console.log('file reading was aborted')
//     reader.onerror = () => console.log('file reading has failed')
//     reader.onload = () => {
//       // Do whatever you want with the file contents
//       const binaryStr = reader.result
//       console.log(binaryStr)
//     }

//     acceptedFiles.forEach(file => uploadFile)

//     const req = new XMLHttpRequest();

//     const formData = new FormData();
//     formData.append("file", file, file.name);

//     req.open("POST", "http://localhost:8000/upload");
//     req.send(formData);
//   }, [])
//   const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

//   return (
//     <div {...getRootProps()}>
//       <input {...getInputProps()} />
//       {
//         isDragActive ?
//           <p>Drop the files here ...</p> :
//           <p>Drag 'n' drop some files here, or click to select files</p>
//       }
//     </div>
//   )
// }