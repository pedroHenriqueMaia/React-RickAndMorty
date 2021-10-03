function SearchInput({value, onChange}) {

  function handleChange(event){
    onChange(event.target.value);
  }

  return (
    <input type="search" value={value} onChange={handleChange} className="form-control" placeholder="Ex: rick" />
  );
}

export default SearchInput;
