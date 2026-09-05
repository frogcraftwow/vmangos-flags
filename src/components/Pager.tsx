export function Pager({page,pages,onPage}:{page:number,pages:number,onPage:(n:number)=>void}){
  if(pages<=1) return null;
  return <div className="pager"><button className="btn ghost" disabled={page<=1} onClick={()=>onPage(page-1)}>Prev</button><span className="mono">{page} / {pages}</span><button className="btn ghost" disabled={page>=pages} onClick={()=>onPage(page+1)}>Next</button></div>
}
