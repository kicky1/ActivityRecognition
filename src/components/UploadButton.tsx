import { Button } from '@chakra-ui/react';
import React from 'react';



const UploadButton = (props: { handleFile: any; }) => {
    
    const hiddenFileInput = React.useRef<any>(null);

    const handleClick = (event: any) => {
        hiddenFileInput?.current?.click();
    };
  
    const handleChange = (event: any) => {
        const fileUploaded = event.target.files[0];
        props.handleFile(fileUploaded);
        console.log(1)
    };

    return (
    <>
        <Button onClick={handleClick}>
        Upload a file
        </Button>
        <input type="file"
                ref={hiddenFileInput}
                onChange={handleChange}
                style={{display:'none'}} 
        /> 
    </>
    );
};
export default UploadButton;