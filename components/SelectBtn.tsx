interface IProp {
  onChangeSelectBtn: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
const SelectBtn = ({ onChangeSelectBtn }: IProp) => {
  return (
    <div className="bg-black xl:px-6 px-3 rounded-xl md:w-fit w-full">
      <select
        name="select"
        defaultValue={9}
        onChange={onChangeSelectBtn}
        className="px-3 py-4 bg-black text-white outline-none text-center w-full"
      >
        <option>Choose types</option>
        <option value={9}>9</option>
        <option value={16}>16</option>
        <option value={25}>25</option>
      </select>
    </div>
  );
};

export default SelectBtn;
