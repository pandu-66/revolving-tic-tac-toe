export default function GridBox({id, value, onClick, shouldFade}) {
    const handleSelect= ()=>{
        if(value) return;
        // e.target.textContent = currPlayer;
        let idxs = id.split(' ').map(Number);
        onClick(idxs[0], idxs[1]);
    }
    return <div className={`cell ${value ? 'filled ' + value : ''}`} style={(shouldFade)?{opacity:0.6}:{}} onClick={handleSelect}>
        {value}
        </div>;
}
