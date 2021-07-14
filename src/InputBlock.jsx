export default function InputBlock({htmlFor,numName,id,onChange}){
    return (
        <div className="input-block">
            <label htmlFor={htmlFor}>{numName}</label>
            <input
              className="input"
              id={id}
              type="text"
              onChange={onChange} />
        </div>
    )
}