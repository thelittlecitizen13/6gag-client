import React, {useState} from "react";
import axios from "axios";

const postGag = require('../Controllers/GagsController').postGag;
 
export default function UploadPost()
{
    const [uploading, setUploading] = useState(false);
 
    function toBase64 (file)
    {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });
    }
 
    async function onChange(e) {
        const photo = Array.from(e.target.files)
        setUploading(true);
        const photoReader = await toBase64(photo[0]);
        //console.log(photoReader);
 
        postGag({photo: photoReader});
    }
    return (
        <div className='buttons fadein'>
            <div className='button'>
 
                <input type='file' onChange={onChange} />
            </div>
        </div>
    );
}
 
