import { useState } from 'react';
export function CopyButton({value,label='Copy'}:{value:string,label?:string}){
  const [done,setDone]=useState(false);
  return <button className="btn ghost small" onClick={async()=>{await navigator.clipboard.writeText(value);setDone(true);setTimeout(()=>setDone(false),900)}}>{done?'Copied':label}</button>
}
