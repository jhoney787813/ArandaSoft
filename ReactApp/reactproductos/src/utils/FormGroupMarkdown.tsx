import { Field, useFormikContext } from "formik";
import ReactMarkdown from 'react-markdown';
import './FormGroupdMarkdown.css';
export default function FormGroupMarkdown(props: formGroupMarkdown)
{

    const {values}=useFormikContext<any>();
    return(
            <div className="form-group form-markdown">
                <div>
                    <label>{props.label}</label>
                    <Field name={props.campo} as='textarea' clasName='form-textarea'/>
                 </div>
                 <div>
                     <label>{props.label}(preview):</label>
                     <div className="markdown-container">
                         <ReactMarkdown>{values[props.campo]}</ReactMarkdown>
                     </div>
                 </div>

            </div>

    )
} 

interface formGroupMarkdown{

    campo:string;
    label:string;


}