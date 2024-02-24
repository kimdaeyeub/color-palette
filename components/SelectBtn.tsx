interface IProp {
  onChangeSelectBtn: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
const SelectBtn = ({ onChangeSelectBtn }: IProp) => {
  return (
    <div className="bg-black px-6 rounded-xl w-fit">
      <select
        onChange={onChangeSelectBtn}
        className="px-3 py-4 bg-black text-white outline-none text-center"
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
