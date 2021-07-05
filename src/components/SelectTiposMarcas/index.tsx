export default function SelectTiposMarcas ({dataOptions}) {
    return (        
        <>
            <select name="tipo" id="tipo">
                {dataOptions.map(item => <option key={item.value} value={item.value}>{item.label}</option>)}           
            </select>
        </>
    
    )
}

