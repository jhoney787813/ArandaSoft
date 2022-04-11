import { useFormikContext } from "formik";
import { ChangeEvent, useState } from "react";

export default function FormGroupImage(props:formGroupImage)
{
    const divStyle={
        marginTop:'10px'
    }
    const imgStyle={width:'450px'}
    const [imageBase64,setImageBase64]=useState('');
    const [imagenURL,setImagenURL]=useState(props.imgenURL);
    const {values}=useFormikContext<any>();

const ManejarOnchange= (e:ChangeEvent<HTMLInputElement>)=>{

    if(e.currentTarget.files)
    {
        const archivo= e.currentTarget.files[0];
        aBase64(archivo).then(
            (valorB64:string)=>{ setImageBase64(valorB64); }
        ).catch(error=> console.error(error))
        values[props.campo]=archivo;
        setImagenURL('');
    }
}

const aBase64=(file:File)=>{

    return new Promise<string>((resolve,reject)=>{
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload=()=>resolve(reader.result as string);
        reader.onerror=(error)=>reject(error);

    })
}

    return (
        <div className="form-group">
            <div>
                <input type='file' accept=".jpg,.jpeg,.png" onChange={ManejarOnchange} ></input>
            </div>
            {imageBase64?

              <div>
                  <div style={divStyle}>
                      <img style={imgStyle} src={imageBase64} alt='image seleccionada...' />
                  </div>

              </div>:null}

              {imagenURL?

                    <div>
                        <div style={divStyle}>
                            <img style={imgStyle} src={imagenURL} alt='image seleccionada...' />
                        </div>

                    </div>:null}

        </div>

    )
}


interface  formGroupImage
{
    campo:string;
    label:string;
    imgenURL:string;
}

 FormGroupImage.defaultProps={
    imgenURL:'',
 }
